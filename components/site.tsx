"use client";

import { useState } from "react";
import { Facts } from "@/components/facts";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Formats } from "@/components/formats";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Reveal } from "@/components/reveal";
import { Visit } from "@/components/visit";
import { epg } from "@/lib/content";
import type { Gym } from "@/lib/types";

export function Site({ gym = epg }: { gym?: Gym }) {
  const initial = gym.plans.find((item) => item.featured)?.id ?? gym.plans[0].id;
  const [plan, setPlan] = useState(initial);

  const pick = (id: string) => {
    setPlan(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("zapis")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <Header gym={gym} />
      <main>
        <Hero gym={gym} />
        <section className="band" id="directions">
          <Reveal>
            <div className="section-head">
              <h2>{gym.directionsTitle}</h2>
              <p>{gym.directionsText}</p>
            </div>
          </Reveal>
          <ul className="track-list">
            {gym.tracks.map((item, index) => (
              <Reveal key={item.title} delay={Math.min(index * 0.07, 0.28)} y={18}>
                <li>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>
        <Pricing gym={gym} onPick={pick} />
        <Formats gym={gym} />
        <Facts gym={gym} />
        <Faq gym={gym} />
        <Visit gym={gym} plan={plan} onPlan={setPlan} />
      </main>
      <Footer gym={gym} />
    </>
  );
}
