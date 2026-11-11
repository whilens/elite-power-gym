import type { Gym } from "@/lib/types";

export function Hero({ gym }: { gym: Gym }) {
  return (
    <section className="hero" id="top">
      <img
        className="hero-photo"
        alt=""
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="hero-shade" />
      <div className="hero-grid">
        <a className="clip" href={gym.vkHref} target="_blank" rel="noreferrer">
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
        </a>
        <div className="hero-copy">
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
        </div>
      </div>
      <p className="wordmark" aria-hidden>
        {gym.wordmark}
      </p>
    </section>
  );
}
