import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, Clock, Phone, CreditCard } from "lucide-react";
import { menuInfo } from "@/data/menu";

const WHATSAPP_NUMBER = "5564993182960";

const Contato = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido na Mestre das Pizzas 🍕");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground mb-4">
              <Phone className="h-4 w-4 mr-1" />
              Contato
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fale Conosco
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estamos prontos para atender você! Faça seu pedido pelo WhatsApp.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* WhatsApp CTA */}
            <Card className="mb-8 bg-green-500/10 border-green-500/30">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold mb-2">Peça pelo WhatsApp</h2>
                <p className="text-muted-foreground mb-6">
                  Clique no botão abaixo para fazer seu pedido diretamente pelo WhatsApp!
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6 px-8 gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  (64) 99318-2960
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">Horário de Funcionamento</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Terça a Domingo:</strong> 18:00 - 23:00</li>
                    <li className="text-destructive"><strong>Segunda:</strong> Fechado</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Tempo médio de entrega: <strong className="text-accent">{menuInfo.deliveryTime}</strong>
                  </p>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <CreditCard className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">Formas de Pagamento</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {menuInfo.paymentMethods.map((method) => (
                      <Badge key={method} variant="secondary" className="text-sm">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">Localização</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Rua da Pizza, 123 - Centro<br />
                    Sua Cidade, GO
                  </p>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Mapa em breve</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </div>
  );
};

export default Contato;
