"use client";

import { useState } from "react";
import { mapHref, phoneDisplay, phoneHref, plans, vkWriteHref, type PlanId } from "@/lib/content";

export function Visit({ plan, onPlan }: { plan: PlanId; onPlan: (id: PlanId) => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  const selected = plans.find((item) => item.id === plan) ?? plans[1];

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Напишите, как к вам обращаться.");
      setReady(false);
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Нужен телефон, чтобы в зале поняли, кому перезванивать.");
      setReady(false);
      return;
    }
    setError("");
    setReady(true);
  };

  const message = `Здравствуйте! Хочу записаться в Elite Power Gym. Тариф: ${selected.name}, ${selected.price}. Меня зовут ${name.trim()}. Телефон: ${phone.trim()}.`;

  return (
    <section className="close" id="zapis">
      <div className="close-photo">
        <img
          alt="Тренажёрный зал"
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80"
        />
      </div>
      <div className="close-copy">
        <h2>Пробное занятие — 400 ₽</h2>
        <p className="lead">
          Оставьте имя и телефон. Со страницы заявка сама не уходит: дальше звонок или сообщение во ВКонтакте.
        </p>
        {ready ? (
          <div className="ok">
            <p>
              {name.trim()}, тариф «{selected.name}». Наберите {phoneDisplay} или отправьте готовый текст во ВКонтакте.
            </p>
            <p style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              <a className="btn btn-light" href={phoneHref}>
                Позвонить
              </a>
              <a className="btn btn-line" href={`${vkWriteHref}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">
                Написать в VK
              </a>
            </p>
          </div>
        ) : (
          <form className="form" onSubmit={submit}>
            <label>
              Имя
              <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
            </label>
            <label>
              Телефон
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                inputMode="tel"
                autoComplete="tel"
                placeholder="+7"
              />
            </label>
            <label>
              Тариф
              <select value={plan} onChange={(event) => onPlan(event.target.value as PlanId)}>
                {plans.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} — {item.price}
                  </option>
                ))}
              </select>
            </label>
            {error ? <p className="error">{error}</p> : null}
            <button className="btn btn-light" type="submit">
              Подготовить запись
              <i className="arrow" aria-hidden>
                →
              </i>
            </button>
          </form>
        )}
        <p className="since" style={{ marginTop: 18 }}>
          <a href={mapHref}>Ополченская ул., 46, цокольный этаж</a>
        </p>
      </div>
    </section>
  );
}
