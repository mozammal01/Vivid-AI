import type { VideoScene } from '@/types';

export const ecommerceFlashSaleScenes: VideoScene[] = [
  {
    id: 'flash-sale-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'flash-product-spotlight',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'flash-perks-highlights',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'flash-shop-cta',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
