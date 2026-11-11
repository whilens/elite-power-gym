"use client";

import type { Gym, Plan } from "@/lib/types";

function Tick() {
  return (
    <i className="tick" aria-hidden>
      <svg width="10" height="10" viewBox="0 0 10 10">
        <path d="M1.5 5.2 4 7.5 8.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </i>
  );
}

export function Pricing({ gym, onPick }: { gym: Gym; onPick: (id: string) => void }) {
  return (
    <section className="paper" id="prices">
      <div className="section-head">
        <h2>{gym.priceTitle}</h2>
        <p>{gym.priceIntro}</p>
      </div>
      <div className="price-grid">
        {gym.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} contactHref={gym.phoneHref} contactLabel={gym.contactLabel} onPick={onPick} />
        ))}
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  contactHref,
  contactLabel,
  onPick,
}: {
  plan: Plan;
  contactHref: string;
  contactLabel: string;
  onPick: (id: string) => void;
}) {
  return (
    <article className={plan.featured ? "plan plan-featured" : "plan"}>
      <header>
        <h3>
          {plan.name}
          <span className="note">{plan.note}</span>
        </h3>
        {plan.featured ? <span className="mark">выгоднее</span> : null}
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
        <button className={plan.featured ? "btn btn-light" : "btn btn-dark"} type="button" onClick={() => onPick(plan.id)}>
          Записаться
        </button>
        <a className="btn btn-line" href={contactHref}>
          {contactLabel}
        </a>
      </footer>
    </article>
  );
}
