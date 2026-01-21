import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";

const WHATSAPP_NUMBER = "5564993182960";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido na Mestre das Pizzas 🍕");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const scrollToMenu = () => {
    document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPizza}
          alt="Pizza artesanal saindo do forno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
            Pizza quentinha, sabor de verdade 🍕
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white/90 text-shadow">
            Tempo médio de entrega: <span className="font-semibold text-accent">50 minutos</span>
          </p>
          <p className="text-base md:text-lg mb-8 text-white/80">
            Combos especiais para toda a família • Pizzas artesanais com ingredientes selecionados
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-8 gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="h-6 w-6" />
              Pedir no WhatsApp
            </Button>
            <Button
              onClick={scrollToMenu}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-semibold text-lg py-6 px-8"
            >
              Ver Cardápio
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={scrollToMenu}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Rolar para o cardápio"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
