import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NicheSite } from "@/components/NicheSite";
import { getNiche, niches } from "@/lib/niches";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return niches.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) return { title: "Не найдено" };
  return {
    title: `${niche.name} — ${niche.shortName}`,
    description: niche.lead,
  };
}

export default async function NichePage({ params }: Props) {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) notFound();

  return (
    <>
      <link
        href={`https://fonts.googleapis.com/css2?family=${niche.fonts.google}&display=swap`}
        rel="stylesheet"
      />
      <NicheSite niche={niche} />
    </>
  );
}
