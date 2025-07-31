import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ManagementSection from "@/components/ManagementSection";
import MediaSection from "@/components/MediaSection";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <FacilitiesSection />
        <ManagementSection />
        <MediaSection />
        <AwardsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
