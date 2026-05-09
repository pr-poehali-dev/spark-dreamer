import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Real-time рендеринг",
    description: "Маппинг в реальном времени с кинематографическим качеством картинки. Unreal Engine обеспечивает рендеринг без задержек на любых поверхностях.",
    icon: "zap",
    badge: "Real-time",
  },
  {
    title: "Любые поверхности",
    description: "Проецирование на здания, сцены, сложные архитектурные объекты и нестандартные конструкции с точной геометрической коррекцией.",
    icon: "target",
    badge: "3D маппинг",
  },
  {
    title: "Интерактивность",
    description: "Контент реагирует на звук, движение и внешние данные. Живое взаимодействие с аудиторией через датчики и камеры.",
    icon: "globe",
    badge: "Интерактив",
  },
  {
    title: "Lumen & Nanite",
    description: "Полное использование технологий Lumen и Nanite для динамического глобального освещения и детализации без ограничений.",
    icon: "brain",
    badge: "UE5",
  },
  {
    title: "Мультипроекторный риг",
    description: "Seamless-соединение нескольких проекторов в единое полотно с автоматическим блендингом и калибровкой цвета.",
    icon: "link",
    badge: "Multi-proj",
  },
  {
    title: "Живой контент",
    description: "Интеграция с live-данными: погода, социальные сети, API — любой внешний источник становится частью шоу.",
    icon: "lock",
    badge: "Live Data",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности нового уровня</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unreal Engine открывает возможности, недоступные традиционным инструментам маппинга
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#9654;"}
                    {feature.icon === "lock" && "&#127381;"}
                    {feature.icon === "globe" && "&#127808;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
