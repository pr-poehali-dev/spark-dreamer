import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Корпоративные события",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Запуски продуктов, конференции и форумы с визуальными шоу, которые запоминаются навсегда.
            Превращаем корпоративные события в захватывающие технологические перформансы.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Запуски продуктов и брендинговые шоу
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Конференции и форумы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Гала-ужины и награждения
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Концерты и фестивали",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Синхронизированное визуальное шоу для музыкальных выступлений и open-air фестивалей.
            Контент в реальном времени реагирует на музыку и создаёт уникальный опыт для каждого трека.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Синхронизация с аудио в реальном времени
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Open-air и indoor форматы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фестивальные инсталляции
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Архитектурный маппинг",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Преображение фасадов зданий, исторических объектов и современной архитектуры.
            Каждый элемент здания становится частью живой визуальной истории.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Проецирование на здания и фасады
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Исторические объекты и монументы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Постоянные инсталляции для брендов
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Где мы работаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Projection mapping на Unreal Engine подходит для самых разных форматов —
            от камерных корпоративных вечеров до масштабных уличных шоу.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
