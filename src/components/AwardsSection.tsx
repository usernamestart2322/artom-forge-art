import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";
const awardImage = "/lovable-uploads/bb88aacc-2f67-4a11-bfba-4fb154902a5a.png";
const certificateImage = "/lovable-uploads/a2af9dd7-2826-4b10-af3c-127cfe458af6.png";

const AwardsSection = () => {
  const awards = [
    {
      image: awardImage,
      title: "Лидер отрасли 2020, 2024",
      description: "Всероссийский бизнес-рейтинг",
      year: "2020, 2024",
      category: "Отраслевое лидерство"
    },
    {
      image: certificateImage,
      title: "Национальный сертификат - Лидер отрасли 2020, 2024",
      description: "За весомый вклад в развитие российской экономики и достижение высоких экономических показателей",
      year: "2020, 2024",
      category: "Государственное признание"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Награды и достижения
            </h2>
            <Award className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Признание профессионализма и качества нашей работы на всероссийском уровне
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-spring hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm animate-slide-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-spring"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground shadow-glow">
                    {award.year}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-elegant group-hover:animate-glow flex-shrink-0">
                    <Trophy className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight mb-2">
                      {award.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                      {award.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {[
            { number: "2020, 2024", label: "Годы признания лидером отрасли" },
            { number: "№1", label: "В рейтинге предприятий отрасли" },
            { number: "30", label: "лет безупречной работы" }
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

export default AwardsSection;