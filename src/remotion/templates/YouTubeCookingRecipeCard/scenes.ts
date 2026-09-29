import type { VideoScene } from '@/types';

export const youtubeCookingRecipeCardScenes: VideoScene[] = [
  {
    id: 'cooking-dish-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'cooking-ingredients-list',
    type: 'features',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'cooking-recipe-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
