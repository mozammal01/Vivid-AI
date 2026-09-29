import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeAnimeMangaTopListProps extends VideoContentProps {
  animeTitle?: string;
  characterName?: string;
  powerLevelScore?: string;
  studioName?: string;
}

export const youtubeAnimeMangaTopListDefaultContent: YouTubeAnimeMangaTopListProps = {
  brand: {
    name: 'ANIME CENTRAL ⚔️',
    primaryColor: '#F43F5E',
    accentColor: '#A855F7',
  },
  product: {
    name: 'TOP 10 MOST POWERFUL ANIME CHARACTERS 2026',
    description: 'Ranking the absolute strongest anime protagonists and antagonists based on lore feats.',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop',
  },
  cta: {
    text: 'SUBSCRIBE FOR DAILY ANIME RANKINGS 🍿',
    subtext: 'Who is your #1 pick? Comment below!',
  },
  animeTitle: 'SOLO LEVELING • SEASON 2',
  characterName: 'Sung Jin-woo (Shadow Monarch)',
  powerLevelScore: 'POWER LEVEL: 99,999 S-RANK',
  studioName: 'A-1 PICTURES ANIMATION',
};
