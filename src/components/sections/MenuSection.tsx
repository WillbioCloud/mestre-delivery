import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, UtensilsCrossed, Cake, GlassWater } from "lucide-react";
import { allMenuItems, categories, MenuCategory } from "@/data/menu";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const categoryIcons: Record<MenuCategory, React.ReactNode> = {
  tradicional: <UtensilsCrossed className="h-4 w-4" />,
  doce: <Cake className="h-4 w-4" />,
  bebida: <GlassWater className="h-4 w-4" />,
  combo: <UtensilsCrossed className="h-4 w-4" />,
};

interface MenuSectionProps {
  showSearch?: boolean;
  fullPage?: boolean;
}

export function MenuSection({ showSearch = true, fullPage = false }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, setIsCartOpen } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const filteredItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddItem = (item: typeof allMenuItems[0]) => {
    addItem(item);
    toast({
      title: "Adicionado ao pedido!",
      description: `${item.name} foi adicionado.`,
    });
  };

  // Group items by category for display
  const groupedItems = useMemo(() => {
    if (activeCategory !== "all") {
      return { [activeCategory]: filteredItems };
    }
    
    const groups: Record<string, typeof filteredItems> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems, activeCategory]);

  const categoryLabels: Record<string, string> = {
    tradicional: "Pizzas Tradicionais",
    doce: "Pizzas Doces",
    bebida: "Bebidas",
  };

  return (
    <section id="cardapio" className={`py-16 md:py-24 ${fullPage ? "" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        {!fullPage && (
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground mb-4">
              <UtensilsCrossed className="h-4 w-4 mr-1" />
              Nosso Cardápio
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Escolha sua Pizza Favorita
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pizzas artesanais feitas com ingredientes frescos e muito amor. 
              Adicionais grátis: tomate, cebola e milho! 🍅🧅🌽
            </p>
          </div>
        )}

        {/* Search & Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          {showSearch && (
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar no cardápio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          )}

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`gap-2 ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : ""
                }`}
              >
                {category.id !== "all" && categoryIcons[category.id as MenuCategory]}
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-12">
            {activeCategory === "all" && (
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                {categoryIcons[category as MenuCategory]}
                {categoryLabels[category]}
                <Badge variant="secondary" className="text-sm font-normal">
                  {category === "tradicional" ? "R$ 46,99" : category === "doce" ? "R$ 36,99" : ""}
                </Badge>
              </h3>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {item.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className={`p-4 ${!item.image ? "pt-6" : ""}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-display text-lg font-semibold">{item.name}</h4>
                      <Badge className="bg-accent text-accent-foreground font-bold shrink-0">
                        {formatPrice(item.price)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <Button
                      onClick={() => handleAddItem(item)}
                      variant="outline"
                      className="w-full gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Adicionar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">Nenhum item encontrado para "{searchQuery}"</p>
          </div>
        )}

        {/* View Full Menu Link */}
        {!fullPage && (
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold"
            >
              <a href="/cardapio">Ver Cardápio Completo</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
