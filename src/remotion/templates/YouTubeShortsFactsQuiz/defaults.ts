import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeShortsFactsQuizProps extends VideoContentProps {
  questionText?: string;
  options?: string[];
  correctOptionIndex?: number;
  explanationText?: string;
}

export const youtubeShortsFactsQuizDefaultContent: YouTubeShortsFactsQuizProps = {
  brand: {
    name: 'DAILY TRIVIA SHORTS 🧠',
    primaryColor: '#8B5CF6',
    accentColor: '#F59E0B',
  },
  product: {
    name: 'Space & Astronomy Challenge',
  },
  cta: {
    text: 'SUBSCRIBE FOR DAILY QUIZZES 🔔',
    subtext: 'Did you get it right? Comment below!',
  },
  questionText: 'Which planet in our solar system spins backwards compared to all others?',
  options: ['A) Mars 🔴', 'B) Venus 🪐', 'C) Jupiter ⚡', 'D) Neptune 🌊'],
  correctOptionIndex: 1, // Venus
  explanationText: 'ANSWER: Venus spins clockwise (retrograde rotation) on its axis!',
};
