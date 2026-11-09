"use client";

import { plans, type PlanId } from "@/lib/content";

function Tick() {
  return (
    <i className="tick" aria-hidden>
      <svg width="10" height="10" viewBox="0 0 10 10">
        <path d="M1.5 5.2 4 7.5 8.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </i>
  );
}

export function Pricing({ onPick }: { onPick: (id: PlanId) => void }) {
  return (
    <section className="paper" id="prices">
      <div className="section-head">
        <h2>Четыре способа ходить в зал</h2>
        <p>Цены с витрины сообщества. Полгода дешевле, чем платить месяц за месяцем.</p>
      </div>
      <div className="price-grid">
        {plans.map((plan) => (
          <article key={plan.id} className={plan.id === "half" ? "plan plan-featured" : "plan"}>
            <header>
              <h3>
                {plan.name}
                <span className="note">{plan.note}</span>
              </h3>
              {plan.id === "half" ? <span className="mark">выгоднее</span> : null}
            </header>
            <p className="price">
              {plan.price}
              <small>{plan.period}</small>
            </p>
            <ul>
              {plan.points.map((point) => (
                <li key={point}>
                  <Tick />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <footer>
              <button className={plan.id === "half" ? "btn btn-light" : "btn btn-dark"} type="button" onClick={() => onPick(plan.id)}>
                Записаться
              </button>
              <a className="btn btn-line" href="tel:+79377507982">
                Позвонить
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
