import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <FacilitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
