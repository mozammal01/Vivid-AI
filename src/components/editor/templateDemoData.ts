import { getTemplateFields, type TemplateId } from "@/remotion/templates";
import type { EditorFormValues } from "./editor-schema";

/**
 * Returns tailored, template-specific demo form data for each registered template.
 * Guarantees every template has unique, high-quality demo text instead of generic fallbacks.
 */
export function getDemoFormValuesForTemplate(
  templateId: TemplateId,
  baseValues: EditorFormValues
): EditorFormValues {
  const defaults: EditorFormValues = {
    ...baseValues,
    templateId,
  };

  // Automatically apply all field-level default values defined in templateFields.ts
  const fieldDefs = getTemplateFields(templateId);
  for (const field of fieldDefs) {
    if (field.defaultValue !== undefined) {
      (defaults as any)[field.key] = field.defaultValue;
    }
  }

  switch (templateId) {
    case "breaking-news-intro":
      return {
        ...defaults,
        brandName: "NEXUS NEWS 24/7",
        tagline: "ALWAYS FIRST • ALWAYS ACCURATE",
        productName: "AI BREAKTHROUGH REVEALED",
        headline: "GLOBAL TECH SUMMIT ANNOUNCED",
        category: "WORLD NEWS",
        location: "SAN FRANCISCO, CA",
        date: "MARCH 15, 2026",
        tickerText: "BREAKING: Autonomous AI models surpass human benchmarks across major reasoning & coding tests • Global markets respond with tech rally",
        statistic: 2400000,
        statisticLabel: "People Affected Worldwide",
        ctaText: "WATCH LIVE COVERAGE 🔴",
      };

    case "top-10-countdown":
      return {
        ...defaults,
        brandName: "TECH RANKINGS 2026",
        headline: "TOP 10",
        listTitle: "TOP 10 AI TOOLS IN 2026",
        itemTitle: "Autonomous Coding Agents",
        description: "AI coding agents can now plan, write, test, and deploy full applications autonomously.",
        category: "AI & Tech",
        rank: 10,
        statistic: 98,
        statisticLabel: "Viral Impact Score",
        ctaText: "WATCH FULL LISTICLE 🍿",
      };

    case "top-5-countdown":
      return {
        ...defaults,
        brandName: "FUTURE TECH TODAY",
        headline: "TOP 5",
        listTitle: "TOP 5 FUTURE TECH INNOVATIONS",
        itemTitle: "Generative AI Models",
        description: "Generative models are revolutionizing software, design, and enterprise workflows.",
        category: "Future Tech",
        rank: 5,
        statistic: 99,
        statisticLabel: "Innovation Score",
        ctaText: "SEE TOP 5 RANKING 🔥",
      };

    case "cinematic-documentary":
      return {
        ...defaults,
        brandName: "THE DEEP BLUE OCEAN",
        tagline: "A Journey Below the Surface",
        productName: "PACIFIC OCEAN ABYSS",
        description: "Exploring the unexplored depths of oceanic biodiversity and deep sea marine sanctuaries.",
        feature1: "1982 — First Deep Submersible Dive",
        feature2: "1998 — Discovery of Hydrothermal Vents",
        feature3: "2026 — Global Marine Protection Treaty",
        ctaText: "WATCH FULL DOCUMENTARY 🍿",
      };

    case "product-advertisement":
      return {
        ...defaults,
        brandName: "NovaSpark",
        tagline: "Ignite Your Growth",
        productName: "NovaSpark Pro Platform",
        description: "AI-powered analytics and growth platform built for modern enterprise teams.",
        price: "$49 / mo",
        discount: "30% OFF",
        feature1: "Real-Time Predictive Analytics",
        feature2: "Automated Workflow Engine",
        feature3: "SOC2 Type II Security Certified",
        ctaText: "Start Free Trial ⚡",
      };

    case "restaurant-promotion":
      return {
        ...defaults,
        brandName: "BELLA ITALIA BISTRO",
        tagline: "Authentic Handcrafted Italian Flavors",
        productName: "Truffle Mushroom Risotto",
        description: "Creamy Arborio rice with black winter truffles, aged Parmigiano Reggiano, and fresh herbs.",
        price: "$28",
        discount: "20% OFF DINNER",
        feature1: "Fresh Handmade Pasta Daily",
        feature2: "Organic Farm-To-Table Ingredients",
        feature3: "Extensive Tuscan Wine Selection",
        ctaText: "RESERVE A TABLE 🍷",
      };

    case "sale-promotion":
      return {
        ...defaults,
        brandName: "URBAN THREADS",
        tagline: "SUMMER CLEARANCE EVENT",
        productName: "PREMIUM LEATHER JACKET",
        price: "$149",
        originalPrice: "$299",
        discount: "50% OFF",
        feature1: "100% Top-Grain Italian Leather",
        feature2: "Free Express Worldwide Shipping",
        feature3: "30-Day No-Questions Return Policy",
        ctaText: "SHOP FLASH SALE NOW 🛍️",
      };

    case "luxury-commercial":
      return {
        ...defaults,
        brandName: "MAISON AURA",
        productName: "AURA TIMEPIECE AUTOMATIC",
        tagline: "Timeless Elegance & Precision Engineering",
        description: "Handcrafted chronometer with sapphire crystal and 18k rose gold accent casing.",
        ctaText: "DISCOVER THE COLLECTION 💎",
      };

    case "cinematic-product-showcase":
      return {
        ...defaults,
        brandName: "LUMINA SOUND",
        tagline: "Immersive Spatial Audio",
        productName: "Lumina Pro Wireless Headphones",
        price: "$199",
        originalPrice: "$299",
        discount: "SAVE $100",
        feature1: "Active Hybrid Noise Cancellation",
        feature2: "60-Hour Playtime Battery Life",
        feature3: "Ultra-Low Latency Lossless Audio",
        ctaText: "ORDER NOW WITH FREE SHIPPING 🎧",
      };

    case "data-statistics-explainer":
      return {
        ...defaults,
        brandName: "McKinsey Data Lab",
        headline: "REMOTE WORK ADOPTION 2026",
        title: "Global Workforce Shift",
        subtitle: "A comprehensive analytical study on remote and hybrid work paradigms worldwide.",
        statistic: 78,
        percentage: 85,
        chartData: "15, 30, 48, 65, 78, 85",
        labels: "2021, 2022, 2023, 2024, 2025, 2026",
        source: "McKinsey Global Institute Report 2026",
        ctaText: "READ FULL RESEARCH REPORT 📊",
      };

    case "cinematic-movie-trailer":
      return {
        ...defaults,
        headline: "THE LAST FRONTIER",
        subtitle: "BEYOND THE KNOWN UNIVERSE",
        category: "CINEMATIC SCI-FI THRILLER",
        description: "When a deep space signal breaches defense grids, one team must navigate the deep unknown.",
        year: "2026",
        statistic: 94,
        statisticLabel: "CRITICS RATING ON ROTTEN TOMATOES",
        ctaText: "IN THEATERS THIS OCTOBER 🎬",
      };

    case "fashion-lookbook":
      return {
        ...defaults,
        brandName: "MAISON NOIR",
        tagline: "AUTUMN / WINTER 2026 COLLECTION",
        productName: "Oversized Cashmere Atelier Coat",
        price: "$890",
        description: "Double-breasted silhouette tailored from pure Mongolian cashmere with silk lining.",
        feature1: "100% Pure Mongolian Cashmere",
        feature2: "Hand-Stitched Lapels & Trim",
        feature3: "Limited Run of 50 Pieces",
        ctaText: "EXPLORE LOOKBOOK 🖤",
      };

    case "podcast-highlight":
      return {
        ...defaults,
        brandName: "THE TECH VISION PODCAST",
        headline: '"AI won\'t replace developers, but developers using AI will replace those who don\'t."',
        speaker: "Dr. Elena Vance (Head of AI Research)",
        speakerName: "Dr. Elena Vance (Head of AI Research)",
        episodeNumber: "EPISODE #142",
        ctaText: "LISTEN TO FULL EPISODE 🎙️",
      };

    case "tech-product-launch":
      return {
        ...defaults,
        brandName: "NEXUS AI LABS",
        productName: "NEXUS ENGINE v4.0",
        headline: "Autonomous AI Agent Framework",
        codeSnippet: `// initialize video worker pipeline\nconst task = await renderMedia({\n  composition: 'TechLaunch',\n  inputProps: { theme: 'dark' }\n});`,
        version: "v4.0 RELEASE",
        feature1: "10x Faster Inference Speed",
        feature2: "Zero-Latency Streaming Protocol",
        feature3: "SOC2 Enterprise Security Certified",
        ctaText: "DEPLOY IN 60 SECONDS ⚡",
      };

    case "real-estate-showcase":
      return {
        ...defaults,
        brandName: "AURA LUXURY ESTATES",
        productName: "The Grand View Oceanfront Villa",
        location: "Malibu, California",
        price: "$4,250,000",
        agentName: "Sarah Jenkins (Senior Broker)",
        agentPhone: "+1 (800) 555-REAL",
        feature1: "6 Bedrooms & 8 Custom Bathrooms",
        feature2: "7,500 Sq Ft Panoramic Oceanfront",
        feature3: "Infinity Pool & Private Helipad",
        ctaText: "SCHEDULE PRIVATE TOUR 🏡",
      };

    case "fitness-motivation":
      return {
        ...defaults,
        brandName: "IRON ATHLETICS",
        headline: "PUSH BEYOND YOUR LIMITS 🔥",
        productName: "HYPERDRIVE PRE-WORKOUT",
        statNumber: "100%",
        statLabel: "MAXIMUM PURE PERFORMANCE",
        feature1: "350mg Organic Caffeine Matrix",
        feature2: "6g L-Citrulline Pump Enhancer",
        feature3: "Zero Sugar & Zero Artificial Dyes",
        ctaText: "CLAIM YOUR 20% DISCOUNT ⚡",
      };

    case "gaming-stream-highlight":
      return {
        ...defaults,
        brandName: "NEXUS ESPORTS",
        headline: "UNBELIEVABLE 1v5 MATCH CLUTCH 🎮",
        productName: "VALORANT PRO CHAMPIONSHIP",
        feature1: "52 Kills Match Record",
        feature2: "0.01s Spike Defuse Clutch",
        feature3: "MVP Tournament Winner",
        ctaText: "SUBSCRIBE & HIT THE BELL 🔔",
      };

    case "youtube-shorts-viral-hook":
      return {
        ...defaults,
        brandName: "GROWTH HACKERS",
        headline: "STOP SCROLLING! THIS CHANGES EVERYTHING 🚀",
        productName: "3 SECRETS TO 10X YOUR YOUTUBE VIEWS",
        title: "VIRAL AUDIO HOOK PRO",
        feature1: "Hook viewers in the first 2 seconds",
        feature2: "Use high-contrast bold captions",
        feature3: "End with an open curiosity loop",
        ctaText: "SUBSCRIBE FOR DAILY HACKS 🔔",
      };

    case "tech-tutorial-explainer":
      return {
        ...defaults,
        brandName: "DEV BYTE LABS",
        productName: "BUILDING AI AGENTS WITH REMOTION & NEXT.JS",
        headline: "MASTER MODERN DEV STACKS IN 15 MINUTES",
        codeSnippet: `// initialize video worker pipeline\nconst task = await renderMedia({\n  composition: 'TechTutorial',\n  inputProps: { theme: 'dark' }\n});`,
        feature1: "Setup Remotion Root & Compositions",
        feature2: "Stream Zod Schemas to Video Inputs",
        feature3: "Render MP4 via SSR Workers",
        ctaText: "CLONE REPO ON GITHUB ⚡",
      };

    case "youtube-vlog-intro":
      return {
        ...defaults,
        brandName: "WANDERLUST VLOGS",
        headline: "7 DAYS IN TOKYO & KYOTO 🇯🇵",
        productName: "TRAVEL EPISODE #42 — JAPAN DISCOVERIES",
        location: "TOKYO, JAPAN 35.6762° N",
        feature1: "Day 1-2: Shibuya & Shinjuku Night Life",
        feature2: "Day 3-5: Ancient Temples of Kyoto",
        feature3: "Day 6-7: Mt. Fuji Summit Sunrise",
        ctaText: "JOIN THE ADVENTURE ✈️",
      };

    case "finance-crypto-explainer":
      return {
        ...defaults,
        brandName: "CAPITAL INSIGHTS",
        headline: "BITCOIN SURGES PAST $95,000 🚀",
        productName: "GLOBAL MARKET BRIEFING • Q3 OUTLOOK",
        tickerText: "BTC $95.4K (+4.2%) • ETH $3.8K (+6.1%) • SOL $210 (+8.4%)",
        feature1: "+14.8% Weekly Market Gains",
        feature2: "$1.85 Trillion Market Cap",
        feature3: "84% Bullish Investor Sentiment",
        ctaText: "SUBSCRIBE FOR DAILY MARKET ALERTS 📊",
      };

    case "creative-portfolio-showcase":
      return {
        ...defaults,
        brandName: "AURA DESIGN STUDIO",
        tagline: "WE BUILD DIGITAL PRODUCTS THAT WOW",
        productName: "FINTECH DASHBOARD REBRAND 2026",
        description: "Complete product redesign for NextGen Banking platform with 4.8 million active users.",
        feature1: "Product Strategy & Design System",
        feature2: "3D Visuals & Motion Micro-Interactions",
        feature3: "Full-Stack Next.js & WebGL Implementation",
        ctaText: "START A PROJECT WITH US 🚀",
      };

    case "saas-product-ad":
      return {
        ...defaults,
        brandName: "PULSE AI PLATFORM",
        tagline: "AUTOMATE WORKFLOWS WITH AI AGENTS",
        productName: "REAL-TIME ANALYTICS DASHBOARD",
        description: "Empower your enterprise with autonomous AI agents that analyze, report, and execute tasks in real-time.",
        feature1: "10x Faster Data Processing Speed",
        feature2: "One-Click Integrations with 50+ Apps",
        feature3: "SOC2 Type II Enterprise Security Certified",
        ctaText: "START 14-DAY FREE TRIAL ⚡",
      };

    case "course-masterclass-promo":
      return {
        ...defaults,
        brandName: "MASTERY ACADEMY",
        tagline: "ZERO TO HERO MASTERCLASS",
        productName: "FULL-STACK AI ENGINEERING MASTERCLASS",
        speakerName: "Prof. David Miller (Ex-Google DeepMind)",
        description: "Master LLM fine-tuning, autonomous agentic coding, Remotion video generation, and production deployment.",
        feature1: "40+ Hours HD Video Lessons & Source Code",
        feature2: "Build 5 Real-World Production AI Apps",
        feature3: "Certificate of Completion & Discord Access",
        ctaText: "ENROLL TODAY — 50% OFF 🎓",
      };

    case "ecommerce-flash-sale":
      return {
        ...defaults,
        brandName: "URBAN STYLE STORE",
        tagline: "MIDNIGHT FLASH SALE ⚡",
        productName: "NOISE-CANCELING WIRELESS HEADPHONES",
        price: "$129",
        originalPrice: "$299",
        discount: "60% OFF",
        description: "High-fidelity wireless sound with 40h battery life, active noise cancellation, and plush memory foam earcups.",
        feature1: "Free Express Worldwide Shipping",
        feature2: "2-Year Full Coverage Warranty Included",
        feature3: "30-Day Money Back Guarantee",
        ctaText: "SHOP FLASH SALE NOW 🛍️",
      };

    case "event-webinar-teaser":
      return {
        ...defaults,
        brandName: "GLOBAL TECH SUMMIT 2026",
        tagline: "THE ANNUAL AI & DISRUPTIVE TECH CONFERENCE",
        productName: "KEYNOTE: AUTONOMOUS AGENTS IN ENTERPRISE",
        speakerName: "Dr. Marcus Vance (Keynote Speaker)",
        eventDate: "OCTOBER 24-25 • SAN FRANCISCO, CA",
        description: "Featuring 40+ industry pioneers from OpenAI, Google DeepMind, Anthropic, and Microsoft.",
        feature1: "October 24-25 • San Francisco, CA & Online",
        feature2: "Live Keynotes & Interactive Q&A Sessions",
        feature3: "Global HD Streaming & On-Demand Replays",
        ctaText: "RESERVE YOUR FREE SPOT 🎟️",
      };

    default:
      return defaults;
  }
}
