import type { VideoScene } from '@/types';

export const youtubeAnimeMangaTopListScenes: VideoScene[] = [
  {
    id: 'anime-intro-title',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'anime-character-card',
    type: 'product',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'anime-subscribe-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
