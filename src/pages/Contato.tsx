import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Rocket, Headphones, BadgeCheck } from "lucide-react";

const WHATSAPP_NUMBER = "5564993182960";

const Contato = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Quero agendar uma demonstração da plataforma Mestre Delivery."
    );
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
              Demonstração
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fale com nosso time
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vamos mostrar como sua pizzaria pode vender mais com pedidos diretos e gestão simples.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* WhatsApp CTA */}
            <Card className="mb-8 bg-green-500/10 border-green-500/30">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold mb-2">Agende sua demonstração</h2>
                <p className="text-muted-foreground mb-6">
                  Clique no botão abaixo e fale com nosso time comercial agora mesmo.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6 px-8 gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Agendar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Rocket className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">Implantação rápida</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Publicamos seu site em até 48 horas com domínio e identidade visual personalizados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Headphones className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">Suporte humano</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Atendimento direto por WhatsApp para tirar dúvidas e ajustar seu cardápio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <BadgeCheck className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">Treinamento do time</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Ajudamos sua equipe a operar o fluxo de pedidos e aproveitar as campanhas.
                  </p>
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
