import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

// Adresse d'expéditeur : domaine vérifié Resend en prod.
// À défaut, on retombe sur le domaine de test onboarding@resend.dev.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Aqua Service <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données du formulaire invalides.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { type, name, phone, email, message } = parsed.data;
  const typeLabel = type === "urgence" ? "URGENCE" : "Devis";
  const subject = `[${typeLabel}] Nouvelle demande — ${name}`;

  const lines = [
    `Type de demande : ${typeLabel}`,
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    `Email : ${email || "—"}`,
    "",
    "Message :",
    message || "(aucun message)",
  ];
  const text = lines.join("\n");
  const html = `
    <div style="font-family:system-ui,sans-serif;color:#0f2e46;line-height:1.55;">
      <h2 style="margin:0 0 12px;">Nouvelle demande — ${typeLabel}</h2>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email :</strong> ${email ? escapeHtml(email) : "—"}</p>
      <p><strong>Message :</strong><br>${message ? escapeHtml(message).replace(/\n/g, "<br>") : "(aucun message)"}</p>
    </div>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  // Mode dégradé : sans clé Resend (ou sans destinataire), on journalise et on répond 200.
  if (!apiKey || !to) {
    console.info("[contact] Mode dégradé (Resend non configuré) — demande reçue :\n" + text);
    return NextResponse.json({ ok: true, degraded: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      text,
      html,
      replyTo: email || undefined,
    });

    if (error) {
      console.error("[contact] Erreur Resend :", error);
      return NextResponse.json({ error: "L'envoi de l'email a échoué." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Exception lors de l'envoi :", err);
    return NextResponse.json({ error: "Une erreur interne est survenue." }, { status: 500 });
  }
}
