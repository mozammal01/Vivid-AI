import type { VideoScene } from '@/types';

export const fashionLookbookScenes: VideoScene[] = [
  {
    id: 'fashion-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'fashion-showcase',
    type: 'product',
    startFrame: 90,
    durationInFrames: 90,
  },
  {
    id: 'fashion-details',
    type: 'features',
    startFrame: 180,
    durationInFrames: 90,
  },
  {
    id: 'fashion-pricing',
    type: 'headline',
    startFrame: 270,
    durationInFrames: 90,
  },
  {
    id: 'fashion-cta',
    type: 'cta',
    startFrame: 360,
    durationInFrames: 90,
  },
];
