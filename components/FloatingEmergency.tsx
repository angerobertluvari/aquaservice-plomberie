import { PHONE_TEL } from "@/lib/site";

export default function FloatingEmergency() {
  return (
    <a
      href={PHONE_TEL}
      className="fixed bottom-4 left-1/2 z-[80] inline-flex -translate-x-1/2 items-center gap-[10px] whitespace-nowrap rounded-full bg-coral px-[26px] py-[14px] text-[15.5px] font-bold text-white no-underline [animation:pulseRing_2.6s_infinite]"
    >
      <span className="text-[18px]">☎</span> Appel d&apos;urgence
    </a>
  );
}
