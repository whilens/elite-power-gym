import type { Metadata } from "next";
import { demos } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Демо залов",
  robots: { index: false, follow: false },
};

export default function DemosPage() {
  return (
    <main style={{ padding: "48px 20px 80px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>Девять залов</h1>
      <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
        {demos.map((gym) => (
          <li key={gym.slug}>
            <a href={`/${gym.slug}`}>
              {gym.city}. {gym.name}
            </a>
            <div style={{ opacity: 0.7 }}>{gym.phoneDisplay}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
