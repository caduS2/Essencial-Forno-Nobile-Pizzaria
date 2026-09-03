import { BusinessConfig } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Forno Nobile',
  tagline: 'Pizzaria Artesanal',
  headline: 'Sabor artesanal, pedido sem complicação.',
  subheadline:
    'Pizzas preparadas com ingredientes selecionados e aquele sabor que combina com qualquer momento.',
  badge: 'Pizzaria Artesanal',
  phone: '5511999990000',
  phoneFormatted: '(11) 99999-0000',
  whatsappNumber: '5511999990000',
  defaultWhatsAppMessage:
    'Olá! Vim pelo site da Forno Nobile e gostaria de fazer um pedido.',
  aboutText:
    'Na Forno Nobile, cada pizza nasce da combinação entre uma boa massa, ingredientes selecionados e preparo artesanal. Uma proposta simples: servir pizzas saborosas para compartilhar com família, amigos ou aproveitar em casa.',
  differentials: [
    {
      title: 'Preparo artesanal',
      description: 'Massa com fermentação cuidadosa e assada no calor ideal.',
      iconName: 'Flame',
    },
    {
      title: 'Ingredientes selecionados',
      description: 'Molhos equilibrados e queijos de qualidade para cada receita.',
      iconName: 'Sparkles',
    },
    {
      title: 'Pedido fácil pelo WhatsApp',
      description: 'Atendimento direto, sem aplicativo pesado e sem complicação.',
      iconName: 'MessageCircle',
    },
  ],
  address: {
    street: 'Rua das Oliveiras, 248',
    neighborhood: 'Centro',
    cityState: 'São Paulo - SP',
    fullFormatted: 'Rua das Oliveiras, 248 - Centro, São Paulo - SP',
    googleMapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Rua das Oliveiras, 248 - Centro, São Paulo - SP'),
  },
  hoursNotice: 'Horário de atendimento: consulte pelo WhatsApp.',
  studioDisclaimer:
    'Projeto demonstrativo desenvolvido pela CF Web Studio. Marca e informações utilizadas para fins de apresentação.',
  menu: [
    {
      id: 'margherita',
      name: 'MARGHERITA',
      orderMessageName: 'Margherita',
      description: 'Molho de tomate, muçarela, tomate, manjericão e azeite.',
      price: 'R$ 49,90',
      priceValue: 49.9,
      image:
        'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Pizza Margherita artesanal com tomate e manjericão fresco',
    },
    {
      id: 'pepperoni',
      name: 'PEPPERONI',
      orderMessageName: 'Pepperoni',
      description: 'Molho de tomate, muçarela e pepperoni.',
      price: 'R$ 54,90',
      priceValue: 54.9,
      image:
        'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Pizza Pepperoni artesanal com fatias crocantes e queijo derretido',
    },
    {
      id: 'quatro-queijos',
      name: 'QUATRO QUEIJOS',
      orderMessageName: 'Quatro Queijos',
      description: 'Muçarela, parmesão, provolone e gorgonzola.',
      price: 'R$ 56,90',
      priceValue: 56.9,
      image:
        'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Pizza Quatro Queijos com combinação de queijos nobres gratinados',
    },
    {
      id: 'calabresa',
      name: 'CALABRESA',
      orderMessageName: 'Calabresa',
      description: 'Molho de tomate, muçarela, calabresa e cebola.',
      price: 'R$ 49,90',
      priceValue: 49.9,
      image:
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Pizza Calabresa artesanal com anéis de cebola e queijo derretido',
    },
  ],
};

export function getWhatsAppOrderUrl(pizzaName?: string): string {
  const text = pizzaName
    ? `Olá! Vim pelo site da Forno Nobile e gostaria de pedir uma ${pizzaName}.`
    : BUSINESS_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppCustomMessageUrl(name: string, message: string): string {
  const parts: string[] = [];
  if (name.trim()) {
    parts.push(`Olá, sou ${name.trim()}.`);
  } else {
    parts.push('Olá!');
  }
  if (message.trim()) {
    parts.push(message.trim());
  } else {
    parts.push('Vim pelo site da Forno Nobile e gostaria de informações.');
  }
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(parts.join(' '))}`;
}
