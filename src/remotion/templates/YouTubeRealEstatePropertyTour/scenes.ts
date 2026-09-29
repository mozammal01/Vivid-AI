import type { VideoScene } from '@/types';

export const youtubeRealEstatePropertyTourScenes: VideoScene[] = [
  {
    id: 'estate-intro-reveal',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'estate-specs-grid',
    type: 'features',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'estate-realtor-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
