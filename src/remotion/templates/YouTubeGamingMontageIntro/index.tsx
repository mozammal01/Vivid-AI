import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
  useCurrentFrame,
  spring,
  interpolate,
} from 'remotion';
import { scaleScenesToDuration } from '@/remotion/utils/scenes';
import { useSceneOpacity, useResponsiveLayout } from '../../animations';
import { KineticTypography, CTAButton } from '../../components';
import { youtubeGamingMontageIntroScenes } from './scenes';
import {
  youtubeGamingMontageIntroDefaultContent,
  type YouTubeGamingMontageIntroProps,
} from './defaults';

const DARK_NEON = '#070510';
const PINK_NEON = '#EC4899';
const PURPLE_NEON = '#8B5CF6';
const CYAN_NEON = '#06B6D4';
const WHITE = '#FFFFFF';

const GlitchIntroScene: React.FC<
  YouTubeGamingMontageIntroProps & { durationInFrames: number }
> = ({
  brand,
  gamerTag = youtubeGamingMontageIntroDefaultContent.gamerTag,
  rankBadge = youtubeGamingMontageIntroDefaultContent.rankBadge,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  // Glitch jitter
  const glitchX = frame % 6 === 0 ? (Math.random() - 0.5) * 12 : 0;

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NEON }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${PURPLE_NEON}15 1px, transparent 1px), linear-gradient(90deg, ${PURPLE_NEON}15 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
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
            background: `linear-gradient(90deg, ${PINK_NEON}, ${PURPLE_NEON})`,
            color: WHITE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 18px',
            borderRadius: 6,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            boxShadow: `0 0 20px ${PINK_NEON}`,
          }}
        >
          {rankBadge}
        </div>

        <div style={{ transform: `translateX(${glitchX}px)` }}>
          <KineticTypography
            text={
              gamerTag ||
              youtubeGamingMontageIntroDefaultContent.gamerTag ||
              'VORTEX_NEXUS'
            }
            accentColor={PINK_NEON}
            style={{
              fontSize: layout.titleFontSize * 1.4,
              color: WHITE,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textShadow: `0 0 30px ${PINK_NEON}`,
            }}
          />
        </div>

        <div
          style={{
            color: CYAN_NEON,
            fontSize: layout.subtitleFontSize,
            fontWeight: 700,
            letterSpacing: '0.1em',
          }}
        >
          {brand?.name || youtubeGamingMontageIntroDefaultContent.brand.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const StatsHudScene: React.FC<
  YouTubeGamingMontageIntroProps & { durationInFrames: number }
> = ({
  product,
  killStreakCount = youtubeGamingMontageIntroDefaultContent.killStreakCount,
  gameTitle = youtubeGamingMontageIntroDefaultContent.gameTitle,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const hudSlide = interpolate(frame, [0, 20], [50, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NEON }}>
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
            color: PINK_NEON,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.08em',
          }}
        >
          🎮 {gameTitle}
        </div>

        <div
          style={{
            transform: `translateY(${hudSlide}px)`,
            width: '100%',
            maxWidth: 700,
            background: 'rgba(236, 72, 153, 0.06)',
            border: `2px solid ${PINK_NEON}`,
            borderRadius: 16,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            boxShadow: `0 0 40px ${PINK_NEON}33`,
          }}
        >
          <div
            style={{
              color: WHITE,
              fontWeight: 900,
              fontSize: layout.subtitleFontSize * 1.2,
            }}
          >
            {product?.name ||
              youtubeGamingMontageIntroDefaultContent.product.name}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '14px 20px',
              borderRadius: 10,
              borderLeft: `4px solid ${CYAN_NEON}`,
            }}
          >
            <span
              style={{
                color: CYAN_NEON,
                fontWeight: 800,
                fontSize: layout.bodyFontSize,
              }}
            >
              MATCH STATS
            </span>
            <span
              style={{
                color: WHITE,
                fontWeight: 900,
                fontSize: layout.bodyFontSize * 1.1,
              }}
            >
              {killStreakCount}
            </span>
          </div>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description ||
              youtubeGamingMontageIntroDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SubscribeOutroScene: React.FC<
  YouTubeGamingMontageIntroProps & { durationInFrames: number }
> = ({ cta, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 10 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NEON }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          padding: `0 ${layout.paddingX}px`,
          textAlign: 'center',
        }}
      >
        <div style={{ transform: `scale(${scale})`, fontSize: 64 }}>⚡</div>

        <KineticTypography
          text="DONT FORGET TO LIKE & SUBSCRIBE!"
          accentColor={PINK_NEON}
          style={{
            fontSize: layout.titleFontSize * 1.1,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={cta?.text || youtubeGamingMontageIntroDefaultContent.cta.text}
          subtext={
            cta?.subtext || youtubeGamingMontageIntroDefaultContent.cta.subtext
          }
          primaryColor={PINK_NEON}
          accentColor={DARK_NEON}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeGamingMontageIntro: React.FC<
  YouTubeGamingMontageIntroProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeGamingMontageIntroScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_NEON }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'gaming-glitch-intro' && (
            <GlitchIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'gaming-stats-hud' && (
            <StatsHudScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'gaming-subscribe-outro' && (
            <SubscribeOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeGamingMontageIntro;
