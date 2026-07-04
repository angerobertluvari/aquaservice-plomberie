import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const zones = ["Ajaccio", "Porto-Vecchio", "Bonifacio", "Propriano", "Sartène", "Zonza"];

export default function Footer() {
  return (
    <footer className="bg-navy px-[clamp(1.1rem,5vw,2.2rem)] pb-[110px] pt-[clamp(2.4rem,5vw,3.4rem)] text-footer-ink">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7">
        <div className="max-w-[30ch]">
          <div className="flex items-center gap-[11px]">
            <span className="h-[24px] w-[24px] flex-none rotate-45 rounded-[50%_50%_50%_3px] bg-[linear-gradient(150deg,#16a3b8,#0e7c96)]" />
            <strong className="font-display text-[19px] text-white">Aqua Service</strong>
          </div>
          <p className="mt-[14px] text-[13.5px] leading-[1.6]">
            Plomberie &amp; climatisation en Corse-du-Sud. Un artisan local,
            réactif et disponible pour vos urgences.
          </p>
          <p className="mt-3 text-[12.5px] text-footer-muted">
            Jean-Christian Luvari · artisan plombier-chauffagiste
          </p>
        </div>

        <div>
          <strong className="text-[13px] tracking-[.05em] text-white">Coordonnées</strong>
          <ul className="mt-[14px] flex list-none flex-col gap-[9px] p-0 text-[13.5px]">
            <li>
              <a href={PHONE_TEL} className="font-semibold text-accent-light no-underline">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>{EMAIL}</li>
            <li>Corse-du-Sud (2A)</li>
          </ul>
        </div>

        <div>
          <strong className="text-[13px] tracking-[.05em] text-white">
            Zone d&apos;intervention
          </strong>
          <ul className="mt-[14px] grid grid-cols-2 list-none gap-2 p-0 text-[13px]">
            {zones.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong className="text-[13px] tracking-[.05em] text-white">Horaires</strong>
          <ul className="mt-[14px] flex list-none flex-col gap-[9px] p-0 text-[13.5px]">
            <li>Lun – Sam : 7h30 – 19h</li>
            <li>Dimanche : sur urgence</li>
            <li className="font-semibold text-coral-soft">Urgences : 7j/7 · 24h/24</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-[26px] max-w-[1180px] border-t border-[rgba(255,255,255,.1)] pt-[18px] text-[12px] text-footer-muted">
        © 2026 Aqua Service · Corse-du-Sud
      </div>
    </footer>
  );
}
