import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "Производство", href: "#production" },
    { name: "Руководство", href: "#management" },
    { name: "Контакты", href: "#contacts" },
    { name: "Мы в СМИ", href: "#media" },
    { name: "Награды", href: "#awards" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/8698ce12-657f-4f19-9f64-2a90b3e9926b.png" 
                alt="АРТОМ логотип" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">АРТОМ</h1>
              <p className="text-xs text-muted-foreground leading-tight">
                Производство заготовок лопаток
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-sm font-medium transition-smooth hover:text-primary hover:bg-accent"
                asChild
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start text-sm font-medium transition-smooth hover:text-primary hover:bg-accent"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;