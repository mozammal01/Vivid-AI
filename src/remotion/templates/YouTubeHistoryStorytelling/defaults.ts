import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeHistoryStorytellingProps extends VideoContentProps {
  eraTimestamp?: string;
  historicalEventName?: string;
  historicalQuote?: string;
}

export const youtubeHistoryStorytellingDefaultContent: YouTubeHistoryStorytellingProps = {
  brand: {
    name: 'HISTORY UNCOVERED 🏛️',
    primaryColor: '#D97706',
    accentColor: '#B45309',
  },
  product: {
    name: 'THE LOST LIBRARY OF ALEXANDRIA',
    description: 'Investigating the tragic destruction of antiquity’s greatest repository of human knowledge.',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop',
  },
  cta: {
    text: 'WATCH THE FULL HISTORY DOCUMENTARY 🍿',
    subtext: 'New Historical Episodes Every Fortnight',
  },
  eraTimestamp: '48 BC • ALEXANDRIA, EGYPT',
  historicalEventName: 'THE BURNING OF THE GREAT LIBRARY',
  historicalQuote: '"He who controls the past controls the future. He who controls the present controls the past."',
};
