import type { VideoScene } from '@/types';

export const youtubeLofiMusicVisualizerScenes: VideoScene[] = [
  {
    id: 'lofi-intro-title',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'lofi-vinyl-visualizer',
    type: 'product',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'lofi-subscribe-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
