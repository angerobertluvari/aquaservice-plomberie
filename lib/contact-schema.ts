import { z } from "zod";

// Schéma partagé formulaire ↔ API (Phase 4).
export const contactSchema = z.object({
  type: z.enum(["devis", "urgence"]),
  name: z.string().trim().min(2, "Merci d'indiquer votre nom."),
  phone: z.string().trim().min(6, "Un numéro de téléphone valide est requis."),
  email: z
    .union([z.string().trim().email("Adresse email invalide."), z.literal("")])
    .optional(),
  message: z.string().trim().max(2000).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
