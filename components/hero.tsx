import { phoneHref, vkHref } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-photo"
        alt=""
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="hero-shade" />
      <div className="hero-grid">
        <a className="clip" href={vkHref} target="_blank" rel="noreferrer">
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
          <p className="since">В зале с 2017 года · Тракторозаводский район</p>
          <h1>
            Место
            <br />
            силы
          </h1>
          <p className="place">Ополченская, 46</p>
          <p className="lead">
            Фитнес, функциональный тренинг, силовые, реабилитация и пауэрлифтинг. Пробный визит — 400 ₽.
          </p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#zapis">
              Записаться на пробное
              <i className="arrow" aria-hidden>
                →
              </i>
            </a>
            <a className="btn btn-line" href={phoneHref}>
              Позвонить
            </a>
          </div>
        </div>
      </div>
      <p className="wordmark" aria-hidden>
        ELITE
      </p>
    </section>
  );
}
