import type { VideoScene } from '@/types';

export const realEstateShowcaseScenes: VideoScene[] = [
  {
    id: 'estate-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'estate-showcase',
    type: 'product',
    startFrame: 90,
    durationInFrames: 90,
  },
  {
    id: 'estate-features',
    type: 'features',
    startFrame: 180,
    durationInFrames: 90,
  },
  {
    id: 'estate-pricing',
    type: 'headline',
    startFrame: 270,
    durationInFrames: 90,
  },
  {
    id: 'estate-cta',
    type: 'cta',
    startFrame: 360,
    durationInFrames: 90,
  },
];
