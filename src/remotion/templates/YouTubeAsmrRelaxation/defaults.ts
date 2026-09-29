import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeAsmrRelaxationProps extends VideoContentProps {
  soundTriggerName?: string;
  binauralTag?: string;
  ambientCategory?: string;
}

export const youtubeAsmrRelaxationDefaultContent: YouTubeAsmrRelaxationProps = {
  brand: {
    name: 'SLEEP & RELAXATION ASMR 🌙',
    primaryColor: '#818CF8',
    accentColor: '#C084FC',
  },
  product: {
    name: '3-Hour Rain & Gentle Tapping for Deep Sleep',
    description: 'Ultra-soothing 3D binaural audio triggers to help you relax, study, and fall asleep instantly.',
  },
  cta: {
    text: 'SUBSCRIBE FOR NIGHTLY SLEEP SOUNDS 🎧',
    subtext: 'Put on your headphones for 3D Spatial Audio',
  },
  soundTriggerName: 'HEAVY RAIN & SOFT GLASS TAPPING',
  binauralTag: '3D BINAURAL SPATIAL AUDIO',
  ambientCategory: 'DEEP SLEEP & ANXIETY RELIEF',
};
