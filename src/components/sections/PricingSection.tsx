import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Crown } from "lucide-react";

const WHATSAPP_NUMBER = "5564993182960";

const plans = [
  {
    name: "Essencial",
    price: "R$ 149",
    description: "Para pizzarias que estão começando no digital.",
    features: [
      "Cardápio online e combos",
      "Carrinho integrado ao WhatsApp",
      "Domínio personalizado",
      "Atualizações ilimitadas",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 299",
    description: "Para quem quer crescer com dados e campanhas.",
    features: [
      "Tudo do Essencial",
      "Relatórios de vendas e horários",
      "Cupons e campanhas sazonais",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
  {
    name: "Multiunidade",
    price: "Sob consulta",
    description: "Operações com várias lojas ou franquias.",
    features: [
      "Gestão multi-lojas",
      "Dashboards por unidade",
      "Integrações personalizadas",
      "Gerente de sucesso dedicado",
    ],
  },
];

export function PricingSection() {
  const handlePlanClick = (plan: string) => {
    const message = encodeURIComponent(
      `Olá! Quero saber mais sobre o plano ${plan} da plataforma Mestre Delivery.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="planos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-accent-foreground mb-4">Planos e preços</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o plano ideal para a sua pizzaria
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sem taxas por pedido. Você escolhe o plano e mantém o controle do seu faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-2 ${
                plan.highlighted
                  ? "border-accent shadow-xl"
                  : "border-border/60 shadow-sm"
              }`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {plan.highlighted && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <Crown className="h-3 w-3 mr-1" />
                    Mais escolhido
                  </Badge>
                )}
                <h3 className="font-display text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-foreground mb-6">
                  {plan.price}
                  {plan.price !== "Sob consulta" && (
                    <span className="text-sm font-normal text-muted-foreground">/mês</span>
                  )}
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handlePlanClick(plan.name)}
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`mt-auto ${plan.highlighted ? "bg-accent text-accent-foreground" : ""}`}
                >
                  Falar com o time
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
