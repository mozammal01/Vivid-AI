import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeCarAutoReviewProps extends VideoContentProps {
  carModelName?: string;
  accelerationStat?: string;
  horsepowerStat?: string;
  topSpeedStat?: string;
}

export const youtubeCarAutoReviewDefaultContent: YouTubeCarAutoReviewProps = {
  brand: {
    name: 'APEX AUTO REVIEWS 🏎️',
    primaryColor: '#EF4444',
    accentColor: '#F59E0B',
  },
  product: {
    name: 'Apex GT Supercar 2026',
    description: 'Twin-turbo hybrid V8 delivering unmatched track telemetry and supercar styling.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop',
    price: '$245,000 MSRP',
  },
  cta: {
    text: 'WATCH FULL TRACK TEST DRIVE 🏁',
    subtext: 'Link in description below',
  },
  carModelName: 'APEX GT HYBRID V8',
  accelerationStat: '0-60 MPH: 2.7 SECS',
  horsepowerStat: '850 HORSEPOWER',
  topSpeedStat: 'TOP SPEED: 215 MPH',
};
