"use client";

import { useState } from "react";
import { Facts } from "@/components/facts";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Formats } from "@/components/formats";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Visit } from "@/components/visit";
import { tracks, type PlanId } from "@/lib/content";

export function Site() {
  const [plan, setPlan] = useState<PlanId>("half");

  const pick = (id: PlanId) => {
    setPlan(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("zapis")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="band" id="directions">
          <div className="section-head">
            <h2>Зал без лишнего пафоса</h2>
            <p>Достигнутый результат — это опыт зала и желание человека измениться. Так они сами пишут о себе.</p>
          </div>
          <ul className="track-list">
            {tracks.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>
        <Pricing onPick={pick} />
        <Formats />
        <Facts />
        <Faq />
        <Visit plan={plan} onPlan={setPlan} />
      </main>
      <Footer />
    </>
  );
}
