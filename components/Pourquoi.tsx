import { BadgeCheck, MapPin, Phone, Zap, type LucideIcon } from "lucide-react";

type Reason = { icon: LucideIcon; bg: string; title: string; text: string };

const reasons: Reason[] = [
  { icon: Zap, bg: "#f0603a", title: "Réactivité", text: "Un appel, une réponse rapide et un rendez-vous sans attendre des jours." },
  { icon: Phone, bg: "#16a3b8", title: "Urgences 7j/7", text: "Fuite ou panne le week-end ? Nous intervenons en dépannage d'urgence." },
  { icon: MapPin, bg: "#e9b872", title: "Toute la Corse-du-Sud", text: "D'Ajaccio à Bonifacio, nous couvrons l'ensemble du territoire." },
  { icon: BadgeCheck, bg: "#3fd6a8", title: "Professionnalisme", text: "Travail soigné, devis transparent et conseils honnêtes." },
];

export default function Pourquoi() {
  return (
    <section
      id="pourquoi"
      className="mx-[clamp(0.7rem,3vw,1.4rem)] overflow-hidden rounded-block bg-[linear-gradient(160deg,#0f2e46,#123f5e)] px-[clamp(1.3rem,5vw,3rem)] py-[clamp(2.4rem,5vw,4rem)] text-white"
    >
      <div className="mx-auto max-w-[52ch] text-center">
        <span className="text-[12px] font-bold uppercase tracking-[.16em] text-accent-light">
          Pourquoi nous choisir
        </span>
        <h2 className="mt-3 text-[clamp(1.7rem,4.4vw,2.5rem)] font-bold text-white">
          Un artisan local sur qui compter
        </h2>
      </div>
      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(215px,1fr))] gap-4">
        {reasons.map((r) => {
          const Icon = r.icon;
          return (
          <div
            key={r.title}
            className="rounded-[18px] border border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.06)] p-[22px]"
          >
            <div
              className="mb-[14px] flex h-[40px] w-[40px] items-center justify-center rounded-[11px] text-white"
              style={{ background: r.bg }}
            >
              <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
            </div>
            <strong className="font-display text-[17px]">{r.title}</strong>
            <p className="mt-[7px] text-[13.5px] text-[#b8ccda]">{r.text}</p>
          </div>
          );
        })}
      </div>
    </section>
  );
}
