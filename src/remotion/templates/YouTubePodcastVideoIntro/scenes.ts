import type { VideoScene } from '@/types';

export const youtubePodcastVideoIntroScenes: VideoScene[] = [
  {
    id: 'podcast-opener-header',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'podcast-speakers-cards',
    type: 'product',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'podcast-topic-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
