export const ecommerceFlashSaleDefaultContent = {
  brand: {
    name: 'LUXE APPAREL',
    tagline: 'EXCLUSIVE END-OF-SEASON SALE',
    logoUrl: '',
    primaryColor: '#EF4444', // Red Energy
    accentColor: '#F59E0B', // Amber Gold
  },
  product: {
    name: 'ULTRA-LIGHT HYBRID RUNNING SNEAKERS',
    description: 'Engineered for maximum speed and shock absorption. Limited stock available.',
    originalPrice: '$189.99',
    price: '$89.99',
    discount: '50% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    features: [
      '⚡ 50% OFF Limited Time',
      '🚚 Free Next-Day Shipping',
      '🔄 30-Day Money Back Guarantee',
    ],
  },
  cta: {
    text: 'SHOP SALE NOW 🛍️',
    subtext: 'Offer expires in 24 hours or while supplies last',
    url: 'https://luxeapparel.shop',
  },
  headline: 'FLASH SALE • UP TO 50% OFF 🔥',
};

export type EcommerceFlashSaleDefaultContent = typeof ecommerceFlashSaleDefaultContent;
