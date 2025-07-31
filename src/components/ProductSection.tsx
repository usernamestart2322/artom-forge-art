import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Settings, Zap } from "lucide-react";

const ProductSection = () => {
  const products = [
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Заготовки лопаток",
      description: "Штампованные заготовки лопаток для газотурбинных двигателей из жаропрочных сплавов",
      features: ["До 18 кг", "Габариты 470×250×200", "Высокая точность"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Сложные штамповки",
      description: "Клапана, форсунки, фланцы, рычаги, эндопротезы и другие изделия любой сложности",
      features: ["Любая сложность", "Индивидуальный подход", "Качественные материалы"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Технологические процессы",
      description: "Разработка технологических процессов и оснастки для горячей штамповки",
      features: ["Полный цикл", "Современные технологии", "Инновационные решения"]
    }
  ];

  return (
    <section id="production" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Основная продукция
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Высококачественные изделия для авиационной и промышленной отраслей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-spring hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant group-hover:animate-glow">
                  {product.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="text-xs bg-accent text-accent-foreground"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Materials Section */}
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-border/50 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Используемые материалы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Никельсодержащие сплавы",
              "Нержавеющие стали", 
              "Титан",
              "Импортные материалы"
            ].map((material, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-gradient-subtle border border-border/30 hover:shadow-card transition-smooth"
              >
                <p className="font-medium text-foreground">{material}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;