import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Leaf } from "lucide-react";
import { menuInfo } from "@/data/menu";

export function DeliveryInfoSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="bg-accent text-accent-foreground mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              Entrega
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Informações de Entrega
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Delivery Time */}
            <div className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Tempo de Entrega</h3>
              <p className="text-muted-foreground">
                Tempo médio de entrega:
              </p>
              <p className="text-2xl font-bold text-accent">{menuInfo.deliveryTime}</p>
            </div>

            {/* Delivery Fee */}
            <div className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Taxa de Entrega</h3>
              <p className="text-muted-foreground">
                {menuInfo.deliveryNote}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Informe seu bairro ao fazer o pedido
              </p>
            </div>

            {/* Free Additions */}
            <div className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 text-green-600 mb-4">
                <Leaf className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Adicionais Grátis</h3>
              <p className="text-muted-foreground mb-2">
                Não cobramos por:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {menuInfo.freeAdditions.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
