import type { VideoScene } from '@/types';

export const youtubeFitnessWorkoutTimerScenes: VideoScene[] = [
  {
    id: 'workout-title-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'workout-active-timer',
    type: 'features',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'workout-rest-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
