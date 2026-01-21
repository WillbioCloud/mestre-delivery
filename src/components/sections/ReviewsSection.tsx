import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Maria S.",
    rating: 5,
    text: "Melhor pizza da cidade! A calabresa é simplesmente divina. Entrega sempre no prazo e pizza quentinha. Recomendo demais!",
    date: "Há 2 semanas",
  },
  {
    name: "João P.",
    rating: 5,
    text: "Peço toda semana o Combo Família. Preço justo, pizzas enormes e muito saborosas. A família toda aprova!",
    date: "Há 1 semana",
  },
  {
    name: "Ana C.",
    rating: 5,
    text: "A pizza de chocolate com morango é sensacional! Perfeita para sobremesa. Atendimento excelente pelo WhatsApp.",
    date: "Há 3 dias",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-accent-foreground mb-4">
            <Star className="h-4 w-4 mr-1 fill-current" />
            Avaliações
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-accent/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground mb-4 italic">"{review.text}"</p>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Cliente Verificado
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
