import type { VideoScene } from '@/types';

export const youtubeCarAutoReviewScenes: VideoScene[] = [
  {
    id: 'car-intro-reveal',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'car-telemetry-specs',
    type: 'features',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'car-testdrive-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
