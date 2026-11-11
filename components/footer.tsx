import type { Gym } from "@/lib/types";

export function Footer({ gym }: { gym: Gym }) {
  return (
    <footer className="footer">
      <div>
        <strong>{gym.name}</strong>
        {gym.address}
      </div>
      <div>
        <strong>Связь</strong>
        <a href={gym.phoneHref}>{gym.phoneDisplay}</a>
        <br />
        <a href={gym.vkHref}>ВКонтакте</a>
        {" · "}
        <a href={gym.mapHref}>На карте</a>
      </div>
      <div>
        <strong>Цены</strong>
        {gym.footerNote}
      </div>
    </footer>
  );
}
