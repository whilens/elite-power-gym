"use client";

import { Rail } from "@/components/rail";
import { Reveal } from "@/components/reveal";
import type { Gym } from "@/lib/types";

export function Formats({ gym }: { gym: Gym }) {
  return (
    <section className="band" id="formats">
      <Reveal>
        <div className="section-head">
          <h2>{gym.formatsTitle}</h2>
          <p>{gym.formatsText}</p>
        </div>
      </Reveal>
      <Reveal delay={0.08} y={24}>
        <Rail label="направления" className="rail-tall">
          {gym.tracks.map((item) => (
            <article className="format" key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </Rail>
      </Reveal>
    </section>
  );
}
