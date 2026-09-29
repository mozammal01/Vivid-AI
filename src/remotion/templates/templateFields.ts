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
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. Ignite Your Growth', section: 'Brand', defaultValue: 'Ignite Your Growth' },
  { key: 'websiteUrl', label: 'Website URL', type: 'url', required: false, placeholder: 'https://example.com', section: 'Brand' },
  { key: 'brandLogoUrl', label: 'Brand Logo', type: 'image', required: false, section: 'Brand', imageLabel: 'Brand logo' },
  { key: 'productName', label: 'Product Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark Pro', section: 'Product', defaultValue: 'NovaSpark Pro' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short marketing description (1–2 sentences)', section: 'Product', hint: 'Max 160 characters', defaultValue: 'AI-powered analytics and growth platform for modern enterprise teams.' },
  { key: 'productImageUrl', label: 'Product Image', type: 'image', required: false, section: 'Product', imageLabel: 'Product image' },
  { key: 'price', label: 'Price', type: 'text', required: false, placeholder: '$49 / mo', section: 'Product', defaultValue: '$49 / mo' },
  { key: 'discount', label: 'Discount', type: 'text', required: false, placeholder: '30% OFF', section: 'Product', defaultValue: '30% OFF' },
  { key: 'feature1', label: 'Feature 1', type: 'text', required: false, placeholder: 'Key selling point', section: 'Key Features', defaultValue: 'Real-Time Predictive Analytics' },
  { key: 'feature2', label: 'Feature 2', type: 'text', required: false, placeholder: 'Key selling point', section: 'Key Features', defaultValue: 'Automated Workflow Engine' },
  { key: 'feature3', label: 'Feature 3', type: 'text', required: false, placeholder: 'Key selling point', section: 'Key Features', defaultValue: 'SOC2 Type II Security Certified' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Start Free Trial', section: 'Call to Action', defaultValue: 'Start Free Trial ⚡' },
];

const restaurantPromotionFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Restaurant Name', type: 'text', required: true, placeholder: 'e.g. Bella Italia', section: 'Brand', defaultValue: 'BELLA ITALIA BISTRO' },
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. Authentic Italian Flavors', section: 'Brand', defaultValue: 'Authentic Handcrafted Italian Flavors' },
  { key: 'websiteUrl', label: 'Website URL', type: 'url', required: false, placeholder: 'https://example.com', section: 'Brand' },
  { key: 'brandLogoUrl', label: 'Brand Logo', type: 'image', required: false, section: 'Brand', imageLabel: 'Brand logo' },
  { key: 'productName', label: 'Signature Dish', type: 'text', required: true, placeholder: 'e.g. Truffle Risotto', section: 'Product', defaultValue: 'Truffle Mushroom Risotto' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short description of the dish or offer', section: 'Product', hint: 'Max 160 characters', defaultValue: 'Creamy Arborio rice with black winter truffles, aged Parmigiano Reggiano, and fresh herbs.' },
  { key: 'productImageUrl', label: 'Dish Image', type: 'image', required: false, section: 'Product', imageLabel: 'Dish image' },
  { key: 'discount', label: 'Special Offer', type: 'text', required: false, placeholder: 'e.g. 20% OFF', section: 'Product', defaultValue: '20% OFF DINNER' },
  { key: 'feature1', label: 'Highlight 1', type: 'text', required: false, placeholder: 'e.g. Fresh pasta daily', section: 'Highlights', defaultValue: 'Fresh Handmade Pasta Daily' },
  { key: 'feature2', label: 'Highlight 2', type: 'text', required: false, placeholder: 'e.g. Vegan options', section: 'Highlights', defaultValue: 'Organic Farm-To-Table Ingredients' },
  { key: 'feature3', label: 'Highlight 3', type: 'text', required: false, placeholder: 'e.g. Outdoor seating', section: 'Highlights', defaultValue: 'Extensive Tuscan Wine Selection' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Reserve a Table', section: 'Call to Action', defaultValue: 'RESERVE A TABLE 🍷' },
];

const salePromotionFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark', section: 'Brand', defaultValue: 'URBAN THREADS' },
  { key: 'websiteUrl', label: 'Website URL', type: 'url', required: false, placeholder: 'https://example.com', section: 'Brand' },
  { key: 'productName', label: 'Product / Deal Name', type: 'text', required: true, placeholder: 'e.g. Flash Sale', section: 'Product', defaultValue: 'PREMIUM LEATHER JACKET' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short deal description', section: 'Product', hint: 'Max 160 characters', defaultValue: 'Limited time summer clearance on handcrafted top-grain apparel.' },
  { key: 'productImageUrl', label: 'Product Image', type: 'image', required: false, section: 'Product', imageLabel: 'Product image' },
  { key: 'price', label: 'Original Price', type: 'text', required: false, placeholder: '$99', section: 'Product', defaultValue: '$149' },
  { key: 'discount', label: 'Discount / Deal', type: 'text', required: true, placeholder: '50% OFF', section: 'Product', defaultValue: '50% OFF' },
  { key: 'feature1', label: 'Perk 1', type: 'text', required: false, placeholder: 'e.g. Free shipping', section: 'Deal Perks', defaultValue: '100% Top-Grain Italian Leather' },
  { key: 'feature2', label: 'Perk 2', type: 'text', required: false, placeholder: 'e.g. 24h support', section: 'Deal Perks', defaultValue: 'Free Express Worldwide Shipping' },
  { key: 'feature3', label: 'Perk 3', type: 'text', required: false, placeholder: 'e.g. Money-back guarantee', section: 'Deal Perks', defaultValue: '30-Day No-Questions Return Policy' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Shop Now', section: 'Call to Action', defaultValue: 'SHOP FLASH SALE NOW 🛍️' },
];

const cinematicDocumentaryFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Documentary Title', type: 'text', required: true, placeholder: 'e.g. The Silent Ocean', section: 'Title', defaultValue: 'THE DEEP BLUE OCEAN' },
  { key: 'tagline', label: 'Subtitle', type: 'text', required: false, placeholder: 'e.g. A Journey Below the Surface', section: 'Title', defaultValue: 'A Journey Below the Surface' },
  { key: 'productName', label: 'Location', type: 'text', required: false, placeholder: 'e.g. Pacific Ocean', section: 'Details', defaultValue: 'PACIFIC OCEAN ABYSS' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short synopsis or narration', section: 'Details', hint: 'Max 160 characters', defaultValue: 'Exploring the unexplored depths of oceanic biodiversity and deep sea marine sanctuaries.' },
  { key: 'feature1', label: 'Timeline Event 1', type: 'text', required: false, placeholder: 'e.g. 1982 — First dive', section: 'Timeline', defaultValue: '1982 — First Deep Submersible Dive' },
  { key: 'feature2', label: 'Timeline Event 2', type: 'text', required: false, placeholder: 'e.g. 1995 — Species discovery', section: 'Timeline', defaultValue: '1998 — Discovery of Hydrothermal Vents' },
  { key: 'feature3', label: 'Timeline Event 3', type: 'text', required: false, placeholder: 'e.g. 2024 — Conservation effort', section: 'Timeline', defaultValue: '2026 — Global Marine Protection Treaty' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Watch Full Documentary', section: 'Call to Action', defaultValue: 'Watch Full Documentary 🍿' },
];

const luxuryCommercialFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: false, placeholder: 'e.g. NovaSpark', section: 'Brand', defaultValue: 'MAISON AURA' },
  { key: 'productName', label: 'Product Name', type: 'text', required: false, placeholder: 'e.g. NovaSpark Pro', section: 'Product', defaultValue: 'AURA TIMEPIECE AUTOMATIC' },
  { key: 'description', label: 'Tagline', type: 'textarea', required: false, placeholder: 'e.g. Elegance Redefined', section: 'Product', hint: 'Max 160 characters', defaultValue: 'Timeless Elegance & Precision Engineering — Handcrafted chronometer with sapphire crystal.' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: false, placeholder: 'e.g. Discover More', section: 'Call to Action', defaultValue: 'Discover The Collection 💎' },
];

const cinematicProductShowcaseFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark', section: 'Brand', defaultValue: 'LUMINA SOUND' },
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. Ignite Your Growth', section: 'Brand', defaultValue: 'Immersive Spatial Audio' },
  { key: 'brandLogoUrl', label: 'Brand Logo', type: 'image', required: false, section: 'Brand', imageLabel: 'Brand logo' },
  { key: 'productName', label: 'Product Name', type: 'text', required: true, placeholder: 'e.g. NovaSpark Pro', section: 'Product', defaultValue: 'Lumina Pro Wireless Headphones' },
  { key: 'productImageUrl', label: 'Product Image', type: 'image', required: false, section: 'Product', imageLabel: 'Product image' },
  { key: 'price', label: 'Price', type: 'text', required: false, placeholder: '$49 / mo', section: 'Product', defaultValue: '$199' },
  { key: 'originalPrice', label: 'Original Price', type: 'text', required: false, placeholder: '$69 / mo', section: 'Product', defaultValue: '$299' },
  { key: 'discount', label: 'Discount', type: 'text', required: false, placeholder: '30% OFF', section: 'Product', defaultValue: 'SAVE $100' },
  { key: 'feature1', label: 'Feature 1', type: 'text', required: false, placeholder: 'Key feature', section: 'Key Features', defaultValue: 'Active Hybrid Noise Cancellation' },
  { key: 'feature2', label: 'Feature 2', type: 'text', required: false, placeholder: 'Key feature', section: 'Key Features', defaultValue: '60-Hour Playtime Battery Life' },
  { key: 'feature3', label: 'Feature 3', type: 'text', required: false, placeholder: 'Key feature', section: 'Key Features', defaultValue: 'Ultra-Low Latency Lossless Audio' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Start Free Trial', section: 'Call to Action', defaultValue: 'Order Now With Free Shipping 🎧' },
];

const dataStatisticsExplainerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand / Author', type: 'text', required: false, placeholder: 'e.g. DataViz Inc.', section: 'Source', defaultValue: 'McKinsey Data Lab' },
  { key: 'headline', label: 'Headline', type: 'text', required: true, placeholder: 'e.g. Remote Work Trends 2026', section: 'Content', defaultValue: 'REMOTE WORK ADOPTION 2026' },
  { key: 'title', label: 'Title', type: 'text', required: false, placeholder: 'e.g. Remote Work Trends', section: 'Content', defaultValue: 'Global Workforce Shift' },
  { key: 'subtitle', label: 'Subtitle', type: 'text', required: false, placeholder: 'e.g. A data-driven look at the future', section: 'Content', defaultValue: 'A comprehensive analytical study on remote and hybrid work paradigms.' },
  { key: 'statistic', label: 'Main Statistic', type: 'number', required: true, placeholder: 'e.g. 78', section: 'Statistics', defaultValue: 78 },
  { key: 'percentage', label: 'Percentage', type: 'number', required: false, placeholder: 'e.g. 85', section: 'Statistics', defaultValue: 85 },
  { key: 'chartData', label: 'Chart Data', type: 'array', required: false, placeholder: '10, 25, 45, 70, 90', section: 'Chart', hint: 'Comma-separated numbers', arrayCount: 1, defaultValue: '15, 30, 48, 65, 78, 85' },
  { key: 'labels', label: 'Chart Labels', type: 'array', required: false, placeholder: 'Jan, Feb, Mar, Apr, May', section: 'Chart', hint: 'Comma-separated labels', arrayCount: 1, defaultValue: '2021, 2022, 2023, 2024, 2025, 2026' },
  { key: 'source', label: 'Source', type: 'text', required: false, placeholder: 'e.g. McKinsey Global Institute', section: 'Source', defaultValue: 'McKinsey Global Institute Report 2026' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. Read Full Report', section: 'Call to Action', defaultValue: 'Read Full Research Report 📊' },
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
  { key: 'listTitle', label: 'List Title', type: 'text', required: false, placeholder: 'e.g. This Week\'s Top 5', section: 'Header', defaultValue: 'TOP 5 TECH INNOVATIONS' },
  { key: 'rank', label: 'Starting Rank', type: 'number', required: false, placeholder: 'e.g. 5', section: 'Ranking', defaultValue: 5 },
  { key: 'itemTitle', label: 'Item Title', type: 'text', required: true, placeholder: 'e.g. The Ultimate Ranking', section: 'Content', defaultValue: 'The Ultimate Ranking' },
  { key: 'item1Title', label: 'Rank #1 Spot Item', type: 'text', required: false, placeholder: 'e.g. Generative AI', section: 'Ranked Items', defaultValue: 'Generative AI' },
  { key: 'item2Title', label: 'Rank #2 Spot Item', type: 'text', required: false, placeholder: 'e.g. Robotics', section: 'Ranked Items', defaultValue: 'Robotics' },
  { key: 'item3Title', label: 'Rank #3 Spot Item', type: 'text', required: false, placeholder: 'e.g. Electric Vehicles', section: 'Ranked Items', defaultValue: 'Electric Vehicles' },
  { key: 'item4Title', label: 'Rank #4 Spot Item', type: 'text', required: false, placeholder: 'e.g. AI Assistants', section: 'Ranked Items', defaultValue: 'AI Assistants' },
  { key: 'item5Title', label: 'Rank #5 Spot Item', type: 'text', required: false, placeholder: 'e.g. Smart Glasses', section: 'Ranked Items', defaultValue: 'Smart Glasses' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Short description of the ranked item', section: 'Content', hint: 'Max 160 characters' },
  { key: 'image', label: 'Item Image', type: 'image', required: false, section: 'Media', imageLabel: 'Item image' },
  { key: 'statistic', label: 'Statistic', type: 'number', required: false, placeholder: 'e.g. 99', section: 'Statistics', defaultValue: 99 },
  { key: 'statisticLabel', label: 'Statistic Label', type: 'text', required: false, placeholder: 'e.g. Overall Score', section: 'Statistics' },
  { key: 'category', label: 'Category', type: 'text', required: false, placeholder: 'e.g. Trending', section: 'Badge', defaultValue: 'Technology' },
  { key: 'accentText', label: 'Accent Text', type: 'text', required: false, placeholder: 'e.g. #1 Pick', section: 'Badge' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: false, placeholder: 'e.g. Watch Full List', section: 'Call to Action', defaultValue: 'Watch Full List' },
];

const fashionLookbookFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g. Maison Noir', section: 'Brand', defaultValue: 'Maison Noir' },
  { key: 'tagline', label: 'Collection / Season', type: 'text', required: false, placeholder: 'e.g. Autumn / Winter Collection', section: 'Brand', defaultValue: 'AUTUMN / WINTER' },
  { key: 'lookNumber', label: 'Look Badge / Number', type: 'text', required: false, placeholder: 'e.g. LOOK 01', section: 'Lookbook', defaultValue: 'LOOK 01' },
  { key: 'productName', label: 'Look Title', type: 'text', required: true, placeholder: 'e.g. Velvet Atelier Coat', section: 'Lookbook', defaultValue: 'Velvet Atelier Coat' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Fabric & cut details', section: 'Lookbook' },
  { key: 'productImageUrl', label: 'Outfit Image', type: 'image', required: false, section: 'Media', imageLabel: 'Outfit photo' },
  { key: 'price', label: 'Price', type: 'text', required: false, placeholder: '$890', section: 'Details', defaultValue: '$890' },
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
  { key: 'gameTitle', label: 'Game Title', type: 'text', required: false, placeholder: 'e.g. VALORANT PRO LEAGUE', section: 'Game', defaultValue: 'VALORANT PRO LEAGUE' },
  { key: 'gamerTag', label: 'Player Gamer Tag', type: 'text', required: false, placeholder: 'e.g. SHADOW_NEXUS', section: 'Player', defaultValue: 'SHADOW_NEXUS' },
  { key: 'score', label: 'Player Score / Stat', type: 'text', required: false, placeholder: 'e.g. 99,450 XP', section: 'Player', defaultValue: '99,450 XP' },
  { key: 'headline', label: 'Highlight Title', type: 'text', required: true, placeholder: 'e.g. INSANE 1v5 CLUTCH MOMENT', section: 'Highlight', defaultValue: 'UNBELIEVABLE GAMEPLAY HIGHLIGHTS' },
  { key: 'productName', label: 'Clip Title', type: 'text', required: false, placeholder: 'e.g. GRAND FINALS MATCH', section: 'Highlight', defaultValue: 'INSANE 1v5 CLUTCH MOMENT' },
  { key: 'productImageUrl', label: 'Gameplay Image/Thumb', type: 'image', required: false, section: 'Media', imageLabel: 'Gameplay clip' },
  { key: 'feature1', label: 'Highlight Stat 1', type: 'text', required: false, placeholder: 'e.g. 52 Kills Record', section: 'Stats', defaultValue: '52 Kills Record' },
  { key: 'feature2', label: 'Highlight Stat 2', type: 'text', required: false, placeholder: 'e.g. 0.01s Spike Defuse', section: 'Stats', defaultValue: '0.01s Spike Defuse' },
  { key: 'feature3', label: 'Highlight Stat 3', type: 'text', required: false, placeholder: 'e.g. MVP Award Winner', section: 'Stats', defaultValue: 'MVP Award Winner' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE & HIT THE BELL', section: 'Call to Action', defaultValue: 'SUBSCRIBE & HIT THE BELL' },
];

const youtubeShortsViralHookFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Creator / Channel', type: 'text', required: true, placeholder: 'e.g. GROWTH HACKERS', section: 'Channel', defaultValue: 'GROWTH HACKERS' },
  { key: 'headline', label: 'Curiosity Hook', type: 'textarea', required: true, placeholder: 'e.g. STOP SCROLLING! THIS CHANGES EVERYTHING 🚀', section: 'Hook', defaultValue: 'STOP SCROLLING! THIS CHANGES EVERYTHING 🚀' },
  { key: 'audioWaveformText', label: 'Audio Waveform Tag', type: 'text', required: false, placeholder: 'e.g. AUDIO INSIGHT PRO', section: 'Audio', defaultValue: 'AUDIO INSIGHT PRO' },
  { key: 'productName', label: 'Topic Title', type: 'text', required: true, placeholder: 'e.g. 3 SECRETS TO 10X YOUTUBE VIEWS', section: 'Topic', defaultValue: '3 SECRETS TO 10X YOUR YOUTUBE VIEWS' },
  { key: 'productImageUrl', label: 'Shorts Visual', type: 'image', required: false, section: 'Media', imageLabel: 'Shorts teaser' },
  { key: 'feature1', label: 'Key Takeaway 1', type: 'text', required: false, placeholder: 'e.g. Hook in first 2 seconds', section: 'Takeaways', defaultValue: 'Hook in first 2 seconds' },
  { key: 'feature2', label: 'Key Takeaway 2', type: 'text', required: false, placeholder: 'e.g. High contrast text captions', section: 'Takeaways', defaultValue: 'High contrast text captions' },
  { key: 'feature3', label: 'Key Takeaway 3', type: 'text', required: false, placeholder: 'e.g. End with open loop CTA', section: 'Takeaways', defaultValue: 'End with open loop CTA' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY HACKS 🔔', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY HACKS 🔔' },
];

const techTutorialExplainerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Dev Channel Name', type: 'text', required: true, placeholder: 'e.g. DEV BYTE LABS', section: 'Channel', defaultValue: 'DEV BYTE LABS' },
  { key: 'productName', label: 'Tutorial Title', type: 'text', required: true, placeholder: 'e.g. BUILDING AI AGENTS WITH REMOTION', section: 'Tutorial', defaultValue: 'BUILDING AI AGENTS WITH REMOTION & NEXT.JS 15' },
  { key: 'headline', label: 'Subtitle / Focus', type: 'text', required: false, placeholder: 'e.g. MASTER MODERN DEV STACKS IN 15 MIN', section: 'Tutorial', defaultValue: 'MASTER MODERN DEV STACKS IN 15 MINUTES' },
  { key: 'versionBadge', label: 'Version / Badge Tag', type: 'text', required: false, placeholder: 'e.g. v4.2 FULL GUIDE', section: 'Tutorial', defaultValue: 'v4.2 FULL GUIDE' },
  { key: 'codeSnippet', label: 'Code Snippet', type: 'textarea', required: false, placeholder: 'e.g. const task = await renderMedia(...)', section: 'Code', defaultValue: '// initialize video worker pipeline\nconst task = await renderMedia({\n  composition: \'TechTutorial\',\n  inputProps: { theme: \'dark\' }\n});' },
  { key: 'feature1', label: 'Workflow Step 1', type: 'text', required: false, placeholder: 'e.g. Setup Remotion Root & Compositions', section: 'Steps', defaultValue: 'Setup Remotion Root & Compositions' },
  { key: 'feature2', label: 'Workflow Step 2', type: 'text', required: false, placeholder: 'e.g. Stream Zod Schemas to Video Inputs', section: 'Steps', defaultValue: 'Stream Zod Schemas to Video Inputs' },
  { key: 'feature3', label: 'Workflow Step 3', type: 'text', required: false, placeholder: 'e.g. Render MP4 via SSR Workers', section: 'Steps', defaultValue: 'Render MP4 via SSR Workers' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. CLONE REPO ON GITHUB ⚡', section: 'Call to Action', defaultValue: 'CLONE REPO ON GITHUB ⚡' },
];

const youtubeVlogIntroFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Vlog Channel Name', type: 'text', required: true, placeholder: 'e.g. WANDERLUST VLOGS', section: 'Channel', defaultValue: 'WANDERLUST VLOGS' },
  { key: 'headline', label: 'Episode Tagline', type: 'text', required: true, placeholder: 'e.g. 7 DAYS IN TOKYO & KYOTO 🇯🇵', section: 'Episode', defaultValue: 'TRAVEL EPISODE #42 — JAPAN DISCOVERIES' },
  { key: 'productName', label: 'Destination Name', type: 'text', required: true, placeholder: 'e.g. TOKYO & KYOTO DISCOVERIES', section: 'Episode', defaultValue: '7 DAYS IN TOKYO & KYOTO 🇯🇵' },
  { key: 'location', label: 'Location Stamp', type: 'text', required: false, placeholder: 'e.g. TOKYO, JAPAN 35.6762° N', section: 'Details', defaultValue: 'TOKYO, JAPAN 35.6762° N' },
  { key: 'seasonTag', label: 'Season & Episode Tag', type: 'text', required: false, placeholder: 'e.g. SEASON 4 • EP. 12', section: 'Details', defaultValue: 'SEASON 4 • EP. 12' },
  { key: 'productImageUrl', label: 'Vlog Hero Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Polaroid photo' },
  { key: 'feature1', label: 'Chapter 1', type: 'text', required: false, placeholder: 'e.g. Day 1-2: Shibuya Night Life', section: 'Chapters', defaultValue: 'Day 1-2: Shibuya Night Life' },
  { key: 'feature2', label: 'Chapter 2', type: 'text', required: false, placeholder: 'e.g. Day 3-5: Ancient Kyoto', section: 'Chapters', defaultValue: 'Day 3-5: Ancient Kyoto' },
  { key: 'feature3', label: 'Chapter 3', type: 'text', required: false, placeholder: 'e.g. Day 6-7: Mt. Fuji Summit', section: 'Chapters', defaultValue: 'Day 6-7: Mt. Fuji Summit' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. JOIN THE ADVENTURE ✈️', section: 'Call to Action', defaultValue: 'JOIN THE ADVENTURE ✈️' },
];

const financeCryptoExplainerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Show Name', type: 'text', required: true, placeholder: 'e.g. CAPITAL INSIGHTS', section: 'Show', defaultValue: 'CAPITAL INSIGHTS' },
  { key: 'headline', label: 'Market Headline', type: 'text', required: true, placeholder: 'e.g. BITCOIN SURGES PAST $95,000 🚀', section: 'Market', defaultValue: 'GLOBAL MARKET BRIEFING • Q3 OUTLOOK' },
  { key: 'productName', label: 'Breaking News Title', type: 'text', required: true, placeholder: 'e.g. BITCOIN SURGES PAST $95K', section: 'Market', defaultValue: 'BITCOIN SURGES PAST $95,000 🚀' },
  { key: 'tickerText', label: 'Ticker Bar Text', type: 'text', required: false, placeholder: 'e.g. BTC $95.4K (+4.2%) • ETH $3.8K (+6.1%)', section: 'Ticker', defaultValue: 'BTC $95.4K (+4.2%) • ETH $3.8K (+6.1%) • SOL $210 (+8.4%)' },
  { key: 'growthStat', label: 'Growth Percentage Stat', type: 'text', required: false, placeholder: 'e.g. +14.8%', section: 'Metrics', defaultValue: '+14.8%' },
  { key: 'feature1', label: 'Stat Metric 1', type: 'text', required: false, placeholder: 'e.g. +14.8% Weekly Gains', section: 'Metrics', defaultValue: '+14.8% Weekly Gains' },
  { key: 'feature2', label: 'Stat Metric 2', type: 'text', required: false, placeholder: 'e.g. $1.85 Trillion Market Cap', section: 'Metrics', defaultValue: '$1.85 Trillion Market Cap' },
  { key: 'feature3', label: 'Stat Metric 3', type: 'text', required: false, placeholder: 'e.g. 84% Bullish Sentiment', section: 'Metrics', defaultValue: '84% Bullish Sentiment' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY ALERTS 📊', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY MARKET ALERTS 📊' },
];

const creativePortfolioShowcaseFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Agency / Creator Name', type: 'text', required: true, placeholder: 'e.g. AURA DESIGN STUDIO', section: 'Brand', defaultValue: 'AURA DESIGN STUDIO' },
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. WE BUILD DIGITAL PRODUCTS THAT WOW', section: 'Brand' },
  { key: 'productName', label: 'Featured Project Title', type: 'text', required: true, placeholder: 'e.g. FINTECH DASHBOARD REBRAND 2026', section: 'Project', defaultValue: 'FINTECH DASHBOARD REBRAND 2026' },
  { key: 'description', label: 'Project Description', type: 'textarea', required: false, placeholder: 'Short summary of the work', section: 'Project', hint: 'Max 160 characters' },
  { key: 'productImageUrl', label: 'Project Mockup Image', type: 'image', required: false, section: 'Media', imageLabel: 'Mockup image' },
  { key: 'feature1', label: 'Core Capability 1', type: 'text', required: false, placeholder: 'e.g. Product Strategy & UI/UX', section: 'Services' },
  { key: 'feature2', label: 'Core Capability 2', type: 'text', required: false, placeholder: 'e.g. Motion Design & 3D Visuals', section: 'Services' },
  { key: 'feature3', label: 'Core Capability 3', type: 'text', required: false, placeholder: 'e.g. Full-Stack Web Development', section: 'Services' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. START A PROJECT WITH US 🚀', section: 'Call to Action', defaultValue: 'START A PROJECT WITH US 🚀' },
];

const saasProductAdFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'SaaS Platform Name', type: 'text', required: true, placeholder: 'e.g. PULSE AI PLATFORM', section: 'Brand', defaultValue: 'PULSE AI PLATFORM' },
  { key: 'tagline', label: 'Tagline', type: 'text', required: false, placeholder: 'e.g. AUTOMATE WORKFLOWS WITH AI AGENTS', section: 'Brand' },
  { key: 'productName', label: 'Main Feature Title', type: 'text', required: true, placeholder: 'e.g. REAL-TIME ANALYTICS DASHBOARD', section: 'Product', defaultValue: 'REAL-TIME ANALYTICS DASHBOARD' },
  { key: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Highlight key ROI', section: 'Product', hint: 'Max 160 characters' },
  { key: 'productImageUrl', label: 'Dashboard Screenshot', type: 'image', required: false, section: 'Media', imageLabel: 'Dashboard screenshot' },
  { key: 'feature1', label: 'SaaS Feature 1', type: 'text', required: false, placeholder: 'e.g. 10x Faster Data Processing', section: 'Features' },
  { key: 'feature2', label: 'SaaS Feature 2', type: 'text', required: false, placeholder: 'e.g. One-Click Integrations', section: 'Features' },
  { key: 'feature3', label: 'SaaS Feature 3', type: 'text', required: false, placeholder: 'e.g. SOC2 Type II Certified', section: 'Features' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. START 14-DAY FREE TRIAL ⚡', section: 'Call to Action', defaultValue: 'START 14-DAY FREE TRIAL ⚡' },
];

const courseMasterclassPromoFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Academy Name', type: 'text', required: true, placeholder: 'e.g. MASTERY ACADEMY', section: 'Brand', defaultValue: 'MASTERY ACADEMY' },
  { key: 'tagline', label: 'Course Tagline', type: 'text', required: false, placeholder: 'e.g. ZERO TO HERO MASTERCLASS', section: 'Brand' },
  { key: 'productName', label: 'Course Title', type: 'text', required: true, placeholder: 'e.g. FULL-STACK AI ENGINEERING', section: 'Course', defaultValue: 'FULL-STACK AI ENGINEERING MASTERCLASS' },
  { key: 'description', label: 'Curriculum Summary', type: 'textarea', required: false, placeholder: 'Key learning outcomes', section: 'Course', hint: 'Max 160 characters' },
  { key: 'productImageUrl', label: 'Instructor / Course Visual', type: 'image', required: false, section: 'Media', imageLabel: 'Instructor photo' },
  { key: 'speakerName', label: 'Instructor Name', type: 'text', required: false, placeholder: 'e.g. Prof. David Miller', section: 'Instructor' },
  { key: 'feature1', label: 'Curriculum Highlight 1', type: 'text', required: false, placeholder: 'e.g. 40+ Hours HD Video Lessons', section: 'Modules' },
  { key: 'feature2', label: 'Curriculum Highlight 2', type: 'text', required: false, placeholder: 'e.g. Build 5 Production AI Apps', section: 'Modules' },
  { key: 'feature3', label: 'Curriculum Highlight 3', type: 'text', required: false, placeholder: 'e.g. Certificate of Completion', section: 'Modules' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. ENROLL TODAY — 50% OFF 🎓', section: 'Call to Action', defaultValue: 'ENROLL TODAY — 50% OFF 🎓' },
];

const ecommerceFlashSaleFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Store Name', type: 'text', required: true, placeholder: 'e.g. URBAN STYLE STORE', section: 'Brand', defaultValue: 'URBAN STYLE STORE' },
  { key: 'tagline', label: 'Sale Tagline', type: 'text', required: false, placeholder: 'e.g. MIDNIGHT FLASH SALE', section: 'Brand' },
  { key: 'productName', label: 'Deal Product Name', type: 'text', required: true, placeholder: 'e.g. NOISE-CANCELING WIRELESS HEADPHONES', section: 'Product', defaultValue: 'NOISE-CANCELING WIRELESS HEADPHONES' },
  { key: 'description', label: 'Product Description', type: 'textarea', required: false, placeholder: 'Short product highlight', section: 'Product', hint: 'Max 160 characters' },
  { key: 'price', label: 'Sale Price', type: 'text', required: false, placeholder: '$129', section: 'Pricing' },
  { key: 'originalPrice', label: 'Original Price', type: 'text', required: false, placeholder: '$299', section: 'Pricing' },
  { key: 'discount', label: 'Discount Badge', type: 'text', required: false, placeholder: '60% OFF', section: 'Pricing' },
  { key: 'productImageUrl', label: 'Product Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Product photo' },
  { key: 'feature1', label: 'Sale Perk 1', type: 'text', required: false, placeholder: 'e.g. Free Express Shipping', section: 'Perks' },
  { key: 'feature2', label: 'Sale Perk 2', type: 'text', required: false, placeholder: 'e.g. 2-Year Warranty Included', section: 'Perks' },
  { key: 'feature3', label: 'Sale Perk 3', type: 'text', required: false, placeholder: 'e.g. 30-Day Money Back Guarantee', section: 'Perks' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SHOP FLASH SALE NOW 🛍️', section: 'Call to Action', defaultValue: 'SHOP FLASH SALE NOW 🛍️' },
];

const eventWebinarTeaserFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Event Name', type: 'text', required: true, placeholder: 'e.g. GLOBAL TECH SUMMIT 2026', section: 'Event', defaultValue: 'GLOBAL TECH SUMMIT 2026' },
  { key: 'tagline', label: 'Event Tagline', type: 'text', required: false, placeholder: 'e.g. THE ANNUAL AI & DISRUPTIVE TECH CONFERENCE', section: 'Event' },
  { key: 'productName', label: 'Keynote Topic', type: 'text', required: true, placeholder: 'e.g. AUTONOMOUS AGENTS IN ENTERPRISE', section: 'Keynote', defaultValue: 'KEYNOTE: AUTONOMOUS AGENTS IN ENTERPRISE' },
  { key: 'description', label: 'Event Overview', type: 'textarea', required: false, placeholder: 'Overview of speakers and tracks', section: 'Event', hint: 'Max 160 characters' },
  { key: 'speakerName', label: 'Keynote Speaker', type: 'text', required: false, placeholder: 'e.g. Dr. Marcus Vance', section: 'Speaker' },
  { key: 'eventDate', label: 'Event Date & Location', type: 'text', required: false, placeholder: 'e.g. OCTOBER 24-25 • SAN FRANCISCO', section: 'Details' },
  { key: 'productImageUrl', label: 'Speaker Photo / Banner', type: 'image', required: false, section: 'Media', imageLabel: 'Speaker photo' },
  { key: 'feature1', label: 'Agenda Topic 1', type: 'text', required: false, placeholder: 'e.g. October 24-25 • San Francisco, CA', section: 'Agenda' },
  { key: 'feature2', label: 'Agenda Topic 2', type: 'text', required: false, placeholder: 'e.g. Live Keynotes & Interactive Q&A', section: 'Agenda' },
  { key: 'feature3', label: 'Agenda Topic 3', type: 'text', required: false, placeholder: 'e.g. Global Streaming & Replays', section: 'Agenda' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. RESERVE YOUR FREE SPOT 🎟️', section: 'Call to Action', defaultValue: 'RESERVE YOUR FREE SPOT 🎟️' },
];

const youtubeOutroEndcardFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel Name', type: 'text', required: true, placeholder: 'e.g. CREATOR HUB', section: 'Channel', defaultValue: 'CREATOR HUB' },
  { key: 'headline', label: 'Thanks Message', type: 'text', required: true, placeholder: 'e.g. THANKS FOR WATCHING!', section: 'Message', defaultValue: 'THANKS FOR WATCHING!' },
  { key: 'nextVideoTitle', label: 'Next Video Card Title', type: 'text', required: false, placeholder: 'e.g. NEXT EPISODE: Master AI Tools', section: 'Video Cards', defaultValue: 'NEXT EPISODE: Master AI Tools in 2026' },
  { key: 'subscribersCount', label: 'Subscribers Count Tag', type: 'text', required: false, placeholder: 'e.g. 1.25M SUBSCRIBERS', section: 'Channel', defaultValue: '1.25M SUBSCRIBERS' },
  { key: 'ctaText', label: 'Subscribe Prompt / CTA', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY VIDEOS 🔔', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY VIDEOS 🔔' },
];

const youtubeTechReviewUnboxingFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel / Show Name', type: 'text', required: true, placeholder: 'e.g. TECH UNBOXED', section: 'Channel', defaultValue: 'TECH UNBOXED ⚡' },
  { key: 'productName', label: 'Product / Gadget Name', type: 'text', required: true, placeholder: 'e.g. CyberPhone Pro Ultra', section: 'Gadget', defaultValue: 'CyberPhone Pro Ultra 2026' },
  { key: 'techCategory', label: 'Tech Category Tag', type: 'text', required: false, placeholder: 'e.g. FLAGSHIP SMARTPHONE REVIEW', section: 'Review', defaultValue: 'FLAGSHIP SMARTPHONE REVIEW' },
  { key: 'ratingScore', label: 'Rating Score Badge', type: 'text', required: false, placeholder: 'e.g. 9.4 / 10', section: 'Review', defaultValue: '9.4 / 10' },
  { key: 'price', label: 'Product Price', type: 'text', required: false, placeholder: 'e.g. $1,199', section: 'Gadget', defaultValue: '$1,199' },
  { key: 'productImageUrl', label: 'Gadget Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Gadget image' },
  { key: 'feature1', label: 'Pro Point 1', type: 'text', required: false, placeholder: 'e.g. 160Hz OLED Display', section: 'Pros', defaultValue: '160Hz Fluid OLED Display' },
  { key: 'feature2', label: 'Pro Point 2', type: 'text', required: false, placeholder: 'e.g. 3-Day Battery Life', section: 'Pros', defaultValue: '3-Day Active Battery Life' },
  { key: 'feature3', label: 'Con Point 1', type: 'text', required: false, placeholder: 'e.g. Premium price tag', section: 'Cons', defaultValue: 'Premium price tag' },
  { key: 'description', label: 'Verdict Summary', type: 'textarea', required: false, placeholder: 'Final verdict statement', section: 'Verdict', defaultValue: 'THE UNDISPUTED KING OF FLAGSHIP PHONES IN 2026.' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. FULL REVIEW ON YOUTUBE 🍿', section: 'Call to Action', defaultValue: 'FULL REVIEW ON YOUTUBE 🍿' },
];

const youtubeShortsFactsQuizFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Trivia Channel Name', type: 'text', required: true, placeholder: 'e.g. DAILY TRIVIA SHORTS', section: 'Channel', defaultValue: 'DAILY TRIVIA SHORTS 🧠' },
  { key: 'questionText', label: 'Quiz Question', type: 'textarea', required: true, placeholder: 'e.g. Which planet spins backwards?', section: 'Question', defaultValue: 'Which planet in our solar system spins backwards compared to all others?' },
  { key: 'feature1', label: 'Option A', type: 'text', required: false, placeholder: 'e.g. A) Mars', section: 'Options', defaultValue: 'A) Mars 🔴' },
  { key: 'feature2', label: 'Option B (Correct)', type: 'text', required: false, placeholder: 'e.g. B) Venus', section: 'Options', defaultValue: 'B) Venus 🪐' },
  { key: 'feature3', label: 'Option C', type: 'text', required: false, placeholder: 'e.g. C) Jupiter', section: 'Options', defaultValue: 'C) Jupiter ⚡' },
  { key: 'explanationText', label: 'Explanation / Answer Reveal', type: 'textarea', required: false, placeholder: 'Answer explanation text', section: 'Answer', defaultValue: 'ANSWER: Venus spins clockwise on its axis!' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY QUIZZES 🔔', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY QUIZZES 🔔' },
];

const youtubeGamingMontageIntroFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Gamer / Team Name', type: 'text', required: true, placeholder: 'e.g. VORTEX GAMING', section: 'Gaming', defaultValue: 'VORTEX GAMING 🎮' },
  { key: 'gamerTag', label: 'Gamer Tag', type: 'text', required: true, placeholder: 'e.g. VORTEX_NEXUS #1337', section: 'Gamer Profile', defaultValue: 'VORTEX_NEXUS #1337' },
  { key: 'gameTitle', label: 'Game Title', type: 'text', required: true, placeholder: 'e.g. VALORANT COMPETITIVE', section: 'Montage', defaultValue: 'VALORANT COMPETITIVE' },
  { key: 'rankBadge', label: 'Rank Badge', type: 'text', required: false, placeholder: 'e.g. GLOBAL RADIANT #1', section: 'Gamer Profile', defaultValue: 'GLOBAL RADIANT #1' },
  { key: 'killStreakCount', label: 'Kill Streak / Stat', type: 'text', required: false, placeholder: 'e.g. 52 KILLS • 0 DEATHS', section: 'Stats', defaultValue: '52 KILLS • 0 DEATHS' },
  { key: 'description', label: 'Montage Description', type: 'textarea', required: false, placeholder: 'Episode details', section: 'Montage' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY CLUTCHES ⚡', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY CLUTCHES ⚡' },
];

const youtubePodcastVideoIntroFields: TemplateFieldDefinition[] = [
  { key: 'podcastTitle', label: 'Podcast Show Title', type: 'text', required: true, placeholder: 'e.g. THE DEEP DIVE SHOW', section: 'Podcast', defaultValue: 'THE DEEP DIVE SHOW' },
  { key: 'topicTagline', label: 'Episode Tagline', type: 'text', required: true, placeholder: 'e.g. THE AGI REVOLUTION IS HERE', section: 'Episode', defaultValue: 'THE AGI REVOLUTION IS HERE' },
  { key: 'productName', label: 'Episode Topic Title', type: 'text', required: true, placeholder: 'e.g. The Future of AGI', section: 'Episode', defaultValue: 'The Future of Artificial General Intelligence' },
  { key: 'hostName', label: 'Host Name', type: 'text', required: false, placeholder: 'e.g. Host: Marcus Vance', section: 'Speakers', defaultValue: 'Host: Marcus Vance' },
  { key: 'guestName', label: 'Guest Name', type: 'text', required: false, placeholder: 'e.g. Guest: Dr. Sarah Chen', section: 'Speakers', defaultValue: 'Guest: Dr. Sarah Chen' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. LISTEN & SUBSCRIBE ON YOUTUBE 🍿', section: 'Call to Action', defaultValue: 'LISTEN & SUBSCRIBE ON YOUTUBE 🍿' },
];

const youtubeFitnessWorkoutTimerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Fitness Brand Name', type: 'text', required: true, placeholder: 'e.g. SHRED 30 FITNESS', section: 'Brand', defaultValue: 'SHRED 30 FITNESS 🔥' },
  { key: 'productName', label: 'Workout Session Title', type: 'text', required: true, placeholder: 'e.g. FULL BODY FAT BURN WORKOUT', section: 'Workout', defaultValue: 'FULL BODY FAT BURN WORKOUT' },
  { key: 'exerciseName', label: 'Exercise Name', type: 'text', required: true, placeholder: 'e.g. JUMPING JACKS & BURPEES', section: 'Exercise', defaultValue: 'JUMPING JACKS & BURPEES' },
  { key: 'timerDurationSeconds', label: 'Workout Timer (Seconds)', type: 'number', required: false, placeholder: '45', section: 'Exercise', defaultValue: 45 },
  { key: 'caloriesBurned', label: 'Calorie Burn Tag', type: 'text', required: false, placeholder: 'e.g. EST. 350 KCAL BURN', section: 'Exercise', defaultValue: 'EST. 350 KCAL BURN' },
  { key: 'nextExerciseName', label: 'Next Exercise Teaser', type: 'text', required: false, placeholder: 'e.g. NEXT: High Knee Sprints 🏃‍♂️', section: 'Exercise', defaultValue: 'NEXT: High Knee Sprints 🏃‍♂️' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY WORKOUTS 🏋️', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY WORKOUTS 🏋️' },
];

const youtubeCinematicTravelOpenerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Film Channel Name', type: 'text', required: true, placeholder: 'e.g. WILD EXPLORER FILMS', section: 'Channel', defaultValue: 'WILD EXPLORER FILMS ✈️' },
  { key: 'filmTitle', label: 'Film Title', type: 'text', required: true, placeholder: 'e.g. THE SWISS ALPS', section: 'Film', defaultValue: 'THE SWISS ALPS' },
  { key: 'productName', label: 'Expedition Title', type: 'text', required: true, placeholder: 'e.g. SWITZERLAND ALPS EXPEDITION', section: 'Film', defaultValue: 'SWITZERLAND ALPS EXPEDITION' },
  { key: 'gpsCoordinates', label: 'GPS Coordinates', type: 'text', required: false, placeholder: 'e.g. 45.9765° N, 7.7491° E', section: 'Location', defaultValue: '45.9765° N, 7.7491° E' },
  { key: 'altitudeMetres', label: 'Elevation Gauge', type: 'text', required: false, placeholder: 'e.g. 4,478 METRES ELEVATION', section: 'Location', defaultValue: '4,478 METRES ELEVATION' },
  { key: 'cinematicTagline', label: 'Cinematic Tagline', type: 'text', required: false, placeholder: 'e.g. WHERE HEAVEN TOUCHES THE EARTH', section: 'Film', defaultValue: 'WHERE HEAVEN TOUCHES THE EARTH' },
  { key: 'productImageUrl', label: 'Hero Landscape Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Landscape photo' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. WATCH THE FULL CINEMATIC FILM 🍿', section: 'Call to Action', defaultValue: 'WATCH THE FULL CINEMATIC FILM 🍿' },
];

const youtubeNewsCommentaryLowerthirdFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel / Series Name', type: 'text', required: true, placeholder: 'e.g. EXPLAINER ESSAYS', section: 'Series', defaultValue: 'EXPLAINER ESSAYS 🧠' },
  { key: 'productName', label: 'Video Essay Title', type: 'text', required: true, placeholder: 'e.g. How Semiconductor Supply Chains Rule', section: 'Essay', defaultValue: 'How Semiconductor Supply Chains Rule Global Geopolitics' },
  { key: 'topicChapterTag', label: 'Chapter Badge', type: 'text', required: false, placeholder: 'e.g. CHAPTER 2: FABRICATION BOTTLENECKS', section: 'Essay', defaultValue: 'CHAPTER 2: FABRICATION BOTTLENECKS' },
  { key: 'commentatorName', label: 'Speaker / Analyst Name', type: 'text', required: false, placeholder: 'e.g. Evelyn Reed', section: 'Lower Third', defaultValue: 'Evelyn Reed' },
  { key: 'commentatorTitle', label: 'Speaker Title / Role', type: 'text', required: false, placeholder: 'e.g. Senior Tech Policy Analyst', section: 'Lower Third', defaultValue: 'Senior Tech Policy Analyst' },
  { key: 'sourceCitationText', label: 'Source Citation', type: 'text', required: false, placeholder: 'e.g. SOURCE: Bloomberg Intelligence', section: 'Source', defaultValue: 'SOURCE: Bloomberg Semiconductor Intelligence Index 2026' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DEEP DIVE ESSAYS 🔔', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DEEP DIVE ESSAYS 🔔' },
];

const youtubeLofiMusicVisualizerFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Radio / Station Name', type: 'text', required: true, placeholder: 'e.g. CHILL BEATS RADIO', section: 'Station', defaultValue: 'CHILL BEATS RADIO ☕' },
  { key: 'productName', label: 'Stream Title', type: 'text', required: true, placeholder: 'e.g. Midnight Study Sessions', section: 'Track', defaultValue: 'Midnight Study Sessions • Lofi Hip Hop Beats' },
  { key: 'trackTitle', label: 'Track Title', type: 'text', required: true, placeholder: 'e.g. Late Night Coffee & Raindrops', section: 'Track', defaultValue: 'Late Night Coffee & Raindrops 🌧️' },
  { key: 'artistName', label: 'Artist Name', type: 'text', required: false, placeholder: 'e.g. Lofi Girl & Chillhop Music', section: 'Track', defaultValue: 'Lofi Girl & Chillhop Music' },
  { key: 'streamSchedule', label: 'Stream Schedule / Status', type: 'text', required: false, placeholder: 'e.g. LIVE NOW • 24/7 STUDY BEATS', section: 'Station', defaultValue: 'LIVE NOW • 24/7 STUDY BEATS' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE & CHILL WITH US 🎧', section: 'Call to Action', defaultValue: 'SUBSCRIBE & CHILL WITH US 🎧' },
];

const youtubeMotivationQuoteShortsFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel Name', type: 'text', required: true, placeholder: 'e.g. MINDSET MASTERY', section: 'Channel', defaultValue: 'MINDSET MASTERY 👑' },
  { key: 'quoteText', label: 'Quote Text', type: 'textarea', required: true, placeholder: 'e.g. The mind is everything. What you think, you become.', section: 'Quote', defaultValue: 'The mind is everything. What you think, you become.' },
  { key: 'quoteAuthor', label: 'Quote Author', type: 'text', required: false, placeholder: 'e.g. — Buddha', section: 'Quote', defaultValue: '— Buddha' },
  { key: 'feature1', label: 'Mindset Pillar 1', type: 'text', required: false, placeholder: 'e.g. Master Your Thoughts', section: 'Pillars', defaultValue: '1. Master Your Thoughts' },
  { key: 'feature2', label: 'Mindset Pillar 2', type: 'text', required: false, placeholder: 'e.g. Take Relentless Action', section: 'Pillars', defaultValue: '2. Take Relentless Action' },
  { key: 'feature3', label: 'Mindset Pillar 3', type: 'text', required: false, placeholder: 'e.g. Never Settle', section: 'Pillars', defaultValue: '3. Never Settle' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY MOTIVATION ⚡', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY MOTIVATION ⚡' },
];

const youtubeCookingRecipeCardFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Kitchen / Show Name', type: 'text', required: true, placeholder: 'e.g. GOURMET KITCHEN', section: 'Kitchen', defaultValue: 'GOURMET KITCHEN 🍳' },
  { key: 'productName', label: 'Recipe Dish Name', type: 'text', required: true, placeholder: 'e.g. Creamy Tuscan Salmon', section: 'Recipe', defaultValue: 'Creamy Garlic Butter Tuscan Salmon' },
  { key: 'prepTime', label: 'Prep Time Badge', type: 'text', required: false, placeholder: 'e.g. 20 MINS PREP', section: 'Recipe', defaultValue: '20 MINS PREP' },
  { key: 'servings', label: 'Servings Count', type: 'text', required: false, placeholder: 'e.g. 4 SERVINGS', section: 'Recipe', defaultValue: '4 SERVINGS' },
  { key: 'feature1', label: 'Ingredient 1', type: 'text', required: false, placeholder: 'e.g. 4 Fresh Salmon Filets', section: 'Ingredients', defaultValue: '4 Fresh Salmon Filets' },
  { key: 'feature2', label: 'Ingredient 2', type: 'text', required: false, placeholder: 'e.g. 3 Cloves Minced Garlic', section: 'Ingredients', defaultValue: '3 Cloves Minced Garlic' },
  { key: 'feature3', label: 'Ingredient 3', type: 'text', required: false, placeholder: 'e.g. Heavy Cream & Spinach', section: 'Ingredients', defaultValue: 'Heavy Cream & Spinach' },
  { key: 'description', label: 'Dish Description', type: 'textarea', required: false, placeholder: 'Short taste summary', section: 'Recipe' },
  { key: 'productImageUrl', label: 'Dish Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Dish photo' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. FULL RECIPE IN DESCRIPTION 📖', section: 'Call to Action', defaultValue: 'FULL RECIPE IN DESCRIPTION 📖' },
];

const youtubeDiyCraftTutorialFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Craft Channel Name', type: 'text', required: true, placeholder: 'e.g. CRAFTY CREATIONS', section: 'Channel', defaultValue: 'CRAFTY CREATIONS ✂️' },
  { key: 'productName', label: 'DIY Project Title', type: 'text', required: true, placeholder: 'e.g. DIY Origami Lanterns', section: 'Project', defaultValue: 'DIY Origami Floating Flower Lanterns' },
  { key: 'difficultyLevel', label: 'Difficulty & Time Badge', type: 'text', required: false, placeholder: 'e.g. EASY • 15 MINS', section: 'Details', defaultValue: 'EASY • 15 MINS' },
  { key: 'stepCount', label: 'Steps Count Badge', type: 'text', required: false, placeholder: 'e.g. 4 SIMPLE STEPS', section: 'Details', defaultValue: '4 SIMPLE STEPS' },
  { key: 'feature1', label: 'Material 1', type: 'text', required: false, placeholder: 'e.g. Colored Craft Paper', section: 'Materials', defaultValue: 'Colored Craft Paper' },
  { key: 'feature2', label: 'Material 2', type: 'text', required: false, placeholder: 'e.g. Scissors & Tape', section: 'Materials', defaultValue: 'Scissors & Tape' },
  { key: 'feature3', label: 'Material 3', type: 'text', required: false, placeholder: 'e.g. LED Tea Candle', section: 'Materials', defaultValue: 'LED Tea Candle' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR WEEKLY DIY 🎨', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR WEEKLY DIY PROJECTS 🎨' },
];

const youtubeMovieReviewRatingFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Review Show Name', type: 'text', required: true, placeholder: 'e.g. FLICK CRITICS', section: 'Show', defaultValue: 'FLICK CRITICS 🍿' },
  { key: 'productName', label: 'Movie Title', type: 'text', required: true, placeholder: 'e.g. DUNE: PART THREE', section: 'Movie', defaultValue: 'DUNE: PART THREE' },
  { key: 'criticScore', label: 'Critic Score Badge', type: 'text', required: false, placeholder: 'e.g. 96% CERTIFIED FRESH', section: 'Scores', defaultValue: '96% CERTIFIED FRESH' },
  { key: 'audienceScore', label: 'Audience Score Badge', type: 'text', required: false, placeholder: 'e.g. 94% AUDIENCE SCORE', section: 'Scores', defaultValue: '94% AUDIENCE SCORE' },
  { key: 'verdictBadge', label: 'Verdict Stamp Badge', type: 'text', required: false, placeholder: 'e.g. MUST WATCH CINEMATIC MASTERPIECE', section: 'Scores', defaultValue: 'MUST WATCH CINEMATIC MASTERPIECE' },
  { key: 'description', label: 'Spoiler-Free Synopsis', type: 'textarea', required: false, placeholder: 'Movie overview', section: 'Movie' },
  { key: 'productImageUrl', label: 'Movie Poster Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Movie poster' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. FULL SPOILER REVIEW ON YOUTUBE 🎬', section: 'Call to Action', defaultValue: 'FULL SPOILER REVIEW ON YOUTUBE 🎬' },
];

const youtubeCarAutoReviewFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Auto Show Name', type: 'text', required: true, placeholder: 'e.g. APEX AUTO REVIEWS', section: 'Show', defaultValue: 'APEX AUTO REVIEWS 🏎️' },
  { key: 'productName', label: 'Car Model Name', type: 'text', required: true, placeholder: 'e.g. Apex GT Supercar 2026', section: 'Car Specs', defaultValue: 'Apex GT Supercar 2026' },
  { key: 'accelerationStat', label: '0-60 MPH Acceleration', type: 'text', required: false, placeholder: 'e.g. 0-60 MPH: 2.7 SECS', section: 'Telemetry', defaultValue: '0-60 MPH: 2.7 SECS' },
  { key: 'horsepowerStat', label: 'Horsepower Stat', type: 'text', required: false, placeholder: 'e.g. 850 HORSEPOWER', section: 'Telemetry', defaultValue: '850 HORSEPOWER' },
  { key: 'topSpeedStat', label: 'Top Speed Telemetry', type: 'text', required: false, placeholder: 'e.g. TOP SPEED: 215 MPH', section: 'Telemetry', defaultValue: 'TOP SPEED: 215 MPH' },
  { key: 'price', label: 'MSRP Price', type: 'text', required: false, placeholder: 'e.g. $245,000 MSRP', section: 'Car Specs', defaultValue: '$245,000 MSRP' },
  { key: 'productImageUrl', label: 'Supercar Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Supercar photo' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. WATCH FULL TRACK TEST DRIVE 🏁', section: 'Call to Action', defaultValue: 'WATCH FULL TRACK TEST DRIVE 🏁' },
];

const youtubeCryptoTradingSignalsFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel Name', type: 'text', required: true, placeholder: 'e.g. CRYPTO SIGNALS PRO', section: 'Channel', defaultValue: 'CRYPTO SIGNALS PRO 📊' },
  { key: 'pairSymbol', label: 'Trading Pair Symbol', type: 'text', required: true, placeholder: 'e.g. BTC / USDT 🟢', section: 'Signal', defaultValue: 'BTC / USDT 🟢' },
  { key: 'entryTargetPrice', label: 'Entry & Target Levels', type: 'text', required: true, placeholder: 'e.g. ENTRY: $94,500 • TARGET: $105,000', section: 'Signal', defaultValue: 'ENTRY: $94,500 • TARGET: $105,000' },
  { key: 'profitPercentage', label: 'Profit Target / Gain', type: 'text', required: false, placeholder: 'e.g. +112% GAINS', section: 'Signal', defaultValue: '+112% GAINS' },
  { key: 'leverageTag', label: 'Leverage / Strategy Tag', type: 'text', required: false, placeholder: 'e.g. 10X LEVERAGE SETUP', section: 'Signal', defaultValue: '10X LEVERAGE SETUP' },
  { key: 'productName', label: 'Analysis Headline', type: 'text', required: false, placeholder: 'e.g. BITCOIN BULL BREAKOUT ALERT', section: 'Signal', defaultValue: 'BITCOIN BULL BREAKOUT ALERT' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. JOIN OUR FREE SIGNAL CHANNEL 🚀', section: 'Call to Action', defaultValue: 'JOIN OUR FREE TELEGRAM & YOUTUBE SIGNAL CHANNEL 🚀' },
];

const youtubeCodingProjectShowcaseFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Developer Channel', type: 'text', required: true, placeholder: 'e.g. OPEN SOURCE LABS', section: 'Dev', defaultValue: 'OPEN SOURCE LABS 💻' },
  { key: 'repoName', label: 'GitHub Repository Title', type: 'text', required: true, placeholder: 'e.g. mozammal01 / Vivid-AI', section: 'Project', defaultValue: 'mozammal01 / Vivid-AI' },
  { key: 'githubStars', label: 'GitHub Stars Badge', type: 'text', required: false, placeholder: 'e.g. 2,450 GITHUB STARS', section: 'Project', defaultValue: '2,450 GITHUB STARS' },
  { key: 'terminalCommand', label: 'Terminal Clone Command', type: 'text', required: false, placeholder: 'e.g. git clone ...', section: 'Project', defaultValue: 'git clone https://github.com/mozammal01/Vivid-AI.git' },
  { key: 'productName', label: 'Project Headline Name', type: 'text', required: false, placeholder: 'e.g. VividAI Video Engine', section: 'Project', defaultValue: 'VividAI — Autonomous Video Generator' },
  { key: 'feature1', label: 'Tech Stack 1', type: 'text', required: false, placeholder: 'e.g. Next.js 15', section: 'Tech Stack', defaultValue: 'Next.js 15' },
  { key: 'feature2', label: 'Tech Stack 2', type: 'text', required: false, placeholder: 'e.g. Remotion 4', section: 'Tech Stack', defaultValue: 'Remotion 4' },
  { key: 'feature3', label: 'Tech Stack 3', type: 'text', required: false, placeholder: 'e.g. TypeScript', section: 'Tech Stack', defaultValue: 'TypeScript & Tailwind' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. STAR & CLONE REPO ON GITHUB ⭐', section: 'Call to Action', defaultValue: 'STAR & CLONE REPO ON GITHUB ⭐' },
];

const youtubeAnimeMangaTopListFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Anime Channel Name', type: 'text', required: true, placeholder: 'e.g. ANIME CENTRAL', section: 'Channel', defaultValue: 'ANIME CENTRAL ⚔️' },
  { key: 'characterName', label: 'Character Name Spotlight', type: 'text', required: true, placeholder: 'e.g. Sung Jin-woo (Shadow Monarch)', section: 'Character', defaultValue: 'Sung Jin-woo (Shadow Monarch)' },
  { key: 'animeTitle', label: 'Anime / Manga Title', type: 'text', required: true, placeholder: 'e.g. SOLO LEVELING • SEASON 2', section: 'Character', defaultValue: 'SOLO LEVELING • SEASON 2' },
  { key: 'powerLevelScore', label: 'Power Level Score', type: 'text', required: false, placeholder: 'e.g. POWER LEVEL: 99,999 S-RANK', section: 'Character', defaultValue: 'POWER LEVEL: 99,999 S-RANK' },
  { key: 'studioName', label: 'Animation Studio Badge', type: 'text', required: false, placeholder: 'e.g. A-1 PICTURES ANIMATION', section: 'Character', defaultValue: 'A-1 PICTURES ANIMATION' },
  { key: 'productImageUrl', label: 'Character Visual', type: 'image', required: false, section: 'Media', imageLabel: 'Character image' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY RANKINGS 🍿', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY ANIME RANKINGS 🍿' },
];

const youtubeRealEstatePropertyTourFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Media Company Name', type: 'text', required: true, placeholder: 'e.g. LUXURY HOMES MEDIA', section: 'Company', defaultValue: 'LUXURY HOMES MEDIA 🏡' },
  { key: 'productName', label: 'Property Title', type: 'text', required: true, placeholder: 'e.g. Beverly Hills Modern Mansion', section: 'Property', defaultValue: 'The Beverly Hills Modern Glass Mansion' },
  { key: 'propertyPriceTag', label: 'Listing Price Tag', type: 'text', required: false, placeholder: 'e.g. $12,950,000 LISTING', section: 'Property', defaultValue: '$12,950,000 LISTING' },
  { key: 'feature1', label: 'Specs Spec 1', type: 'text', required: false, placeholder: 'e.g. 6 Bedrooms & 8 Bathrooms', section: 'Property Specs', defaultValue: '6 Bedrooms & 8 Bathrooms' },
  { key: 'feature2', label: 'Specs Spec 2', type: 'text', required: false, placeholder: 'e.g. 9,500 Sq Ft Living Area', section: 'Property Specs', defaultValue: '9,500 Sq Ft Living Area' },
  { key: 'feature3', label: 'Specs Spec 3', type: 'text', required: false, placeholder: 'e.g. Infinity Edge Pool & Spa', section: 'Property Specs', defaultValue: 'Infinity Edge Pool & Spa' },
  { key: 'realtorContact', label: 'Realtor / Agent Contact Tag', type: 'text', required: false, placeholder: 'e.g. Listed by Luxury Homes Media', section: 'Contact', defaultValue: 'Listed by Luxury Homes Media' },
  { key: 'productImageUrl', label: 'Property Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Property photo' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SCHEDULE PRIVATE SHOWING 📞', section: 'Call to Action', defaultValue: 'SCHEDULE PRIVATE PROPERTY SHOWING 📞' },
];

const youtubeLifeHacksTipsFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel Name', type: 'text', required: true, placeholder: 'e.g. SMART HACKS', section: 'Channel', defaultValue: 'SMART HACKS 💡' },
  { key: 'hackTitle', label: 'Hack Title', type: 'text', required: true, placeholder: 'e.g. 3-Second Cable Management Hack', section: 'Hack', defaultValue: '3-Second Cable Management Hack' },
  { key: 'problemStatement', label: 'Problem Hook Statement', type: 'text', required: true, placeholder: 'e.g. Tired of messy cables?', section: 'Hack', defaultValue: 'Tired of messy cables tangling behind your desk?' },
  { key: 'solutionHack', label: 'Solution Hack Explanation', type: 'textarea', required: true, placeholder: 'How the hack works', section: 'Hack', defaultValue: 'Use plastic bread tags to label and organize all power cables instantly!' },
  { key: 'hackDifficulty', label: 'Difficulty & Cost Badge', type: 'text', required: false, placeholder: 'e.g. DIFFICULTY: SUPER EASY • COST: $0', section: 'Hack', defaultValue: 'DIFFICULTY: SUPER EASY • COST: $0' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR DAILY HACKS 🚀', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR DAILY GENIUS HACKS 🚀' },
];

const youtubeTopTrendingNewsFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'News Show Name', type: 'text', required: true, placeholder: 'e.g. TRENDING DAILY', section: 'Show', defaultValue: 'TRENDING DAILY ⚡' },
  { key: 'productName', label: 'Breaking News Headline', type: 'text', required: true, placeholder: 'e.g. VIRAL DRAMA REVEALED', section: 'News', defaultValue: 'INTERNET BREAKING VIRAL DRAMA REVEALED' },
  { key: 'trendingTopic', label: 'Trending Topic Badge', type: 'text', required: false, placeholder: 'e.g. #1 TRENDING WORLDWIDE', section: 'News', defaultValue: '#1 TRENDING WORLDWIDE' },
  { key: 'viralCountText', label: 'Viral View Count Stat', type: 'text', required: false, placeholder: 'e.g. 14.2 MILLION VIEWS IN 2 HOURS', section: 'News', defaultValue: '14.2 MILLION VIEWS IN 2 HOURS' },
  { key: 'socialPostSnippet', label: 'Social Quote / Tweet Snippet', type: 'textarea', required: false, placeholder: 'Social quote or post text', section: 'Quote', defaultValue: '"I cannot believe this actually happened live on stream today..." — @ViralCreator' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE & TURN ON NOTIFICATIONS 🔔', section: 'Call to Action', defaultValue: 'SUBSCRIBE & TURN ON NOTIFICATIONS 🔔' },
];

const youtubeHistoryStorytellingFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel Name', type: 'text', required: true, placeholder: 'e.g. HISTORY UNCOVERED', section: 'Channel', defaultValue: 'HISTORY UNCOVERED 🏛️' },
  { key: 'historicalEventName', label: 'Historical Documentary Subject', type: 'text', required: true, placeholder: 'e.g. THE LOST LIBRARY OF ALEXANDRIA', section: 'Documentary', defaultValue: 'THE LOST LIBRARY OF ALEXANDRIA' },
  { key: 'eraTimestamp', label: 'Era & Location Timestamp', type: 'text', required: false, placeholder: 'e.g. 48 BC • ALEXANDRIA, EGYPT', section: 'History', defaultValue: '48 BC • ALEXANDRIA, EGYPT' },
  { key: 'historicalQuote', label: 'Historical Quote Text', type: 'textarea', required: false, placeholder: 'Historical quote', section: 'History', defaultValue: '"He who controls the past controls the future. He who controls the present controls the past."' },
  { key: 'productImageUrl', label: 'Historical Image', type: 'image', required: false, section: 'Media', imageLabel: 'Historical photo' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. WATCH FULL DOCUMENTARY 🍿', section: 'Call to Action', defaultValue: 'WATCH THE FULL HISTORY DOCUMENTARY 🍿' },
];

const youtubeBeautyMakeupTutorialFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Channel Name', type: 'text', required: true, placeholder: 'e.g. GLAM & GLOW', section: 'Channel', defaultValue: 'GLAM & GLOW 💄' },
  { key: 'lookName', label: 'Makeup Look Title', type: 'text', required: true, placeholder: 'e.g. Sunset Glow Soft Glam', section: 'Look', defaultValue: 'Sunset Glow Soft Glam Makeup Tutorial' },
  { key: 'discountCodeTag', label: 'Promo Discount Code Badge', type: 'text', required: false, placeholder: 'e.g. USE CODE: GLAM20 FOR 20% OFF', section: 'Promo', defaultValue: 'USE CODE: GLAM20 FOR 20% OFF' },
  { key: 'feature1', label: 'Palette Shade 1', type: 'text', required: false, placeholder: 'e.g. Peach Nude', section: 'Shades', defaultValue: 'Peach Nude Base' },
  { key: 'feature2', label: 'Palette Shade 2', type: 'text', required: false, placeholder: 'e.g. Rose Gold Shimmer', section: 'Shades', defaultValue: 'Rose Gold Shimmer' },
  { key: 'feature3', label: 'Palette Shade 3', type: 'text', required: false, placeholder: 'e.g. Deep Berry Velvet', section: 'Shades', defaultValue: 'Deep Berry Velvet' },
  { key: 'productImageUrl', label: 'Look Photo', type: 'image', required: false, section: 'Media', imageLabel: 'Look photo' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SHOP PALETTE & CODE 🛍️', section: 'Call to Action', defaultValue: 'SHOP PALETTE & USE DISCOUNT CODE 🛍️' },
];

const youtubeAsmrRelaxationFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'ASMR Channel Name', type: 'text', required: true, placeholder: 'e.g. SLEEP & RELAXATION ASMR', section: 'Channel', defaultValue: 'SLEEP & RELAXATION ASMR 🌙' },
  { key: 'soundTriggerName', label: 'Track / Sound Trigger Title', type: 'text', required: true, placeholder: 'e.g. 3-Hour Rain & Gentle Tapping', section: 'Sound', defaultValue: '3-Hour Rain & Gentle Tapping for Deep Sleep' },
  { key: 'binauralTag', label: 'Spatial Audio Badge', type: 'text', required: false, placeholder: 'e.g. 3D BINAURAL SPATIAL AUDIO', section: 'Audio', defaultValue: '3D BINAURAL SPATIAL AUDIO' },
  { key: 'ambientCategory', label: 'Ambient Mood Category', type: 'text', required: false, placeholder: 'e.g. DEEP SLEEP & ANXIETY RELIEF', section: 'Audio', defaultValue: 'DEEP SLEEP & ANXIETY RELIEF' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR NIGHTLY SOUNDS 🎧', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR NIGHTLY SLEEP SOUNDS 🎧' },
];

const youtubeBusinessCaseStudyFields: TemplateFieldDefinition[] = [
  { key: 'brandName', label: 'Show Name', type: 'text', required: true, placeholder: 'e.g. STRATEGY INSIGHTS', section: 'Show', defaultValue: 'STRATEGY INSIGHTS 📈' },
  { key: 'companyName', label: 'Company / Case Study Subject', type: 'text', required: true, placeholder: 'e.g. AIRBNB CASE STUDY', section: 'Case Study', defaultValue: 'AIRBNB CASE STUDY' },
  { key: 'productName', label: 'Case Study Full Title', type: 'text', required: true, placeholder: 'e.g. HOW AIRBNB DISRUPTED HOSPITALITY', section: 'Case Study', defaultValue: 'HOW AIRBNB DISRUPTED THE $1 TRILLION HOSPITALITY INDUSTRY' },
  { key: 'valuationStat', label: 'Valuation / Market Cap Stat', type: 'text', required: false, placeholder: 'e.g. $85 BILLION MARKET CAP', section: 'Metrics', defaultValue: '$85 BILLION MARKET CAP' },
  { key: 'feature1', label: 'Key Growth Driver 1', type: 'text', required: false, placeholder: 'e.g. Craigslist Cross-Posting Growth Hack', section: 'Growth Drivers', defaultValue: 'Craigslist Cross-Posting Growth Hack' },
  { key: 'feature2', label: 'Key Growth Driver 2', type: 'text', required: false, placeholder: 'e.g. Professional Photography Initiative', section: 'Growth Drivers', defaultValue: 'Professional Photography Initiative' },
  { key: 'feature3', label: 'Key Growth Driver 3', type: 'text', required: false, placeholder: 'e.g. User Trust Infrastructure', section: 'Growth Drivers', defaultValue: 'User Trust & Review Infrastructure' },
  { key: 'takeawayConclusion', label: 'Key Takeaway Conclusion', type: 'textarea', required: false, placeholder: 'Strategic takeaway message', section: 'Conclusion', defaultValue: 'KEY TAKEAWAY: Focus on building 100 people who love your product.' },
  { key: 'ctaText', label: 'CTA Text', type: 'text', required: true, placeholder: 'e.g. SUBSCRIBE FOR BUSINESS CASE STUDIES 📊', section: 'Call to Action', defaultValue: 'SUBSCRIBE FOR BUSINESS CASE STUDIES 📊' },
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
  'creative-portfolio-showcase': creativePortfolioShowcaseFields,
  'saas-product-ad': saasProductAdFields,
  'course-masterclass-promo': courseMasterclassPromoFields,
  'ecommerce-flash-sale': ecommerceFlashSaleFields,
  'event-webinar-teaser': eventWebinarTeaserFields,
  'youtube-outro-endcard': youtubeOutroEndcardFields,
  'youtube-tech-review-unboxing': youtubeTechReviewUnboxingFields,
  'youtube-shorts-facts-quiz': youtubeShortsFactsQuizFields,
  'youtube-gaming-montage-intro': youtubeGamingMontageIntroFields,
  'youtube-podcast-video-intro': youtubePodcastVideoIntroFields,
  'youtube-fitness-workout-timer': youtubeFitnessWorkoutTimerFields,
  'youtube-cinematic-travel-opener': youtubeCinematicTravelOpenerFields,
  'youtube-news-commentary-lowerthird': youtubeNewsCommentaryLowerthirdFields,
  'youtube-lofi-music-visualizer': youtubeLofiMusicVisualizerFields,
  'youtube-motivation-quote-shorts': youtubeMotivationQuoteShortsFields,
  'youtube-cooking-recipe-card': youtubeCookingRecipeCardFields,
  'youtube-diy-craft-tutorial': youtubeDiyCraftTutorialFields,
  'youtube-movie-review-rating': youtubeMovieReviewRatingFields,
  'youtube-car-auto-review': youtubeCarAutoReviewFields,
  'youtube-crypto-trading-signals': youtubeCryptoTradingSignalsFields,
  'youtube-coding-project-showcase': youtubeCodingProjectShowcaseFields,
  'youtube-anime-manga-top-list': youtubeAnimeMangaTopListFields,
  'youtube-real-estate-property-tour': youtubeRealEstatePropertyTourFields,
  'youtube-life-hacks-tips': youtubeLifeHacksTipsFields,
  'youtube-top-trending-news': youtubeTopTrendingNewsFields,
  'youtube-history-storytelling': youtubeHistoryStorytellingFields,
  'youtube-beauty-makeup-tutorial': youtubeBeautyMakeupTutorialFields,
  'youtube-asmr-relaxation': youtubeAsmrRelaxationFields,
  'youtube-business-case-study': youtubeBusinessCaseStudyFields,
};

/** Returns the field configuration for a template, or an empty array if unknown. */
export function getTemplateFields(templateId: TemplateId): TemplateFieldDefinition[] {
  return templateFieldConfigs[templateId] ?? [];
}
