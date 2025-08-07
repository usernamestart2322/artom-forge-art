import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer id="contacts" className="bg-gradient-hero text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/lovable-uploads/8698ce12-657f-4f19-9f64-2a90b3e9926b.png" alt="АРТОМ логотип" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">АРТОМ</h3>
                <p className="text-white/80 text-sm">Производство штампованных заготовок лопаток</p>
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
            <div className="space-y-6">
              {/* Юридический адрес */}
              <div className="space-y-2">
                <h5 className="text-lg font-medium text-primary-light">Юридический адрес:</h5>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-light mt-1" />
                  <div className="text-white/90">
                    <div>Россия, г. Омск, 644021 ул. Б.Хмельницкого,</div>
                    <div>дом 188, помещ. 3П</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Phone className="w-4 h-4" />
                      <span>8(3812) 46-61-35</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Адрес производства */}
              <div className="space-y-2">
                <h5 className="text-lg font-medium text-primary-light">Адрес производства:</h5>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-light mt-1" />
                  <div className="text-white/90">
                    <div>Россия, г.Омск, ул. 10 лет Октября, д. 219/2В</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Phone className="w-4 h-4" />
                      <span>8(3812) 40-40-18</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Контакты руководства */}
              <div className="space-y-3">
                <h5 className="text-lg font-medium text-primary-light">Руководство:</h5>
                
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-white/80 text-sm mb-1">По вопросам сотрудничества и размещения заказов:</div>
                  <div className="text-white font-medium">Директор по производству</div>
                  <div className="text-white">Рычков Денис Витальевич</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Phone className="w-4 h-4 text-primary-light" />
                    <span className="text-white/90">8(904) 327-51-68</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-white/80 text-sm mb-1">По вопросам материально-технического обеспечения:</div>
                  <div className="text-white font-medium">Технический директор</div>
                  <div className="text-white">Филимендиков Александр Николаевич</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Phone className="w-4 h-4 text-primary-light" />
                    <span className="text-white/90">8(913) 601-96-50</span>
                  </div>
                </div>
              </div>

              {/* Email и сайт */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-light" />
                  <span className="text-white/90">ooo.artom@mail.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white/90">Сайт: artom55.ru</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4">Быстрые ссылки</h4>
            <div className="grid grid-cols-2 gap-2">
              {[{
              name: "Главная",
              href: "#home"
            }, {
              name: "Производство",
              href: "#production"
            }, {
              name: "Руководство",
              href: "#management"
            }, {
              name: "Контакты",
              href: "#contacts"
            }, {
              name: "Мы в СМИ",
              href: "#media"
            }, {
              name: "Награды",
              href: "#awards"
            }].map((link, index) => <Button key={index} variant="ghost" className="justify-start text-white/80 hover:text-white hover:bg-white/10 p-2 h-auto" onClick={() => {
              const element = document.querySelector(link.href);
              element?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                  {link.name}
                </Button>)}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2025 ООО «АРТОМ». Все права защищены.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;