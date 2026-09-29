import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeCodingProjectShowcaseProps extends VideoContentProps {
  repoName?: string;
  githubStars?: string;
  techStackTags?: string[];
  terminalCommand?: string;
}

export const youtubeCodingProjectShowcaseDefaultContent: YouTubeCodingProjectShowcaseProps = {
  brand: {
    name: 'OPEN SOURCE LABS 💻',
    primaryColor: '#3B82F6',
    accentColor: '#10B981',
  },
  product: {
    name: 'VividAI — Autonomous Video Generator',
    description: 'Full-stack AI video generation engine built with Next.js 15, Remotion & TypeScript.',
  },
  cta: {
    text: 'STAR & CLONE REPO ON GITHUB ⭐',
    subtext: 'Link in description below',
  },
  repoName: 'mozammal01 / Vivid-AI',
  githubStars: '2,450 GITHUB STARS',
  techStackTags: ['Next.js 15', 'Remotion 4', 'TypeScript', 'Tailwind CSS'],
  terminalCommand: 'git clone https://github.com/mozammal01/Vivid-AI.git',
};
