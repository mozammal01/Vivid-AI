import type { TemplateId } from './types';
import type { EditorFormValues } from '@/components/editor/editor-schema';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type TemplateFieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'image'
  | 'url'
  | 'array';

export interface TemplateFieldDefinition {
  /** Key in EditorFormValues. */
  key: keyof EditorFormValues;
  /** Human-readable label shown in the editor. */
  label: string;
  /** Input type. */
  type: TemplateFieldType;
  /** Whether the field is required for this template. */
  required?: boolean;
  /** Placeholder text. */
  placeholder?: string;
  /** Default value when template is selected. */
  defaultValue?: string | number;
  /** Which editor section this belongs to. */
  section?: string;
  /** Optional hint shown below the field. */
  hint?: string;
  /** For array fields: how many slots to render (1-indexed). */
  arrayCount?: 1 | 2 | 3;
  /** For image fields: the associated label. */
  imageLabel?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Field definitions per template
// ─────────────────────────────────────────────────────────────────────────────

const productAdFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark', section: 'Brand', defaultValue: 'NovaSpark' },
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. Ignite Your Growth', section: 'Brand' },
  { key: 'websiteUrl', label: 'Website URL', type: 'url', required: false, placeholder: 'https://example.com', section: 'Brand' },
  { key: 'brandLogoUrl', label: 'Brand Logo', type: 'image', required: false, section: 'Brand', imageLabel: 'Brand logo' },
  { key: 'productName', label: 'Product Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark Pro', section: 'Product', defaultValue: 'NovaSpark Pro' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short marketing description (1–2 sentences)', section: 'Product', hint: 'Max 160 characters' },
  { key: 'productImageUrl', label: 'Product Image', type: 'image', required: false, section: 'Product', imageLabel: 'Product image' },
  { key: 'price', label: 'Price', type: 'text', required: false, placeholder: '$49 / mo', section: 'Product' },
  { key: 'discount', label: 'Discount', type: 'text', required: false, placeholder: '30% OFF', section: 'Product' },
  { key: 'feature1', label: 'Feature 1', type: 'text', required: false, placeholder: 'Key selling point', section: 'Key Features' },
  { key: 'feature2', label: 'Feature 2', type: 'text', required: false, placeholder: 'Key selling point', section: 'Key Features' },
  { key: 'feature3', label: 'Feature 3', type: 'text', required: false, placeholder: 'Key selling point', section: 'Key Features' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Start Free Trial', section: 'Call to Action', defaultValue: 'Start Free Trial' },
];

const restaurantPromotionFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Restaurant Name', type: 'text', required: true, placeholder: 'e.g. Bella Italia', section: 'Brand', defaultValue: 'NovaSpark' },
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. Authentic Italian Flavors', section: 'Brand' },
  { key: 'websiteUrl', label: 'Website URL', type: 'url', required: false, placeholder: 'https://example.com', section: 'Brand' },
  { key: 'brandLogoUrl', label: 'Brand Logo', type: 'image', required: false, section: 'Brand', imageLabel: 'Brand logo' },
  { key: 'productName', label: 'Signature Dish', type: 'text', required: true, placeholder: 'e.g. Truffle Risotto', section: 'Product', defaultValue: 'NovaSpark Pro' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short description of the dish or offer', section: 'Product', hint: 'Max 160 characters' },
  { key: 'productImageUrl', label: 'Dish Image', type: 'image', required: false, section: 'Product', imageLabel: 'Dish image' },
  { key: 'discount', label: 'Special Offer', type: 'text', required: false, placeholder: 'e.g. 20% OFF', section: 'Product' },
  { key: 'feature1', label: 'Highlight 1', type: 'text', required: false, placeholder: 'e.g. Fresh pasta daily', section: 'Highlights' },
  { key: 'feature2', label: 'Highlight 2', type: 'text', required: false, placeholder: 'e.g. Vegan options', section: 'Highlights' },
  { key: 'feature3', label: 'Highlight 3', type: 'text', required: false, placeholder: 'e.g. Outdoor seating', section: 'Highlights' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Reserve a Table', section: 'Call to Action', defaultValue: 'Start Free Trial' },
];

const salePromotionFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark', section: 'Brand', defaultValue: 'NovaSpark' },
  { key: 'websiteUrl', label: 'Website URL', type: 'url', required: false, placeholder: 'https://example.com', section: 'Brand' },
  { key: 'productName', label: 'Product / Deal Name', type: 'text', required: true, placeholder: 'e.g. Flash Sale', section: 'Product', defaultValue: 'NovaSpark Pro' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short deal description', section: 'Product', hint: 'Max 160 characters' },
  { key: 'productImageUrl', label: 'Product Image', type: 'image', required: false, section: 'Product', imageLabel: 'Product image' },
  { key: 'price', label: 'Original Price', type: 'text', required: false, placeholder: '$99', section: 'Product' },
  { key: 'discount', label: 'Discount / Deal', type: 'text', required: true, placeholder: '50% OFF', section: 'Product', defaultValue: '30% OFF' },
  { key: 'feature1', label: 'Perk 1', type: 'text', required: false, placeholder: 'e.g. Free shipping', section: 'Deal Perks' },
  { key: 'feature2', label: 'Perk 2', type: 'text', required: false, placeholder: 'e.g. 24h support', section: 'Deal Perks' },
  { key: 'feature3', label: 'Perk 3', type: 'text', required: false, placeholder: 'e.g. Money-back guarantee', section: 'Deal Perks' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Shop Now', section: 'Call to Action', defaultValue: 'Shop Now' },
];

const cinematicDocumentaryFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Documentary Title', type: 'text', required: true, placeholder: 'e.g. The Silent Ocean', section: 'Title', defaultValue: 'NovaSpark' },
  { key: 'tagline', label: 'Subtitle', type: 'text', required: false, placeholder: 'e.g. A Journey Below the Surface', section: 'Title' },
  { key: 'productName', label: 'Location', type: 'text', required: false, placeholder: 'e.g. Pacific Ocean', section: 'Details' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short synopsis or narration', section: 'Details', hint: 'Max 160 characters' },
  { key: 'feature1', label: 'Timeline Event 1', type: 'text', required: false, placeholder: 'e.g. 1982 — First dive', section: 'Timeline' },
  { key: 'feature2', label: 'Timeline Event 2', type: 'text', required: false, placeholder: 'e.g. 1995 — Species discovery', section: 'Timeline' },
  { key: 'feature3', label: 'Timeline Event 3', type: 'text', required: false, placeholder: 'e.g. 2024 — Conservation effort', section: 'Timeline' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Watch Full Documentary', section: 'Call to Action', defaultValue: 'Start Free Trial' },
];

const luxuryCommercialFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: false, placeholder: 'e.g. NovaSpark', section: 'Brand', defaultValue: 'NovaSpark' },
  { key: 'productName', label: 'Product Name', type: 'text', required: false, placeholder: 'e.g. NovaSpark Pro', section: 'Product', defaultValue: 'NovaSpark Pro' },
  { key: 'description', label: 'Tagline', type: 'textarea', required: false, placeholder: 'e.g. Elegance Redefined', section: 'Product', hint: 'Max 160 characters' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: false, placeholder: 'e.g. Discover More', section: 'Call to Action', defaultValue: 'Start Free Trial' },
];

const cinematicProductShowcaseFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark', section: 'Brand', defaultValue: 'NovaSpark' },
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. Ignite Your Growth', section: 'Brand' },
  { key: 'brandLogoUrl', label: 'Brand Logo', type: 'image', required: false, section: 'Brand', imageLabel: 'Brand logo' },
  { key: 'productName', label: 'Product Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark Pro', section: 'Product', defaultValue: 'NovaSpark Pro' },
  { key: 'productImageUrl', label: 'Product Image', type: 'image', required: false, section: 'Product', imageLabel: 'Product image' },
  { key: 'price', label: 'Price', type: 'text', required: false, placeholder: '$49 / mo', section: 'Product' },
  { key: 'originalPrice', label: 'Original Price', type: 'text', required: false, placeholder: '$69 / mo', section: 'Product' },
  { key: 'discount', label: 'Discount', type: 'text', required: false, placeholder: '30% OFF', section: 'Product' },
  { key: 'feature1', label: 'Feature 1', type: 'text', required: false, placeholder: 'Key feature', section: 'Key Features' },
  { key: 'feature2', label: 'Feature 2', type: 'text', required: false, placeholder: 'Key feature', section: 'Key Features' },
  { key: 'feature3', label: 'Feature 3', type: 'text', required: false, placeholder: 'Key feature', section: 'Key Features' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Start Free Trial', section: 'Call to Action', defaultValue: 'Start Free Trial' },
];

const dataStatisticsExplainerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand / Author', type: 'text', required: false, placeholder: 'e.g. DataViz Inc.', section: 'Source', defaultValue: 'NovaSpark' },
  { key: 'headline', label: 'Headline', type: 'text', required: true, placeholder: 'e.g. Remote Work Trends 2026', section: 'Content', defaultValue: 'Launch Smarter. Grow Faster.' },
  { key: 'title', label: 'Title', type: 'text', required: false, placeholder: 'e.g. Remote Work Trends', section: 'Content' },
  { key: 'subtitle', label: 'Subtitle', type: 'text', required: false, placeholder: 'e.g. A data-driven look at the future', section: 'Content' },
  { key: 'statistic', label: 'Main Statistic', type: 'number', required: true, placeholder: 'e.g. 78', section: 'Statistics', defaultValue: 78 },
  { key: 'percentage', label: 'Percentage', type: 'number', required: false, placeholder: 'e.g. 85', section: 'Statistics' },
  { key: 'chartData', label: 'Chart Data', type: 'array', required: false, placeholder: '10, 25, 45, 70, 90', section: 'Chart', hint: 'Comma-separated numbers', arrayCount: 1 },
  { key: 'labels', label: 'Chart Labels', type: 'array', required: false, placeholder: 'Jan, Feb, Mar, Apr, May', section: 'Chart', hint: 'Comma-separated labels', arrayCount: 1 },
  { key: 'source', label: 'Source', type: 'text', required: false, placeholder: 'e.g. McKinsey Global Institute', section: 'Source' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Read Full Report', section: 'Call to Action', defaultValue: 'Start Free Trial' },
];

const breakingNewsIntroFields: TemplateFieldDefinition[] = [
  { key: 'headline', label: 'Headline', type: 'text', required: true, placeholder: 'e.g. GLOBAL CRISIS ESCALATES', section: 'Content', defaultValue: 'GLOBAL CRISIS ESCALATES' },
  { key: 'category', label: 'Category', type: 'text', required: true, placeholder: 'e.g. WORLD NEWS', section: 'Content', defaultValue: 'WORLD NEWS' },
  { key: 'productName', label: 'Headline Display', type: 'text', required: false, placeholder: 'Alternative headline text', section: 'Content', defaultValue: 'GLOBAL CRISIS ESCALATES' },
  { key: 'productImageUrl', label: 'News Image', type: 'image', required: false, section: 'Media', imageLabel: 'News image' },
  { key: 'location', label: 'Location', type: 'text', required: false, placeholder: 'e.g. Eastern Europe', section: 'Details' },
  { key: 'date', label: 'Date', type: 'text', required: false, placeholder: 'e.g. March 15, 2026', section: 'Details' },
  { key: 'statistic', label: 'Statistic', type: 'number', required: false, placeholder: 'e.g. 2400000', section: 'Statistics' },
  { key: 'bodyText', label: 'Statistic Label', type: 'text', required: false, placeholder: 'e.g. People Affected', section: 'Statistics' },
  { key: 'source', label: 'Source', type: 'text', required: false, placeholder: 'e.g. CNN', section: 'Source' },
  { key: 'tickerText', label: 'Ticker Text', type: 'text', required: false, placeholder: 'e.g. Breaking news updates every minute', section: 'Ticker' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Watch Live', section: 'Call to Action', defaultValue: 'Watch Live' },
];

const cinematicMovieTrailerFields: TemplateFieldDefinition[] = [
  { key: 'headline', label: 'Main Title', type: 'text', required: true, placeholder: 'e.g. THE FUTURE IS NOW', section: 'Title', defaultValue: 'THE FUTURE IS NOW' },
  { key: 'subtitle', label: 'Subtitle', type: 'text', required: false, placeholder: 'e.g. A NEW ERA BEGINS', section: 'Title', defaultValue: 'A NEW ERA BEGINS' },
  { key: 'category', label: 'Category', type: 'text', required: false, placeholder: 'e.g. ORIGINAL SERIES', section: 'Title', defaultValue: 'ORIGINAL SERIES' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short cinematic description', section: 'Story', hint: 'Max 160 characters' },
  { key: 'productImageUrl', label: 'Main Visual', type: 'image', required: false, section: 'Visual', imageLabel: 'Main visual image' },
  { key: 'statistic', label: 'Statistic', type: 'number', required: false, placeholder: 'e.g. 82', section: 'Statistics', defaultValue: 82 },
  { key: 'statisticLabel', label: 'Statistic Label', type: 'text', required: false, placeholder: 'e.g. OF BUSINESSES ARE ADOPTING AI', section: 'Statistics', defaultValue: 'OF BUSINESSES ARE ADOPTING AI' },
  { key: 'year', label: 'Year', type: 'text', required: false, placeholder: 'e.g. 2026', section: 'Details', defaultValue: '2026' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: false, placeholder: 'e.g. Watch Trailer', section: 'Call to Action', defaultValue: 'Watch Trailer' },
];

const top10CountdownFields: TemplateFieldDefinition[] = [
  { key: 'headline', label: 'List Title (Header)', type: 'text', required: true, placeholder: 'e.g. TOP 10', section: 'Header', defaultValue: 'TOP 10' },
  { key: 'listTitle', label: 'List Title', type: 'text', required: false, placeholder: 'e.g. This Week\'s Top 10', section: 'Header' },
  { key: 'rank', label: 'Starting Rank', type: 'number', required: false, placeholder: 'e.g. 10', section: 'Ranking', defaultValue: 10 },
  { key: 'itemTitle', label: 'Item Title', type: 'text', required: true, placeholder: 'e.g. The Ultimate Ranking', section: 'Content', defaultValue: 'The Ultimate Ranking' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short description of the ranked item', section: 'Content', hint: 'Max 160 characters' },
  { key: 'image', label: 'Item Image', type: 'image', required: false, section: 'Media', imageLabel: 'Item image' },
  { key: 'statistic', label: 'Statistic', type: 'number', required: false, placeholder: 'e.g. 98', section: 'Statistics', defaultValue: 98 },
  { key: 'statisticLabel', label: 'Statistic Label', type: 'text', required: false, placeholder: 'e.g. Viral Score', section: 'Statistics' },
  { key: 'category', label: 'Category', type: 'text', required: false, placeholder: 'e.g. Trending', section: 'Badge' },
  { key: 'accentText', label: 'Accent Text', type: 'text', required: false, placeholder: 'e.g. #1 Spot', section: 'Badge' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: false, placeholder: 'e.g. Watch Full List', section: 'Call to Action', defaultValue: 'Watch Full List' },
];

const top5CountdownFields: TemplateFieldDefinition[] = [
  { key: 'headline', label: 'List Title (Header)', type: 'text', required: true, placeholder: 'e.g. TOP 5', section: 'Header', defaultValue: 'TOP 5' },
  { key: 'listTitle', label: 'List Title', type: 'text', required: false, placeholder: 'e.g. This Week\'s Top 5', section: 'Header' },
  { key: 'rank', label: 'Starting Rank', type: 'number', required: false, placeholder: 'e.g. 5', section: 'Ranking', defaultValue: 5 },
  { key: 'itemTitle', label: 'Item Title', type: 'text', required: true, placeholder: 'e.g. The Ultimate Ranking', section: 'Content', defaultValue: 'The Ultimate Ranking' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short description of the ranked item', section: 'Content', hint: 'Max 160 characters' },
  { key: 'image', label: 'Item Image', type: 'image', required: false, section: 'Media', imageLabel: 'Item image' },
  { key: 'statistic', label: 'Statistic', type: 'number', required: false, placeholder: 'e.g. 99', section: 'Statistics', defaultValue: 99 },
  { key: 'statisticLabel', label: 'Statistic Label', type: 'text', required: false, placeholder: 'e.g. Overall Score', section: 'Statistics' },
  { key: 'category', label: 'Category', type: 'text', required: false, placeholder: 'e.g. Trending', section: 'Badge' },
  { key: 'accentText', label: 'Accent Text', type: 'text', required: false, placeholder: 'e.g. #1 Pick', section: 'Badge' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: false, placeholder: 'e.g. Watch Full List', section: 'Call to Action', defaultValue: 'Watch Full List' },
];

const fashionLookbookFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. Maison Noir', section: 'Brand', defaultValue: 'Maison Noir' },
  { key: 'tagline', label: 'Collection / Season', type: 'text', required: false, placeholder: 'e.g. Autumn / Winter Collection', section: 'Brand' },
  { key: 'productName', label: 'Look Title', type: 'text', required: true, placeholder: 'e.g. Velvet Atelier Coat', section: 'Lookbook', defaultValue: 'Velvet Atelier Coat' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Fabric & cut details', section: 'Lookbook' },
  { key: 'productImageUrl', label: 'Outfit Image', type: 'image', required: false, section: 'Media', imageLabel: 'Outfit photo' },
  { key: 'price', label: 'Price', type: 'text', required: false, placeholder: '$890', section: 'Details' },
  { key: 'feature1', label: 'Craftsmanship 1', type: 'text', required: false, placeholder: 'e.g. 100% Cashmere', section: 'Features' },
  { key: 'feature2', label: 'Craftsmanship 2', type: 'text', required: false, placeholder: 'e.g. Tailored Fit', section: 'Features' },
  { key: 'feature3', label: 'Craftsmanship 3', type: 'text', required: false, placeholder: 'e.g. Limited Edition', section: 'Features' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Explore Lookbook', section: 'Call to Action', defaultValue: 'Explore Lookbook' },
];

const podcastHighlightFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Show Name', type: 'text', required: true, placeholder: 'e.g. The Tech Vision Podcast', section: 'Show', defaultValue: 'The Tech Vision Podcast' },
  { key: 'headline', label: 'Quote / Highlight', type: 'textarea', required: true, placeholder: 'Key quote from episode', section: 'Content' },
  { key: 'speaker', label: 'Guest Speaker', type: 'text', required: false, placeholder: 'e.g. Dr. Elena Vance', section: 'Content' },
  { key: 'episodeNumber', label: 'Episode Badge', type: 'text', required: false, placeholder: 'e.g. EP. 142', section: 'Show' },
  { key: 'productImageUrl', label: 'Cover / Guest Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Cover image' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Listen Full Episode', section: 'Call to Action', defaultValue: 'Listen Full Episode' },
];

const techProductLaunchFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. Nexus AI', section: 'Brand', defaultValue: 'Nexus AI' },
  { key: 'productName', label: 'Product Name', type: 'text', required: true, placeholder: 'e.g. Nexus Engine', section: 'Product', defaultValue: 'Nexus Engine' },
  { key: 'headline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. Autonomous Agent Framework', section: 'Product' },
  { key: 'version', label: 'Version Badge', type: 'text', required: false, placeholder: 'e.g. v4.0 RELEASE', section: 'Product' },
  { key: 'codeSnippet', label: 'Code Snippet', type: 'textarea', required: false, placeholder: 'Terminal code snippet', section: 'Code' },
  { key: 'productImageUrl', label: 'Product Visual', type: 'image', required: false, section: 'Media', imageLabel: 'Product UI' },
  { key: 'price', label: 'Pricing Plan', type: 'text', required: false, placeholder: 'e.g. Free Tier Available', section: 'Pricing' },
  { key: 'feature1', label: 'Benchmark 1', type: 'text', required: false, placeholder: 'e.g. 10x Faster Execution', section: 'Specs' },
  { key: 'feature2', label: 'Benchmark 2', type: 'text', required: false, placeholder: 'e.g. Zero-Latency Streaming', section: 'Specs' },
  { key: 'feature3', label: 'Benchmark 3', type: 'text', required: false, placeholder: 'e.g. Enterprise Security', section: 'Specs' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Deploy in 60 Seconds', section: 'Call to Action', defaultValue: 'Deploy in 60 Seconds' },
];

const realEstateShowcaseFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Agency Name', type: 'text', required: true, placeholder: 'e.g. Aura Estates', section: 'Agency', defaultValue: 'Aura Estates' },
  { key: 'productName', label: 'Property Title', type: 'text', required: true, placeholder: 'e.g. The Grand View Villa', section: 'Property', defaultValue: 'The Grand View Villa' },
  { key: 'location', label: 'Location', type: 'text', required: false, placeholder: 'e.g. Beverly Hills, CA', section: 'Property' },
  { key: 'price', label: 'Listing Price', type: 'text', required: true, placeholder: '$4,250,000', section: 'Pricing', defaultValue: '$4,250,000' },
  { key: 'agentName', label: 'Agent Name', type: 'text', required: false, placeholder: 'e.g. Sarah Jenkins', section: 'Agent' },
  { key: 'agentPhone', label: 'Agent Phone', type: 'text', required: false, placeholder: 'e.g. +1 (800) 555-REAL', section: 'Agent' },
  { key: 'productImageUrl', label: 'Hero Image', type: 'image', required: false, section: 'Media', imageLabel: 'Property photo' },
  { key: 'feature1', label: 'Amenity 1', type: 'text', required: false, placeholder: 'e.g. 5 Beds & 6 Baths', section: 'Amenities' },
  { key: 'feature2', label: 'Amenity 2', type: 'text', required: false, placeholder: 'e.g. 6,400 Sq Ft', section: 'Amenities' },
  { key: 'feature3', label: 'Amenity 3', type: 'text', required: false, placeholder: 'e.g. Infinity Pool', section: 'Amenities' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Schedule Private Tour', section: 'Call to Action', defaultValue: 'Schedule Private Tour' },
];

const fitnessMotivationFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. Iron Athletics', section: 'Brand', defaultValue: 'Iron Athletics' },
  { key: 'headline', label: 'Kinetic Headline', type: 'text', required: true, placeholder: 'e.g. NO LIMITS. NO EXCUSES.', section: 'Headline', defaultValue: 'NO LIMITS. NO EXCUSES.' },
  { key: 'productName', label: 'Product Name', type: 'text', required: false, placeholder: 'e.g. HYPERDRIVE PRE-WORKOUT', section: 'Product' },
  { key: 'statNumber', label: 'Stat Number', type: 'text', required: false, placeholder: 'e.g. 100%', section: 'Spotlight' },
  { key: 'statLabel', label: 'Stat Label', type: 'text', required: false, placeholder: 'e.g. PURE PERFORMANCE', section: 'Spotlight' },
  { key: 'productImageUrl', label: 'Product Image', type: 'image', required: false, section: 'Media', imageLabel: 'Product photo' },
  { key: 'feature1', label: 'Formula Spec 1', type: 'text', required: false, placeholder: 'e.g. 350mg Caffeine', section: 'Formula' },
  { key: 'feature2', label: 'Formula Spec 2', type: 'text', required: false, placeholder: 'e.g. 6g Citrulline Malate', section: 'Formula' },
  { key: 'feature3', label: 'Formula Spec 3', type: 'text', required: false, placeholder: 'e.g. Zero Sugar', section: 'Formula' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Claim 20% Off Now', section: 'Call to Action', defaultValue: 'Claim 20% Off Now' },
];

const gamingStreamHighlightFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel / Team Name', type: 'text', required: true, placeholder: 'e.g. NEXUS GAMING', section: 'Channel', defaultValue: 'NEXUS GAMING' },
  { key: 'headline', label: 'Highlight Title', type: 'text', required: true, placeholder: 'e.g. INSANE 1v5 CLUTCH MOMENT', section: 'Highlight', defaultValue: 'UNBELIEVABLE GAMEPLAY HIGHLIGHTS' },
  { key: 'productName', label: 'Clip Title', type: 'text', required: false, placeholder: 'e.g. GRAND FINALS MATCH', section: 'Highlight', defaultValue: 'INSANE 1v5 CLUTCH MOMENT' },
  { key: 'productImageUrl', label: 'Gameplay Image/Thumb', type: 'image', required: false, section: 'Media', imageLabel: 'Gameplay clip' },
  { key: 'feature1', label: 'Highlight Stat 1', type: 'text', required: false, placeholder: 'e.g. 52 Kills Record', section: 'Stats' },
  { key: 'feature2', label: 'Highlight Stat 2', type: 'text', required: false, placeholder: 'e.g. 0.01s Spike Defuse', section: 'Stats' },
  { key: 'feature3', label: 'Highlight Stat 3', type: 'text', required: false, placeholder: 'e.g. MVP Award Winner', section: 'Stats' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE & HIT THE BELL', section: 'Call to Action', defaultValue: 'SUBSCRIBE & HIT THE BELL' },
];

const youtubeShortsViralHookFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Creator / Channel', type: 'text', required: true, placeholder: 'e.g. GROWTH HACKERS', section: 'Channel', defaultValue: 'GROWTH HACKERS' },
  { key: 'headline', label: 'Curiosity Hook', type: 'textarea', required: true, placeholder: 'e.g. STOP SCROLLING! THIS CHANGES EVERYTHING 🚀', section: 'Hook', defaultValue: 'STOP SCROLLING! THIS CHANGES EVERYTHING 🚀' },
  { key: 'productName', label: 'Topic Title', type: 'text', required: true, placeholder: 'e.g. 3 SECRETS TO 10X YOUTUBE VIEWS', section: 'Topic', defaultValue: '3 SECRETS TO 10X YOUR YOUTUBE VIEWS' },
  { key: 'productImageUrl', label: 'Shorts Visual', type: 'image', required: false, section: 'Media', imageLabel: 'Shorts teaser' },
  { key: 'feature1', label: 'Key Takeaway 1', type: 'text', required: false, placeholder: 'e.g. Hook in first 2 seconds', section: 'Takeaways' },
  { key: 'feature2', label: 'Key Takeaway 2', type: 'text', required: false, placeholder: 'e.g. High contrast text captions', section: 'Takeaways' },
  { key: 'feature3', label: 'Key Takeaway 3', type: 'text', required: false, placeholder: 'e.g. End with open loop CTA', section: 'Takeaways' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY HACKS 🔔', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY HACKS 🔔' },
];

const techTutorialExplainerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Dev Channel Name', type: 'text', required: true, placeholder: 'e.g. DEV BYTE LABS', section: 'Channel', defaultValue: 'DEV BYTE LABS' },
  { key: 'productName', label: 'Tutorial Title', type: 'text', required: true, placeholder: 'e.g. BUILDING AI AGENTS WITH REMOTION', section: 'Tutorial', defaultValue: 'BUILDING AI AGENTS WITH REMOTION & NEXT.JS 15' },
  { key: 'headline', label: 'Subtitle / Focus', type: 'text', required: false, placeholder: 'e.g. MASTER MODERN DEV STACKS IN 15 MIN', section: 'Tutorial', defaultValue: 'MASTER MODERN DEV STACKS IN 15 MINUTES' },
  { key: 'codeSnippet', label: 'Code Snippet', type: 'textarea', required: false, placeholder: 'e.g. const task = await renderMedia(...)', section: 'Code' },
  { key: 'feature1', label: 'Workflow Step 1', type: 'text', required: false, placeholder: 'e.g. Setup Remotion Root & Compositions', section: 'Steps' },
  { key: 'feature2', label: 'Workflow Step 2', type: 'text', required: false, placeholder: 'e.g. Stream Zod Schemas to Video Inputs', section: 'Steps' },
  { key: 'feature3', label: 'Workflow Step 3', type: 'text', required: false, placeholder: 'e.g. Render MP4 via SSR Workers', section: 'Steps' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. CLONE REPO ON GITHUB ⚡', section: 'Call to Action', defaultValue: 'CLONE REPO ON GITHUB ⚡' },
];

const youtubeVlogIntroFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Vlog Channel Name', type: 'text', required: true, placeholder: 'e.g. WANDERLUST VLOGS', section: 'Channel', defaultValue: 'WANDERLUST VLOGS' },
  { key: 'headline', label: 'Episode Tagline', type: 'text', required: true, placeholder: 'e.g. 7 DAYS IN TOKYO & KYOTO 🇯🇵', section: 'Episode', defaultValue: 'TRAVEL EPISODE #42 — JAPAN DISCOVERIES' },
  { key: 'productName', label: 'Destination Name', type: 'text', required: true, placeholder: 'e.g. TOKYO & KYOTO DISCOVERIES', section: 'Episode', defaultValue: '7 DAYS IN TOKYO & KYOTO 🇯🇵' },
  { key: 'location', label: 'Location Stamp', type: 'text', required: false, placeholder: 'e.g. TOKYO, JAPAN 35.6762° N', section: 'Details' },
  { key: 'productImageUrl', label: 'Vlog Hero Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Polaroid photo' },
  { key: 'feature1', label: 'Chapter 1', type: 'text', required: false, placeholder: 'e.g. Day 1-2: Shibuya Night Life', section: 'Chapters' },
  { key: 'feature2', label: 'Chapter 2', type: 'text', required: false, placeholder: 'e.g. Day 3-5: Ancient Kyoto', section: 'Chapters' },
  { key: 'feature3', label: 'Chapter 3', type: 'text', required: false, placeholder: 'e.g. Day 6-7: Mt. Fuji Summit', section: 'Chapters' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. JOIN THE ADVENTURE ✈️', section: 'Call to Action', defaultValue: 'JOIN THE ADVENTURE ✈️' },
];

const financeCryptoExplainerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Show Name', type: 'text', required: true, placeholder: 'e.g. CAPITAL INSIGHTS', section: 'Show', defaultValue: 'CAPITAL INSIGHTS' },
  { key: 'headline', label: 'Market Headline', type: 'text', required: true, placeholder: 'e.g. BITCOIN SURGES PAST $95,000 🚀', section: 'Market', defaultValue: 'GLOBAL MARKET BRIEFING • Q3 OUTLOOK' },
  { key: 'productName', label: 'Breaking News Title', type: 'text', required: true, placeholder: 'e.g. BITCOIN SURGES PAST $95K', section: 'Market', defaultValue: 'BITCOIN SURGES PAST $95,000 🚀' },
  { key: 'tickerText', label: 'Ticker Bar Text', type: 'text', required: false, placeholder: 'e.g. BTC $95.4K (+4.2%) • ETH $3.8K (+6.1%)', section: 'Ticker' },
  { key: 'feature1', label: 'Stat Metric 1', type: 'text', required: false, placeholder: 'e.g. +14.8% Weekly Gains', section: 'Metrics' },
  { key: 'feature2', label: 'Stat Metric 2', type: 'text', required: false, placeholder: 'e.g. $1.85 Trillion Market Cap', section: 'Metrics' },
  { key: 'feature3', label: 'Stat Metric 3', type: 'text', required: false, placeholder: 'e.g. 84% Bullish Sentiment', section: 'Metrics' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY ALERTS 📊', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY MARKET ALERTS 📊' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Registry
// ─────────────────────────────────────────────────────────────────────────────

export const templateFieldConfigs: Record<TemplateId, TemplateFieldDefinition[]> = {
  'product-advertisement': productAdFields,
  'restaurant-promotion': restaurantPromotionFields,
  'sale-promotion': salePromotionFields,
  'cinematic-documentary': cinematicDocumentaryFields,
  'luxury-commercial': luxuryCommercialFields,
  'cinematic-product-showcase': cinematicProductShowcaseFields,
  'data-statistics-explainer': dataStatisticsExplainerFields,
  'breaking-news-intro': breakingNewsIntroFields,
  'top-10-countdown': top10CountdownFields,
  'top-5-countdown': top5CountdownFields,
  'cinematic-movie-trailer': cinematicMovieTrailerFields,
  'fashion-lookbook': fashionLookbookFields,
  'podcast-highlight': podcastHighlightFields,
  'tech-product-launch': techProductLaunchFields,
  'real-estate-showcase': realEstateShowcaseFields,
  'fitness-motivation': fitnessMotivationFields,
  'gaming-stream-highlight': gamingStreamHighlightFields,
  'youtube-shorts-viral-hook': youtubeShortsViralHookFields,
  'tech-tutorial-explainer': techTutorialExplainerFields,
  'youtube-vlog-intro': youtubeVlogIntroFields,
  'finance-crypto-explainer': financeCryptoExplainerFields,
};

/** Returns the field configuration for a template, or an empty array if unknown. */
export function getTemplateFields(templateId: TemplateId): TemplateFieldDefinition[] {
  return templateFieldConfigs[templateId] ?? [];
}
