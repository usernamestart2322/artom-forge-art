import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
const directorPhoto = "/lovable-uploads/f454b2bb-a119-4058-b448-668537d9e588.png";

const ManagementSection = () => {
  return (
    <section id="management" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Руководство
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Опытная команда профессионалов во главе развития компании
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-elegant transition-spring border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Photo Section */}
              <div className="relative overflow-hidden">
                <img
                  src={directorPhoto}
                  alt="Елена Александровна Горбачева"
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] group-hover:scale-105 transition-spring"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <CardHeader className="px-0 pb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      Елена Александровна
                    </h3>
                    <h4 className="text-xl lg:text-2xl font-bold text-primary">
                      ГОРБАЧЕВА
                    </h4>
                    <p className="text-lg text-muted-foreground font-medium">
                      Генеральный директор ООО «АРТОМ»
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="px-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Под руководством Елены Александровны компания АРТОМ достигла значительных успехов 
                    в области производства высокоточных заготовок для авиационной промышленности, 
                    став признанным лидером отрасли.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-smooth">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-semibold text-foreground">+7 (3812) 46-61-35</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-smooth">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold text-foreground">ooo.artom@mail.ru</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;