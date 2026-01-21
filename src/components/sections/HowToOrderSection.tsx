import { Badge } from "@/components/ui/badge";
import { ClipboardList, MapPin, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Escolha seus Itens",
    description: "Navegue pelo cardápio e adicione suas pizzas e bebidas favoritas ao carrinho.",
  },
  {
    icon: MapPin,
    step: "2",
    title: "Informe seus Dados",
    description: "Preencha seu nome, endereço e escolha a forma de pagamento desejada.",
  },
  {
    icon: MessageCircle,
    step: "3",
    title: "Envie pelo WhatsApp",
    description: "Com um clique, seu pedido é enviado direto para nosso WhatsApp. Simples assim!",
  },
];

export function HowToOrderSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-accent-foreground mb-4">
            Super Fácil
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como Fazer seu Pedido
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Pedir sua pizza favorita nunca foi tão fácil! Siga estes 3 passos simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Connector Line (hidden on mobile, between items on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary-foreground/20" />
              )}

              {/* Step Number & Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent text-accent-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-10 w-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-foreground text-primary font-bold flex items-center justify-center text-lg">
                  {step.step}
                </div>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
