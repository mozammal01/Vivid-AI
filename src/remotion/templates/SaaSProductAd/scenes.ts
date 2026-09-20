import type { VideoScene } from '@/types';

export const saasProductAdScenes: VideoScene[] = [
  {
    id: 'saas-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'saas-ui-showcase',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'saas-feature-matrix',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'saas-trial-cta',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
