"use client";

import { useState } from "react";
import type { Gym } from "@/lib/types";

const links = [
  ["#directions", "Направления"],
  ["#prices", "Абонементы"],
  ["#formats", "Зал"],
  ["#faq", "Вопросы"],
  ["#zapis", "Запись"],
];

export function Header({ gym }: { gym: Gym }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <a className="logo" href="#top" onClick={close}>
        <i>{gym.mark}</i>
        {gym.name}
      </a>
      <nav className="nav-pill" aria-label="Разделы">
        {links.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="icon-btn" href={gym.vkHref} target="_blank" rel="noreferrer">
          VK
        </a>
        <a className="icon-btn" href={gym.mapHref} target="_blank" rel="noreferrer" aria-label="На карте">
          Карта
        </a>
        <a className="btn tariff-link" href="#prices">
          Выбрать тариф
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      <nav className={open ? "sheet is-open" : "sheet"} aria-label="Меню" aria-hidden={open ? undefined : true}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={close} tabIndex={open ? 0 : -1}>
            {label}
          </a>
        ))}
        <a href={gym.phoneHref} onClick={close} tabIndex={open ? 0 : -1}>
          {gym.contactLabel}
        </a>
      </nav>
    </header>
  );
}
