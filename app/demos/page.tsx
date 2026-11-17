import type { Metadata } from "next";
import { demos } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Демо залов",
  robots: { index: false, follow: false },
};

export default function DemosPage() {
  const universal = demos.find((gym) => gym.slug === "force");
  const rest = demos.filter((gym) => gym.slug !== "force");

  return (
    <main style={{ padding: "48px 20px 80px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
        Демо залов Волгограда
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 24 }}>
        {demos.length} посадочных на базе шаблона Elite Power Gym. Для одного видео на всех —
        универсальный FORCE.
      </p>

      {universal ? (
        <section
          style={{
            marginBottom: 32,
            padding: 20,
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 18,
            background: "rgba(208, 18, 26, 0.12)",
          }}
        >
          <p style={{ opacity: 0.75, marginBottom: 8, fontSize: 13 }}>Для видео и массовой рассылки</p>
          <a href={`/${universal.slug}`} style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>
            {universal.name} — универсальный шаблон
          </a>
          <div style={{ opacity: 0.75, marginTop: 8 }}>{universal.lead}</div>
          <div style={{ opacity: 0.55, fontSize: 13, marginTop: 10 }}>/{universal.slug}</div>
        </section>
      ) : null}

      <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
        {rest.map((gym) => (
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
