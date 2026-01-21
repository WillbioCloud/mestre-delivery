import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star, Sparkles } from "lucide-react";
import { combos, promocaoDoDia } from "@/data/menu";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5564993182960";

export function CombosSection() {
  const { addItem, setIsCartOpen } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const handleOrderCombo = (comboName: string, items: string[]) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de pedir o ${comboName} 🍕\n\nItens:\n${items.map(i => `• ${i}`).join("\n")}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleAddPromo = () => {
    addItem(promocaoDoDia);
    toast({
      title: "Promoção adicionada!",
      description: "Pizza do Dia foi adicionada ao seu pedido.",
    });
    setIsCartOpen(true);
  };

  return (
    <section id="combos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-wine text-wine-foreground mb-4">
            <Sparkles className="h-4 w-4 mr-1" />
            Promoções Especiais
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Combos & Promoções
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Economize com nossos combos especiais! Perfeitos para compartilhar com a família e amigos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Combos */}
          {combos.map((combo) => (
            <Card key={combo.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-accent text-accent-foreground font-bold text-lg px-3 py-1">
                    {formatPrice(combo.price)}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">{combo.name}</h3>
                <p className="text-muted-foreground mb-4">{combo.description}</p>
                <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                  {combo.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleOrderCombo(combo.name, combo.items)}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir este combo
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Promoção do Dia */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group border-2 border-wine">
            <div className="relative h-48 overflow-hidden">
              <img
                src={promocaoDoDia.image}
                alt={promocaoDoDia.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-wine text-wine-foreground font-bold text-lg px-3 py-1">
                  {formatPrice(promocaoDoDia.price)}
                </Badge>
              </div>
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-card/90">
                  🔥 Promoção
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl font-bold mb-2">{promocaoDoDia.name}</h3>
              <p className="text-muted-foreground mb-4">{promocaoDoDia.description}</p>
              <p className="text-sm text-wine font-medium mb-4">
                ⚡ Consulte o sabor do dia pelo WhatsApp!
              </p>
              <Button
                onClick={handleAddPromo}
                className="w-full bg-wine hover:bg-wine/90 text-wine-foreground font-semibold gap-2"
              >
                Adicionar ao Pedido
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
