import type { VideoScene } from '@/types';

export const techTutorialExplainerScenes: VideoScene[] = [
  {
    id: 'tutorial-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'tutorial-code-snippet',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'tutorial-steps-specs',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'tutorial-cta-github',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
