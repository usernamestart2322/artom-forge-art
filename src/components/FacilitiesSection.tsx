import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TestTube, Shield, Wrench, Microscope, Users } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Кузнечно-штамповочный цех",
      description: "Современное оборудование для высокоточного производства"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Цех подготовки производства", 
      description: "Подготовка материалов и технологических процессов"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Участок контроля качества",
      description: "Строгий контроль качества на всех этапах производства"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Конструкторское бюро",
      description: "Разработка и проектирование технических решений"
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Аккредитованная лаборатория",
      description: "Лаборатория разрушающего контроля материалов"
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Центр исследований",
      description: "Инновационные разработки и технологии"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Производственная база
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Собственная производственная база полного цикла для обеспечения высшего качества продукции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-spring hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-elegant group-hover:animate-glow">
                    {facility.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                    {facility.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {[
            { number: "30", label: "лет опыта" },
            { number: "18кг", label: "Максимальный вес изделий" },
            { number: "100%", label: "Контроль качества" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-subtle border border-border/30 hover:shadow-card transition-smooth">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;