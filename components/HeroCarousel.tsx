"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { SLIDES } from "@/lib/slides";

const AUTO_MS = 4500;

export default function HeroCarousel() {
  const [slide, setSlide] = useState(0);

  // Avance auto toutes les 4,5 s ; réarmable au clic sur un point.
  const [armToken, setArmToken] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, [armToken]);

  const goSlide = useCallback((i: number) => {
    setSlide(i);
    setArmToken((n) => n + 1); // réarme le timer
  }, []);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-visual border border-aqua-line bg-ink shadow-visual">
      {SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(max-width: 700px) 100vw, 45vw"
          priority={i === 0}
          className="object-cover transition-opacity duration-[1100ms] ease-in-out"
          style={{ opacity: i === slide ? 1 : 0 }}
        />
      ))}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(to_top,rgba(9,28,44,.8),transparent)]" />
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
        <span className="text-[13px] font-semibold text-white [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">
          {SLIDES[slide].caption}
        </span>
        <div className="flex gap-[7px]">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Voir la photo ${i + 1}`}
              aria-current={i === slide}
              onClick={() => goSlide(i)}
              className="h-[7px] cursor-pointer rounded-[99px] border-none p-0 transition-all duration-300"
              style={{
                width: i === slide ? 22 : 7,
                background: i === slide ? "#fff" : "rgba(255,255,255,.5)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
