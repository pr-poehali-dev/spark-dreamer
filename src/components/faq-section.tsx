import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Почему Unreal Engine, а не традиционные инструменты маппинга?",
      answer:
        "Unreal Engine даёт кинематографическое качество рендеринга в реальном времени, интерактивность и возможности, недоступные в классических решениях. Это позволяет создавать живой контент, реагирующий на музыку, движение и данные — прямо во время шоу.",
    },
    {
      question: "Насколько сложно подготовить объект к маппингу?",
      answer:
        "Мы берём всё на себя: выезжаем на объект, делаем 3D-сканирование, строим точную цифровую модель и калибруем проекторы. Клиенту остаётся только принять результат.",
    },
    {
      question: "Можно ли проводить шоу на улице?",
      answer:
        "Да, мы работаем с уличными форматами: фасады зданий, open-air площадки, мосты и монументы. Используем проекторы с высоким световым потоком, подходящие для любых условий освещённости.",
    },
    {
      question: "Как выглядит процесс работы над проектом?",
      answer:
        "Брифинг → концепция и раскадровка → 3D-моделирование объекта → разработка контента в UE5 → техническая подготовка и монтаж → репетиция → шоу. Обычно от брифа до шоу — 3–6 недель.",
    },
    {
      question: "Возможен ли интерактивный маппинг с участием публики?",
      answer:
        "Да, это одна из наших специализаций. Контент может реагировать на движения людей, голос, касания экранов или QR-действия — создавая уникальный опыт для каждого зрителя.",
    },
    {
      question: "На какие бюджеты рассчитаны ваши проекты?",
      answer:
        "Мы работаем в разных форматах: от компактных корпоративных шоу до масштабных городских инсталляций. Обсудим ваши задачи и подберём оптимальное решение — напишите нам.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о projection mapping на Unreal Engine
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
