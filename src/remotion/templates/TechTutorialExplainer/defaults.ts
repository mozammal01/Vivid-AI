export const techTutorialExplainerDefaultContent = {
  brand: {
    name: 'DEV BYTE LABS',
    tagline: 'FULL-STACK CODING TUTORIALS',
    logoUrl: '',
    primaryColor: '#10B981', // Emerald Code
    accentColor: '#06B6D4', // Cyan Accent
  },
  product: {
    name: 'BUILDING AI AGENTS WITH REMOTION & NEXT.JS 15',
    description: 'Learn how to generate dynamic video render pipelines programmatically using serverless workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Step 1: Setup Remotion Root & Compositions',
      'Step 2: Stream Zod Schemas to Video Inputs',
      'Step 3: Render MP4 via SSR Workers',
    ],
  },
  cta: {
    text: 'CLONE REPO ON GITHUB ⚡',
    subtext: 'Star the repository & watch full tutorial playlist',
    url: 'https://github.com',
  },
  headline: 'MASTER MODERN DEV STACKS IN 15 MINUTES',
  codeSnippet: `// initialize video worker pipeline\nconst renderTask = await renderMedia({\n  composition: 'TechTutorial',\n  inputProps: { theme: 'dark' }\n});`,
  versionBadge: 'v4.2 FULL GUIDE',
};

export type TechTutorialExplainerDefaultContent = typeof techTutorialExplainerDefaultContent;
