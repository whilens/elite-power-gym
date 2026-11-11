import { Rail } from "@/components/rail";
import type { Gym } from "@/lib/types";

export function Facts({ gym }: { gym: Gym }) {
  return (
    <section className="paper" id="facts">
      <div className="section-head">
        <h2>{gym.factsTitle}</h2>
        <p>{gym.factsText}</p>
      </div>
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
    </section>
  );
}
