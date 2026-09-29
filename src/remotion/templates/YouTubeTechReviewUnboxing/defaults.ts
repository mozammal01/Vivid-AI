import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeTechReviewUnboxingProps extends VideoContentProps {
  techCategory?: string;
  ratingScore?: string;
  pros?: string[];
  cons?: string[];
  verdictSummary?: string;
}

export const youtubeTechReviewUnboxingDefaultContent: YouTubeTechReviewUnboxingProps = {
  brand: {
    name: 'TECH UNBOXED ⚡',
    tagline: 'HONEST TECH REVIEWS & BENCHMARKS',
    primaryColor: '#00F0FF',
    accentColor: '#7000FF',
  },
  product: {
    name: 'CyberPhone Pro Ultra 2026',
    description: 'The world’s first smartphone powered by neural processing units and transparent OLED.',
    price: '$1,199',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop',
    features: [
      '6.8" 160Hz Transparent OLED Display',
      'Neural Core X1 — 50 TOPS AI Performance',
      'Dual 200MP Quad-Bayer Camera System',
      '6500mAh Solid-State Battery with 120W Fast Charge',
    ],
  },
  cta: {
    text: 'FULL REVIEW ON YOUTUBE 🍿',
    subtext: 'Link in description below',
  },
  techCategory: 'FLAGSHIP SMARTPHONE REVIEW',
  ratingScore: '9.4 / 10',
  pros: [
    'Unmatched performance benchmarks',
    'Stunning 160Hz OLED screen',
    '3-Day Solid State Battery Life',
  ],
  cons: ['Premium price tag', 'No 3.5mm headphone jack'],
  verdictSummary: 'THE UNDISPUTED KING OF FLAGSHIP PHONES IN 2026.',
};
