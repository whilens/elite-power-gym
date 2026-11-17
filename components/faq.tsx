"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import type { Gym } from "@/lib/types";

export function Faq({ gym }: { gym: Gym }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="paper" id="faq" style={{ paddingTop: 0 }}>
      <Reveal>
        <div className="section-head">
          <h2>Перед первым визитом</h2>
        </div>
      </Reveal>
      <div className="faq">
        {gym.questions.map((item, index) => {
          const on = open === index;
          return (
            <Reveal key={item.q} delay={Math.min(index * 0.05, 0.2)} y={16}>
              <div className={on ? "faq-item is-open" : "faq-item"}>
                <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : index)}>
                  {item.q}
                  <span className="plus" aria-hidden>
                    +
                  </span>
                </button>
                <div className="faq-panel">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
