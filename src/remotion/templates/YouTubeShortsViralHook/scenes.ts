import type { VideoScene } from '@/types';

export const youtubeShortsViralHookScenes: VideoScene[] = [
  {
    id: 'viral-hook-title',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'viral-waveform-reveal',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'viral-takeaways',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'viral-cta-subscribe',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
