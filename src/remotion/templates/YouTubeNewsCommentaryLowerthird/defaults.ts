import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeNewsCommentaryLowerthirdProps extends VideoContentProps {
  commentatorName?: string;
  commentatorTitle?: string;
  topicChapterTag?: string;
  sourceCitationText?: string;
}

export const youtubeNewsCommentaryLowerthirdDefaultContent: YouTubeNewsCommentaryLowerthirdProps = {
  brand: {
    name: 'EXPLAINER ESSAYS 🧠',
    primaryColor: '#6366F1',
    accentColor: '#10B981',
  },
  product: {
    name: 'How Semiconductor Supply Chains Rule Global Geopolitics',
    description: 'An in-depth video essay investigating microchip fabrication and global trade routes.',
  },
  cta: {
    text: 'SUBSCRIBE FOR DEEP DIVE VIDEO ESSAYS 🔔',
    subtext: 'Join 250,000+ Thinking Minds',
  },
  commentatorName: 'Evelyn Reed',
  commentatorTitle: 'Senior Tech Policy Analyst',
  topicChapterTag: 'CHAPTER 2: FABRICATION BOTTLENECKS',
  sourceCitationText: 'SOURCE: Bloomberg Semiconductor Intelligence Index 2026',
};
