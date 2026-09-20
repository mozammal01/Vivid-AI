import type { VideoScene } from '@/types';

export const courseMasterclassPromoScenes: VideoScene[] = [
  {
    id: 'course-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 90,
  },
  {
    id: 'course-instructor-reveal',
    type: 'product',
    startFrame: 90,
    durationInFrames: 120,
  },
  {
    id: 'course-curriculum-modules',
    type: 'features',
    startFrame: 210,
    durationInFrames: 120,
  },
  {
    id: 'course-enroll-cta',
    type: 'cta',
    startFrame: 330,
    durationInFrames: 120,
  },
];
