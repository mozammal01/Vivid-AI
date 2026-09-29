import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeMovieReviewRatingProps extends VideoContentProps {
  movieTitle?: string;
  criticScore?: string;
  audienceScore?: string;
  verdictBadge?: string;
}

export const youtubeMovieReviewRatingDefaultContent: YouTubeMovieReviewRatingProps = {
  brand: {
    name: 'FLICK CRITICS 🍿',
    primaryColor: '#E11D48',
    accentColor: '#F59E0B',
  },
  product: {
    name: 'DUNE: PART THREE MOVIE REVIEW',
    description: 'Denis Villeneuve returns with a breathtaking masterpiece of sci-fi cinema.',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop',
  },
  cta: {
    text: 'FULL SPOILER REVIEW ON YOUTUBE 🎬',
    subtext: 'Do you agree with our score? Comment below!',
  },
  movieTitle: 'DUNE: PART THREE',
  criticScore: '96% CERTIFIED FRESH',
  audienceScore: '94% AUDIENCE SCORE',
  verdictBadge: 'MUST WATCH CINEMATIC MASTERPIECE',
};
