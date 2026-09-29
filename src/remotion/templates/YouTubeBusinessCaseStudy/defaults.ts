import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeBusinessCaseStudyProps extends VideoContentProps {
  companyName?: string;
  valuationStat?: string;
  keyGrowthDrivers?: string[];
  takeawayConclusion?: string;
}

export const youtubeBusinessCaseStudyDefaultContent: YouTubeBusinessCaseStudyProps = {
  brand: {
    name: 'STRATEGY INSIGHTS 📈',
    primaryColor: '#2563EB',
    accentColor: '#10B981',
  },
  product: {
    name: 'HOW AIRBNB DISRUPTED THE $1 TRILLION HOSPITALITY INDUSTRY',
    description: 'A comprehensive business teardown of growth loops, viral marketing, and unit economics.',
  },
  cta: {
    text: 'SUBSCRIBE FOR BUSINESS CASE STUDIES 📊',
    subtext: 'Join 400,000+ Founders & Strategists',
  },
  companyName: 'AIRBNB CASE STUDY',
  valuationStat: '$85 BILLION MARKET CAP',
  keyGrowthDrivers: [
    'Craigslist Cross-Posting Growth Hack',
    'Professional Photography Initiative',
    'User Trust & Review Infrastructure',
  ],
  takeawayConclusion: 'KEY TAKEAWAY: Focus on building 100 people who love your product, not 10,000 who just like it.',
};
