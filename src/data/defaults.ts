import type {
  BrandInfo,
  CTA,
  ProductInfo,
  VideoContent,
  VideoProject,
  VideoScene,
  VideoTemplate,
  AspectRatio,
  SupportedFps,
} from '@/types';
import { ASPECT_RATIO_DIMENSIONS } from '@/types';

// ─────────────────────────────────────────────────────────────────────────────
// Demo Brand
// ─────────────────────────────────────────────────────────────────────────────

export const demoBrand: BrandInfo = {
  name: 'NovaSpark',
  tagline: 'Ignite Your Growth',
  logoUrl: '/demo/logo.svg',
  primaryColor: '#6366F1',  // indigo-500
  accentColor: '#A855F7',   // purple-500
  websiteUrl: 'https://novaspark.io',
};

// ─────────────────────────────────────────────────────────────────────────────
// Demo Product
// ─────────────────────────────────────────────────────────────────────────────

export const demoProduct: ProductInfo = {
  name: 'NovaSpark Pro',
  description: 'The AI-powered growth suite for modern SaaS teams.',
  originalPrice: '$69 / mo',
  price: '$49 / mo',
  discount: '30% OFF',
  features: [
    'AI-driven campaign automation',
    'Real-time analytics dashboard',
    'One-click social media publishing',
    'Priority 24/7 support',
  ],
  imageUrl: '/demo/product.svg',
};

// ─────────────────────────────────────────────────────────────────────────────
// Demo CTA
// ─────────────────────────────────────────────────────────────────────────────

export const demoCta: CTA = {
  text: 'Start Free Trial',
  url: 'https://novaspark.io/signup',
  subtext: 'No credit card required',
};

// ─────────────────────────────────────────────────────────────────────────────
// Demo VideoContent
// ─────────────────────────────────────────────────────────────────────────────

export const demoVideoContent: VideoContent = {
  brand: demoBrand,
  product: demoProduct,
  cta: demoCta,
  headline: 'Launch Smarter. Grow Faster.',
  bodyText:
    'NovaSpark Pro handles your campaigns so you can focus on building — not managing.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Demo Scenes  (for a 15-second 9:16 promo @ 30fps = 450 frames)
// ─────────────────────────────────────────────────────────────────────────────

export const demoScenes: VideoScene[] = [
  {
    id: 'scene-intro',
    type: 'intro',
    startFrame: 0,
    durationInFrames: 60, // 2s
    transition: { type: 'fade', durationInFrames: 15 },
    animations: {
      logo: {
        startFrame: 0,
        endFrame: 30,
        easing: 'spring',
        springMass: 1,
        springDamping: 14,
        springStiffness: 120,
      },
    },
  },
  {
    id: 'scene-headline',
    type: 'headline',
    startFrame: 60,
    durationInFrames: 90, // 3s
    transition: { type: 'slide', durationInFrames: 20 },
    animations: {
      headline: {
        startFrame: 60,
        endFrame: 90,
        easing: 'ease-out',
        direction: 'up',
      },
    },
  },
  {
    id: 'scene-features',
    type: 'features',
    startFrame: 150,
    durationInFrames: 120, // 4s
    transition: { type: 'fade', durationInFrames: 15 },
    animations: {
      featureList: {
        startFrame: 150,
        endFrame: 210,
        easing: 'spring',
        springDamping: 16,
        springStiffness: 100,
      },
    },
  },
  {
    id: 'scene-product',
    type: 'product',
    startFrame: 270,
    durationInFrames: 90, // 3s
    transition: { type: 'zoom', durationInFrames: 20 },
    animations: {
      productImage: {
        startFrame: 270,
        endFrame: 310,
        easing: 'spring',
        springMass: 0.8,
        springDamping: 12,
        springStiffness: 140,
      },
    },
  },
  {
    id: 'scene-cta',
    type: 'cta',
    startFrame: 360,
    durationInFrames: 90, // 3s
    transition: { type: 'slide', durationInFrames: 20 },
    animations: {
      ctaButton: {
        startFrame: 380,
        endFrame: 420,
        easing: 'spring',
        direction: 'up',
        springDamping: 14,
        springStiffness: 120,
      },
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Demo Templates
// ─────────────────────────────────────────────────────────────────────────────
// NOTE: The canonical template registry lives in `remotion/templates/registry.ts`.
// The entries below are plain `VideoTemplate` mock records kept for the
// project factory and future database seeding — they reference registry IDs.

export const demoTemplates: VideoTemplate[] = [
  {
    id: 'product-advertisement',
    name: 'Product Advertisement',
    description:
      'Classic five-scene product ad: brand intro, product showcase, key features, pricing, and call-to-action.',
    thumbnailUrl: '/templates/product-advertisement.svg',
    category: 'ads',
    aspectRatio: '9:16',
    durationInFrames: 300, // 10s @ 30fps
    fps: 30,
    width: 1080,
    height: 1920,
    scenes: demoScenes,
    requiredFields: ['brand.name', 'product.name', 'cta.text'],
    tags: ['product', 'launch', 'saas', 'features', 'pricing'],
  },
  {
    id: 'restaurant-promotion',
    name: 'Restaurant Promotion',
    description:
      'Warm, appetite-driven promo for restaurants and cafés: welcome, signature dish, menu highlights, dinner deal, and reservation CTA.',
    thumbnailUrl: '/templates/restaurant-promotion.svg',
    category: 'social-media',
    aspectRatio: '9:16',
    durationInFrames: 300, // 10s @ 30fps
    fps: 30,
    width: 1080,
    height: 1920,
    scenes: demoScenes,
    requiredFields: ['brand.name', 'product.name', 'cta.text'],
    tags: ['restaurant', 'food', 'menu', 'cafe', 'reservation'],
  },
  {
    id: 'sale-promotion',
    name: 'Sale Promotion',
    description:
      'High-energy flash-sale promo: giant hook headline, discount reveal, product spotlight, deal perks, and urgency CTA.',
    thumbnailUrl: '/templates/sale-promotion.svg',
    category: 'ads',
    aspectRatio: '9:16',
    durationInFrames: 300, // 10s @ 30fps
    fps: 30,
    width: 1080,
    height: 1920,
    scenes: demoScenes,
    requiredFields: ['brand.name', 'product.name', 'product.discount', 'cta.text'],
    tags: ['sale', 'discount', 'flash-sale', 'ecommerce', 'urgency'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Factory: createDefaultVideoProject
// ─────────────────────────────────────────────────────────────────────────────

export interface CreateProjectOptions {
  /** User-supplied title. */
  title?: string;
  /** Aspect ratio of the output video. Defaults to '9:16'. */
  aspectRatio?: AspectRatio;
  /** Frames per second. Defaults to 30. */
  fps?: SupportedFps;
  /**
   * Template to base the project on.
   * When provided, dimensions, duration, and scenes are inherited from the template.
   */
  template?: VideoTemplate;
  /** Initial video content. Defaults to `demoVideoContent`. */
  content?: Partial<VideoContent>;
}

/**
 * Creates a new VideoProject with sensible defaults.
 *
 * @example
 * const project = createDefaultVideoProject({ title: 'My Launch Video' });
 * const fromTemplate = createDefaultVideoProject({ template: demoTemplates[0] });
 */
export function createDefaultVideoProject(
  options: CreateProjectOptions = {}
): VideoProject {
  const {
    title = 'Untitled Video',
    aspectRatio = '9:16',
    fps = 30,
    template,
    content = {},
  } = options;

  const resolvedAspectRatio: AspectRatio = template?.aspectRatio ?? aspectRatio;
  const resolvedFps: SupportedFps = template?.fps ?? fps;
  const resolvedDuration = template?.durationInFrames ?? 450; // 15s default
  const { width, height } = ASPECT_RATIO_DIMENSIONS[resolvedAspectRatio];
  const resolvedScenes: VideoScene[] = template?.scenes ?? demoScenes;

  const now = new Date().toISOString();

  const project: VideoProject = {
    id: generateProjectId(),
    title,
    aspectRatio: resolvedAspectRatio,
    fps: resolvedFps,
    durationInFrames: resolvedDuration,
    width,
    height,
    content: {
      ...demoVideoContent,
      ...content,
      brand: { ...demoVideoContent.brand, ...(content.brand ?? {}) },
      product: { ...demoVideoContent.product, ...(content.product ?? {}) },
      cta: { ...demoVideoContent.cta, ...(content.cta ?? {}) },
    },
    scenes: resolvedScenes,
    createdAt: now,
    updatedAt: now,
    status: 'draft',
  };

  if (template) {
    project.template = {
      id: template.id,
      name: template.name,
      aspectRatio: template.aspectRatio,
      category: template.category,
    };
  }

  return project;
}

// ─────────────────────────────────────────────────────────────────────────────
// Demo Projects  (pre-built VideoProject instances for UI mock data)
// ─────────────────────────────────────────────────────────────────────────────

export const demoProjects: VideoProject[] = [
  {
    id: 'proj-demo-1',
    title: 'Global Tech Summit 2026 Keynote Teaser',
    template: {
      id: 'event-webinar-teaser',
      name: 'Live Event & Webinar Teaser Promo',
      aspectRatio: '16:9',
      category: 'social-media',
    },
    aspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    width: 1920,
    height: 1080,
    content: {
      ...demoVideoContent,
      brand: { name: 'GLOBAL TECH SUMMIT 2026', primaryColor: '#6366F1' },
      headline: 'KEYNOTE: AUTONOMOUS AGENTS IN ENTERPRISE',
      product: { name: 'Dr. Marcus Vance (Keynote Speaker)', description: 'Featuring 40+ industry pioneers from OpenAI & DeepMind.' },
      cta: { text: 'RESERVE YOUR FREE SPOT 🎟️' },
    },
    scenes: demoScenes,
    createdAt: '2026-09-18T16:20:00.000Z',
    updatedAt: '2026-09-18T16:20:00.000Z',
    status: 'completed',
    thumbnailUrl: '/templates/event-webinar-teaser.jpg',
  },
  {
    id: 'proj-demo-2',
    title: 'Pulse AI Real-Time Analytics Dashboard',
    template: {
      id: 'saas-product-ad',
      name: 'SaaS & App Product Promo Ad',
      aspectRatio: '16:9',
      category: 'ads',
    },
    aspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    width: 1920,
    height: 1080,
    content: {
      ...demoVideoContent,
      brand: { name: 'PULSE AI PLATFORM', primaryColor: '#3B82F6' },
      headline: 'AUTOMATE WORKFLOWS WITH AI AGENTS',
      product: { name: 'REAL-TIME ANALYTICS DASHBOARD', description: 'Empower your enterprise with autonomous AI workflows.' },
      cta: { text: 'START 14-DAY FREE TRIAL ⚡' },
    },
    scenes: demoScenes,
    createdAt: '2026-09-19T10:15:00.000Z',
    updatedAt: '2026-09-19T10:15:00.000Z',
    status: 'rendering',
    thumbnailUrl: '/templates/saas-product-ad.svg',
  },
  {
    id: 'proj-demo-3',
    title: 'Maison Noir Autumn/Winter Lookbook',
    template: {
      id: 'fashion-lookbook',
      name: 'Fashion Lookbook',
      aspectRatio: '9:16',
      category: 'social-media',
    },
    aspectRatio: '9:16',
    fps: 30,
    durationInFrames: 450,
    width: 1080,
    height: 1920,
    content: {
      brand: { name: 'MAISON NOIR', primaryColor: '#EC4899' },
      product: { name: 'Oversized Cashmere Atelier Coat', price: '$890' },
      cta: { text: 'EXPLORE LOOKBOOK 🖤' },
      headline: 'AUTUMN / WINTER 2026 COLLECTION',
    },
    scenes: demoScenes,
    createdAt: '2026-09-16T18:10:00.000Z',
    updatedAt: '2026-09-16T18:10:00.000Z',
    status: 'completed',
    thumbnailUrl: '/templates/fashion-lookbook.jpg',
  },
  {
    id: 'proj-demo-4',
    title: 'Full-Stack AI Engineering Masterclass',
    template: {
      id: 'course-masterclass-promo',
      name: 'Online Course & Masterclass Promo',
      aspectRatio: '16:9',
      category: 'tutorial',
    },
    aspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    width: 1920,
    height: 1080,
    content: {
      brand: { name: 'MASTERY ACADEMY', primaryColor: '#8B5CF6' },
      product: { name: 'FULL-STACK AI ENGINEERING MASTERCLASS', description: '40+ Hours HD Video Lessons & Code' },
      cta: { text: 'ENROLL TODAY — 50% OFF 🎓' },
      headline: 'ZERO TO HERO MASTERCLASS',
    },
    scenes: demoScenes,
    createdAt: '2026-09-15T12:00:00.000Z',
    updatedAt: '2026-09-15T12:00:00.000Z',
    status: 'completed',
    thumbnailUrl: '/templates/course-masterclass-promo.svg',
  },
  {
    id: 'proj-demo-5',
    title: 'Urban Style Headphone Midnight Flash Sale',
    template: {
      id: 'ecommerce-flash-sale',
      name: 'E-Commerce Flash Sale & Deal Promo',
      aspectRatio: '16:9',
      category: 'ads',
    },
    aspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    width: 1920,
    height: 1080,
    content: {
      brand: { name: 'URBAN STYLE STORE', primaryColor: '#EF4444' },
      product: { name: 'NOISE-CANCELING WIRELESS HEADPHONES', price: '$129', originalPrice: '$299', discount: '60% OFF' },
      cta: { text: 'SHOP FLASH SALE NOW 🛍️' },
      headline: 'MIDNIGHT FLASH SALE ⚡',
    },
    scenes: demoScenes,
    createdAt: '2026-09-14T09:30:00.000Z',
    updatedAt: '2026-09-14T09:30:00.000Z',
    status: 'completed',
    thumbnailUrl: '/templates/ecommerce-flash-sale.svg',
  },
  {
    id: 'proj-demo-6',
    title: 'Bitcoin $95,000 Crypto Market Update',
    template: {
      id: 'finance-crypto-explainer',
      name: 'Finance & Crypto Market Update',
      aspectRatio: '16:9',
      category: 'explainer',
    },
    aspectRatio: '16:9',
    fps: 30,
    durationInFrames: 450,
    width: 1920,
    height: 1080,
    content: {
      brand: { name: 'CAPITAL INSIGHTS', primaryColor: '#10B981' },
      product: { name: 'GLOBAL MARKET BRIEFING • Q3 OUTLOOK' },
      cta: { text: 'SUBSCRIBE FOR DAILY ALERTS 📊' },
      headline: 'BITCOIN SURGES PAST $95,000 🚀',
    },
    scenes: demoScenes,
    createdAt: '2026-09-13T14:15:00.000Z',
    updatedAt: '2026-09-13T14:15:00.000Z',
    status: 'completed',
    thumbnailUrl: '/templates/finance-crypto-explainer.svg',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Generates a short collision-resistant project ID.
 * Not cryptographically secure — sufficient for client-side state.
 */
function generateProjectId(): string {
  // Client-side ID generation only — never called inside a Remotion
  // composition, so true randomness here is safe and intended.
  // eslint-disable-next-line @remotion/deterministic-randomness
  return `proj-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
