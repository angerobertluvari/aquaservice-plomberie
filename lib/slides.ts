// Photos du carrousel — placeholders Unsplash (à remplacer par les vraies photos du client).
export type Slide = { src: string; alt: string; caption: string };

export const SLIDES: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85",
    alt: "Villa méditerranéenne avec piscine",
    caption: "Villas & résidences · Corse-du-Sud",
  },
  {
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=900&q=85",
    alt: "Maisons blanches en bord de mer",
    caption: "Le confort, au bord de l'eau",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    alt: "Salle de bain moderne et lumineuse",
    caption: "Salles de bain & sanitaires",
  },
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=85",
    alt: "Villa contemporaine avec piscine",
    caption: "Fraîcheur & climatisation",
  },
];
