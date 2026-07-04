// Logo Aqua Service : une goutte qui tombe + les ondes concentriques de l'eau.
// Marque vectorielle réutilisée dans le header, les cartes services et le footer.
export default function Logo({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="Logo Aqua Service"
      className={className}
    >
      <defs>
        <linearGradient id="aquaDropGrad" x1="6" y1="4" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#16a3b8" />
          <stop offset="1" stopColor="#0e7c96" />
        </linearGradient>
      </defs>

      {/* Ondes concentriques (surface de l'eau) */}
      <ellipse
        cx="20"
        cy="30.5"
        rx="14"
        ry="3.7"
        stroke="url(#aquaDropGrad)"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <ellipse
        cx="20"
        cy="30.5"
        rx="8.6"
        ry="2.3"
        stroke="url(#aquaDropGrad)"
        strokeWidth="1.7"
        opacity="0.7"
      />

      {/* Goutte qui tombe (pointe en haut) */}
      <path
        d="M20 5C20 5 12 15 12 20.5A8 8 0 1 0 28 20.5C28 15 20 5 20 5Z"
        fill="url(#aquaDropGrad)"
      />
      {/* Reflet */}
      <circle cx="16.6" cy="19" r="2.3" fill="#ffffff" opacity="0.55" />
    </svg>
  );
}
