"use client";

// react-hook-form expose des fonctions non mémoïsables : le React Compiler saute
// volontairement la mémoïsation de ce composant (comportement attendu, pas un bug).
/* eslint-disable react-hooks/incompatible-library */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

type Status = "idle" | "loading" | "success" | "error";

const inputBase =
  "rounded-field border bg-offwhite px-[13px] py-3 text-[14px] font-medium text-ink outline-none";
const fieldClass = "flex flex-col gap-[6px] text-[12px] font-bold text-ink";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: "devis", name: "", phone: "", email: "", message: "" },
  });

  const type = watch("type");

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      reset({ type: data.type, name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `${inputBase} ${hasError ? "border-coral" : "border-[#d6e6ec]"}`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-[15px] rounded-card border border-aqua-line-2 bg-white p-[clamp(1.4rem,3vw,2.1rem)] shadow-[0_26px_50px_-34px_rgba(15,46,70,.45)]"
    >
      {status === "success" && (
        <div className="flex items-center gap-[11px] rounded-[14px] border border-success-line bg-success-bg px-4 py-[14px]">
          <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-success text-white">
            ✓
          </span>
          <span className="text-[13.5px] text-success-ink">
            <strong>Demande envoyée&nbsp;!</strong> Nous vous recontactons au plus vite.
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-[14px] border border-coral bg-[#fdeeea] px-4 py-[14px] text-[13.5px] text-coral-deep">
          <strong>Une erreur est survenue.</strong> Merci de réessayer ou de nous appeler directement.
        </div>
      )}

      <div>
        <label className="mb-[6px] block text-[12px] font-bold text-ink">
          Type de demande
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            aria-pressed={type === "devis"}
            onClick={() => setValue("type", "devis")}
            className={
              "rounded-field border-[1.5px] p-3 text-[14px] font-bold transition-all duration-150 " +
              (type === "devis"
                ? "border-aqua bg-aqua text-white"
                : "border-[#d6e6ec] bg-offwhite text-muted")
            }
          >
            Devis
          </button>
          <button
            type="button"
            aria-pressed={type === "urgence"}
            onClick={() => setValue("type", "urgence")}
            className={
              "rounded-field border-[1.5px] p-3 text-[14px] font-bold transition-all duration-150 " +
              (type === "urgence"
                ? "border-coral bg-coral text-white"
                : "border-[#d6e6ec] bg-offwhite text-muted")
            }
          >
            Urgence
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        <label className={fieldClass}>
          Nom
          <input
            type="text"
            placeholder="Votre nom"
            className={inputClass(!!errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-[11px] font-medium text-coral">{errors.name.message}</span>
          )}
        </label>
        <label className={fieldClass}>
          Téléphone
          <input
            type="tel"
            placeholder="06 XX XX XX XX"
            className={inputClass(!!errors.phone)}
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-[11px] font-medium text-coral">{errors.phone.message}</span>
          )}
        </label>
      </div>

      <label className={fieldClass}>
        Email
        <input
          type="email"
          placeholder="vous@email.com"
          className={inputClass(!!errors.email)}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-[11px] font-medium text-coral">{errors.email.message}</span>
        )}
      </label>

      <label className={fieldClass}>
        Message
        <textarea
          rows={4}
          placeholder="Décrivez votre besoin (fuite, installation clim, entretien…)"
          className={`${inputClass(!!errors.message)} resize-y`}
          {...register("message")}
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 cursor-pointer rounded-[13px] bg-ink p-[15px] text-[15.5px] font-bold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
      <p className="text-center text-[11.5px] text-[#8aa5b3]">
        Réponse sous 24h ouvrées · Devis gratuit et sans engagement
      </p>
    </form>
  );
}
