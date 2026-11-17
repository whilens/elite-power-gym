"use client";

import { useState } from "react";
import type { Gym } from "@/lib/types";

const BASE = "https://elite-power-gym.vercel.app";

function offerText(gym: Gym) {
  if (gym.offer?.trim()) return gym.offer.replace(/\\n/g, "\n");
  return [
    `Добрый день. Заметил, что у вашего клуба «${gym.name}» пока нет сайта, и решил показать, как он мог бы выглядеть. От вас я ничего не требую, можете просто посмотреть, если понравится - обсудим условия. Так же по ситуации можем переработать его полностью и доработать точечно под вас.`,
    `${BASE}/${gym.slug}`,
  ].join("\n");
}

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
    setDone(true);
    window.setTimeout(() => setDone(false), 1600);
  };

  return (
    <button className="demo-btn demo-btn-copy" type="button" onClick={copy}>
      {done ? "Скопировано" : "Скопировать"}
    </button>
  );
}

function ContactLinks({ gym }: { gym: Gym }) {
  return (
    <div className="demo-contacts" aria-label="Связь">
      <a className="demo-btn" href={gym.phoneHref} title={gym.phoneDisplay}>
        Телефон
      </a>
      <a className="demo-btn" href={gym.vkHref} target="_blank" rel="noreferrer">
        VK
      </a>
      <a className="demo-btn" href={gym.mapHref} target="_blank" rel="noreferrer">
        Карты
      </a>
    </div>
  );
}

function DemoRow({ gym, featured = false }: { gym: Gym; featured?: boolean }) {
  const text = offerText(gym);

  return (
    <li className={featured ? "demo-row demo-row-featured" : "demo-row"}>
      {featured ? <p className="demo-kicker">Для видео и массовой рассылки</p> : null}
      <div className="demo-row-top">
        <div>
          <a className="demo-name" href={`/${gym.slug}`}>
            {featured ? `${gym.name} — универсальный шаблон` : `${gym.city}. ${gym.name}`}
          </a>
          <div className="demo-meta">{gym.phoneDisplay}</div>
          <div className="demo-path">
            {BASE}/{gym.slug}
          </div>
        </div>
        <div className="demo-actions">
          <ContactLinks gym={gym} />
          <CopyButton text={text} />
        </div>
      </div>
      {featured ? <p className="demo-lead">{gym.lead}</p> : null}
    </li>
  );
}

export function DemoList({ demos }: { demos: Gym[] }) {
  const universal = demos.find((gym) => gym.slug === "force");
  const rest = demos.filter((gym) => gym.slug !== "force");

  return (
    <div className="demo-list">
      {universal ? (
        <ul className="demo-list-block">
          <DemoRow gym={universal} featured />
        </ul>
      ) : null}
      <ul className="demo-list-block">
        {rest.map((gym) => (
          <DemoRow key={gym.slug} gym={gym} />
        ))}
      </ul>
    </div>
  );
}
