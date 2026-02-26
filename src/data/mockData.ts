import {
  ChefHat,
  ShoppingCart,
  Sparkles,
  Car,
  PartyPopper,
  Baby,
  LucideIcon,
} from "lucide-react";

export interface ServiceProvider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  orangeScore: number;
  isSelect: boolean;
  bio: string;
}

export interface Service {
  id: string;
  category: string;
  categoryIcon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  priceUnit: string;
  image: string;
  provider: ServiceProvider;
  tags: string[];
  estimatedTime: string;
}

export interface Bundle {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  items: string[];
  featured: boolean;
  serviceIds: string[];
}

export interface Order {
  id: string;
  date: string;
  status: "confirmado" | "em_andamento" | "concluido" | "cancelado";
  services: { title: string; price: number }[];
  total: number;
  scheduledDate: string;
  house: string;
}

export interface SupplierOrder {
  id: string;
  clientName: string;
  service: string;
  scheduledDate: string;
  scheduledTime: string;
  status: "pendente" | "aceito" | "em_andamento" | "concluido";
  address: string;
  price: number;
  notes: string;
}

export const categories = [
  { id: "all", label: "Todos", icon: Sparkles },
  { id: "chef", label: "Chef", icon: ChefHat },
  { id: "grocery", label: "Compras", icon: ShoppingCart },
  { id: "limpeza", label: "Limpeza", icon: Sparkles },
  { id: "transporte", label: "Transporte", icon: Car },
  { id: "decoracao", label: "Decoração", icon: PartyPopper },
  { id: "familia", label: "Família", icon: Baby },
];

const providers: ServiceProvider[] = [
  { id: "p1", name: "Chef Ricardo", avatar: "CR", rating: 4.9, reviewCount: 127, orangeScore: 95, isSelect: true, bio: "Chef brasileiro especializado em culinária contemporânea e comfort food." },
  { id: "p2", name: "Clean Pro Orlando", avatar: "CP", rating: 4.8, reviewCount: 243, orangeScore: 92, isSelect: true, bio: "Empresa de limpeza premium com mais de 5 anos de experiência em casas de temporada." },
  { id: "p3", name: "Orlando Groceries", avatar: "OG", rating: 4.7, reviewCount: 189, orangeScore: 88, isSelect: false, bio: "Delivery de compras personalizado para famílias brasileiras em Orlando." },
  { id: "p4", name: "Magic Transfer", avatar: "MT", rating: 4.9, reviewCount: 312, orangeScore: 96, isSelect: true, bio: "Transporte executivo e familiar para aeroporto e parques de Orlando." },
  { id: "p5", name: "Party Magic Orlando", avatar: "PM", rating: 4.8, reviewCount: 98, orangeScore: 90, isSelect: true, bio: "Decoração temática e organização de festas em casas de temporada." },
  { id: "p6", name: "Baby Gear Orlando", avatar: "BG", rating: 4.6, reviewCount: 67, orangeScore: 85, isSelect: false, bio: "Aluguel de equipamentos para bebês e crianças com entrega na casa." },
];

export const services: Service[] = [
  {
    id: "s1", category: "chef", categoryIcon: ChefHat,
    title: "Jantar Brasileiro", description: "Refeição completa para 6 pessoas com entrada, prato principal e sobremesa.",
    longDescription: "Nosso chef prepara um jantar completo na sua casa com ingredientes frescos. Menu inclui entrada, prato principal e sobremesa. Opções de feijoada, churrasco, moqueca e mais. Tudo preparado e servido na sua cozinha.",
    price: 189, priceUnit: "por refeição", image: "🍽️", provider: providers[0], tags: ["Popular", "Brasileiro"], estimatedTime: "3-4 horas",
  },
  {
    id: "s2", category: "chef", categoryIcon: ChefHat,
    title: "Café da Manhã Especial", description: "Café da manhã premium para até 8 pessoas com pães frescos, frutas e sucos.",
    longDescription: "Acorde com um café da manhã preparado na sua casa. Pães artesanais, frutas frescas, sucos naturais, ovos preparados sob encomenda e opções especiais para crianças.",
    price: 89, priceUnit: "por refeição", image: "☕", provider: providers[0], tags: ["Matinal"], estimatedTime: "1-2 horas",
  },
  {
    id: "s3", category: "grocery", categoryIcon: ShoppingCart,
    title: "Grocery Essencial", description: "Compras básicas: leite, pão, frutas, snacks, água e itens de higiene.",
    longDescription: "Lista básica de compras para os primeiros dias. Inclui leite, pão, frutas, cereais, snacks, água, suco, papel higiênico, sabonete e itens essenciais. Personalizada conforme preferências alimentares.",
    price: 49, priceUnit: "por entrega", image: "🛒", provider: providers[2], tags: ["Essencial"], estimatedTime: "2-3 horas",
  },
  {
    id: "s4", category: "grocery", categoryIcon: ShoppingCart,
    title: "Grocery Completo", description: "Compras completas para a semana toda com preferências personalizadas.",
    longDescription: "Abastecimento completo da casa para toda a estadia. Inclui alimentos frescos, congelados, lanches, bebidas, produtos de limpeza e higiene. Lista totalmente personalizada por WhatsApp.",
    price: 129, priceUnit: "por entrega", image: "🥑", provider: providers[2], tags: ["Completo", "Popular"], estimatedTime: "3-4 horas",
  },
  {
    id: "s5", category: "limpeza", categoryIcon: Sparkles,
    title: "Limpeza Pré Check-in", description: "Limpeza profunda completa antes da chegada da sua família.",
    longDescription: "Limpeza profissional completa da casa antes da sua chegada. Inclui todos os cômodos, banheiros, cozinha, troca de roupas de cama e toalhas. Padrão hoteleiro 5 estrelas.",
    price: 149, priceUnit: "por limpeza", image: "✨", provider: providers[1], tags: ["Premium", "Popular"], estimatedTime: "4-5 horas",
  },
  {
    id: "s6", category: "limpeza", categoryIcon: Sparkles,
    title: "Limpeza Mid-Stay", description: "Limpeza durante a estadia para manter a casa impecável.",
    longDescription: "Limpeza durante a estadia para manter o conforto. Inclui organização geral, limpeza de banheiros e cozinha, troca de toalhas e reposição de amenities.",
    price: 99, priceUnit: "por limpeza", image: "🧹", provider: providers[1], tags: ["Mid-Stay"], estimatedTime: "2-3 horas",
  },
  {
    id: "s7", category: "transporte", categoryIcon: Car,
    title: "Transfer Aeroporto", description: "Transporte confortável do aeroporto até sua casa de temporada.",
    longDescription: "Motorista aguardando no desembarque com placa personalizada. Veículo SUV ou van para até 7 passageiros com cadeirinhas infantis. WiFi e água gelada inclusos.",
    price: 79, priceUnit: "por viagem", image: "✈️", provider: providers[3], tags: ["Popular", "Aeroporto"], estimatedTime: "1 hora",
  },
  {
    id: "s8", category: "transporte", categoryIcon: Car,
    title: "Transfer Parques", description: "Transporte ida e volta para os parques de Orlando.",
    longDescription: "Transporte dedicado para os parques temáticos. Horários flexíveis, veículos confortáveis e motoristas que conhecem as melhores rotas. Cadeirinhas inclusas.",
    price: 59, priceUnit: "por viagem", image: "🎢", provider: providers[3], tags: ["Parques"], estimatedTime: "30-45 min",
  },
  {
    id: "s9", category: "decoracao", categoryIcon: PartyPopper,
    title: "Decoração de Aniversário", description: "Decoração completa temática para aniversário com balões, faixa e mesa.",
    longDescription: "Transformamos a sala da sua casa em uma festa incrível. Inclui balões, faixa personalizada, mesa decorada, centro de mesa e opções temáticas (princesas, super-heróis, etc).",
    price: 199, priceUnit: "por decoração", image: "🎂", provider: providers[4], tags: ["Aniversário", "Popular"], estimatedTime: "2-3 horas",
  },
  {
    id: "s10", category: "decoracao", categoryIcon: PartyPopper,
    title: "Surpresa Romântica", description: "Decoração romântica com pétalas, velas e champagne.",
    longDescription: "Cenário romântico preparado na sua casa com pétalas de rosa, velas, champagne e chocolates. Perfeito para aniversários de casamento ou pedidos especiais.",
    price: 249, priceUnit: "por decoração", image: "💝", provider: providers[4], tags: ["Romântico"], estimatedTime: "1-2 horas",
  },
  {
    id: "s11", category: "familia", categoryIcon: Baby,
    title: "Kit Bebê Completo", description: "Berço, carrinho, cadeirinha e banheira entregues na sua casa.",
    longDescription: "Tudo que você precisa para o bebê sem precisar trazer na mala. Berço portátil, carrinho de passeio, cadeirinha para carro, banheira, monitor e kit de alimentação.",
    price: 39, priceUnit: "por dia", image: "👶", provider: providers[5], tags: ["Bebê", "Popular"], estimatedTime: "Entrega no check-in",
  },
  {
    id: "s12", category: "familia", categoryIcon: Baby,
    title: "Aluguel de Carrinho de Parque", description: "Carrinho duplo confortável para os parques de Orlando.",
    longDescription: "Carrinho duplo City Mini GT, muito mais confortável que os dos parques. Com capota, porta-copos, cesto de armazenamento. Entregue na casa ou no parque.",
    price: 29, priceUnit: "por dia", image: "🚼", provider: providers[5], tags: ["Parques", "Crianças"], estimatedTime: "Entrega no check-in",
  },
];

export const bundles: Bundle[] = [
  {
    id: "b1", name: "Welcome Pack Basic", price: 149, originalPrice: 166, discount: "10%",
    items: ["Grocery essencial", "Limpeza pré check-in"], featured: false, serviceIds: ["s3", "s5"],
  },
  {
    id: "b2", name: "Welcome Pack Premium", price: 349, originalPrice: 411, discount: "15%",
    items: ["Grocery completo", "Limpeza premium", "Decoração boas-vindas", "Kit amenities"], featured: true, serviceIds: ["s4", "s5"],
  },
  {
    id: "b3", name: "Family Fun Bundle", price: 299, originalPrice: 340, discount: "12%",
    items: ["Transfer aeroporto", "2 transfers parques", "Grocery completo"], featured: false, serviceIds: ["s7", "s8", "s4"],
  },
  {
    id: "b4", name: "Birthday Magic", price: 499, originalPrice: 624, discount: "20%",
    items: ["Decoração festa completa", "Bolo personalizado", "Chef para jantar"], featured: false, serviceIds: ["s9", "s1"],
  },
];

export const mockOrders: Order[] = [
  {
    id: "ORD-001", date: "2026-02-20", status: "concluido",
    services: [{ title: "Grocery Completo", price: 129 }, { title: "Limpeza Pré Check-in", price: 149 }],
    total: 278, scheduledDate: "2026-02-22", house: "Villa Sunset, Kissimmee",
  },
  {
    id: "ORD-002", date: "2026-02-24", status: "em_andamento",
    services: [{ title: "Transfer Aeroporto", price: 79 }, { title: "Kit Bebê Completo", price: 39 }],
    total: 118, scheduledDate: "2026-02-26", house: "Champions Gate Resort",
  },
  {
    id: "ORD-003", date: "2026-02-25", status: "confirmado",
    services: [{ title: "Jantar Brasileiro", price: 189 }, { title: "Decoração de Aniversário", price: 199 }],
    total: 388, scheduledDate: "2026-02-28", house: "Villa Sunset, Kissimmee",
  },
];

export const mockSupplierOrders: SupplierOrder[] = [
  { id: "SO-001", clientName: "Maria Silva", service: "Jantar Brasileiro", scheduledDate: "2026-02-26", scheduledTime: "19:00", status: "aceito", address: "1234 Sunset Blvd, Kissimmee", price: 189, notes: "2 adultos, 3 crianças. Sem lactose para 1 criança." },
  { id: "SO-002", clientName: "João Santos", service: "Café da Manhã Especial", scheduledDate: "2026-02-27", scheduledTime: "08:00", status: "pendente", address: "5678 Champions Gate Dr", price: 89, notes: "6 adultos. Preferem frutas tropicais." },
  { id: "SO-003", clientName: "Ana Oliveira", service: "Jantar Brasileiro", scheduledDate: "2026-02-27", scheduledTime: "20:00", status: "pendente", address: "910 Magic Way, Orlando", price: 189, notes: "4 adultos, 2 crianças. Aniversário da mãe." },
  { id: "SO-004", clientName: "Pedro Costa", service: "Café da Manhã Especial", scheduledDate: "2026-02-25", scheduledTime: "09:00", status: "concluido", address: "321 Palm Dr, Kissimmee", price: 89, notes: "Família de 5." },
  { id: "SO-005", clientName: "Lucas Lima", service: "Jantar Brasileiro", scheduledDate: "2026-02-24", scheduledTime: "19:30", status: "concluido", address: "654 Lake View, Davenport", price: 189, notes: "Feijoada completa para 8 pessoas." },
];
