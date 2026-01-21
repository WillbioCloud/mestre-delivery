import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CombosSection } from "@/components/sections/CombosSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { HowToOrderSection } from "@/components/sections/HowToOrderSection";
import { DeliveryInfoSection } from "@/components/sections/DeliveryInfoSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CombosSection />
        <MenuSection />
        <HowToOrderSection />
        <DeliveryInfoSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </div>
  );
};

export default Index;
