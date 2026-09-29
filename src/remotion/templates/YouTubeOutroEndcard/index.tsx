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
import { youtubeOutroEndcardScenes } from './scenes';
import {
  youtubeOutroEndcardDefaultContent,
  type YouTubeOutroEndcardProps,
} from './defaults';

const DARK_RED = '#0F0305';
const RED_ACCENT = '#FF0000';
const WHITE = '#FFFFFF';
const CARD_BG = 'rgba(255, 255, 255, 0.07)';

const ThanksHeaderScene: React.FC<
  YouTubeOutroEndcardProps & { durationInFrames: number }
> = ({
  brand,
  thanksMessage = youtubeOutroEndcardDefaultContent.thanksMessage,
  subscribersCount = youtubeOutroEndcardDefaultContent.subscribersCount,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({
    frame,
    fps: 30,
    config: { damping: 12 },
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_RED }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.25) 0%, transparent 70%)`,
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: RED_ACCENT,
            color: WHITE,
            fontWeight: 800,
            fontSize: layout.badgeFontSize,
            padding: '8px 20px',
            borderRadius: 30,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(255, 0, 0, 0.4)',
          }}
        >
          <span>▶</span> {brand?.name || youtubeOutroEndcardDefaultContent.brand.name}
        </div>

        <KineticTypography
          text={
            thanksMessage ||
            youtubeOutroEndcardDefaultContent.thanksMessage ||
            'THANKS FOR WATCHING!'
          }
          accentColor={RED_ACCENT}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
            letterSpacing: '-0.02em',
          }}
        />

        <div
          style={{
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: layout.subtitleFontSize,
            fontWeight: 600,
          }}
        >
          {subscribersCount}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const EndCardsGridScene: React.FC<
  YouTubeOutroEndcardProps & { durationInFrames: number }
> = ({
  nextVideoTitle = youtubeOutroEndcardDefaultContent.nextVideoTitle,
  recommendedVideoTitle = youtubeOutroEndcardDefaultContent.recommendedVideoTitle,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const card1Slide = interpolate(frame, [0, 20], [60, 0], {
    extrapolateRight: 'clamp',
  });
  const card2Slide = interpolate(frame, [10, 30], [60, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_RED }}>
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
        {/* Next Video Card Mockup */}
        <div
          style={{
            transform: `translateY(${card1Slide}px)`,
            flex: 1,
            maxWidth: 520,
            width: '100%',
            background: CARD_BG,
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 16,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 180,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #1E1E2E 0%, #3B82F6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
              position: 'relative',
            }}
          >
            🎬
            <span
              style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                background: 'rgba(0,0,0,0.8)',
                color: WHITE,
                fontSize: 12,
                padding: '3px 8px',
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              12:45
            </span>
          </div>
          <div
            style={{
              color: WHITE,
              fontWeight: 800,
              fontSize: layout.subtitleFontSize * 0.9,
              lineHeight: 1.3,
            }}
          >
            {nextVideoTitle}
          </div>
        </div>

        {/* Recommended Video Card Mockup */}
        <div
          style={{
            transform: `translateY(${card2Slide}px)`,
            flex: 1,
            maxWidth: 520,
            width: '100%',
            background: CARD_BG,
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 16,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 180,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #2D1E2E 0%, #EC4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
              position: 'relative',
            }}
          >
            🔥
            <span
              style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                background: 'rgba(0,0,0,0.8)',
                color: WHITE,
                fontSize: 12,
                padding: '3px 8px',
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              08:15
            </span>
          </div>
          <div
            style={{
              color: WHITE,
              fontWeight: 800,
              fontSize: layout.subtitleFontSize * 0.9,
              lineHeight: 1.3,
            }}
          >
            {recommendedVideoTitle}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SubscribePulseScene: React.FC<
  YouTubeOutroEndcardProps & { durationInFrames: number }
> = ({
  cta,
  brand,
  subscribersCount = youtubeOutroEndcardDefaultContent.subscribersCount,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const pulse = Math.sin(frame * 0.15) * 0.05 + 1;

  return (
    <AbsoluteFill style={{ opacity, background: DARK_RED }}>
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
            transform: `scale(${pulse})`,
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: RED_ACCENT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 44,
            boxShadow: '0 0 50px rgba(255, 0, 0, 0.6)',
          }}
        >
          🔔
        </div>

        <KineticTypography
          text={brand?.name || youtubeOutroEndcardDefaultContent.brand.name}
          accentColor={RED_ACCENT}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: layout.subtitleFontSize,
            fontWeight: 600,
          }}
        >
          {subscribersCount}
        </div>

        <CTAButton
          text={cta?.text || youtubeOutroEndcardDefaultContent.cta.text}
          subtext={cta?.subtext || youtubeOutroEndcardDefaultContent.cta.subtext}
          primaryColor={RED_ACCENT}
          accentColor={WHITE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeOutroEndcard: React.FC<YouTubeOutroEndcardProps> = (
  props
) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeOutroEndcardScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_RED }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'outro-thanks-header' && (
            <ThanksHeaderScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'outro-cards-grid' && (
            <EndCardsGridScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'outro-subscribe-pulse' && (
            <SubscribePulseScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeOutroEndcard;
