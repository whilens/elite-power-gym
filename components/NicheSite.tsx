"use client";

import { useEffect, useState } from "react";
import type { NicheTemplate } from "@/lib/niches";

export function NicheSite({ niche }: { niche: NicheTemplate }) {
  const featured = niche.offers.find((o) => o.featured)?.id ?? niche.offers[0].id;
  const [plan, setPlan] = useState(featured);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const t = niche.theme;
    root.style.setProperty("--n-bg", t.bg);
    root.style.setProperty("--n-surface", t.surface);
    root.style.setProperty("--n-ink", t.ink);
    root.style.setProperty("--n-muted", t.muted);
    root.style.setProperty("--n-accent", t.accent);
    root.style.setProperty("--n-accent-text", t.accentText);
    root.style.setProperty("--n-line", t.line);
    root.style.setProperty("--n-overlay", t.heroOverlay);
    root.style.setProperty("--n-display", niche.fonts.display);
    root.style.setProperty("--n-body", niche.fonts.body);
    document.body.dataset.niche = niche.slug;
  }, [niche]);

  const pick = (id: string) => {
    setPlan(id);
    document.getElementById("zapis")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ns">
      <header className="ns-header">
        <a className="ns-brand" href="#top">
          <span className="ns-mark">{niche.mark}</span>
          <span>
            <strong>{niche.name}</strong>
            <em>{niche.city}</em>
          </span>
        </a>
        <nav className="ns-nav" aria-label="Навигация">
          <a href="#services">Услуги</a>
          <a href="#offers">Цены</a>
          <a className="ns-btn ns-btn-solid" href="#zapis">
            Запись
          </a>
        </nav>
      </header>

      <section className="ns-hero" id="top">
        <img className="ns-hero-photo" src={niche.heroImage} alt="" />
        <div className="ns-hero-shade" />
        <div className="ns-hero-copy">
          <p className="ns-eyebrow">{niche.eyebrow}</p>
          <h1>
            <span>{niche.headline[0]}</span>
            <em>{niche.headline[1]}</em>
          </h1>
          <p className="ns-lead">{niche.lead}</p>
          <div className="ns-cta-row">
            <a className="ns-btn ns-btn-solid" href="#zapis">
              Записаться
            </a>
            <a className="ns-btn" href="#offers">
              Смотреть цены
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className="ns-section" id="services">
          <div className="ns-section-head">
            <h2>{niche.servicesTitle}</h2>
            <p>{niche.servicesLead}</p>
          </div>
          <ul className="ns-services">
            {niche.services.map((item, i) => (
              <li key={item.title} style={{ animationDelay: `${i * 80}ms` }}>
                <img src={item.image} alt="" />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="ns-section ns-section-alt" id="offers">
          <div className="ns-section-head">
            <h2>{niche.offersTitle}</h2>
            <p>{niche.offersLead}</p>
          </div>
          <ul className="ns-offers">
            {niche.offers.map((offer) => (
              <li key={offer.id} className={offer.featured ? "is-featured" : undefined}>
                <div className="ns-offer-top">
                  <strong>{offer.name}</strong>
                  <span>{offer.note}</span>
                </div>
                <p className="ns-price">
                  {offer.price}
                  <small>{offer.period}</small>
                </p>
                <ul>
                  {offer.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <button type="button" className="ns-btn ns-btn-solid" onClick={() => pick(offer.id)}>
                  Выбрать
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="ns-section" id="facts">
          <div className="ns-section-head">
            <h2>{niche.factsTitle}</h2>
          </div>
          <ul className="ns-facts">
            {niche.facts.map((fact) => (
              <li key={fact.kicker}>
                <span className="ns-kicker">{fact.kicker}</span>
                <blockquote>{fact.quote}</blockquote>
                <cite>{fact.who}</cite>
              </li>
            ))}
          </ul>
        </section>

        <section className="ns-section ns-section-alt" id="faq">
          <div className="ns-section-head">
            <h2>Вопросы</h2>
          </div>
          <div className="ns-faq">
            {niche.questions.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="ns-section ns-visit" id="zapis">
          <div className="ns-section-head">
            <h2>{niche.ctaTitle}</h2>
            <p>{niche.ctaLead}</p>
          </div>
          {sent ? (
            <p className="ns-thanks">Спасибо. В демо-форме заявка не отправляется — это шаблон для показа.</p>
          ) : (
            <form
              className="ns-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label>
                Имя
                <input name="name" required placeholder="Как к вам обращаться" />
              </label>
              <label>
                Телефон
                <input name="phone" required type="tel" placeholder="+7" />
              </label>
              <label>
                Интересует
                <select name="plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
                  {niche.offers.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.name}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="ns-btn ns-btn-solid">
                Отправить
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="ns-footer">
        <strong>{niche.name}</strong>
        <span>{niche.footerNote}</span>
      </footer>
    </div>
  );
}
