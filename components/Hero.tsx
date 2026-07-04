import { PHONE_TEL } from "@/lib/site";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-[radial-gradient(120%_130%_at_100%_0%,#eef8fb_0%,#ffffff_60%)] px-[clamp(1.1rem,5vw,2.2rem)] pb-[clamp(2rem,5vw,3.4rem)] pt-[clamp(2.4rem,6vw,4.4rem)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(1.8rem,4vw,3.2rem)]">
        {/* Colonne texte */}
        <div>
          <span className="inline-flex items-center gap-[9px] rounded-full border border-aqua-line bg-white px-[14px] py-[7px] text-[12.5px] font-semibold text-aqua-deep">
            <span className="h-[6px] w-[6px] rounded-full bg-aqua" />
            Corse-du-Sud · intervention rapide
          </span>
          <h1 className="mt-5 text-[clamp(2.15rem,6.2vw,3.7rem)] font-extrabold">
            Plomberie &amp; climatisation,
            <br />
            <span className="text-aqua-deep">quand vous en avez besoin.</span>
          </h1>
          <p className="mt-[18px] max-w-[34ch] text-[clamp(1.02rem,2.2vw,1.22rem)] text-ink-soft">
            Dépannage, installation et entretien partout en Corse-du-Sud. Une
            équipe locale, réactive et disponible en urgence.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-[10px] rounded-btn bg-coral px-6 py-[15px] text-[16px] font-bold text-white no-underline shadow-coral"
            >
              <span className="text-[18px]">☎</span> Appel d&apos;urgence
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-btn border-[1.5px] border-[#cfe6ee] bg-white px-6 py-[15px] text-[16px] font-bold text-ink no-underline"
            >
              Demander un devis →
            </a>
          </div>
          <div className="mt-[30px] flex flex-wrap gap-[22px]">
            <div className="flex flex-col gap-[2px]">
              <strong className="font-display text-[22px] text-ink">7j/7</strong>
              <span className="text-[12.5px] text-muted-2">Urgences</span>
            </div>
            <div className="w-px bg-[#dcebf1]" />
            <div className="flex flex-col gap-[2px]">
              <strong className="font-display text-[22px] text-ink">&lt; 1h</strong>
              <span className="text-[12.5px] text-muted-2">Délai moyen*</span>
            </div>
            <div className="w-px bg-[#dcebf1]" />
            <div className="flex flex-col gap-[2px]">
              <strong className="font-display text-[22px] text-ink">15 ans</strong>
              <span className="text-[12.5px] text-muted-2">D&apos;expérience</span>
            </div>
          </div>
        </div>

        {/* Colonne visuelle */}
        <div className="relative">
          <HeroCarousel />
          <div className="absolute -right-[14px] -top-[14px] flex items-center gap-[11px] rounded-[16px] border border-line-soft bg-white px-4 py-[13px] shadow-[0_16px_34px_-14px_rgba(15,46,70,.3)]">
            <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[11px] bg-success-bg text-[19px] text-success">
              ✓
            </span>
            <span className="text-[12.5px] leading-[1.35] text-ink-soft">
              <strong className="text-ink">Devis gratuit</strong>
              <br />
              sans engagement
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
