import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeRealEstatePropertyTourProps extends VideoContentProps {
  propertyName?: string;
  propertyPriceTag?: string;
  propertySpecs?: string[];
  realtorContact?: string;
}

export const youtubeRealEstatePropertyTourDefaultContent: YouTubeRealEstatePropertyTourProps = {
  brand: {
    name: 'LUXURY HOMES MEDIA 🏡',
    primaryColor: '#D97706',
    accentColor: '#059669',
  },
  product: {
    name: 'The Beverly Hills Modern Glass Mansion',
    description: 'A 9,500 sq ft architectural masterpiece with panoramic city views and infinity pool.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
    price: '$12,950,000',
  },
  cta: {
    text: 'SCHEDULE PRIVATE PROPERTY SHOWING 📞',
    subtext: 'Contact Luxury Homes Media Representative',
  },
  propertyName: 'BEVERLY HILLS MODERN GLASS MANSION',
  propertyPriceTag: '$12,950,000 LISTING',
  propertySpecs: [
    '6 Luxury Bedrooms & 8 Bathrooms',
    '9,500 Sq Ft Living Area',
    'Infinity Edge Pool & Helipad',
    '10-Car Underground Garage',
  ],
  realtorContact: 'Listed by Marcus Vance • +1 (800) 555-HOMES',
};
