import { Card, CardContent } from "@/components/ui/card";

const HistorySection = () => {
  return (
    <section id="history" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Из истории
          </h2>
        </div>
        
        <Card className="max-w-6xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/bfa5ef99-f894-49df-8011-f96a729a508a.png" 
                    alt="Вакалов Александр Алексеевич - основатель ООО АРТОМ" 
                    className="w-full h-auto rounded-lg shadow-elegant object-cover"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="prose prose-lg text-foreground">
                  <p className="text-muted-foreground leading-relaxed">
                    ООО «АРТОМ» - активно развивающееся предприятие. В 90-х годах, когда научно-исследовательские институты перестали получать государственные заказы и многим пришлось бороться за выживание, Вакаловым Александром Алексеевичем на базе Омского НИИД был создан экспериментальный участок для отработки прогрессивных процессов горячей штамповки и порошковой металлургии. А затем в 1991 году организовано Общество с ограниченной ответственностью «АРТОМ».
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Первой продукцией данного предприятия были товары народного потребления, производимые методом порошковой металлургии. В 1992 году ООО «АРТОМ» заключило первый договор по освоению горячей штамповки заготовок лопаток газотурбинных двигателей для ремонта импортных стационарных газоперекачивающих станций, ставшими основной продукцией для него в последующие годы.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    За время производственной деятельности создано высокотехнологичное производство, которое обладает всеми производственными мощностями, позволяющими осуществлять технологические процессы для изготовления качественной продукции.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HistorySection;