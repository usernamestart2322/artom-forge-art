import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Производство АРТОМ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Производство
            <span className="block text-primary-light">Высокоточных</span>
            <span className="block">Заготовок</span>
          </h1>
          
          <div className="mb-8 max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/f8efc78e-8aa7-41f2-96af-f1014dbe2df0.png" 
              alt="Производственная база АРТОМ" 
              className="w-full h-auto rounded-lg shadow-elegant"
            />
          </div>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold shadow-glow transition-spring hover:scale-105"
            >
              Наша продукция
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;