import type { VideoScene } from '@/types';

export const youtubeShortsFactsQuizScenes: VideoScene[] = [
  {
    id: 'quiz-question-reveal',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 150,
  },
  {
    id: 'quiz-countdown-choices',
    type: 'features',
    startFrame: 150,
    durationInFrames: 180,
  },
  {
    id: 'quiz-answer-pop-outro',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
