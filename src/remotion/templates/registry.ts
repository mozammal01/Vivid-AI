import { ASPECT_RATIO_DIMENSIONS } from '@/types';
import type { AspectRatio } from '@/types';
import type { TemplateId, TemplateMetadata } from './types';

// Default content per template — pure data modules, safe for Server Components.
import { productAdDefaultContent } from './ProductAdvertisement/defaults';
import { restaurantDefaultContent } from './RestaurantPromotion/defaults';
import { saleDefaultContent } from './SalePromotion/defaults';
import { cinematicDocumentaryDefaultContent } from './CinematicDocumentary/defaults';
import { top10CountdownDefaultContent } from './Top10Countdown/defaults';
import { top5CountdownDefaultContent } from './Top5Countdown/defaults';
import { luxuryCommercialDefaultContent } from './LuxuryCommercial/defaults';
import { cinematicProductShowcaseDefaultContent } from './CinematicProductShowcase/defaults';
import { dataStatisticsExplainerDefaultContent } from './DataStatisticsExplainer/defaults';
import { breakingNewsIntroDefaultContent } from './BreakingNewsIntro/defaults';
import { cinematicMovieTrailerDefaultContent } from './CinematicMovieTrailer/defaults';
import { fashionLookbookDefaultContent } from './FashionLookbook/defaults';
import { podcastHighlightDefaultContent } from './PodcastHighlight/defaults';
import { techProductLaunchDefaultContent } from './TechProductLaunch/defaults';
import { realEstateShowcaseDefaultContent } from './RealEstateShowcase/defaults';
import { fitnessMotivationDefaultContent } from './FitnessMotivation/defaults';
import { gamingStreamHighlightDefaultContent } from './GamingStreamHighlight/defaults';
import { youtubeShortsViralHookDefaultContent } from './YouTubeShortsViralHook/defaults';
import { techTutorialExplainerDefaultContent } from './TechTutorialExplainer/defaults';
import { youtubeVlogIntroDefaultContent } from './YouTubeVlogIntro/defaults';
import { financeCryptoExplainerDefaultContent } from './FinanceCryptoExplainer/defaults';
import { creativePortfolioShowcaseDefaultContent } from './CreativePortfolioShowcase/defaults';
import { saasProductAdDefaultContent } from './SaaSProductAd/defaults';
import { courseMasterclassPromoDefaultContent } from './CourseMasterclassPromo/defaults';
import { ecommerceFlashSaleDefaultContent } from './EcommerceFlashSale/defaults';
import { eventWebinarTeaserDefaultContent } from './EventWebinarTeaser/defaults';

/**
 * Template Registry
 * =================
 * Single source of truth mapping template IDs to their metadata:
 * name, description, default data, and the aspect ratios each template
 * supports.
 *
 * This module is intentionally FREE of React/Remotion imports so it can be
 * used from Server Components (dashboard pages) and Client Components alike.
 * The composition components are mapped separately in `components.ts`.
 *
 * The Remotion Root, the editor's template selector, the live preview,
 * and the dashboard gallery all read from this object — adding a new
 * template here automatically makes it available everywhere.
 *
 * Templates are listed in display order: featured templates first,
 * followed by other templates. Set `featured: true` to promote a
 * template to the Featured section in the UI.
 */
export const templateRegistry: Record<TemplateId, TemplateMetadata> = {
  'breaking-news-intro': {
    id: 'breaking-news-intro',
    name: 'Breaking News Intro',
    description:
      'Professional 15-second broadcast news intro with a breaking badge, kinetic headline, location map, animated route, statistic lower third, and final live ticker.',
    category: 'intro',
    tags: ['breaking-news', 'broadcast', 'news', 'live', 'editorial', 'youtube'],
    thumbnailUrl: '/templates/breaking-news.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s @ 30fps
    featured: true,
    defaultProps: breakingNewsIntroDefaultContent,
  },

  'top-10-countdown': {
    id: 'top-10-countdown',
    name: 'Top 10 Countdown',
    description:
      'High-retention YouTube listicle with animated rank counters, image reveals, progress bar, statistics, and smooth item-to-item transitions.',
    category: 'social-media',
    tags: ['countdown', 'ranking', 'listicle', 'youtube', 'top-10', 'viral'],
    thumbnailUrl: '/templates/top-10-countdown.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s @ 30fps
    featured: true,
    defaultProps: top10CountdownDefaultContent,
  },

  'top-5-countdown': {
    id: 'top-5-countdown',
    name: 'Top 5 Countdown',
    description:
      'Compact ranking video with animated rank counters, image reveals, and smooth transitions across 5 ranked items.',
    category: 'social-media',
    tags: ['countdown', 'ranking', 'listicle', 'top-5', 'viral'],
    thumbnailUrl: '/templates/top-5-countdown.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 900, // Fixed: 30s @ 30fps
    featured: true,
    defaultProps: top5CountdownDefaultContent,
  },

  'cinematic-documentary': {
    id: 'cinematic-documentary',
    name: 'Cinematic Documentary',
    description:
      'Premium 20-second documentary sequence: cinematic opening, archival parallax, kinetic statement, map movement, broadcast timeline, and finale lockup with film grain, light sweeps, and cinematic letterbox bars.',
    category: 'intro',
    tags: ['documentary', 'cinematic', 'parallax', 'kinetic', 'timeline', 'premium'],
    thumbnailUrl: '/templates/cinematic-documentary.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 600, // 20s @ 30fps
    featured: true,
    defaultProps: cinematicDocumentaryDefaultContent,
  },

  'product-advertisement': {
    id: 'product-advertisement',
    name: 'Product Advertisement',
    description:
      'Classic five-scene product ad: brand intro, product showcase, key features, pricing, and call-to-action.',
    category: 'ads',
    tags: ['product', 'launch', 'saas', 'features', 'pricing'],
    thumbnailUrl: '/templates/product-advertisement.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s default
    defaultProps: productAdDefaultContent,
  },

  'restaurant-promotion': {
    id: 'restaurant-promotion',
    name: 'Restaurant Promotion',
    description:
      'Warm, appetite-driven promo for restaurants and cafés: welcome, signature dish, menu highlights, dinner deal, and reservation CTA.',
    category: 'social-media',
    tags: ['restaurant', 'food', 'menu', 'cafe', 'reservation'],
    thumbnailUrl: '/templates/restaurant-promotion.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s default
    defaultProps: restaurantDefaultContent,
  },

  'sale-promotion': {
    id: 'sale-promotion',
    name: 'Sale Promotion',
    description:
      'High-energy flash-sale promo: giant hook headline, discount reveal, product spotlight, deal perks, and urgency CTA.',
    category: 'ads',
    tags: ['sale', 'discount', 'flash-sale', 'ecommerce', 'urgency'],
    thumbnailUrl: '/templates/sale-promotion.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s default
    defaultProps: saleDefaultContent,
  },

  'luxury-commercial': {
    id: 'luxury-commercial',
    name: 'Luxury Commercial',
    description:
      'Premium brand film with cinematic camera moves, floating particles, and glassmorphism — built for high-end product launches and luxury storytelling.',
    category: 'ads',
    tags: ['luxury', 'premium', 'cinematic', 'brand', 'product'],
    thumbnailUrl: '/templates/luxury-commercial.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 600, // 20s
    defaultProps: luxuryCommercialDefaultContent,
  },

  'cinematic-product-showcase': {
    id: 'cinematic-product-showcase',
    name: 'Cinematic Product Showcase',
    description:
      'Premium 15-second product commercial with cinematic brand reveal, product showcase, key features, pricing, and CTA — built for social/video marketing.',
    category: 'ads',
    tags: ['product', 'cinematic', 'premium', 'launch', 'social', 'marketing'],
    thumbnailUrl: '/templates/cinematic-product-showcase.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s
    featured: false,
    defaultProps: cinematicProductShowcaseDefaultContent,
  },

  'data-statistics-explainer': {
    id: 'data-statistics-explainer',
    name: 'Data & Statistics Explainer',
    description:
      'Professional 20-second data explainer with a headline reveal, animated number, progressive SVG chart, key statistics, and a concise sourced conclusion.',
    category: 'explainer',
    tags: ['data', 'statistics', 'chart', 'business', 'education', 'youtube'],
    thumbnailUrl: '/templates/data-statistics-explainer.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 600, // 20s @ 30fps
    featured: false,
    defaultProps: dataStatisticsExplainerDefaultContent,
  },

  'cinematic-movie-trailer': {
    id: 'cinematic-movie-trailer',
    name: 'Cinematic Movie Trailer',
    description:
      'Premium 30-second cinematic trailer with dramatic title reveals, parallax visuals, kinetic typography, and a climactic finale — built for movies, documentaries, and major announcements.',
    category: 'intro',
    tags: ['cinematic', 'trailer', 'movie', 'dramatic', 'premium', 'youtube'],
    thumbnailUrl: '/templates/cinematic-movie-trailer.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 900, // Fixed: 30s @ 30fps
    featured: true,
    defaultProps: cinematicMovieTrailerDefaultContent,
  },

  'fashion-lookbook': {
    id: 'fashion-lookbook',
    name: 'Fashion Lookbook',
    description:
      'Editorial luxury lookbook featuring serif typography, outfit highlights, soft light sweeps, and collection lockup.',
    category: 'social-media',
    tags: ['fashion', 'editorial', 'lookbook', 'luxury', 'apparel', 'style', 'instagram'],
    thumbnailUrl: '/templates/fashion-lookbook.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '9:16',
    fps: 30,
    durationInFrames: 450, // 15s @ 30fps
    featured: true,
    defaultProps: fashionLookbookDefaultContent,
  },

  'podcast-highlight': {
    id: 'podcast-highlight',
    name: 'Podcast Highlight',
    description:
      'Engaging 15-second audio/video snippet with animated waveform, speaker lower-third, kinetic quote text, and episode CTA.',
    category: 'social-media',
    tags: ['podcast', 'interview', 'waveform', 'quote', 'audio', 'social-media'],
    thumbnailUrl: '/templates/podcast-highlight.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '9:16',
    fps: 30,
    durationInFrames: 450, // 15s @ 30fps
    featured: true,
    defaultProps: podcastHighlightDefaultContent,
  },

  'tech-product-launch': {
    id: 'tech-product-launch',
    name: 'Tech Product Launch',
    description:
      'Futuristic SaaS/Tech promo with dynamic matrix grid, terminal code typing effect, benchmark spec pills, and developer CTA.',
    category: 'ads',
    tags: ['tech', 'saas', 'developer', 'code', 'product-launch', 'futuristic'],
    thumbnailUrl: '/templates/tech-product-launch.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s @ 30fps
    featured: true,
    defaultProps: techProductLaunchDefaultContent,
  },

  'real-estate-showcase': {
    id: 'real-estate-showcase',
    name: 'Real Estate Showcase',
    description:
      'Elegant architectural showcase with glassmorphism spec grid, price spotlight, property reveal, and agent contact card.',
    category: 'ads',
    tags: ['real-estate', 'property', 'architecture', 'luxury-home', 'realtor', 'tour'],
    thumbnailUrl: '/templates/real-estate-showcase.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450, // 15s @ 30fps
    featured: false,
    defaultProps: realEstateShowcaseDefaultContent,
  },

  'fitness-motivation': {
    id: 'fitness-motivation',
    name: 'Fitness Motivation',
    description:
      'High-energy workout/supplement promo featuring giant kinetic typography, stat counter spotlight, formula highlights, and intense call to action.',
    category: 'social-media',
    tags: ['fitness', 'gym', 'workout', 'motivation', 'supplements', 'sports'],
    thumbnailUrl: '/templates/fitness-motivation.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '9:16',
    fps: 30,
    durationInFrames: 450, // 15s @ 30fps
    featured: false,
    defaultProps: fitnessMotivationDefaultContent,
  },

  'gaming-stream-highlight': {
    id: 'gaming-stream-highlight',
    name: 'Gaming & Esports Highlight',
    description:
      'High-octane gaming clip template with animated gamer tag, neon HUD overlays, kill streak/score counter, and energetic YouTube subscribe CTA.',
    category: 'social-media',
    tags: ['gaming', 'esports', 'twitch', 'stream', 'valorant', 'youtube', 'viral'],
    thumbnailUrl: '/templates/gaming-stream-highlight.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: gamingStreamHighlightDefaultContent,
  },

  'youtube-shorts-viral-hook': {
    id: 'youtube-shorts-viral-hook',
    name: 'YouTube Shorts Viral Hook',
    description:
      'Ultra-engaging vertical format tailored for YouTube Shorts with curiosity-gap kinetic title hook, animated audio waveform, key takeaway popups, and instant subscribe pulse.',
    category: 'social-media',
    tags: ['youtube-shorts', 'shorts', 'reels', 'viral', 'hook', 'growth'],
    thumbnailUrl: '/templates/youtube-shorts-viral-hook.svg',
    supportedAspectRatios: ['9:16', '16:9', '1:1'],
    defaultAspectRatio: '9:16',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: youtubeShortsViralHookDefaultContent,
  },

  'tech-tutorial-explainer': {
    id: 'tech-tutorial-explainer',
    name: 'Tech & Code Tutorial Explainer',
    description:
      'Clean developer-focused video template featuring code window reveals, step-by-step terminal cards, feature highlight tags, and sleek call-to-action end cards.',
    category: 'tutorial',
    tags: ['coding', 'developer', 'tutorial', 'tech', 'software', 'youtube'],
    thumbnailUrl: '/templates/tech-tutorial-explainer.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: techTutorialExplainerDefaultContent,
  },

  'youtube-vlog-intro': {
    id: 'youtube-vlog-intro',
    name: 'YouTube Travel & Vlog Intro',
    description:
      'Aesthetic, atmospheric channel opener with cinematic polaroid photo frames, location/stamp lower third, chapter timeline preview, and channel branding end screen.',
    category: 'intro',
    tags: ['vlog', 'travel', 'lifestyle', 'intro', 'aesthetic', 'youtube'],
    thumbnailUrl: '/templates/youtube-vlog-intro.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: youtubeVlogIntroDefaultContent,
  },

  'finance-crypto-explainer': {
    id: 'finance-crypto-explainer',
    name: 'Finance & Crypto Market Update',
    description:
      'High-impact financial news and stock/crypto update template with animated candlestick/line chart, market stat badges, risk indicator ticker, and channel disclaimer.',
    category: 'explainer',
    tags: ['finance', 'crypto', 'stocks', 'bitcoin', 'trading', 'youtube', 'explainer'],
    thumbnailUrl: '/templates/finance-crypto-explainer.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: financeCryptoExplainerDefaultContent,
  },

  'creative-portfolio-showcase': {
    id: 'creative-portfolio-showcase',
    name: 'Creative & Agency Portfolio Showcase',
    description:
      'Sleek design agency & creator portfolio showcase featuring project card grid reveals, service highlights, stats, and project inquiry CTA.',
    category: 'explainer',
    tags: ['portfolio', 'agency', 'design', 'showcase', 'creator', 'freelancer'],
    thumbnailUrl: '/templates/creative-portfolio-showcase.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: creativePortfolioShowcaseDefaultContent,
  },

  'saas-product-ad': {
    id: 'saas-product-ad',
    name: 'SaaS & App Product Promo Ad',
    description:
      'High-converting commercial ad for SaaS platforms with dashboard mockups, feature pill grids, ROI stats, and free trial call-to-action.',
    category: 'ads',
    tags: ['saas', 'software', 'app', 'ad', 'commercial', 'marketing'],
    thumbnailUrl: '/templates/saas-product-ad.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: saasProductAdDefaultContent,
  },

  'course-masterclass-promo': {
    id: 'course-masterclass-promo',
    name: 'Online Course & Masterclass Promo',
    description:
      'Educational masterclass advertisement with instructor spotlight card, module curriculum breakdown, student review badge, and enrollment CTA.',
    category: 'tutorial',
    tags: ['course', 'education', 'masterclass', 'learning', 'promo', 'instructor'],
    thumbnailUrl: '/templates/course-masterclass-promo.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: courseMasterclassPromoDefaultContent,
  },

  'ecommerce-flash-sale': {
    id: 'ecommerce-flash-sale',
    name: 'E-Commerce Flash Sale & Deal Promo',
    description:
      'Urgency-driven retail & e-commerce video ad featuring strike-through pricing, discount badges, perk highlights, and immediate buy button.',
    category: 'ads',
    tags: ['ecommerce', 'flash-sale', 'shopping', 'discount', 'fashion', 'retail'],
    thumbnailUrl: '/templates/ecommerce-flash-sale.svg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: ecommerceFlashSaleDefaultContent,
  },

  'event-webinar-teaser': {
    id: 'event-webinar-teaser',
    name: 'Live Event & Webinar Teaser Promo',
    description:
      'High-engagement announcement trailer for summits, webinars, and conferences with keynote speaker spotlight, agenda breakdown, and seat reservation CTA.',
    category: 'social-media',
    tags: ['event', 'webinar', 'conference', 'summit', 'live', 'registration'],
    thumbnailUrl: '/templates/event-webinar-teaser.jpg',
    supportedAspectRatios: ['16:9', '1:1', '9:16'],
    defaultAspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    featured: true,
    defaultProps: eventWebinarTeaserDefaultContent,
  },
};

/** Default template used when none is specified. */
export const DEFAULT_TEMPLATE_ID: TemplateId = 'product-advertisement';

/** All registered templates in registration order (for UI lists). */
export const templateList: TemplateMetadata[] = Object.values(templateRegistry);

/** Featured templates in registry order. */
export const featuredTemplates: TemplateMetadata[] = templateList.filter(
  (t) => t.featured,
);

/** Non-featured (other) templates in registry order. */
export const otherTemplates: TemplateMetadata[] = templateList.filter(
  (t) => !t.featured,
);

/** Type guard — narrows an arbitrary string to a registered TemplateId. */
export function isTemplateId(value: string): value is TemplateId {
  return Object.prototype.hasOwnProperty.call(templateRegistry, value);
}

/**
 * Looks up a template by ID.
 * Accepts any string so callers can safely validate user/query-param input;
 * returns `undefined` for unknown IDs.
 */
export function getTemplateDefinition(id: string): TemplateMetadata | undefined {
  return isTemplateId(id) ? templateRegistry[id] : undefined;
}

/** Resolves a template ID to its metadata, falling back to the default template. */
export function resolveTemplateOrDefault(id: string | undefined): TemplateMetadata {
  if (id && isTemplateId(id)) return templateRegistry[id];
  return templateRegistry[DEFAULT_TEMPLATE_ID];
}

/** Pixel dimensions for a template at a given (supported) aspect ratio. */
export function getTemplateDimensions(
  template: TemplateMetadata,
  aspectRatio: AspectRatio = template.defaultAspectRatio,
): { width: number; height: number } {
  return ASPECT_RATIO_DIMENSIONS[aspectRatio];
}
