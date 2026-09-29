import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeOutroEndcardProps extends VideoContentProps {
  thanksMessage?: string;
  nextVideoTitle?: string;
  recommendedVideoTitle?: string;
  subscribersCount?: string;
}

export const youtubeOutroEndcardDefaultContent: YouTubeOutroEndcardProps = {
  brand: {
    name: 'CREATOR HUB',
    tagline: 'NEW VIDEOS EVERY TUESDAY & THURSDAY',
    primaryColor: '#FF0000',
    accentColor: '#3B82F6',
  },
  product: {
    name: 'Top 10 AI Secrets Revealed',
    description: 'Check out our most watched video of the month!',
  },
  cta: {
    text: 'SUBSCRIBE FOR MORE 🔔',
    subtext: 'Join 500,000+ Amazing Creators',
  },
  thanksMessage: 'THANKS FOR WATCHING!',
  nextVideoTitle: 'NEXT EPISODE: Master AI Tools in 10 Mins',
  recommendedVideoTitle: 'RECOMMENDED: Ultimate YouTube Growth Guide',
  subscribersCount: '524,000 SUBSCRIBERS',
};
