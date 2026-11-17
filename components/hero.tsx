"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Gym } from "@/lib/types";

export function Hero({ gym }: { gym: Gym }) {
  const photoRef = useRef<HTMLImageElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLAnchorElement>(null);
  const wordRef = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight * 1.2);
        if (photoRef.current) {
          photoRef.current.style.transform = `translate3d(0, ${y * 0.42}px, 0) scale(1.14)`;
        }
        if (shadeRef.current) {
          shadeRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
        }
        if (copyRef.current) {
          copyRef.current.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
        }
        if (clipRef.current) {
          clipRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
        }
        if (wordRef.current) {
          wordRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce]);

  return (
    <section className="hero" id="top">
      <img
        ref={photoRef}
        className="hero-photo"
        alt=""
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
      />
      <div ref={shadeRef} className="hero-shade" />
      <div className="hero-grid">
        <motion.a
          ref={clipRef}
          className="clip"
          href={gym.vkHref}
          target="_blank"
          rel="noreferrer"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            alt="Тренировка со штангой"
            src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80"
          />
          <span>
            <i className="play" aria-hidden>
              ▶
            </i>
            Смотреть зал
          </span>
        </motion.a>
        <motion.div
          ref={copyRef}
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="since">{gym.eyebrow}</p>
          <h1>
            {gym.headline[0]}
            <br />
            {gym.headline[1]}
          </h1>
          <p className="place">{gym.street}</p>
          <p className="lead">{gym.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#zapis">
              Записаться на пробное
              <i className="arrow" aria-hidden>
                →
              </i>
            </a>
            <a className="btn btn-line" href={gym.phoneHref}>
              {gym.contactLabel}
            </a>
          </div>
        </motion.div>
      </div>
      <p ref={wordRef} className="wordmark" aria-hidden>
        {gym.wordmark}
      </p>
    </section>
  );
}
