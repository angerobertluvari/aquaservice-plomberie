import type { Metadata } from "next";
import Link from "next/link";
import { ARTISAN, EMAIL, PHONE_DISPLAY, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales et politique de confidentialité de ${SITE_NAME}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

// À COMPLÉTER par le propriétaire. Les champs entre [crochets] doivent être renseignés
// (raison sociale, SIRET, RCS, assurance, etc.).
export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-[760px] px-[clamp(1.1rem,5vw,2.2rem)] pb-24 pt-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-aqua-deep no-underline"
      >
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-6 text-[clamp(1.8rem,5vw,2.6rem)] font-extrabold">Mentions légales</h1>
      <p className="mt-3 text-[14px] text-muted">
        Dernière mise à jour : à compléter. Modèle à finaliser par l&apos;éditeur du site.
      </p>

      <div className="mt-8 flex flex-col gap-8 text-[15px] leading-[1.65] text-ink-soft">
        <section>
          <h2 className="mb-2 text-[19px] font-bold text-ink">Éditeur du site</h2>
          <p>
            {SITE_NAME} — {ARTISAN}, artisan plombier-chauffagiste.
            <br />
            Raison sociale : [à compléter] · Statut juridique : [entreprise individuelle / SASU / …]
            <br />
            Adresse : [adresse postale], Corse-du-Sud (2A)
            <br />
            SIRET : [n° SIRET] · RCS / RM : [n° d&apos;immatriculation]
            <br />
            TVA intracommunautaire : [le cas échéant]
            <br />
            Téléphone : {PHONE_DISPLAY} · Email : {EMAIL}
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[19px] font-bold text-ink">Directeur de la publication</h2>
          <p>{ARTISAN} (ou [nom du représentant légal]).</p>
        </section>

        <section>
          <h2 className="mb-2 text-[19px] font-bold text-ink">Assurance professionnelle</h2>
          <p>
            Assurance responsabilité civile professionnelle / décennale :
            [compagnie d&apos;assurance], [n° de police], couvrant [zone géographique].
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[19px] font-bold text-ink">Hébergement</h2>
          <p>
            Site hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789,
            États-Unis — <span className="whitespace-nowrap">vercel.com</span>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[19px] font-bold text-ink">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, mise en page, éléments graphiques) est
            la propriété de {SITE_NAME}, sauf mention contraire. Toute reproduction sans autorisation
            est interdite. Les photographies actuelles sont des visuels d&apos;illustration temporaires.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[19px] font-bold text-ink">
            Données personnelles (RGPD)
          </h2>
          <p>
            Les informations saisies dans le formulaire de contact (nom, téléphone, email, message)
            sont utilisées uniquement pour répondre à votre demande de devis ou d&apos;intervention.
            Elles sont transmises par email à {SITE_NAME} et ne font l&apos;objet d&apos;aucune
            cession à des tiers. Elles sont conservées le temps nécessaire au traitement de votre
            demande.
          </p>
          <p className="mt-3">
            Conformément au Règlement général sur la protection des données, vous disposez d&apos;un
            droit d&apos;accès, de rectification et de suppression de vos données. Pour l&apos;exercer,
            écrivez à <strong>{EMAIL}</strong>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[19px] font-bold text-ink">Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi publicitaire. [Ajouter ici la mention des
            éventuels outils de mesure d&apos;audience si mis en place.]
          </p>
        </section>

        <p className="text-[13px] text-muted">
          Ce document est un modèle à valeur informative et doit être validé par l&apos;éditeur.
          {" "}Site : {SITE_URL}
        </p>
      </div>
    </main>
  );
}
