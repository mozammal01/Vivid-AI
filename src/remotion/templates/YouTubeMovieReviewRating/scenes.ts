import type { VideoScene } from '@/types';

export const youtubeMovieReviewRatingScenes: VideoScene[] = [
  {
    id: 'movie-intro-title',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'movie-score-dial',
    type: 'features',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'movie-verdict-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
