export const realEstateShowcaseDefaultContent = {
  brand: {
    name: 'AURA ESTATES',
    tagline: 'Luxury Architectural Living',
    logoUrl: '',
    primaryColor: '#10B981', // Emerald
    accentColor: '#34D399',
  },
  product: {
    name: 'The Grand View Villa',
    description: 'Modern architectural masterpiece featuring panoramic city views, infinity pool, and smart automation.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    price: '$4,250,000',
    features: ['5 Bedrooms & 6 Baths', '6,400 Sq Ft Living Area', 'Infinity Edge Pool & Spa', 'Automated Smart Home'],
  },
  cta: {
    text: 'Schedule Private Tour',
    subtext: 'Virtual & In-Person Appointments Available',
    url: 'https://auraestates.com',
  },
  location: 'Beverly Hills, CA',
  agentName: 'Sarah Jenkins',
  agentPhone: '+1 (800) 555-REAL',
};

export type RealEstateShowcaseDefaultContent = typeof realEstateShowcaseDefaultContent;
