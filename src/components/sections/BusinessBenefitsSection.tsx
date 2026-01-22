import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  MessageCircle,
  Smartphone,
  Store,
  Users,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "5564993182960";

const features = [
  {
    title: "Cardápio online em minutos",
    description:
      "Edite sabores, preços e categorias sem depender de designers ou desenvolvedores.",
    icon: Smartphone,
  },
  {
    title: "Pedidos direto no WhatsApp",
    description:
      "Carrinho pronto para enviar o pedido completo para a sua equipe com um clique.",
    icon: MessageCircle,
  },
  {
    title: "Relatórios de vendas",
    description:
      "Acompanhe itens mais vendidos, horários de pico e ticket médio em tempo real.",
    icon: BarChart3,
  },
  {
    title: "Campanhas e cupons",
    description:
      "Crie combos, promoções e cupons exclusivos para aumentar o faturamento.",
    icon: Zap,
  },
  {
    title: "Fidelização de clientes",
    description:
      "Recupere clientes inativos com ofertas personalizadas e listas de transmissão.",
    icon: Users,
  },
  {
    title: "Sua marca em destaque",
    description:
      "Domínio próprio, identidade visual e layout personalizado para a sua pizzaria.",
    icon: Store,
  },
];

export function BusinessBenefitsSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Quero conhecer a plataforma Mestre Delivery para minha pizzaria."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="recursos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-accent-foreground mb-4">SaaS para pizzarias</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tudo o que sua pizzaria precisa para vender mais no digital
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Centralize pedidos, campanhas e dados em uma única plataforma. Configure em horas e
            comece a vender sem depender de marketplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-border/60 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
          >
            Quero uma demonstração
          </Button>
        </div>
      </div>
    </section>
  );
}
