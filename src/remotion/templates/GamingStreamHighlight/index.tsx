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
  MaskReveal,
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { gamingStreamHighlightScenes } from './scenes';
import { gamingStreamHighlightDefaultContent } from './defaults';

const CRIMSON = '#FF0055';
const CYAN = '#00F0FF';
const DARK_BG = '#0B0E14';
const WHITE = '#FFFFFF';

interface GamingProps extends VideoContentProps {
  gamerTag?: string;
  score?: string;
  gameName?: string;
}

const CyberGridBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const offsetY = (frame * 2) % 40;

  return (
    <AbsoluteFill style={{ background: DARK_BG, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 85, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(255, 0, 85, 0.15) 0%, transparent 70%)`,
        }}
      />
    </AbsoluteFill>
  );
};

const IntroScene: React.FC<GamingProps & { durationInFrames: number }> = ({
  brand,
  headline = gamingStreamHighlightDefaultContent.headline,
  gamerTag = gamingStreamHighlightDefaultContent.gamerTag,
  gameName = gamingStreamHighlightDefaultContent.gameName,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity }}>
      <CyberGridBackground />
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 20px',
            borderRadius: 4,
            background: 'rgba(255, 0, 85, 0.2)',
            border: `1px solid ${CRIMSON}`,
            boxShadow: `0 0 15px ${CRIMSON}88`,
            color: CYAN,
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <span>🎮</span> {gameName}
        </div>

        <KineticTypography
          text={brand?.name || 'NEXUS GAMING'}
          accentColor={CYAN}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: CYAN,
            fontSize: layout.subtitleFontSize * 1.1,
            fontWeight: 700,
            textShadow: `0 0 12px ${CYAN}`,
            letterSpacing: '0.1em',
          }}
        >
          PLAYER: [{gamerTag}]
        </div>

        <MaskReveal enterFrame={10}>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: layout.bodyFontSize,
              maxWidth: 700,
              margin: 0,
              fontWeight: 500,
            }}
          >
            {headline}
          </p>
        </MaskReveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ClipRevealScene: React.FC<GamingProps & { durationInFrames: number }> = ({
  product,
  score = gamingStreamHighlightDefaultContent.score,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity }}>
      <CyberGridBackground />
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
            position: 'relative',
            width: layout.horizontalLayout ? '48%' : '90%',
            maxWidth: layout.maxImageWidth,
            border: `2px solid ${CYAN}`,
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: `0 0 30px ${CYAN}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || gamingStreamHighlightDefaultContent.product.imageUrl}
            productName={product?.name || 'Gaming highlight'}
            primaryColor={CRIMSON}
            accentColor={CYAN}
          />
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: CRIMSON,
              color: WHITE,
              fontSize: 12,
              fontWeight: 900,
              padding: '4px 10px',
              borderRadius: 4,
              letterSpacing: '0.1em',
            }}
          >
            LIVE RECORDING
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            maxWidth: 500,
            gap: 16,
          }}
        >
          <div
            style={{
              color: CRIMSON,
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: '0.2em',
            }}
          >
            SCORE: {score}
          </div>
          <h2
            style={{
              color: WHITE,
              fontSize: layout.titleFontSize,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {product?.name || gamingStreamHighlightDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || gamingStreamHighlightDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const StatsHudScene: React.FC<GamingProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || gamingStreamHighlightDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity }}>
      <CyberGridBackground />
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
          text="MATCH STATS & HIGHLIGHTS"
          accentColor={CRIMSON}
          style={{
            fontSize: layout.titleFontSize,
            color: CYAN,
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
          {features.map((feat, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                background: 'rgba(15, 23, 42, 0.85)',
                border: `1px solid ${index % 2 === 0 ? CRIMSON : CYAN}`,
                boxShadow: `0 0 20px ${index % 2 === 0 ? CRIMSON : CYAN}33`,
                borderRadius: 12,
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  marginBottom: 8,
                }}
              >
                {index === 0 ? '⚡' : index === 1 ? '🎯' : '🏆'}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontWeight: 800,
                  fontSize: layout.subtitleFontSize * 0.9,
                }}
              >
                {feat}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CTAScene: React.FC<GamingProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity }}>
      <CyberGridBackground />
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
        <div
          style={{
            color: CRIMSON,
            fontSize: layout.titleFontSize * 1.1,
            fontWeight: 900,
            letterSpacing: '0.05em',
            textShadow: `0 0 20px ${CRIMSON}`,
          }}
        >
          {brand?.name || 'NEXUS GAMING'}
        </div>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: layout.subtitleFontSize,
            margin: 0,
            maxWidth: 600,
          }}
        >
          {cta?.subtext || gamingStreamHighlightDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || gamingStreamHighlightDefaultContent.cta.text}
          subtext={cta?.subtext || gamingStreamHighlightDefaultContent.cta.subtext}
          primaryColor={CRIMSON}
          accentColor={CYAN}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const GamingStreamHighlight: React.FC<GamingProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    gamingStreamHighlightScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_BG }}>
      {scaledScenes.map((scene) => {
        return (
          <Sequence
            key={scene.id}
            from={scene.startFrame}
            durationInFrames={scene.durationInFrames}
          >
            {scene.id === 'gaming-intro' && (
              <IntroScene {...props} durationInFrames={scene.durationInFrames} />
            )}
            {scene.id === 'gaming-clip-reveal' && (
              <ClipRevealScene {...props} durationInFrames={scene.durationInFrames} />
            )}
            {scene.id === 'gaming-stats-hud' && (
              <StatsHudScene {...props} durationInFrames={scene.durationInFrames} />
            )}
            {scene.id === 'gaming-cta' && (
              <CTAScene {...props} durationInFrames={scene.durationInFrames} />
            )}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

export default GamingStreamHighlight;
