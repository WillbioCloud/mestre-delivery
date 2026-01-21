import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { menuInfo } from "@/data/menu";

const faqs = [
  {
    question: "Qual o tempo médio de entrega?",
    answer: `Nosso tempo médio de entrega é de ${menuInfo.deliveryTime}. Em dias de maior movimento (sextas e finais de semana), pode haver uma pequena variação.`,
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: `Aceitamos: ${menuInfo.paymentMethods.join(", ")}. Para pagamento em dinheiro, informe se precisa de troco no campo de observações.`,
  },
  {
    question: "Vocês entregam em qual região?",
    answer: "Fazemos entregas em toda a cidade e região. A taxa de entrega varia conforme a distância. Informe seu bairro ao fazer o pedido para confirmarmos o valor.",
  },
  {
    question: "Os adicionais são cobrados?",
    answer: `Não cobramos pelos seguintes adicionais: ${menuInfo.freeAdditions.join(", ")}. Para outros adicionais, consulte pelo WhatsApp.`,
  },
  {
    question: "Posso personalizar minha pizza?",
    answer: "Sim! Você pode fazer observações específicas para cada pizza no carrinho, como 'sem cebola', 'borda recheada', 'bem assada', etc.",
  },
  {
    question: "Qual o tamanho das pizzas?",
    answer: "Nossas pizzas tradicionais e doces são no tamanho grande, com 8 fatias. Ideais para 2-3 pessoas.",
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
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
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
