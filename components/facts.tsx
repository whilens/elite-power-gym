import { facts } from "@/lib/content";
import { Rail } from "@/components/rail";

export function Facts() {
  return (
    <section className="paper" id="facts">
      <div className="section-head">
        <h2>Коротко до визита</h2>
        <p>Живой отзыв на картах один. Остальное — адрес, часы и цены, чтобы не гадать.</p>
      </div>
      <Rail label="факты" className="rail-short">
        {facts.map((item) => (
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
