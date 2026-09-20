import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import type { VideoContentProps } from '@/remotion/schema';
import { scaleScenesToDuration } from '@/remotion/utils/scenes';
import {
  useSceneOpacity,
  useResponsiveLayout,
} from '../../animations';
import {
  KineticTypography,
  CTAButton,
} from '../../components';
import { financeCryptoExplainerScenes } from './scenes';
import { financeCryptoExplainerDefaultContent } from './defaults';

const BULL_GREEN = '#10B981';
const GOLD = '#EAB308';
const FINTECH_DARK = '#0B132B';
const CARD_BG = '#1C2541';
const WHITE = '#FFFFFF';

interface FinanceProps extends VideoContentProps {
  marketTicker?: string;
  growthStat?: string;
}

const AnimatedLineChart: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = Math.min(1, frame / 60);

  return (
    <div style={{ width: '100%', height: 140, position: 'relative' }}>
      <svg width="100%" height="100%" viewBox="0 0 500 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BULL_GREEN} stopOpacity="0.4" />
            <stop offset="100%" stopColor={BULL_GREEN} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0,120 Q 100,100 180,60 T 320,80 T 500,10"
          fill="none"
          stroke={BULL_GREEN}
          strokeWidth="4"
          strokeDasharray="600"
          strokeDashoffset={600 * (1 - progress)}
        />
        <path
          d="M 0,120 Q 100,100 180,60 T 320,80 T 500,10 L 500,140 L 0,140 Z"
          fill="url(#chartGlow)"
        />
      </svg>
    </div>
  );
};

const HeadlineIntroScene: React.FC<FinanceProps & { durationInFrames: number }> = ({
  brand,
  headline = financeCryptoExplainerDefaultContent.headline,
  marketTicker = financeCryptoExplainerDefaultContent.marketTicker,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: FINTECH_DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${BULL_GREEN}18 0%, transparent 70%)`,
        }}
      />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          padding: `0 ${layout.paddingX}px`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: `1px solid ${BULL_GREEN}`,
            color: BULL_GREEN,
            fontWeight: 800,
            fontSize: 13,
            padding: '6px 16px',
            borderRadius: 20,
            letterSpacing: '0.12em',
          }}
        >
          📈 {headline}
        </div>

        <KineticTypography
          text={brand?.name || financeCryptoExplainerDefaultContent.brand.name}
          accentColor={BULL_GREEN}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            background: CARD_BG,
            padding: '12px 24px',
            borderRadius: 8,
            border: `1px solid rgba(255,255,255,0.1)`,
            color: GOLD,
            fontFamily: 'monospace',
            fontSize: layout.bodyFontSize * 0.9,
            maxWidth: 750,
          }}
        >
          {marketTicker}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ChartGrowthScene: React.FC<FinanceProps & { durationInFrames: number }> = ({
  product,
  growthStat = financeCryptoExplainerDefaultContent.growthStat,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: FINTECH_DARK }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            width: layout.horizontalLayout ? '48%' : '90%',
            maxWidth: 550,
            background: CARD_BG,
            borderRadius: 16,
            padding: 24,
            border: `1px solid rgba(16, 185, 129, 0.4)`,
            boxShadow: `0 0 30px rgba(16, 185, 129, 0.15)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <div style={{ color: WHITE, fontWeight: 700, fontSize: 16 }}>MARKET MOMENTUM</div>
            <div
              style={{
                background: BULL_GREEN,
                color: FINTECH_DARK,
                fontWeight: 900,
                fontSize: 14,
                padding: '4px 10px',
                borderRadius: 6,
              }}
            >
              {growthStat}
            </div>
          </div>
          <AnimatedLineChart />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            maxWidth: 480,
            gap: 16,
          }}
        >
          <h2
            style={{
              color: WHITE,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || financeCryptoExplainerDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || financeCryptoExplainerDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const StatsGridScene: React.FC<FinanceProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || financeCryptoExplainerDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: FINTECH_DARK }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <KineticTypography
          text="KEY FINANCIAL INDICATORS 📊"
          accentColor={BULL_GREEN}
          style={{
            fontSize: layout.titleFontSize,
            color: BULL_GREEN,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: layout.horizontalLayout ? 'row' : 'column',
            gap: 20,
            width: '100%',
            maxWidth: 900,
            justifyContent: 'center',
          }}
        >
          {features.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: CARD_BG,
                border: `1px solid ${i === 0 ? BULL_GREEN : i === 1 ? GOLD : WHITE}`,
                borderRadius: 12,
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 8 }}>
                {i === 0 ? '🚀' : i === 1 ? '💰' : '📊'}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontWeight: 800,
                  fontSize: layout.subtitleFontSize * 0.9,
                }}
              >
                {stat}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const DisclaimerCTAScene: React.FC<FinanceProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: FINTECH_DARK }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          padding: `0 ${layout.paddingX}px`,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 44 }}>📊</div>

        <KineticTypography
          text={brand?.name || financeCryptoExplainerDefaultContent.brand.name}
          accentColor={BULL_GREEN}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: layout.subtitleFontSize * 0.9,
            margin: 0,
            maxWidth: 550,
          }}
        >
          {cta?.subtext || financeCryptoExplainerDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || financeCryptoExplainerDefaultContent.cta.text}
          subtext={cta?.subtext || financeCryptoExplainerDefaultContent.cta.subtext}
          primaryColor={BULL_GREEN}
          accentColor={FINTECH_DARK}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const FinanceCryptoExplainer: React.FC<FinanceProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    financeCryptoExplainerScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: FINTECH_DARK }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'finance-headline-intro' && (
            <HeadlineIntroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'finance-chart-growth' && (
            <ChartGrowthScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'finance-stats-grid' && (
            <StatsGridScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'finance-disclaimer-cta' && (
            <DisclaimerCTAScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default FinanceCryptoExplainer;
