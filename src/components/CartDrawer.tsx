import { useState } from "react";
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { menuInfo } from "@/data/menu";

const WHATSAPP_NUMBER = "5564993182960";

export function CartDrawer() {
  const { items, updateQuantity, updateObservation, removeItem, clearCart, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [customerData, setCustomerData] = useState({
    name: "",
    address: "",
    neighborhood: "",
    paymentMethod: "",
    observations: "",
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    setStep("checkout");
  };

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map((item) => {
        let line = `• ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`;
        if (item.observation) {
          line += `\n   _Obs: ${item.observation}_`;
        }
        return line;
      })
      .join("\n");

    const message = `Olá! Quero fazer um pedido na Mestre das Pizzas 🍕

*Nome:* ${customerData.name}
*Endereço:* ${customerData.address}
*Bairro:* ${customerData.neighborhood}

*Itens:*
${itemsList}

*Total:* ${formatPrice(totalPrice)}
*Pagamento:* ${customerData.paymentMethod}
${customerData.observations ? `\n*Observações:* ${customerData.observations}` : ""}`;

    return encodeURIComponent(message);
  };

  const handleSendOrder = () => {
    if (!customerData.name || !customerData.address || !customerData.neighborhood || !customerData.paymentMethod) {
      return;
    }
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    clearCart();
    setIsCartOpen(false);
    setStep("cart");
    setCustomerData({ name: "", address: "", neighborhood: "", paymentMethod: "", observations: "" });
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-2xl animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-accent" />
            <h2 className="font-display text-xl font-semibold">
              {step === "cart" ? "Seu Pedido" : "Finalizar Pedido"}
            </h2>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {step === "cart" ? (
            <>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <ShoppingBag className="h-16 w-16 mb-4 opacity-50" />
                  <p>Seu carrinho está vazio</p>
                  <p className="text-sm">Adicione itens do cardápio!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-accent font-semibold">{formatPrice(item.price)}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mb-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <span className="ml-auto font-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      {/* Observation */}
                      <Input
                        placeholder="Observação (ex: sem cebola)"
                        value={item.observation || ""}
                        onChange={(e) => updateObservation(item.id, e.target.value)}
                        className="text-sm"
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={customerData.name}
                  onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="address">Endereço *</Label>
                <Input
                  id="address"
                  placeholder="Rua, número"
                  value={customerData.address}
                  onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="neighborhood">Bairro *</Label>
                <Input
                  id="neighborhood"
                  placeholder="Seu bairro"
                  value={customerData.neighborhood}
                  onChange={(e) => setCustomerData({ ...customerData, neighborhood: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="payment">Forma de Pagamento *</Label>
                <Select
                  value={customerData.paymentMethod}
                  onValueChange={(value) => setCustomerData({ ...customerData, paymentMethod: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {menuInfo.paymentMethods.map((method) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="observations">Observações Gerais</Label>
                <Textarea
                  id="observations"
                  placeholder="Alguma observação para o pedido?"
                  value={customerData.observations}
                  onChange={(e) => setCustomerData({ ...customerData, observations: e.target.value })}
                />
              </div>

              {/* Order Summary */}
              <div className="bg-secondary/50 rounded-lg p-4 mt-4">
                <h3 className="font-semibold mb-2">Resumo do Pedido</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="border-t border-border mt-2 pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-accent">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4 bg-card">
          {step === "cart" ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-accent">{formatPrice(totalPrice)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                disabled={items.length === 0}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
              >
                Continuar para Finalizar
              </Button>
            </>
          ) : (
            <div className="space-y-2">
              <Button
                variant="outline"
                onClick={() => setStep("cart")}
                className="w-full"
              >
                Voltar ao Carrinho
              </Button>
              <Button
                onClick={handleSendOrder}
                disabled={!customerData.name || !customerData.address || !customerData.neighborhood || !customerData.paymentMethod}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar Pedido no WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
