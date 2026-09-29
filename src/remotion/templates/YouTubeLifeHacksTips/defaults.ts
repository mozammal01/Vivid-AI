import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeLifeHacksTipsProps extends VideoContentProps {
  hackTitle?: string;
  problemStatement?: string;
  solutionHack?: string;
  hackDifficulty?: string;
}

export const youtubeLifeHacksTipsDefaultContent: YouTubeLifeHacksTipsProps = {
  brand: {
    name: 'SMART HACKS 💡',
    primaryColor: '#06B6D4',
    accentColor: '#F59E0B',
  },
  product: {
    name: '3-Second Cable Management Hack',
  },
  cta: {
    text: 'SUBSCRIBE FOR DAILY GENIUS HACKS 🚀',
    subtext: 'Save 100+ hours every month with these tricks!',
  },
  hackTitle: 'THE BREAD CLIP CABLE HACK',
  problemStatement: 'Tired of messy cables tangling behind your desk?',
  solutionHack: 'Use plastic bread tags to label and organize all power cables instantly!',
  hackDifficulty: 'DIFFICULTY: SUPER EASY • COST: $0',
};
