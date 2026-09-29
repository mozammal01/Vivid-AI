import type { VideoScene } from '@/types';

export const youtubeTopTrendingNewsScenes: VideoScene[] = [
  {
    id: 'trending-intro-badge',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'trending-post-snippet',
    type: 'features',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'trending-subscribe-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
