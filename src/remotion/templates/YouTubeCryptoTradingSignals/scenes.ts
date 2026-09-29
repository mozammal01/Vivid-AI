import type { VideoScene } from '@/types';

export const youtubeCryptoTradingSignalsScenes: VideoScene[] = [
  {
    id: 'crypto-signal-header',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 112,
  },
  {
    id: 'crypto-targets-card',
    type: 'features',
    startFrame: 112,
    durationInFrames: 226,
  },
  {
    id: 'crypto-channel-outro',
    type: 'cta',
    startFrame: 338,
    durationInFrames: 112,
  },
];
