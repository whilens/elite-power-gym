import Link from "next/link";
import { niches } from "@/lib/niches";

export default function NichiIndexPage() {
  return (
    <div className="home">
      <div className="home-inner">
        <p className="home-brand">
          Niche<em>Templates</em>
        </p>
        <p className="home-lead">
          Десять нишевых лендингов для оффера: один визуальный шаблон на всю нишу. Откройте демо и
          отправьте ссылку клиенту из CRM.
        </p>
        <ul className="home-grid">
          {niches.map((niche, index) => (
            <li key={niche.slug}>
              <Link className="home-card" href={`/nichi/${niche.slug}`}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                <strong>{niche.shortName}</strong>
                <span>{niche.eyebrow}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
