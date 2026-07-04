import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aqua Service — Plomberie & climatisation en Corse-du-Sud",
  description:
    "Dépannage, installation et entretien de plomberie et climatisation partout en Corse-du-Sud. Artisan local, réactif, urgences 7j/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
