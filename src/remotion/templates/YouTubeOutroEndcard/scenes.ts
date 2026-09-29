import type { VideoScene } from '@/types';

export const youtubeOutroEndcardScenes: VideoScene[] = [
  {
    id: 'outro-thanks-header',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'outro-cards-grid',
    type: 'product',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'outro-subscribe-pulse',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
