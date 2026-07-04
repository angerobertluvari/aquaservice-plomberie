import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-line-soft bg-[rgba(255,255,255,.88)] px-[clamp(1.1rem,5vw,2.2rem)] py-[14px] backdrop-blur-[10px]">
      <a href="#top" className="flex items-center gap-[11px] no-underline">
        <span className="h-[26px] w-[26px] flex-none rotate-45 rounded-[50%_50%_50%_3px] bg-[linear-gradient(150deg,#16a3b8,#0e7c96)] shadow-[0_4px_12px_rgba(14,124,150,.3)]" />
        <span className="flex flex-col leading-none">
          <strong className="font-display text-[19px] tracking-[-.02em] text-ink">
            Aqua Service
          </strong>
          <span className="mt-[3px] text-[10.5px] font-semibold uppercase tracking-[.14em] text-aqua">
            Plomberie · Climatisation
          </span>
        </span>
      </a>
      <a
        href={PHONE_TEL}
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-[10px] text-[14px] font-bold text-white no-underline"
      >
        <span className="h-[7px] w-[7px] rounded-full bg-mint shadow-[0_0_0_3px_rgba(63,214,168,.25)]" />
        {PHONE_DISPLAY}
      </a>
    </header>
  );
}
