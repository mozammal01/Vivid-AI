import type { VideoScene } from '@/types';

export const youtubeCinematicTravelOpenerScenes: VideoScene[] = [
  {
    id: 'travel-letterbox-title',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'travel-gps-parallax',
    type: 'product',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'travel-film-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
