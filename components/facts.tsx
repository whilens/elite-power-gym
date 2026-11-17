"use client";

import { Rail } from "@/components/rail";
import { Reveal } from "@/components/reveal";
import type { Gym } from "@/lib/types";

export function Facts({ gym }: { gym: Gym }) {
  return (
    <section className="paper" id="facts">
      <Reveal>
        <div className="section-head">
          <h2>{gym.factsTitle}</h2>
          <p>{gym.factsText}</p>
        </div>
      </Reveal>
      <Reveal delay={0.08} y={24}>
        <Rail label="факты" className="rail-short">
          {gym.facts.map((item) => (
            <article className="fact" key={item.kicker}>
              <div>
                <p className="kicker">{item.kicker}</p>
                <q>{item.quote}</q>
              </div>
              <p className="who">
                <strong>{item.who}</strong>
                <span>{item.meta}</span>
              </p>
            </article>
          ))}
        </Rail>
      </Reveal>
    </section>
  );
}
