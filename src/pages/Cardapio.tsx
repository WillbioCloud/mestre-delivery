import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { MenuSection } from "@/components/sections/MenuSection";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed } from "lucide-react";

const Cardapio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Badge className="bg-accent text-accent-foreground mb-4">
              <UtensilsCrossed className="h-4 w-4 mr-1" />
              Cardápio Completo
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nosso Cardápio
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore todas as nossas deliciosas opções de pizzas e bebidas. 
              Adicionais grátis: tomate, cebola e milho! 🍅🧅🌽
            </p>
          </div>
        </div>
        <MenuSection showSearch={true} fullPage={true} />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </div>
  );
};

export default Cardapio;
