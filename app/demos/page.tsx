import type { Metadata } from "next";
import { demos } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Демо залов",
  robots: { index: false, follow: false },
};

export default function DemosPage() {
  return (
    <main style={{ padding: "48px 20px 80px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
        Демо залов Волгограда
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 24 }}>
        {demos.length} персональных посадочных на базе шаблона Elite Power Gym.
      </p>
      <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
        {demos.map((gym) => (
          <li key={gym.slug}>
            <a href={`/${gym.slug}`}>
              {gym.city}. {gym.name}
            </a>
            <div style={{ opacity: 0.7 }}>{gym.phoneDisplay}</div>
            <div style={{ opacity: 0.55, fontSize: 13 }}>/{gym.slug}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
