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
import { YouTubeOutroEndcard } from './YouTubeOutroEndcard';
import { YouTubeTechReviewUnboxing } from './YouTubeTechReviewUnboxing';
import { YouTubeShortsFactsQuiz } from './YouTubeShortsFactsQuiz';
import { YouTubeGamingMontageIntro } from './YouTubeGamingMontageIntro';
import { YouTubePodcastVideoIntro } from './YouTubePodcastVideoIntro';
import { YouTubeFitnessWorkoutTimer } from './YouTubeFitnessWorkoutTimer';
import { YouTubeCinematicTravelOpener } from './YouTubeCinematicTravelOpener';
import { YouTubeNewsCommentaryLowerthird } from './YouTubeNewsCommentaryLowerthird';
import { YouTubeLofiMusicVisualizer } from './YouTubeLofiMusicVisualizer';
import { YouTubeMotivationQuoteShorts } from './YouTubeMotivationQuoteShorts';
import { YouTubeCookingRecipeCard } from './YouTubeCookingRecipeCard';
import { YouTubeDiyCraftTutorial } from './YouTubeDiyCraftTutorial';
import { YouTubeMovieReviewRating } from './YouTubeMovieReviewRating';
import { YouTubeCarAutoReview } from './YouTubeCarAutoReview';
import { YouTubeCryptoTradingSignals } from './YouTubeCryptoTradingSignals';
import { YouTubeCodingProjectShowcase } from './YouTubeCodingProjectShowcase';
import { YouTubeAnimeMangaTopList } from './YouTubeAnimeMangaTopList';
import { YouTubeRealEstatePropertyTour } from './YouTubeRealEstatePropertyTour';
import { YouTubeLifeHacksTips } from './YouTubeLifeHacksTips';
import { YouTubeTopTrendingNews } from './YouTubeTopTrendingNews';
import { YouTubeHistoryStorytelling } from './YouTubeHistoryStorytelling';
import { YouTubeBeautyMakeupTutorial } from './YouTubeBeautyMakeupTutorial';
import { YouTubeAsmrRelaxation } from './YouTubeAsmrRelaxation';
import { YouTubeBusinessCaseStudy } from './YouTubeBusinessCaseStudy';

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
  'youtube-outro-endcard': YouTubeOutroEndcard,
  'youtube-tech-review-unboxing': YouTubeTechReviewUnboxing,
  'youtube-shorts-facts-quiz': YouTubeShortsFactsQuiz,
  'youtube-gaming-montage-intro': YouTubeGamingMontageIntro,
  'youtube-podcast-video-intro': YouTubePodcastVideoIntro,
  'youtube-fitness-workout-timer': YouTubeFitnessWorkoutTimer,
  'youtube-cinematic-travel-opener': YouTubeCinematicTravelOpener,
  'youtube-news-commentary-lowerthird': YouTubeNewsCommentaryLowerthird,
  'youtube-lofi-music-visualizer': YouTubeLofiMusicVisualizer,
  'youtube-motivation-quote-shorts': YouTubeMotivationQuoteShorts,
  'youtube-cooking-recipe-card': YouTubeCookingRecipeCard,
  'youtube-diy-craft-tutorial': YouTubeDiyCraftTutorial,
  'youtube-movie-review-rating': YouTubeMovieReviewRating,
  'youtube-car-auto-review': YouTubeCarAutoReview,
  'youtube-crypto-trading-signals': YouTubeCryptoTradingSignals,
  'youtube-coding-project-showcase': YouTubeCodingProjectShowcase,
  'youtube-anime-manga-top-list': YouTubeAnimeMangaTopList,
  'youtube-real-estate-property-tour': YouTubeRealEstatePropertyTour,
  'youtube-life-hacks-tips': YouTubeLifeHacksTips,
  'youtube-top-trending-news': YouTubeTopTrendingNews,
  'youtube-history-storytelling': YouTubeHistoryStorytelling,
  'youtube-beauty-makeup-tutorial': YouTubeBeautyMakeupTutorial,
  'youtube-asmr-relaxation': YouTubeAsmrRelaxation,
  'youtube-business-case-study': YouTubeBusinessCaseStudy,
};

/** Returns the Remotion composition component for a registered template ID. */
export function getTemplateComponent(
  id: TemplateId,
): React.ComponentType<any> { // eslint-disable-line @typescript-eslint/no-explicit-any
  return templateComponents[id];
}
