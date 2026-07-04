import { Clock, Mail, MapPin } from "lucide-react";
import { ARTISAN, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="px-[clamp(1.1rem,5vw,2.2rem)] py-[clamp(2.6rem,6vw,4.6rem)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(1.4rem,3vw,2.4rem)]">
        {/* Colonne urgence / coordonnées */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[.16em] text-aqua">
              Contact
            </span>
            <h2 className="mt-3 text-[clamp(1.7rem,4.4vw,2.5rem)] font-bold">
              Parlons de votre projet
            </h2>
            <p className="mt-[13px] max-w-[34ch] text-[15.5px] text-muted">
              Remplissez le formulaire pour un devis, ou appelez-nous directement
              en cas d&apos;urgence.
            </p>
            <p className="mt-[11px] text-[13px] font-semibold text-aqua-deep">
              Vous serez suivi par {ARTISAN}.
            </p>
          </div>

          <a
            href={PHONE_TEL}
            aria-label={`Appeler en urgence au ${PHONE_DISPLAY}`}
            className="block rounded-[20px] bg-[linear-gradient(155deg,#f0603a,#d94a28)] p-6 text-white no-underline shadow-[0_20px_40px_-22px_rgba(240,96,58,.7)]"
          >
            <span className="text-[12px] font-bold uppercase tracking-[.14em] opacity-85">
              Urgence 24/7
            </span>
            <div className="mt-[6px] font-display text-[clamp(1.7rem,5vw,2.15rem)] font-extrabold">
              {PHONE_DISPLAY}
            </div>
            <span className="mt-[10px] inline-flex items-center gap-[7px] text-[13.5px] font-semibold">
              Appuyez pour appeler →
            </span>
          </a>

          <div className="flex flex-col gap-[13px] rounded-[18px] border border-aqua-line-2 bg-white p-5">
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-[2px] flex-none text-aqua" aria-hidden="true" />
              <div>
                <strong className="text-[14px]">Email</strong>
                <br />
                <span className="text-[13.5px] text-muted">{EMAIL}</span>
              </div>
            </div>
            <div className="h-px bg-[#eef5f8]" />
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-[2px] flex-none text-aqua" aria-hidden="true" />
              <div>
                <strong className="text-[14px]">Zone d&apos;intervention</strong>
                <br />
                <span className="text-[13.5px] text-muted">Toute la Corse-du-Sud (2A)</span>
              </div>
            </div>
            <div className="h-px bg-[#eef5f8]" />
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-[2px] flex-none text-aqua" aria-hidden="true" />
              <div>
                <strong className="text-[14px]">Horaires</strong>
                <br />
                <span className="text-[13.5px] text-muted">Lun–Sam 7h30–19h · Urgences 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire interactif (React Hook Form + Zod) */}
        <ContactForm />
      </div>
    </section>
  );
}
