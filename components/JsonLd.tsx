import {
  ARTISAN,
  CITIES,
  EMAIL,
  PHONE_E164,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

// Données structurées schema.org pour le référencement local.
const data = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "HVACBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  founder: { "@type": "Person", name: ARTISAN },
  image: `${SITE_URL}/icon.svg`,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Corse-du-Sud",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Corse-du-Sud (2A)" },
    ...CITIES.map((city) => ({ "@type": "City", name: city })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:30",
      closes: "19:00",
    },
  ],
  knowsAbout: [
    "Plomberie",
    "Recherche de fuite",
    "Climatisation réversible",
    "Chauffage",
    "Dépannage d'urgence",
  ],
  slogan: "Plomberie & climatisation, quand vous en avez besoin.",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
