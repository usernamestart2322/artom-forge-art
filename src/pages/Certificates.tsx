import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, FileCheck } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      image: "/lovable-uploads/92a9e000-b8d1-4d3b-a788-3f4a1df8c7ee.png",
      title: "Сертификат соответствия СДС ВС 01.2160-2024",
      description: "Система менеджмента качества на ковку, прессование, штамповку, профилирование, изготовление изделий методом порошковой металлургии",
      validUntil: "01 ноября 2027 г.",
      standard: "ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)",
      category: "Качество"
    },
    {
      image: "/lovable-uploads/67fca0c0-0674-4fed-a3a4-dbf7f3f18fbe.png", 
      title: "Свидетельство об аккредитации испытательной лаборатории",
      description: "Лаборатория разрушающих и неразрушающих видов испытаний ООО «Артом»",
      validUntil: "08 ноября 2028 г.",
      standard: "ГОСТ ИСО/МЭК 17025-2019",
      category: "Аккредитация"
    },
    {
      image: "/lovable-uploads/43b977b8-3ce6-450e-aaf5-e4d88a73bb28.png",
      title: "Национальный сертификат - Лидер отрасли России 2020",
      description: "За весомый вклад в развитие российской экономики, добросовестную уплату налогов, достижение высоких экономических показателей",
      validUntil: "Бессрочно",
      standard: "ОКВЭД 25.50",
      category: "Национальное признание"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Качество": return "bg-primary text-primary-foreground";
      case "Аккредитация": return "bg-blue-500 text-white";
      case "Национальное признание": return "bg-green-500 text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Качество": return <Shield className="w-6 h-6" />;
      case "Аккредитация": return <FileCheck className="w-6 h-6" />;
      case "Национальное признание": return <Award className="w-6 h-6" />;
      default: return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Сертификаты и аккредитации
                </h1>
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Документы, подтверждающие соответствие нашего производства международным и национальным стандартам качества
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {certificates.map((cert, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-spring hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-spring cursor-pointer"
                      onClick={() => window.open(cert.image, '_blank')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getCategoryColor(cert.category)}>
                        {cert.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-elegant group-hover:animate-glow flex-shrink-0 text-primary-foreground">
                        {getCategoryIcon(cert.category)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-foreground leading-tight">
                          {cert.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Действителен до:</span>
                        <span className="font-medium text-foreground">{cert.validUntil}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Стандарт:</span>
                        <span className="font-medium text-foreground">{cert.standard}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center animate-fade-in">
              <div className="bg-gradient-subtle border border-border/30 rounded-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Гарантия качества и соответствия
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Все наши сертификаты и аккредитации подтверждают высокий уровень качества производства 
                  и соответствие международным стандартам. Мы постоянно работаем над поддержанием и улучшением 
                  наших производственных процессов для обеспечения максимального качества продукции.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Certificates;