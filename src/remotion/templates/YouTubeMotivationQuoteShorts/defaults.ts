import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeMotivationQuoteShortsProps extends VideoContentProps {
  quoteText?: string;
  quoteAuthor?: string;
  keyMindsetPoint?: string;
}

export const youtubeMotivationQuoteShortsDefaultContent: YouTubeMotivationQuoteShortsProps = {
  brand: {
    name: 'MINDSET MASTERY 👑',
    primaryColor: '#F59E0B',
    accentColor: '#D97706',
  },
  product: {
    name: 'Daily High-Impact Mindset Shorts',
  },
  cta: {
    text: 'SUBSCRIBE FOR DAILY MOTIVATION ⚡',
    subtext: 'Transform Your Mindset Every Day',
  },
  quoteText: 'The mind is everything. What you think, you become.',
  quoteAuthor: '— Buddha',
  keyMindsetPoint: '1. Master Your Thoughts • 2. Take Relentless Action • 3. Never Settle',
};
