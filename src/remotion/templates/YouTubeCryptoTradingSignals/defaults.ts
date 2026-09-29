import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeCryptoTradingSignalsProps extends VideoContentProps {
  pairSymbol?: string;
  entryTargetPrice?: string;
  profitPercentage?: string;
  leverageTag?: string;
}

export const youtubeCryptoTradingSignalsDefaultContent: YouTubeCryptoTradingSignalsProps = {
  brand: {
    name: 'CRYPTO SIGNALS PRO 📊',
    primaryColor: '#10B981',
    accentColor: '#6366F1',
  },
  product: {
    name: 'BITCOIN BULL BREAKOUT ALERT',
    description: 'Technical analysis reveals massive bullish double bottom breakout pattern.',
  },
  cta: {
    text: 'JOIN OUR FREE TELEGRAM & YOUTUBE SIGNAL CHANNEL 🚀',
    subtext: 'Daily Technical Analysis & Risk Management',
  },
  pairSymbol: 'BTC / USDT 🟢',
  entryTargetPrice: 'ENTRY: $94,500 • TARGET: $105,000',
  profitPercentage: '+112% GAINS',
  leverageTag: '10X LEVERAGE SETUP',
};
