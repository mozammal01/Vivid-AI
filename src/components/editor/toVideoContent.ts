import type { VideoContentProps } from "@/remotion/schema";
import type { EditorFormValues } from "./editor-schema";
import type { TemplateId } from "@/remotion/templates";

/**
 * Converts the flat editor form values into the nested `VideoContent` shape.
 *
 * Mapping is template-aware: fields that are template-specific are routed
 * into the correct nested property so every composition receives the data
 * it expects, while unrelated fields are safely ignored.
 */
export function toVideoContent(
  values: EditorFormValues
): VideoContentProps {
  const features = [values.feature1, values.feature2, values.feature3]
    .map((feature) => feature.trim())
    .filter((feature) => feature.length > 0);

  const chartData = values.chartData
    ? values.chartData.split(",").map((item) => Number(item.trim())).filter((num) => Number.isFinite(num))
    : undefined;

  const labels = values.labels
    ? values.labels.split(",").map((item) => item.trim()).filter((item) => item.length > 0)
    : undefined;

  const templateId = values.templateId as TemplateId;

  // Base shared content
  const content: VideoContentProps = {
    brand: {
      name: values.brandName.trim() || "Brand",
      tagline: values.tagline.trim() || undefined,
      logoUrl: values.brandLogoUrl || undefined,
      primaryColor: "#6366F1",
      accentColor: "#A855F7",
      websiteUrl: values.websiteUrl.trim() || undefined,
    },
    product: {
      name: values.productName.trim() || "Product",
      description: values.description.trim() || undefined,
      price: values.price.trim() || undefined,
      originalPrice: values.originalPrice.trim() || undefined,
      discount: values.discount.trim() || undefined,
      features: features.length > 0 ? features : undefined,
      imageUrl: values.productImageUrl || undefined,
    },
    cta: {
      text: values.ctaText.trim() || "Learn More",
      url: values.websiteUrl.trim() || undefined,
      subtext: undefined,
    },
    headline: values.headline.trim() || values.tagline.trim() || undefined,
    bodyText: values.bodyText.trim() || values.description.trim() || undefined,
    title: values.title.trim() || undefined,
    subtitle: values.subtitle.trim() || undefined,
    statistic: typeof values.statistic === "number" && Number.isFinite(values.statistic) ? values.statistic : undefined,
    percentage: typeof values.percentage === "number" && Number.isFinite(values.percentage) ? values.percentage : undefined,
    chartData,
    labels,
    source: values.source.trim() || undefined,
    category: values.category.trim() || undefined,
    location: values.location.trim() || undefined,
    date: values.date.trim() || undefined,
    tickerText: values.tickerText.trim() || undefined,
    image: values.image || undefined,
    backgroundImageUrl: values.productImageUrl || undefined,
  };

  // Template-specific overrides / additions
  switch (templateId) {
    case 'top-5-countdown': {
      return {
        ...content,
        headline: values.headline.trim() || 'TOP 5',
        listTitle: values.listTitle.trim() || 'TOP 5 TECH INNOVATIONS',
        product: {
          ...content.product,
          name: values.itemTitle.trim() || values.productName.trim() || 'Ranked Item',
          description: values.description.trim() || undefined,
          imageUrl: values.image || values.productImageUrl || undefined,
        },
        category: values.category.trim() || 'Technology',
        item5Title: values.item5Title?.trim() || 'Smart Glasses',
        item5Description: 'Smart glasses are bringing digital information directly into our everyday view.',
        item5Image: values.image || values.productImageUrl || undefined,
        item5AccentText: '#5',
        item4Title: values.item4Title?.trim() || 'AI Assistants',
        item4Description: 'AI assistants are changing how people work, communicate and access information.',
        item4Image: values.image || values.productImageUrl || undefined,
        item4AccentText: '#4',
        item3Title: values.item3Title?.trim() || values.feature3?.trim() || 'Electric Vehicles',
        item3Description: 'Electric vehicles are transforming transportation with cleaner and smarter technology.',
        item3Image: values.image || values.productImageUrl || undefined,
        item3AccentText: '#3',
        item2Title: values.item2Title?.trim() || values.feature2?.trim() || 'Robotics',
        item2Description: 'Advanced robots are becoming essential across factories, logistics and everyday life.',
        item2Image: values.image || values.productImageUrl || undefined,
        item2AccentText: '#2',
        item1Title: values.item1Title?.trim() || values.feature1?.trim() || 'Generative AI',
        item1Description: 'Generative AI is transforming software, creativity and the way businesses work.',
        item1Image: values.image || values.productImageUrl || undefined,
        item1AccentText: '#1',
      };
    }
    case 'cinematic-movie-trailer': {
      return {
        ...content,
        headline: values.headline.trim() || 'THE FUTURE IS NOW',
        title: values.headline.trim() || 'THE FUTURE IS NOW',
        subtitle: values.subtitle.trim() || 'A NEW ERA BEGINS',
        category: values.category.trim() || 'ORIGINAL SERIES',
        description: values.description.trim() || undefined,
        bodyText: values.description.trim() || 'Technology is changing the way we imagine tomorrow.',
        product: {
          ...content.product,
          name: values.productName.trim() || 'THE FUTURE IS NOW',
          description: values.description.trim() || undefined,
          imageUrl: values.productImageUrl || undefined,
        },
        image: values.image || values.productImageUrl || undefined,
        statistic: typeof values.statistic === 'number' && Number.isFinite(values.statistic) ? values.statistic : undefined,
        statisticLabel: values.statisticLabel.trim() || undefined,
        year: values.year.trim() || undefined,
      };
    }
    case 'top-10-countdown': {
      const rankValue = typeof values.rank === 'number' && Number.isFinite(values.rank) ? values.rank : 10;
      return {
        ...content,
        headline: values.headline.trim() || 'TOP 10',
        listTitle: values.listTitle.trim() || 'Top 10 Rankings',
        rank: rankValue,
        itemTitle: values.itemTitle.trim() || values.productName.trim() || 'Ranked Item',
        statisticLabel: values.statisticLabel.trim() || undefined,
        accentText: values.accentText.trim() || undefined,
        product: {
          ...content.product,
          name: values.itemTitle.trim() || values.productName.trim() || 'Ranked Item',
          description: values.description.trim() || undefined,
          imageUrl: values.image || values.productImageUrl || undefined,
        },
        statistic: typeof values.statistic === 'number' && Number.isFinite(values.statistic) ? values.statistic : undefined,
        category: values.category.trim() || undefined,
        bodyText: values.statisticLabel.trim() || undefined,
      };
    }
    case 'breaking-news-intro': {
      return {
        ...content,
        product: {
          ...content.product,
          name: values.productName.trim() || 'BREAKING NEWS',
          imageUrl: values.productImageUrl || undefined,
        },
        headline: values.headline.trim() || undefined,
        category: values.category.trim() || undefined,
        location: values.location.trim() || undefined,
        date: values.date.trim() || undefined,
        statistic: typeof values.statistic === 'number' && Number.isFinite(values.statistic) ? values.statistic : undefined,
        source: values.source.trim() || undefined,
        tickerText: values.tickerText.trim() || undefined,
        bodyText: values.bodyText.trim() || values.statisticLabel.trim() || undefined,
      };
    }
    case 'data-statistics-explainer': {
      return {
        ...content,
        headline: values.headline.trim() || undefined,
        title: values.title.trim() || values.headline.trim() || undefined,
        subtitle: values.subtitle.trim() || undefined,
        statistic: typeof values.statistic === 'number' && Number.isFinite(values.statistic) ? values.statistic : undefined,
        percentage: typeof values.percentage === 'number' && Number.isFinite(values.percentage) ? values.percentage : undefined,
        source: values.source.trim() || undefined,
        bodyText: values.bodyText.trim() || values.description.trim() || undefined,
      };
    }
    case 'cinematic-documentary': {
      return {
        ...content,
        headline: values.brandName.trim() || content.headline || 'Documentary',
        bodyText: values.description.trim() || undefined,
        product: {
          ...content.product,
          name: values.productName.trim() || content.product.name || 'Untitled',
          description: values.description.trim() || undefined,
          location: values.location?.trim() || values.productName?.trim() || 'Pacific Ocean Abyss',
          dateFrom: values.year ? parseInt(values.year, 10) : 1982,
        },
      };
    }
    case 'luxury-commercial': {
      return {
        ...content,
        brand: {
          ...content.brand,
          name: values.brandName.trim() || content.brand.name || 'Luxury Brand',
          tagline: values.tagline.trim() || undefined,
        },
        product: {
          ...content.product,
          name: values.productName.trim() || content.product.name || 'Luxury Product',
          description: values.description.trim() || undefined,
          imageUrl: values.productImageUrl || undefined,
        },
        headline: values.headline.trim() || values.tagline.trim() || undefined,
        cta: {
          ...content.cta,
          text: values.ctaText.trim() || 'Discover Collection',
        },
      };
    }
    case 'fashion-lookbook': {
      return {
        ...content,
        season: values.tagline.trim() || 'AUTUMN / WINTER',
        lookNumber: values.lookNumber?.trim() || values.category.trim() || 'LOOK 01',
      };
    }
    case 'podcast-highlight': {
      return {
        ...content,
        speaker: values.speaker?.trim() || values.speakerName?.trim() || 'Dr. Elena Vance',
        episodeNumber: values.episodeNumber?.trim() || 'EP. 142',
      };
    }
    case 'tech-product-launch': {
      return {
        ...content,
        version: values.version?.trim() || 'v4.0 RELEASE',
        codeSnippet: values.codeSnippet || '// Initialize Nexus Engine\nconst engine = new NexusEngine({\n  stream: true,\n  latency: "ultra-low"\n});',
      };
    }
    case 'real-estate-showcase': {
      return {
        ...content,
        location: values.location.trim() || 'Beverly Hills, CA',
        agentName: values.agentName?.trim() || 'Sarah Jenkins',
        agentPhone: values.agentPhone?.trim() || '+1 (800) 555-REAL',
      };
    }
    case 'fitness-motivation': {
      return {
        ...content,
        statNumber: values.statNumber?.trim() || '100%',
        statLabel: values.statLabel?.trim() || 'PURE PERFORMANCE',
      };
    }
    case 'gaming-stream-highlight': {
      return {
        ...content,
        gamerTag: values.gamerTag?.trim() || values.headline.trim() || 'SHADOW_NEXUS',
        score: values.score?.trim() || '99,450 XP',
        gameName: values.gameName?.trim() || values.gameTitle?.trim() || values.productName.trim() || 'VALORANT PRO LEAGUE',
      };
    }
    case 'youtube-shorts-viral-hook': {
      return {
        ...content,
        headline: values.headline.trim() || 'STOP SCROLLING! THIS CHANGES EVERYTHING 🚀',
        audioWaveformText: values.audioWaveformText?.trim() || values.title.trim() || 'AUDIO INSIGHT PRO',
      };
    }
    case 'tech-tutorial-explainer': {
      return {
        ...content,
        codeSnippet: values.codeSnippet || `// initialize video worker pipeline\nconst task = await renderMedia({\n  composition: 'TechTutorial',\n  inputProps: { theme: 'dark' }\n});`,
        versionBadge: values.versionBadge?.trim() || values.version?.trim() || 'v4.2 FULL GUIDE',
      };
    }
    case 'youtube-vlog-intro': {
      return {
        ...content,
        locationStamp: values.location.trim() || 'TOKYO, JAPAN 35.6762° N',
        seasonTag: values.seasonTag?.trim() || 'SEASON 4 • EP. 12',
      };
    }
    case 'finance-crypto-explainer': {
      return {
        ...content,
        marketTicker: values.tickerText.trim() || 'BTC $95.4K (+4.2%) • ETH $3.8K (+6.1%) • SOL $210 (+8.4%)',
        growthStat: values.growthStat?.trim() || '+14.8%',
      };
    }
    case 'creative-portfolio-showcase': {
      return {
        ...content,
        headline: values.headline.trim() || values.tagline.trim() || 'CREATIVE PORTFOLIO 2026',
        product: {
          ...content.product,
          name: values.productName.trim() || 'FINTECH DASHBOARD REBRAND 2026',
          description: values.description.trim() || undefined,
        },
      };
    }
    case 'saas-product-ad': {
      return {
        ...content,
        headline: values.headline.trim() || values.tagline.trim() || 'NEXT-GEN SAAS PLATFORM',
        product: {
          ...content.product,
          name: values.productName.trim() || 'REAL-TIME ANALYTICS DASHBOARD',
          description: values.description.trim() || undefined,
        },
      };
    }
    case 'course-masterclass-promo': {
      return {
        ...content,
        headline: values.headline.trim() || values.tagline.trim() || 'ZERO TO HERO MASTERCLASS',
        speakerName: values.speakerName?.trim() || 'Prof. David Miller',
        product: {
          ...content.product,
          name: values.productName.trim() || 'FULL-STACK AI ENGINEERING MASTERCLASS',
          description: values.description.trim() || undefined,
        },
      };
    }
    case 'ecommerce-flash-sale': {
      return {
        ...content,
        headline: values.headline.trim() || values.tagline.trim() || 'LIMITED TIME FLASH SALE ⚡',
        product: {
          ...content.product,
          name: values.productName.trim() || 'NOISE-CANCELING WIRELESS HEADPHONES',
          price: values.price?.trim() || '$129',
          originalPrice: values.originalPrice?.trim() || '$299',
          discount: values.discount?.trim() || '60% OFF',
        },
      };
    }
    case 'event-webinar-teaser': {
      return {
        ...content,
        headline: values.headline.trim() || values.tagline.trim() || 'LIVE VIRTUAL & IN-PERSON SUMMIT',
        eventDate: values.eventDate?.trim() || values.date?.trim() || 'OCTOBER 24-25, 2026',
        speakerName: values.speakerName?.trim() || 'Dr. Marcus Vance (Keynote)',
        product: {
          ...content.product,
          name: values.productName.trim() || 'KEYNOTE: AUTONOMOUS AGENTS IN ENTERPRISE',
          description: values.description.trim() || undefined,
        },
      };
    }
    case 'youtube-outro-endcard': {
      return {
        ...content,
        thanksMessage: values.headline.trim() || 'THANKS FOR WATCHING!',
        nextVideoTitle: values.nextVideoTitle?.trim() || values.productName.trim() || 'Top 10 AI Secrets Revealed',
        subscribersCount: values.subscribersCount?.trim() || '1.25M SUBSCRIBERS',
      };
    }
    case 'youtube-tech-review-unboxing': {
      return {
        ...content,
        techCategory: values.techCategory?.trim() || values.category.trim() || 'FLAGSHIP SMARTPHONE REVIEW',
        ratingScore: values.ratingScore?.trim() || '9.4 / 10',
        pros: features.length > 0 ? features : undefined,
      };
    }
    case 'youtube-shorts-facts-quiz': {
      return {
        ...content,
        questionText: values.questionText?.trim() || values.headline.trim() || 'Which planet in our solar system spins backwards compared to all others?',
        options: [
          values.feature1.trim() || 'A) Mars 🔴',
          values.feature2.trim() || 'B) Venus 🪐',
          values.feature3.trim() || 'C) Jupiter ⚡',
        ],
        explanationText: values.explanationText?.trim() || values.description.trim() || 'ANSWER: Venus spins clockwise on its axis!',
      };
    }
    case 'youtube-gaming-montage-intro': {
      return {
        ...content,
        gamerTag: values.gamerTag?.trim() || values.headline.trim() || 'VORTEX_NEXUS #1337',
        rankBadge: values.rankBadge?.trim() || values.category.trim() || 'GLOBAL RADIANT #1',
        killStreakCount: values.killStreakCount?.trim() || values.feature1.trim() || '52 KILLS • 0 DEATHS',
        gameTitle: values.gameTitle?.trim() || values.productName.trim() || 'VALORANT COMPETITIVE',
      };
    }
    case 'youtube-podcast-video-intro': {
      return {
        ...content,
        podcastTitle: values.podcastTitle?.trim() || values.brandName.trim() || 'THE DEEP DIVE SHOW',
        hostName: values.hostName?.trim() || values.speakerName?.trim() || 'Host: Marcus Vance',
        topicTagline: values.topicTagline?.trim() || values.headline.trim() || 'THE AGI REVOLUTION IS HERE',
      };
    }
    case 'youtube-fitness-workout-timer': {
      return {
        ...content,
        exerciseName: values.exerciseName?.trim() || values.headline.trim() || 'JUMPING JACKS & BURPEES',
        caloriesBurned: values.caloriesBurned?.trim() || values.description.trim() || 'EST. 350 KCAL BURN',
        nextExerciseName: values.nextExerciseName?.trim() || values.feature1.trim() || 'NEXT: High Knee Sprints 🏃‍♂️',
        timerDurationSeconds: typeof values.timerDurationSeconds === 'number' ? values.timerDurationSeconds : 45,
      };
    }
    case 'youtube-cinematic-travel-opener': {
      return {
        ...content,
        gpsCoordinates: values.gpsCoordinates?.trim() || values.location.trim() || '45.9765° N, 7.7491° E',
        altitudeMetres: values.altitudeMetres?.trim() || 'ALTITUDE: 3,842 METRES',
        filmTitle: values.filmTitle?.trim() || values.headline.trim() || 'THE SWISS ALPS',
        cinematicTagline: values.cinematicTagline?.trim() || values.description.trim() || 'WHERE HEAVEN TOUCHES THE EARTH',
      };
    }
    case 'youtube-news-commentary-lowerthird': {
      return {
        ...content,
        topicChapterTag: values.topicChapterTag?.trim() || values.headline.trim() || 'CHAPTER 2: FABRICATION BOTTLENECKS',
        commentatorName: values.commentatorName?.trim() || 'Evelyn Reed',
        commentatorTitle: values.commentatorTitle?.trim() || 'Senior Tech Policy Analyst',
        sourceCitationText: values.sourceCitationText?.trim() || values.source.trim() || 'SOURCE: Bloomberg Intelligence',
      };
    }
    case 'youtube-lofi-music-visualizer': {
      return {
        ...content,
        trackTitle: values.trackTitle?.trim() || values.headline.trim() || 'Late Night Coffee & Raindrops 🌧️',
        artistName: values.artistName?.trim() || values.speakerName?.trim() || 'Lofi Girl & Chillhop Music',
        streamSchedule: values.streamSchedule?.trim() || values.tickerText.trim() || 'LIVE NOW • 24/7 STUDY BEATS',
      };
    }
    case 'youtube-motivation-quote-shorts': {
      return {
        ...content,
        quoteText: values.quoteText?.trim() || values.headline.trim() || 'The mind is everything. What you think, you become.',
        quoteAuthor: values.quoteAuthor?.trim() || '— Buddha',
        keyMindsetPoint: values.keyMindsetPoint?.trim() || `${values.feature1 || '1. Master Your Thoughts'} • ${values.feature2 || '2. Take Relentless Action'} • ${values.feature3 || '3. Never Settle'}`,
      };
    }
    case 'youtube-cooking-recipe-card': {
      return {
        ...content,
        recipeName: values.recipeName?.trim() || values.productName.trim() || 'Creamy Garlic Butter Tuscan Salmon',
        prepTime: values.prepTime?.trim() || '20 MINS PREP',
        servings: values.servings?.trim() || '4 SERVINGS',
        ingredientsList: [values.feature1 || '4 Salmon Filets', values.feature2 || '3 Garlic Cloves', values.feature3 || 'Cream & Spinach'],
      };
    }
    case 'youtube-diy-craft-tutorial': {
      return {
        ...content,
        craftTitle: values.craftTitle?.trim() || values.productName.trim() || 'DIY Origami Floating Flower Lanterns',
        difficultyLevel: values.difficultyLevel?.trim() || 'EASY • 15 MINS',
        materialsNeeded: [values.feature1 || 'Craft Paper', values.feature2 || 'Scissors & Tape', values.feature3 || 'Tea Light Candle'],
        stepCount: values.stepCount?.trim() || '4 SIMPLE STEPS',
      };
    }
    case 'youtube-movie-review-rating': {
      return {
        ...content,
        movieTitle: values.movieTitle?.trim() || values.productName.trim() || 'DUNE: PART THREE',
        criticScore: values.criticScore?.trim() || '96% CERTIFIED FRESH',
        audienceScore: values.audienceScore?.trim() || '94% AUDIENCE SCORE',
        verdictBadge: values.verdictBadge?.trim() || 'MUST WATCH CINEMATIC MASTERPIECE',
      };
    }
    case 'youtube-car-auto-review': {
      return {
        ...content,
        carModelName: values.carModelName?.trim() || values.productName.trim() || 'Apex GT Supercar 2026',
        accelerationStat: values.accelerationStat?.trim() || '0-60 MPH: 2.7 SECS',
        horsepowerStat: values.horsepowerStat?.trim() || '850 HORSEPOWER',
        topSpeedStat: values.topSpeedStat?.trim() || 'TOP SPEED: 215 MPH',
      };
    }
    case 'youtube-crypto-trading-signals': {
      return {
        ...content,
        pairSymbol: values.pairSymbol?.trim() || 'BTC / USDT 🟢',
        entryTargetPrice: values.entryTargetPrice?.trim() || 'ENTRY: $94,500 • TARGET: $105,000',
        profitPercentage: values.profitPercentage?.trim() || '+112% GAINS',
        leverageTag: values.leverageTag?.trim() || '10X LEVERAGE SETUP',
      };
    }
    case 'youtube-coding-project-showcase': {
      return {
        ...content,
        repoName: values.repoName?.trim() || 'mozammal01 / Vivid-AI',
        githubStars: values.githubStars?.trim() || '2,450 GITHUB STARS',
        techStackTags: [values.feature1 || 'Next.js 15', values.feature2 || 'Remotion 4', values.feature3 || 'TypeScript'],
        terminalCommand: values.terminalCommand?.trim() || 'git clone https://github.com/mozammal01/Vivid-AI.git',
      };
    }
    case 'youtube-anime-manga-top-list': {
      return {
        ...content,
        animeTitle: values.animeTitle?.trim() || 'SOLO LEVELING • SEASON 2',
        characterName: values.characterName?.trim() || 'Sung Jin-woo (Shadow Monarch)',
        powerLevelScore: values.powerLevelScore?.trim() || 'POWER LEVEL: 99,999 S-RANK',
        studioName: values.studioName?.trim() || 'A-1 PICTURES ANIMATION',
      };
    }
    case 'youtube-real-estate-property-tour': {
      return {
        ...content,
        propertyName: values.propertyName?.trim() || values.productName.trim() || 'The Beverly Hills Modern Glass Mansion',
        propertyPriceTag: values.propertyPriceTag?.trim() || values.price?.trim() || '$12,950,000 LISTING',
        propertySpecs: [values.feature1 || '6 Bedrooms & 8 Bathrooms', values.feature2 || '9,500 Sq Ft Living Area', values.feature3 || 'Infinity Edge Pool'],
        realtorContact: values.realtorContact?.trim() || values.speakerName?.trim() || 'Listed by Luxury Homes Media',
      };
    }
    case 'youtube-life-hacks-tips': {
      return {
        ...content,
        hackTitle: values.hackTitle?.trim() || values.productName.trim() || 'THE BREAD CLIP CABLE HACK',
        problemStatement: values.problemStatement?.trim() || values.headline.trim() || 'Tired of messy cables tangling behind your desk?',
        solutionHack: values.solutionHack?.trim() || values.description.trim() || 'Use plastic bread tags to label and organize all power cables instantly!',
        hackDifficulty: values.hackDifficulty?.trim() || 'DIFFICULTY: SUPER EASY • COST: $0',
      };
    }
    case 'youtube-top-trending-news': {
      return {
        ...content,
        trendingTopic: values.trendingTopic?.trim() || '#1 TRENDING WORLDWIDE',
        viralCountText: values.viralCountText?.trim() || '14.2 MILLION VIEWS IN 2 HOURS',
        socialPostSnippet: values.socialPostSnippet?.trim() || '"I cannot believe this actually happened live on stream today..." — @ViralCreator',
      };
    }
    case 'youtube-history-storytelling': {
      return {
        ...content,
        eraTimestamp: values.eraTimestamp?.trim() || '48 BC • ALEXANDRIA, EGYPT',
        historicalEventName: values.historicalEventName?.trim() || values.productName.trim() || 'THE BURNING OF THE GREAT LIBRARY',
        historicalQuote: values.historicalQuote?.trim() || '"He who controls the past controls the future. He who controls the present controls the past."',
      };
    }
    case 'youtube-beauty-makeup-tutorial': {
      return {
        ...content,
        lookName: values.lookName?.trim() || values.productName.trim() || 'SUNSET GLOW SOFT GLAM',
        paletteColors: [values.feature1 || 'Peach Nude', values.feature2 || 'Rose Gold Shimmer', values.feature3 || 'Deep Berry Velvet'],
        discountCodeTag: values.discountCodeTag?.trim() || 'USE CODE: GLAM20 FOR 20% OFF',
      };
    }
    case 'youtube-asmr-relaxation': {
      return {
        ...content,
        soundTriggerName: values.soundTriggerName?.trim() || values.productName.trim() || 'HEAVY RAIN & SOFT GLASS TAPPING',
        binauralTag: values.binauralTag?.trim() || '3D BINAURAL SPATIAL AUDIO',
        ambientCategory: values.ambientCategory?.trim() || 'DEEP SLEEP & ANXIETY RELIEF',
      };
    }
    case 'youtube-business-case-study': {
      return {
        ...content,
        companyName: values.companyName?.trim() || 'AIRBNB CASE STUDY',
        valuationStat: values.valuationStat?.trim() || '$85 BILLION MARKET CAP',
        keyGrowthDrivers: [values.feature1 || 'Craigslist Cross-Posting Growth Hack', values.feature2 || 'Professional Photography Initiative', values.feature3 || 'User Trust Infrastructure'],
        takeawayConclusion: values.takeawayConclusion?.trim() || 'KEY TAKEAWAY: Focus on building 100 people who love your product.',
      };
    }
    default:
      return content;
  }
}
