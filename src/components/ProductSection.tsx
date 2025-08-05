import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Settings, Zap, Factory, FlaskConical, Shield } from "lucide-react";

const ProductSection = () => {
  const mainProducts = [
    {
      title: "Штампованные заготовки лопаток",
      description: "для газотурбинных двигателей",
      details: "Высокоточные заготовки из жаропрочных сплавов"
    },
    {
      title: "Штамповки любой сложности",
      description: "весом до 18 кг и габаритами 750 x 300 x 200",
      details: "Включая клапаны, форсунки, фланцы, рычаги, эндопротезы и т.д."
    }
  ];

  const materials = [
    "Тяжелодеформируемые никельсодержащие сплавы",
    "Нержавеющие стали", 
    "Титан и другие материалы отечественного и импортного производства"
  ];

  const facilities = [
    { icon: <Factory className="w-6 h-6" />, name: "кузнечно-штамповочный цех" },
    { icon: <Settings className="w-6 h-6" />, name: "цех подготовки производства" },
    { icon: <Shield className="w-6 h-6" />, name: "участок контроля качества заготовок" },
    { icon: <Cog className="w-6 h-6" />, name: "конструкторское бюро" },
    { icon: <FlaskConical className="w-6 h-6" />, name: "аккредитованная лаборатория разрушающего контроля" }
  ];

  return (
    <section id="production" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Производство
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ООО «АРТОМ» занимается изготовлением штампованных заготовок лопаток для газотурбинных двигателей 
            на кривошипных прессах из сталей и жаропрочных сплавов, а также разработкой технологических 
            процессов и оснастки для горячей штамповки заготовок лопаток.
          </p>
        </div>

        {/* Main Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-spring animate-slide-in">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
                  <Cog className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl text-primary font-bold">ОСНОВНАЯ ПРОДУКЦИЯ:</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {mainProducts.map((product, index) => (
                <div key={index} className="p-4 rounded-lg bg-gradient-subtle border border-border/30">
                  <h4 className="font-semibold text-foreground mb-1">{product.title}</h4>
                  <p className="text-primary font-medium mb-2">{product.description}</p>
                  <p className="text-sm text-muted-foreground">{product.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-spring animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
                  <Settings className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl text-primary font-bold">ИСПОЛЬЗУЕМЫЕ МАТЕРИАЛЫ:</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {materials.map((material, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-subtle border border-border/30">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground font-medium">{material}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;