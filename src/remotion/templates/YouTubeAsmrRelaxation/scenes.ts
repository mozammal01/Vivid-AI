import type { VideoScene } from '@/types';

export const youtubeAsmrRelaxationScenes: VideoScene[] = [
  {
    id: 'asmr-night-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'asmr-trigger-wave',
    type: 'product',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'asmr-sleep-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
