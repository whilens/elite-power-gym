"use client";

import { useState } from "react";
import type { Gym } from "@/lib/types";

export function Faq({ gym }: { gym: Gym }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="paper" id="faq" style={{ paddingTop: 0 }}>
      <div className="section-head">
        <h2>Перед первым визитом</h2>
      </div>
      <div className="faq">
        {gym.questions.map((item, index) => {
          const on = open === index;
          return (
            <div className={on ? "faq-item is-open" : "faq-item"} key={item.q}>
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
          );
        })}
      </div>
    </section>
  );
}
