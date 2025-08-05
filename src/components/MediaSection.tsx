import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Newspaper } from "lucide-react";

const MediaSection = () => {
  const mediaItems = [
    {
      title: "АРТОМ получил звание 'Лидер отрасли 2024'",
      description: "Компания АРТОМ признана лидером в области производства заготовок для авиационной промышленности по итогам всероссийского бизнес-рейтинга.",
      date: "15 октября 2024",
      source: "Промышленный вестник",
      category: "Награды"
    },
    {
      title: "Инновации в производстве машиностроении компонентов",
      description: "Интервью с генеральным директором Еленой Горбачевой о развитии современных технологий в производстве заготовок лопаток.",
      date: "8 сентября 2024",
      source: "Авиационная промышленность России",
      category: "Интервью"
    },
    {
      title: "30 лет успешной работы в машиностроении",
      description: "Юбилейный материал о достижениях ООО АРТОМ за 30 лет работы в области высокоточного производства.",
      date: "22 июня 2024",
      source: "Металлургический бюллетень",
      category: "Юбилей"
    },
    {
      title: "Сертификация по международным стандартам",
      description: "АРТОМ успешно прошел сертификацию производства по международным стандартам качества в авиационной отрасли.",
      date: "14 мая 2024",
      source: "Качество и сертификация",
      category: "Сертификация"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Награды": return "bg-primary text-primary-foreground";
      case "Интервью": return "bg-blue-500 text-white";
      case "Юбилей": return "bg-green-500 text-white";
      case "Сертификация": return "bg-orange-500 text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="media" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Newspaper className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Мы в СМИ
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Освещение деятельности компании АРТОМ в профессиональных и отраслевых изданиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mediaItems.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-spring hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between space-x-3 mb-3">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{item.source}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    Читать полностью
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Media Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {[
            { number: "50+", label: "Публикаций в СМИ" },
            { number: "15+", label: "Отраслевых изданий" },
            { number: "5", label: "Лет медиа-присутствия" }
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

export default MediaSection;