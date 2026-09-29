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
import {
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { youtubeHistoryStorytellingScenes } from './scenes';
import {
  youtubeHistoryStorytellingDefaultContent,
  type YouTubeHistoryStorytellingProps,
} from './defaults';

const DARK_PARCHMENT = '#140E0A';
const GOLD_AMBER = '#D97706';
const WHITE = '#FFFFFF';

const HistoryEraIntroScene: React.FC<
  YouTubeHistoryStorytellingProps & { durationInFrames: number }
> = ({
  eraTimestamp = youtubeHistoryStorytellingDefaultContent.eraTimestamp,
  historicalEventName = youtubeHistoryStorytellingDefaultContent.historicalEventName,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_PARCHMENT }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${GOLD_AMBER}25 0%, transparent 70%)`,
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
            color: GOLD_AMBER,
            fontSize: layout.badgeFontSize,
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          📜 {eraTimestamp}
        </div>

        <KineticTypography
          text={
            historicalEventName ||
            youtubeHistoryStorytellingDefaultContent.historicalEventName ||
            'GREAT LIBRARY OF ALEXANDRIA'
          }
          accentColor={GOLD_AMBER}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
            fontFamily: 'serif',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const HistoryQuoteScrollScene: React.FC<
  YouTubeHistoryStorytellingProps & { durationInFrames: number }
> = ({
  historicalQuote = youtubeHistoryStorytellingDefaultContent.historicalQuote,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_PARCHMENT }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 36,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            width: layout.horizontalLayout ? '45%' : '80%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeHistoryStorytellingDefaultContent.product.imageUrl
            }
            productName="Historical Monument"
            primaryColor={GOLD_AMBER}
            accentColor={DARK_PARCHMENT}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            maxWidth: 500,
            textAlign: layout.horizontalLayout ? 'left' : 'center',
          }}
        >
          <p
            style={{
              color: GOLD_AMBER,
              fontSize: layout.subtitleFontSize,
              fontStyle: 'italic',
              fontFamily: 'serif',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {historicalQuote}
          </p>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description ||
              youtubeHistoryStorytellingDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const HistoryDocOutroScene: React.FC<
  YouTubeHistoryStorytellingProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_PARCHMENT }}>
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
        <div style={{ fontSize: 60 }}>🏛️</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeHistoryStorytellingDefaultContent.brand.name
          }
          accentColor={GOLD_AMBER}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeHistoryStorytellingDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeHistoryStorytellingDefaultContent.cta.subtext
          }
          primaryColor={GOLD_AMBER}
          accentColor={DARK_PARCHMENT}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeHistoryStorytelling: React.FC<
  YouTubeHistoryStorytellingProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeHistoryStorytellingScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_PARCHMENT }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'history-era-intro' && (
            <HistoryEraIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'history-quote-scroll' && (
            <HistoryQuoteScrollScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'history-doc-outro' && (
            <HistoryDocOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeHistoryStorytelling;
