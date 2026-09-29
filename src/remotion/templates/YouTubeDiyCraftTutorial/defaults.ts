import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeDiyCraftTutorialProps extends VideoContentProps {
  craftTitle?: string;
  difficultyLevel?: string;
  materialsNeeded?: string[];
  stepCount?: string;
}

export const youtubeDiyCraftTutorialDefaultContent: YouTubeDiyCraftTutorialProps = {
  brand: {
    name: 'CRAFTY CREATIONS ✂️',
    primaryColor: '#EC4899',
    accentColor: '#10B981',
  },
  product: {
    name: 'DIY Origami Floating Flower Lanterns',
    description: 'Create magical floating paper lanterns in under 15 minutes using household supplies.',
  },
  cta: {
    text: 'SUBSCRIBE FOR WEEKLY DIY PROJECTS 🎨',
    subtext: 'Share your creations using #CraftyCreations',
  },
  craftTitle: 'ORIGAMI FLOWER LANTERNS',
  difficultyLevel: 'EASY • 15 MINS',
  materialsNeeded: [
    'Colored Craft Paper',
    'Pair of Scissors',
    'Double-Sided Tape',
    'LED Tea Light Candle',
  ],
  stepCount: '4 SIMPLE STEPS',
};
