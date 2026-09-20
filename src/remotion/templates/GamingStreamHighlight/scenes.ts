import type { VideoScene } from '@/types';

export const gamingStreamHighlightScenes: VideoScene[] = [
  {
    id: 'gaming-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'gaming-clip-reveal',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'gaming-stats-hud',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'gaming-cta',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
