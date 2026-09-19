import type { VideoScene } from '@/types';

export const techProductLaunchScenes: VideoScene[] = [
  {
    id: 'tech-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'tech-terminal',
    type: 'product',
    startFrame: 90,
    durationInFrames: 90,
  },
  {
    id: 'tech-specs',
    type: 'features',
    startFrame: 180,
    durationInFrames: 90,
  },
  {
    id: 'tech-pricing',
    type: 'headline',
    startFrame: 270,
    durationInFrames: 90,
  },
  {
    id: 'tech-cta',
    type: 'cta',
    startFrame: 360,
    durationInFrames: 90,
  },
];
