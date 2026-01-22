import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Em quanto tempo minha pizzaria fica no ar?",
    answer:
      "Em até 48 horas você já pode ter o site, cardápio e fluxo de pedidos funcionando.",
  },
  {
    question: "Preciso baixar algum aplicativo?",
    answer:
      "Não. Tudo funciona no navegador, tanto para os clientes quanto para a gestão da pizzaria.",
  },
  {
    question: "Posso usar meu domínio e identidade visual?",
    answer:
      "Sim! Personalizamos cores, logo e domínio para manter sua marca em destaque.",
  },
  {
    question: "Como recebo os pedidos?",
    answer:
      "Os pedidos chegam no WhatsApp da pizzaria e também ficam registrados no painel para acompanhamento.",
  },
  {
    question: "Existe taxa por pedido?",
    answer:
      "Não cobramos comissão por pedido. Você paga apenas a mensalidade do plano escolhido.",
  },
  {
    question: "Vocês oferecem suporte?",
    answer:
      "Sim, nosso time acompanha todo o onboarding e permanece disponível para suporte contínuo.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-accent-foreground mb-4">
            <HelpCircle className="h-4 w-4 mr-1" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Respostas rápidas para quem quer digitalizar a pizzaria com segurança.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border shadow-sm px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
