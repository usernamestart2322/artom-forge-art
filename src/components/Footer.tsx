import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gradient-hero text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8698ce12-657f-4f19-9f64-2a90b3e9926b.png" 
                  alt="АРТОМ логотип" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">АРТОМ</h3>
                <p className="text-white/80 text-sm">Производство заготовок лопаток</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Ведущий производитель штампованных заготовок лопаток для газотурбинных двигателей. 
              Полный технологический цикл от разработки до готового изделия.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4">Контактная информация</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-light mt-1" />
                <span className="text-white/90">
                  Россия, город Омск<br />
                  ул. Богдана Хмельницкого 188, кв. 2
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-light" />
                <span className="text-white/90">ooo.artom@mail.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white/90">http://artom55.ru</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4">Быстрые ссылки</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Главная", href: "#home" },
                { name: "Производство", href: "#production" }, 
                { name: "Руководство", href: "#management" },
                { name: "Контакты", href: "#contacts" },
                { name: "Мы в СМИ", href: "#media" },
                { name: "Награды", href: "#awards" }
              ].map((link, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  className="justify-start text-white/80 hover:text-white hover:bg-white/10 p-2 h-auto"
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2024 ООО «АРТОМ». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;