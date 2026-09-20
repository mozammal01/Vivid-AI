import type { VideoScene } from '@/types';

export const creativePortfolioShowcaseScenes: VideoScene[] = [
  {
    id: 'portfolio-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'portfolio-work-reveal',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'portfolio-skills-specs',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'portfolio-hire-cta',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
