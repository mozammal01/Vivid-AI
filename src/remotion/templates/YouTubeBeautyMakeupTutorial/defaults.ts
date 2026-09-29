import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeBeautyMakeupTutorialProps extends VideoContentProps {
  lookName?: string;
  paletteColors?: string[];
  discountCodeTag?: string;
}

export const youtubeBeautyMakeupTutorialDefaultContent: YouTubeBeautyMakeupTutorialProps = {
  brand: {
    name: 'GLAM & GLOW 💄',
    primaryColor: '#EC4899',
    accentColor: '#F472B6',
  },
  product: {
    name: 'Sunset Glow Soft Glam Makeup Tutorial',
    description: 'Achieve a glowing glass-skin aesthetic with warm peach and rose gold accents.',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop',
  },
  cta: {
    text: 'SHOP PALETTE & USE DISCOUNT CODE 🛍️',
    subtext: 'Link in description below',
  },
  lookName: 'SUNSET GLOW SOFT GLAM',
  paletteColors: ['Peach Nude', 'Rose Gold Shimmer', 'Deep Berry Velvet'],
  discountCodeTag: 'USE CODE: GLAM20 FOR 20% OFF',
};
