import type { Metadata } from "next";
import "../niches.css";

export const metadata: Metadata = {
  title: "Niche Templates — демо сайтов по нишам",
  description: "Один визуальный шаблон на нишу для оффера из CRM.",
};

export default function NichiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
