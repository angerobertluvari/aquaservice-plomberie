type Line = { n: string; title: string; text: string; accent?: boolean };

const plomberie: Line[] = [
  { n: "01", title: "Dépannage", text: "Fuites, engorgements, chauffe-eau en panne — intervention rapide." },
  { n: "02", title: "Installation", text: "Cuisine, salle de bain, réseaux d'eau neufs ou en rénovation." },
  { n: "03", title: "Recherche de fuites", text: "Détection non destructive et réparation durable." },
  { n: "04", title: "Sanitaires", text: "Robinetterie, WC, douches — pose et remplacement." },
];

const climatisation: Line[] = [
  { n: "01", title: "Installation", text: "Climatiseurs réversibles mono & multi-split, dimensionnés pour votre logement." },
  { n: "02", title: "Entretien", text: "Contrat d'entretien annuel, nettoyage et recharge de gaz." },
  { n: "03", title: "Réparation", text: "Diagnostic et remise en service de votre unité, toutes marques." },
  { n: "✦", title: "Confort été comme hiver", text: "Le réversible chauffe aussi — idéal sous le climat corse.", accent: true },
];

function ServiceLine({ n, title, text, accent }: Line) {
  return (
    <div
      className={
        "flex gap-3 rounded-[13px] px-[14px] py-3 " +
        (accent ? "border border-dashed border-[#c9e5ee] bg-aqua-light" : "bg-offwhite-2")
      }
    >
      <span className="font-extrabold text-aqua-deep">{n}</span>
      <div>
        <strong className="text-[15px]">{title}</strong>
        <p className="mt-[3px] text-[13.5px] text-muted">{text}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-[clamp(1.1rem,5vw,2.2rem)] py-[clamp(2.6rem,6vw,4.6rem)]">
      <div className="mx-auto max-w-[56ch] text-center">
        <span className="text-[12px] font-bold uppercase tracking-[.16em] text-aqua">
          Nos services
        </span>
        <h2 className="mt-3 text-[clamp(1.7rem,4.4vw,2.6rem)] font-bold">
          Deux métiers, une seule équipe de confiance
        </h2>
        <p className="mt-[14px] text-[16px] text-muted">
          De la fuite d&apos;eau à l&apos;installation d&apos;une climatisation
          réversible, nous couvrons l&apos;ensemble de vos besoins.
        </p>
      </div>

      <div className="mt-[38px] grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
        {/* Plomberie */}
        <div className="rounded-card border border-aqua-line-2 bg-white p-[clamp(1.4rem,3vw,2rem)] shadow-card">
          <div className="mb-[18px] flex items-center gap-[13px]">
            <span className="h-[46px] w-[46px] flex-none rotate-45 rounded-[50%_50%_50%_6px] bg-[linear-gradient(150deg,#16a3b8,#0e7c96)] shadow-[0_8px_18px_rgba(14,124,150,.35)]" />
            <h3 className="text-[22px] font-bold">Plomberie</h3>
          </div>
          <div className="flex flex-col gap-[11px]">
            {plomberie.map((l) => (
              <ServiceLine key={l.n + l.title} {...l} />
            ))}
          </div>
        </div>

        {/* Climatisation */}
        <div className="rounded-card border border-aqua-line-2 bg-white p-[clamp(1.4rem,3vw,2rem)] shadow-card">
          <div className="mb-[18px] flex items-center gap-[13px]">
            <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[14px] bg-[linear-gradient(150deg,#3fc6d8,#16a3b8)] text-[22px] font-bold text-white shadow-[0_8px_18px_rgba(22,163,184,.35)]">
              ❄
            </span>
            <h3 className="text-[22px] font-bold">Climatisation</h3>
          </div>
          <div className="flex flex-col gap-[11px]">
            {climatisation.map((l) => (
              <ServiceLine key={l.n + l.title} {...l} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
