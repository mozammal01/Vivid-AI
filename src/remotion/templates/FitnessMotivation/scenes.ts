import type { VideoScene } from '@/types';

export const fitnessMotivationScenes: VideoScene[] = [
  {
    id: 'fitness-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'fitness-showcase',
    type: 'product',
    startFrame: 90,
    durationInFrames: 90,
  },
  {
    id: 'fitness-features',
    type: 'features',
    startFrame: 180,
    durationInFrames: 90,
  },
  {
    id: 'fitness-stat',
    type: 'headline',
    startFrame: 270,
    durationInFrames: 90,
  },
  {
    id: 'fitness-cta',
    type: 'cta',
    startFrame: 360,
    durationInFrames: 90,
  },
];
