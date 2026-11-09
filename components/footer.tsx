import { mapHref, phoneDisplay, phoneHref, vkHref } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Elite Power Gym</strong>
        Волгоград, Ополченская улица, 46
      </div>
      <div>
        <strong>Связь</strong>
        <a href={phoneHref}>{phoneDisplay}</a>
        <br />
        <a href={vkHref}>ВКонтакте</a>
        {" · "}
        <a href={mapHref}>Яндекс Карты</a>
      </div>
      <div>
        <strong>Цены</strong>
        С витрины сообщества. Перед оплатой сверьте их в зале.
      </div>
    </footer>
  );
}
