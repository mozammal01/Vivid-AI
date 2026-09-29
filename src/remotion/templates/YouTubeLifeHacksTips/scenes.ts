import type { VideoScene } from '@/types';

export const youtubeLifeHacksTipsScenes: VideoScene[] = [
  {
    id: 'hack-problem-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 150,
  },
  {
    id: 'hack-solution-card',
    type: 'features',
    startFrame: 150,
    durationInFrames: 180,
  },
  {
    id: 'hack-subscribe-outro',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
