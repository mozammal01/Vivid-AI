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
  useFadeIn,
  useSceneOpacity,
  useResponsiveLayout,
} from '../../animations';
import {
  MaskReveal,
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { podcastHighlightScenes } from './scenes';
import { podcastHighlightDefaultContent } from './defaults';

const PURPLE = '#8B5CF6';
const CYAN = '#06B6D4';
const DARK = '#090D16';
const WHITE = '#FFFFFF';

interface PodcastProps extends VideoContentProps {
  speaker?: string;
  episodeNumber?: string;
}

const AnimatedWaveform: React.FC<{ accentColor?: string; count?: number }> = ({
  accentColor = PURPLE,
  count = 24,
}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        height: 60,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const heightMultiplier = Math.abs(Math.sin((frame / 8) + i * 0.45));
        const height = 12 + heightMultiplier * 48;
        return (
          <div
            key={i}
            style={{
              width: 5,
              height: `${height}px`,
              borderRadius: 3,
              background: `linear-gradient(180deg, ${accentColor}, ${CYAN})`,
              boxShadow: `0 0 10px ${accentColor}66`,
            }}
          />
        );
      })}
    </div>
  );
};

const IntroScene: React.FC<PodcastProps & { durationInFrames: number }> = ({
  brand,
  product,
  speaker = 'Dr. Elena Vance',
  episodeNumber = 'EP. 142',
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${PURPLE}22 0%, transparent 60%)`,
        }}
      />

      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(24px, 4vw, 48px)',
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            maxWidth: Math.min(300, layout.maxImageWidth),
            width: '100%',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: `0 20px 60px ${PURPLE}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl}
            productName={brand?.name ?? 'Podcast'}
            primaryColor={PURPLE}
            accentColor={CYAN}
            enterFrame={2}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            maxWidth: Math.min(650, layout.maxTextWidth),
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
          }}
        >
          <div
            style={{
              padding: '6px 16px',
              borderRadius: 999,
              background: `linear-gradient(135deg, ${PURPLE}, ${CYAN})`,
              color: WHITE,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {episodeNumber}
          </div>

          <MaskReveal direction="up" enterFrame={4} duration={14}>
            <div
              style={{
                fontSize: 'clamp(28px, 3.5vw, 56px)',
                fontWeight: 850,
                color: WHITE,
                lineHeight: 1.1,
              }}
            >
              {brand?.name ?? 'The Tech Vision Podcast'}
            </div>
          </MaskReveal>

          <div
            style={{
              fontSize: 'clamp(15px, 1.2vw, 20px)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            Guest: <span style={{ color: CYAN }}>{speaker}</span>
          </div>

          <AnimatedWaveform count={18} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const QuoteScene: React.FC<PodcastProps & { durationInFrames: number }> = ({
  headline,
  speaker = 'Dr. Elena Vance',
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const quote = headline ?? '"AI won\'t replace creators; creators using AI will replace those who don\'t."';

  return (
    <AbsoluteFill
      style={{
        opacity,
        background: DARK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(16px, 3vh, 32px)',
        padding: `0 ${layout.paddingX}px`,
      }}
    >
      <div
        style={{
          fontSize: 'clamp(60px, 8vw, 120px)',
          fontWeight: 900,
          color: PURPLE,
          lineHeight: 0.8,
          opacity: 0.6,
        }}
      >
        “
      </div>

      <KineticTypography
        text={quote}
        enterFrame={2}
        stagger={2}
        tokenDuration={12}
        variant="rise"
        accentColor={CYAN}
        style={{
          fontSize: 'clamp(24px, 3.5vw, 52px)',
          fontWeight: 750,
          color: WHITE,
          textAlign: 'center',
          lineHeight: 1.25,
          maxWidth: '85%',
        }}
      />

      <div
        style={{
          fontSize: 'clamp(14px, 1.2vw, 20px)',
          fontWeight: 700,
          color: CYAN,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          opacity: useFadeIn({ from: 10, duration: 10 }),
        }}
      >
        — {speaker}
      </div>
    </AbsoluteFill>
  );
};

const WaveformScene: React.FC<PodcastProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill
      style={{
        opacity,
        background: DARK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(20px, 3vh, 40px)',
        padding: `0 ${layout.paddingX}px`,
      }}
    >
      <div
        style={{
          fontSize: 'clamp(12px, 1vw, 16px)',
          fontWeight: 800,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: CYAN,
        }}
      >
        Now Playing
      </div>

      <AnimatedWaveform count={32} />

      <div
        style={{
          fontSize: 'clamp(20px, 2.5vw, 36px)',
          fontWeight: 700,
          color: WHITE,
          textAlign: 'center',
          maxWidth: Math.min(700, layout.maxTextWidth),
        }}
      >
        {product?.name ?? 'Episode Highlight'}
      </div>
    </AbsoluteFill>
  );
};

const TakeawayScene: React.FC<PodcastProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const desc = product?.description ?? 'Full discussion on AI models and future workflows.';

  return (
    <AbsoluteFill
      style={{
        opacity,
        background: DARK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: `0 ${layout.paddingX}px`,
      }}
    >
      <div
        style={{
          fontSize: 'clamp(12px, 1vw, 16px)',
          fontWeight: 800,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: PURPLE,
        }}
      >
        Key Takeaway
      </div>

      <div
        style={{
          fontSize: 'clamp(22px, 3vw, 44px)',
          fontWeight: 700,
          color: WHITE,
          textAlign: 'center',
          maxWidth: Math.min(800, layout.maxTextWidth),
          lineHeight: 1.3,
          borderLeft: `4px solid ${PURPLE}`,
          paddingLeft: 24,
        }}
      >
        {desc}
      </div>
    </AbsoluteFill>
  );
};

const CTAScene: React.FC<PodcastProps & { durationInFrames: number }> = ({
  brand,
  cta,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill
      style={{
        opacity,
        background: DARK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(16px, 2.5vh, 32px)',
        padding: `0 ${layout.paddingX}px`,
      }}
    >
      <div
        style={{
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontWeight: 850,
          color: WHITE,
          textAlign: 'center',
        }}
      >
        {brand?.name ?? 'The Tech Vision Podcast'}
      </div>

      <CTAButton
        text={cta?.text ?? 'Listen Full Episode'}
        subtext={cta?.subtext ?? 'Available on Spotify & Apple Podcasts'}
        primaryColor={PURPLE}
        accentColor={CYAN}
        enterFrame={4}
      />
    </AbsoluteFill>
  );
};

const SCENE_COMPONENTS: Record<
  string,
  React.FC<PodcastProps & { durationInFrames: number }>
> = {
  intro: IntroScene,
  product: QuoteScene,
  features: WaveformScene,
  headline: TakeawayScene,
  cta: CTAScene,
};

export const PodcastHighlight: React.FC<PodcastProps> = (rawContent) => {
  const content = { ...podcastHighlightDefaultContent, ...rawContent };
  const { durationInFrames } = useVideoConfig();
  const scenes = scaleScenesToDuration(podcastHighlightScenes, durationInFrames);

  return (
    <AbsoluteFill style={{ backgroundColor: DARK }}>
      {scenes.map((scene) => {
        const SceneComponent = SCENE_COMPONENTS[scene.type];
        if (!SceneComponent) return null;

        return (
          <Sequence
            key={scene.id}
            from={scene.startFrame}
            durationInFrames={scene.durationInFrames}
          >
            <SceneComponent {...content} durationInFrames={scene.durationInFrames} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
