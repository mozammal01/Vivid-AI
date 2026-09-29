import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeFitnessWorkoutTimerProps extends VideoContentProps {
  exerciseName?: string;
  timerDurationSeconds?: number;
  caloriesBurned?: string;
  nextExerciseName?: string;
}

export const youtubeFitnessWorkoutTimerDefaultContent: YouTubeFitnessWorkoutTimerProps = {
  brand: {
    name: 'SHRED 30 FITNESS 🔥',
    primaryColor: '#EF4444',
    accentColor: '#F59E0B',
  },
  product: {
    name: 'FULL BODY FAT BURN WORKOUT',
    description: 'No Equipment Needed • 30-Second Intense Intervals',
  },
  cta: {
    text: 'SUBSCRIBE FOR DAILY WORKOUTS 🏋️',
    subtext: 'Hit the bell icon for notifications!',
  },
  exerciseName: 'JUMPING JACKS & BURPEES',
  timerDurationSeconds: 30,
  caloriesBurned: 'EST. 350 KCAL BURN',
  nextExerciseName: 'NEXT: High Knee Sprints 🏃‍♂️',
};
