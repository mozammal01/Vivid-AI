export const fashionLookbookDefaultContent = {
  brand: {
    name: 'Maison Noir',
    tagline: 'Autumn / Winter Collection',
    logoUrl: '',
    primaryColor: '#D4AF37', // Champagne Gold
    accentColor: '#E5E0D8', // Silk White
  },
  product: {
    name: 'The Velvet Atelier Coat',
    description: 'Handcrafted Italian wool, oversized silhouette with silk lapels.',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    price: '$890',
    features: ['100% Cashmere & Wool', 'Tailored Oversized Cut', 'Limited Edition 2026'],
  },
  cta: {
    text: 'Explore Lookbook',
    subtext: 'Free Express Shipping Worldwide',
    url: 'https://maisonnoir.com',
  },
  headline: 'AUTUMN / WINTER 26',
  season: 'Fall/Winter',
  lookNumber: 'LOOK 01',
  designer: 'Maison Noir Atelier',
};

export type FashionLookbookDefaultContent = typeof fashionLookbookDefaultContent;
