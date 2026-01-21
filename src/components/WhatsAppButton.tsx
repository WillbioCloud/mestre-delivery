import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5564993182960";

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido na Mestre das Pizzas 🍕");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-subtle"
      aria-label="Pedir pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}
