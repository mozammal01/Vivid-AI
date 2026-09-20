import type { VideoScene } from '@/types';

export const financeCryptoExplainerScenes: VideoScene[] = [
  {
    id: 'finance-headline-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'finance-chart-growth',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'finance-stats-grid',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'finance-disclaimer-cta',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
