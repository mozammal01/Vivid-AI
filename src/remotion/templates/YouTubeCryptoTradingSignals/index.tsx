import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
  useCurrentFrame,
  spring,
} from 'remotion';
import { scaleScenesToDuration } from '@/remotion/utils/scenes';
import { useSceneOpacity, useResponsiveLayout } from '../../animations';
import { KineticTypography, CTAButton } from '../../components';
import { youtubeCryptoTradingSignalsScenes } from './scenes';
import {
  youtubeCryptoTradingSignalsDefaultContent,
  type YouTubeCryptoTradingSignalsProps,
} from './defaults';

const DARK_FINANCE = '#06130E';
const EMERALD = '#10B981';
const INDIGO = '#6366F1';
const WHITE = '#FFFFFF';

const CryptoHeaderScene: React.FC<
  YouTubeCryptoTradingSignalsProps & { durationInFrames: number }
> = ({
  pairSymbol = youtubeCryptoTradingSignalsDefaultContent.pairSymbol,
  product,
  profitPercentage = youtubeCryptoTradingSignalsDefaultContent.profitPercentage,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_FINANCE }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${EMERALD}25 0%, transparent 60%)`,
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
            transform: `scale(${scale})`,
            background: EMERALD,
            color: DARK_FINANCE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.1em',
            boxShadow: `0 10px 30px ${EMERALD}55`,
          }}
        >
          📈 {profitPercentage}
        </div>

        <KineticTypography
          text={
            pairSymbol ||
            youtubeCryptoTradingSignalsDefaultContent.pairSymbol ||
            'BTC/USDT'
          }
          accentColor={EMERALD}
          style={{
            fontSize: layout.titleFontSize * 1.4,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: INDIGO,
            fontSize: layout.subtitleFontSize,
            fontWeight: 800,
            maxWidth: 600,
          }}
        >
          {product?.name ||
            youtubeCryptoTradingSignalsDefaultContent.product.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CryptoTargetsScene: React.FC<
  YouTubeCryptoTradingSignalsProps & { durationInFrames: number }
> = ({
  entryTargetPrice = youtubeCryptoTradingSignalsDefaultContent.entryTargetPrice,
  leverageTag = youtubeCryptoTradingSignalsDefaultContent.leverageTag,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_FINANCE }}>
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
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: `2px solid ${EMERALD}`,
            borderRadius: 20,
            padding: '24px 36px',
            textAlign: 'center',
            maxWidth: 700,
            boxShadow: `0 20px 40px ${EMERALD}33`,
          }}
        >
          <div
            style={{
              color: EMERALD,
              fontWeight: 900,
              fontSize: 14,
              letterSpacing: '0.15em',
              marginBottom: 8,
            }}
          >
            🎯 TRADE SIGNAL PARAMETERS
          </div>
          <div
            style={{
              color: WHITE,
              fontWeight: 900,
              fontSize: layout.subtitleFontSize * 1.1,
            }}
          >
            {entryTargetPrice}
          </div>
        </div>

        <div
          style={{
            background: 'rgba(99, 102, 241, 0.1)',
            border: `1px solid ${INDIGO}`,
            color: INDIGO,
            fontWeight: 900,
            fontSize: layout.bodyFontSize,
            padding: '10px 24px',
            borderRadius: 30,
          }}
        >
          ⚡ {leverageTag}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CryptoOutroScene: React.FC<
  YouTubeCryptoTradingSignalsProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_FINANCE }}>
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
        <div style={{ fontSize: 60 }}>📊</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeCryptoTradingSignalsDefaultContent.brand.name
          }
          accentColor={EMERALD}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeCryptoTradingSignalsDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeCryptoTradingSignalsDefaultContent.cta.subtext
          }
          primaryColor={EMERALD}
          accentColor={DARK_FINANCE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeCryptoTradingSignals: React.FC<
  YouTubeCryptoTradingSignalsProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeCryptoTradingSignalsScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_FINANCE }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'crypto-signal-header' && (
            <CryptoHeaderScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'crypto-targets-card' && (
            <CryptoTargetsScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'crypto-channel-outro' && (
            <CryptoOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeCryptoTradingSignals;
