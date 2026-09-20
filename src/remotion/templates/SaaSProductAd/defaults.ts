export const saasProductAdDefaultContent = {
  brand: {
    name: 'SYNAPSE AI',
    tagline: 'AUTONOMOUS WORKFLOW AUTOMATION',
    logoUrl: '',
    primaryColor: '#3B82F6', // Blue Accent
    accentColor: '#06B6D4', // Cyan Accent
  },
  product: {
    name: 'SYNAPSE ENTERPRISE SUITE v4.0',
    description: 'Automate 80% of your business operations with autonomous AI agents.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Zero-Code Workflow Builder',
      '99.9% Uptime SLA Guaranteed',
      'SOC2 & GDPR Compliant',
    ],
  },
  cta: {
    text: 'START 14-DAY FREE TRIAL 🚀',
    subtext: 'No credit card required • Cancel anytime',
    url: 'https://synapseai.io',
  },
  headline: 'THE NEXT-GEN AI WORKFLOW PLATFORM',
};

export type SaaSProductAdDefaultContent = typeof saasProductAdDefaultContent;
