import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeCinematicTravelOpenerProps extends VideoContentProps {
  gpsCoordinates?: string;
  altitudeMetres?: string;
  filmTitle?: string;
  cinematicTagline?: string;
}

export const youtubeCinematicTravelOpenerDefaultContent: YouTubeCinematicTravelOpenerProps = {
  brand: {
    name: 'WILD EXPLORER FILMS ✈️',
    primaryColor: '#D97706',
    accentColor: '#059669',
  },
  product: {
    name: 'SWITZERLAND ALPS EXPEDITION',
    description: 'A 4K Cinematic Journey through Zermatt, Matterhorn & Lauterbrunnen Valley.',
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop',
    features: [
      'Day 1: Glacial Express Train Journey',
      'Day 2: Matterhorn Sunrise Summit Hike',
      'Day 3: Lauterbrunnen 72 Waterfalls Trail',
    ],
  },
  cta: {
    text: 'WATCH THE FULL CINEMATIC FILM 🍿',
    subtext: '4K Ultra HD • Available on YouTube',
  },
  gpsCoordinates: '45.9765° N, 7.7491° E',
  altitudeMetres: '4,478m ELEVATION',
  filmTitle: 'THE SWISS ALPS',
  cinematicTagline: 'WHERE HEAVEN TOUCHES THE EARTH',
};
