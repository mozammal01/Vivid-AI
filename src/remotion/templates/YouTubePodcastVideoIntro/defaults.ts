import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubePodcastVideoIntroProps extends VideoContentProps {
  podcastTitle?: string;
  episodeNumber?: string;
  hostName?: string;
  guestName?: string;
  topicTagline?: string;
}

export const youtubePodcastVideoIntroDefaultContent: YouTubePodcastVideoIntroProps = {
  brand: {
    name: 'THE DEEP DIVE PODCAST 🎙️',
    primaryColor: '#3B82F6',
    accentColor: '#10B981',
  },
  product: {
    name: 'The Future of Artificial General Intelligence',
    description: 'How autonomous agents and neural networks will reshape humanity over the next decade.',
  },
  cta: {
    text: 'LISTEN & SUBSCRIBE ON YOUTUBE 🍿',
    subtext: 'New Episodes Every Monday 8AM EST',
  },
  podcastTitle: 'THE DEEP DIVE SHOW',
  episodeNumber: 'EPISODE #104',
  hostName: 'Host: Marcus Vance',
  guestName: 'Guest: Dr. Sarah Chen (AI Scientist)',
  topicTagline: 'THE AGI REVOLUTION IS HERE',
};
