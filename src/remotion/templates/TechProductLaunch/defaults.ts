export const techProductLaunchDefaultContent = {
  brand: {
    name: 'Nexus AI',
    tagline: 'Next-Gen Autonomous Agent Engine',
    logoUrl: '',
    primaryColor: '#00F0FF', // Cyber Neon Cyan
    accentColor: '#FF0055', // Neon Pink
  },
  product: {
    name: 'Nexus Engine v4.0',
    description: 'Sub-millisecond multi-agent orchestration powered by distributed WebAssembly clusters.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    price: 'Free Tier Available',
    features: ['0.8ms Inference Latency', '100k Concurrent Tasks', 'Zero-Config Deployment'],
  },
  cta: {
    text: 'Deploy in 60 Seconds',
    subtext: 'Get 100,000 Free Credits on Signup',
    url: 'https://nexus.ai',
  },
  headline: 'THE FUTURE OF AUTONOMOUS COMPUTE',
  version: 'v4.0 RELEASE',
  codeSnippet: 'import { createAgent } from "@nexus/sdk";\n\nconst agent = await createAgent({\n  model: "nexus-ultra-v4",\n  memory: "distributed",\n});',
};

export type TechProductLaunchDefaultContent = typeof techProductLaunchDefaultContent;
