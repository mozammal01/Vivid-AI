import type { VideoScene } from '@/types';

export const youtubeVlogIntroScenes: VideoScene[] = [
  {
    id: 'vlog-opener',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'vlog-photo-gallery',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'vlog-chapter-highlights',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'vlog-channel-outro',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
