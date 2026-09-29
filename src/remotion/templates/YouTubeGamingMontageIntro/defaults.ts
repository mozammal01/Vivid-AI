import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeGamingMontageIntroProps extends VideoContentProps {
  gamerTag?: string;
  rankBadge?: string;
  killStreakCount?: string;
  gameTitle?: string;
}

export const youtubeGamingMontageIntroDefaultContent: YouTubeGamingMontageIntroProps = {
  brand: {
    name: 'VORTEX GAMING 🎮',
    primaryColor: '#EC4899',
    accentColor: '#8B5CF6',
  },
  product: {
    name: 'VALORANT RADIANT HIGHLIGHTS',
    description: 'Episode 5: The Ultimate Operator Clutch Compilation.',
  },
  cta: {
    text: 'SUBSCRIBE FOR DAILY CLUTCHES ⚡',
    subtext: 'Road to 1,000,000 Subscribers',
  },
  gamerTag: 'VORTEX_NEXUS #1337',
  rankBadge: 'GLOBAL RADIANT #1',
  killStreakCount: '52 KILLS • 0 DEATHS',
  gameTitle: 'VALORANT COMPETITIVE',
};
