// Coordonnées de l'entreprise (placeholders du proto, à confirmer avec le client).
export const PHONE_DISPLAY = "06 42 31 43 77";
export const PHONE_TEL = "tel:+33642314377";
export const PHONE_E164 = "+33642314377";
export const EMAIL = "contact@aqua-service.corsica";
export const ARTISAN = "Jean-Christian Luvari";

export const SITE_NAME = "Aqua Service";
export const SITE_DESCRIPTION =
  "Plombier & climaticien en Corse-du-Sud. Dépannage, installation et entretien de plomberie et climatisation. Artisan local, réactif, urgences 7j/7 — d'Ajaccio à Bonifacio.";

// URL de production. Domaine pas encore verrouillé (.corsica / .fr) : piloté par une
// variable d'env, avec un défaut raisonnable. À définir dans Vercel (NEXT_PUBLIC_SITE_URL).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://aqua-service.corsica"
).replace(/\/$/, "");

// Communes desservies (source de vérité : handoff / footer).
export const CITIES = [
  "Ajaccio",
  "Porto-Vecchio",
  "Bonifacio",
  "Propriano",
  "Sartène",
  "Zonza",
];
