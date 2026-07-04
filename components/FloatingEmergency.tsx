import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function FloatingEmergency() {
  return (
    <a
      href={PHONE_TEL}
      aria-label={`Appel d'urgence — ${PHONE_DISPLAY}`}
      className="fixed bottom-4 left-1/2 z-[80] inline-flex -translate-x-1/2 items-center gap-[10px] whitespace-nowrap rounded-full bg-coral px-[26px] py-[14px] text-[15.5px] font-bold text-white no-underline [animation:pulseRing_2.6s_infinite]"
    >
      <Phone size={18} strokeWidth={2.4} aria-hidden="true" /> Appel d&apos;urgence
    </a>
  );
}
