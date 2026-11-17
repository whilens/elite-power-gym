import type { Metadata } from "next";
import { DemoList } from "@/components/demo-list";
import { demos } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Демо залов",
  robots: { index: false, follow: false },
};

export default function DemosPage() {
  return (
    <main className="demos-page">
      <h1>Демо залов Волгограда</h1>
      <p className="demos-intro">
        {demos.length} посадочных на базе шаблона Elite Power Gym. Возле названия — телефон, VK и
        карты. «Скопировать» кладёт готовый текст сообщения со ссылкой.
      </p>
      <DemoList demos={demos} />
    </main>
  );
}
