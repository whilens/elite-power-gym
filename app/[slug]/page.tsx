import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/site";
import { demos, getDemo } from "@/lib/demos";

export function generateStaticParams() {
  return demos.map((gym) => ({ slug: gym.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const gym = getDemo(slug);
  if (!gym) return {};
  return {
    title: `${gym.name} — ${gym.city}`,
    description: gym.lead,
    robots: { index: false, follow: false },
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gym = getDemo(slug);
  if (!gym) notFound();
  return <Site gym={gym} />;
}
