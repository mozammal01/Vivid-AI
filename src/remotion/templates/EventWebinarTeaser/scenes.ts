import type { VideoScene } from '@/types';

export const eventWebinarTeaserScenes: VideoScene[] = [
  {
    id: 'event-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'event-speaker-keynote',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'event-agenda-topics',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'event-register-cta',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
