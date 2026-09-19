import type { VideoScene } from '@/types';

export const podcastHighlightScenes: VideoScene[] = [
  {
    id: 'podcast-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'podcast-quote',
    type: 'product',
    startFrame: 90,
    durationInFrames: 90,
  },
  {
    id: 'podcast-waveform',
    type: 'features',
    startFrame: 180,
    durationInFrames: 90,
  },
  {
    id: 'podcast-takeaway',
    type: 'headline',
    startFrame: 270,
    durationInFrames: 90,
  },
  {
    id: 'podcast-cta',
    type: 'cta',
    startFrame: 360,
    durationInFrames: 90,
  },
];
