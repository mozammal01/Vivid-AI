import type React from 'react';
import type { TemplateId } from './types';

import { ProductAdvertisement } from './ProductAdvertisement';
import { RestaurantPromotion } from './RestaurantPromotion';
import { SalePromotion } from './SalePromotion';
import { CinematicDocumentary } from './CinematicDocumentary';
import { Top10Countdown } from './Top10Countdown';
import { Top5Countdown } from './Top5Countdown';
import { LuxuryCommercial } from './LuxuryCommercial/LuxuryCommercial';
import { CinematicProductShowcase } from './CinematicProductShowcase';
import { DataStatisticsExplainer } from './DataStatisticsExplainer';
import { BreakingNewsIntro } from './BreakingNewsIntro';
import { CinematicMovieTrailer } from './CinematicMovieTrailer';
import { FashionLookbook } from './FashionLookbook';
import { PodcastHighlight } from './PodcastHighlight';
import { TechProductLaunch } from './TechProductLaunch';
import { RealEstateShowcase } from './RealEstateShowcase';
import { FitnessMotivation } from './FitnessMotivation';
import { GamingStreamHighlight } from './GamingStreamHighlight';
import { YouTubeShortsViralHook } from './YouTubeShortsViralHook';
import { TechTutorialExplainer } from './TechTutorialExplainer';
import { YouTubeVlogIntro } from './YouTubeVlogIntro';
import { FinanceCryptoExplainer } from './FinanceCryptoExplainer';
import { CreativePortfolioShowcase } from './CreativePortfolioShowcase';
import { SaaSProductAd } from './SaaSProductAd';
import { CourseMasterclassPromo } from './CourseMasterclassPromo';
import { EcommerceFlashSale } from './EcommerceFlashSale';
import { EventWebinarTeaser } from './EventWebinarTeaser';

/**
 * Maps template IDs to their Remotion composition components.
 *
 * ⚠️ Client-side only: importing this module pulls every composition (and
 * therefore Remotion) into the bundle. Server Components must use the
 * metadata-only registry (`registry.ts`) instead.
 *
 * Kept separate from the metadata registry so Next.js Server Components can
 * list templates without evaluating Remotion code.
 */
export const templateComponents: Record<
  TemplateId,
  React.ComponentType<any> // eslint-disable-line @typescript-eslint/no-explicit-any
> = {
  'breaking-news-intro': BreakingNewsIntro,
  'top-10-countdown': Top10Countdown,
  'top-5-countdown': Top5Countdown,
  'product-advertisement': ProductAdvertisement,
  'restaurant-promotion': RestaurantPromotion,
  'sale-promotion': SalePromotion,
  'cinematic-documentary': CinematicDocumentary,
  'luxury-commercial': LuxuryCommercial,
  'cinematic-product-showcase': CinematicProductShowcase,
  'data-statistics-explainer': DataStatisticsExplainer,
  'cinematic-movie-trailer': CinematicMovieTrailer,
  'fashion-lookbook': FashionLookbook,
  'podcast-highlight': PodcastHighlight,
  'tech-product-launch': TechProductLaunch,
  'real-estate-showcase': RealEstateShowcase,
  'fitness-motivation': FitnessMotivation,
  'gaming-stream-highlight': GamingStreamHighlight,
  'youtube-shorts-viral-hook': YouTubeShortsViralHook,
  'tech-tutorial-explainer': TechTutorialExplainer,
  'youtube-vlog-intro': YouTubeVlogIntro,
  'finance-crypto-explainer': FinanceCryptoExplainer,
  'creative-portfolio-showcase': CreativePortfolioShowcase,
  'saas-product-ad': SaaSProductAd,
  'course-masterclass-promo': CourseMasterclassPromo,
  'ecommerce-flash-sale': EcommerceFlashSale,
  'event-webinar-teaser': EventWebinarTeaser,
};

/** Returns the Remotion composition component for a registered template ID. */
export function getTemplateComponent(
  id: TemplateId,
): React.ComponentType<any> { // eslint-disable-line @typescript-eslint/no-explicit-any
  return templateComponents[id];
}
