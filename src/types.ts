export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  imageAlt: string;
  orderMessageName?: string;
}

export interface Differential {
  title: string;
  description?: string;
  iconName: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  badge: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  aboutText: string;
  differentials: Differential[];
  address: {
    street: string;
    neighborhood: string;
    cityState: string;
    fullFormatted: string;
    googleMapsSearchUrl: string;
  };
  hoursNotice: string;
  studioDisclaimer: string;
  menu: MenuItem[];
}
