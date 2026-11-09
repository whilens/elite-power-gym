import { tracks } from "@/lib/content";
import { Rail } from "@/components/rail";

export function Formats() {
  return (
    <section className="band" id="formats">
      <div className="section-head">
        <h2>Что ведут в зале</h2>
        <p>Пять форматов зала на Ополченской: от железа до детских групп.</p>
      </div>
      <Rail label="направления" className="rail-tall">
        {tracks.map((item) => (
          <article className="format" key={item.title}>
            <img src={item.image} alt="" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </Rail>
    </section>
  );
}
