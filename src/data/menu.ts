// Cardápio Mestre das Pizzas - Extraído das imagens do cardápio oficial

import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizzaMussarela from "@/assets/pizza-mussarela.jpg";
import pizzaFrango from "@/assets/pizza-frango.jpg";
import pizzaPortuguesa from "@/assets/pizza-portuguesa.jpg";
import pizzaQuatroQueijos from "@/assets/pizza-quatro-queijos.jpg";
import pizzaBacon from "@/assets/pizza-bacon.jpg";
import pizzaBananaChocolate from "@/assets/pizza-banana-chocolate.jpg";
import pizzaChocolateMorango from "@/assets/pizza-chocolate-morango.jpg";
import comboFamilia from "@/assets/combo-familia.jpg";

export type MenuCategory = "tradicional" | "doce" | "bebida" | "combo";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isPromo?: boolean;
  promoPrice?: number;
}

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
  image?: string;
}

// Pizzas Tradicionais - R$ 46,99
export const pizzasTraidicionais: MenuItem[] = [
  {
    id: "calabresa",
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa fatiada e cebola",
    price: 46.99,
    category: "tradicional",
    image: pizzaCalabresa,
  },
  {
    id: "mussarela",
    name: "Mussarela",
    description: "Molho de tomate, mussarela e orégano",
    price: 46.99,
    category: "tradicional",
    image: pizzaMussarela,
  },
  {
    id: "frango-cheddar",
    name: "Frango c/ Cheddar",
    description: "Molho de tomate, mussarela, frango desfiado e cheddar cremoso",
    price: 46.99,
    category: "tradicional",
    image: pizzaFrango,
  },
  {
    id: "frango-catupiry",
    name: "Frango c/ Catupiry",
    description: "Molho de tomate, mussarela, frango desfiado e catupiry",
    price: 46.99,
    category: "tradicional",
    image: pizzaFrango,
  },
  {
    id: "frango-bacon",
    name: "Frango c/ Bacon",
    description: "Molho de tomate, mussarela, frango desfiado e bacon crocante",
    price: 46.99,
    category: "tradicional",
    image: pizzaFrango,
  },
  {
    id: "portuguesa",
    name: "Portuguesa",
    description: "Molho de tomate, mussarela, presunto, ovo, cebola, azeitona e ervilha",
    price: 46.99,
    category: "tradicional",
    image: pizzaPortuguesa,
  },
  {
    id: "quatro-queijos",
    name: "Quatro Queijos",
    description: "Molho de tomate, mussarela, provolone, parmesão e catupiry",
    price: 46.99,
    category: "tradicional",
    image: pizzaQuatroQueijos,
  },
  {
    id: "bacon",
    name: "Bacon",
    description: "Molho de tomate, mussarela e bacon crocante",
    price: 46.99,
    category: "tradicional",
    image: pizzaBacon,
  },
  {
    id: "moda-da-casa",
    name: "Moda da Casa",
    description: "Molho de tomate, mussarela, calabresa, bacon, cebola e catupiry",
    price: 46.99,
    category: "tradicional",
    image: pizzaCalabresa,
  },
];

// Pizzas Doces - R$ 36,99
export const pizzasDoces: MenuItem[] = [
  {
    id: "banana-chocolate",
    name: "Banana c/ Chocolate",
    description: "Banana fatiada, chocolate ao leite e canela",
    price: 36.99,
    category: "doce",
    image: pizzaBananaChocolate,
  },
  {
    id: "chocolate-morango",
    name: "Chocolate c/ Morango",
    description: "Chocolate ao leite e morangos frescos",
    price: 36.99,
    category: "doce",
    image: pizzaChocolateMorango,
  },
];

// Bebidas
export const bebidas: MenuItem[] = [
  {
    id: "agua-500ml",
    name: "Água 500ml",
    description: "Água mineral sem gás",
    price: 3.0,
    category: "bebida",
  },
  {
    id: "agua-com-gas",
    name: "Água com Gás",
    description: "Água mineral com gás",
    price: 3.0,
    category: "bebida",
  },
  {
    id: "coca-cola-2l",
    name: "Coca-Cola 2LT",
    description: "Refrigerante Coca-Cola 2 litros",
    price: 12.0,
    category: "bebida",
  },
  {
    id: "guarana-2l",
    name: "Guaraná 2LT",
    description: "Refrigerante Guaraná Antarctica 2 litros",
    price: 12.0,
    category: "bebida",
  },
  {
    id: "mineiro",
    name: "Mineiro",
    description: "Refrigerante Mineiro 2 litros",
    price: 9.5,
    category: "bebida",
  },
  {
    id: "suco-laranja",
    name: "Suco Natural",
    description: "Suco de laranja natural 500ml",
    price: 10.0,
    category: "bebida",
  },
  {
    id: "coca-lata",
    name: "Coca-Cola Lata",
    description: "Refrigerante Coca-Cola lata 350ml",
    price: 5.0,
    category: "bebida",
  },
  {
    id: "guarana-lata",
    name: "Guaraná Lata",
    description: "Refrigerante Guaraná lata 350ml",
    price: 5.0,
    category: "bebida",
  },
];

// Combos e Promoções
export const combos: ComboItem[] = [
  {
    id: "combo-familia",
    name: "Combo Família",
    description: "2 Pizzas Grandes (tradicionais) + Refrigerante 2LT",
    price: 99.0,
    items: ["2 pizzas grandes tradicionais", "1 refrigerante 2LT"],
    image: comboFamilia,
  },
  {
    id: "combo-casal",
    name: "Combo Casal",
    description: "1 Pizza Salgada + 1 Pizza Doce + Refrigerante 2LT",
    price: 91.0,
    items: ["1 pizza salgada", "1 pizza doce", "1 refrigerante 2LT"],
    image: comboFamilia,
  },
];

// Promoção do Dia
export const promocaoDoDia: MenuItem = {
  id: "promo-dia",
  name: "Pizza do Dia",
  description: "Consulte o sabor do dia! Pizza grande por preço especial.",
  price: 42.0,
  category: "tradicional",
  isPromo: true,
  image: pizzaCalabresa,
};

// Todos os itens do cardápio
export const allMenuItems: MenuItem[] = [
  ...pizzasTraidicionais,
  ...pizzasDoces,
  ...bebidas,
];

// Informações adicionais do cardápio
export const menuInfo = {
  deliveryTime: "50 minutos",
  freeAdditions: ["Tomate", "Cebola", "Milho"],
  deliveryNote: "Taxa de entrega conforme região",
  paymentMethods: ["Pix", "Cartão de Crédito", "Cartão de Débito", "Dinheiro"],
};

// Categorias para filtro
export const categories = [
  { id: "all", label: "Todos" },
  { id: "tradicional", label: "Tradicionais" },
  { id: "doce", label: "Doces" },
  { id: "bebida", label: "Bebidas" },
];
