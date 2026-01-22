import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-mestre-das-pizzas.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/cardapio", label: "Demo do cardápio" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/#planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Mestre das Pizzas"
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm">
              Plataforma completa para pizzarias venderem mais com cardápio online, pedidos diretos
              e dados inteligentes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Por que usar</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Implantação rápida em até 48h</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Suporte humano via WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Domínio e identidade visual personalizados</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Comercial</h3>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/5564993182960"
                  className="hover:text-accent transition-colors"
                >
                  (64) 99318-2960
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Atendimento remoto em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Mestre das Pizzas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
