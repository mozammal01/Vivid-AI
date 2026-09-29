import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeLofiMusicVisualizerProps extends VideoContentProps {
  trackTitle?: string;
  artistName?: string;
  albumArtUrl?: string;
  streamSchedule?: string;
}

export const youtubeLofiMusicVisualizerDefaultContent: YouTubeLofiMusicVisualizerProps = {
  brand: {
    name: 'CHILL BEATS RADIO ☕',
    primaryColor: '#F472B6',
    accentColor: '#818CF8',
  },
  product: {
    name: 'Midnight Study Sessions • Lofi Hip Hop Beats',
    description: 'Relaxing lofi beats to study, focus, and chill to 24/7.',
  },
  cta: {
    text: 'SUBSCRIBE & CHILL WITH US 🎧',
    subtext: 'Live 24/7 Music Streams Every Day',
  },
  trackTitle: 'Late Night Coffee & Raindrops 🌧️',
  artistName: 'Lofi Girl & Chillhop Music',
  albumArtUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop',
  streamSchedule: 'LIVE NOW • 24/7 STUDY BEATS',
};
