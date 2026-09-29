import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeTopTrendingNewsProps extends VideoContentProps {
  trendingTopic?: string;
  viralCountText?: string;
  socialPostSnippet?: string;
}

export const youtubeTopTrendingNewsDefaultContent: YouTubeTopTrendingNewsProps = {
  brand: {
    name: 'TRENDING DAILY ⚡',
    primaryColor: '#EC4899',
    accentColor: '#3B82F6',
  },
  product: {
    name: 'INTERNET BREAKING VIRAL DRAMA REVEALED',
    description: 'Creators react as mysterious countdown site goes live with millions watching.',
  },
  cta: {
    text: 'SUBSCRIBE & TURN ON NOTIFICATIONS 🔔',
    subtext: 'Get breaking creator updates first',
  },
  trendingTopic: '#1 TRENDING WORLDWIDE',
  viralCountText: '14.2 MILLION VIEWS IN 2 HOURS',
  socialPostSnippet: '"I cannot believe this actually happened live on stream today..." — @ViralCreator',
};
