import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from 'remotion';
import type { VideoContentProps } from '@/remotion/schema';
import { scaleScenesToDuration } from '@/remotion/utils/scenes';
import {
  useFadeIn,
  useSceneOpacity,
  useSpringSlideUp,
  useSpringScale,
  useResponsiveLayout,
} from '../../animations';
import {
  MaskReveal,
  FilmGrain,
  LightSweep,
  SplitImageReveal,
  CTAButton,
} from '../../components';
import { fashionLookbookScenes } from './scenes';
import { fashionLookbookDefaultContent } from './defaults';

const SERIF = 'Georgia, "Times New Roman", Times, serif';
const SANS = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const DARK_BG = '#0B0A09';
const GOLD = '#D4AF37';
const SILK = '#F5F2EB';

interface FashionProps extends VideoContentProps {
  lookNumber?: string;
  season?: string;
}

const IntroScene: React.FC<FashionProps & { durationInFrames: number }> = ({
  brand,
  headline,
  season = 'AUTUMN / WINTER',
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const frame = useCurrentFrame();
  const layout = useResponsiveLayout();

  const brandTitle = (brand?.name ?? 'MAISON').toUpperCase();
  const tagline = headline ?? brand?.tagline ?? season;

  const bgZoom = interpolate(frame, [0, durationInFrames], [1.06, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 45%, ${GOLD}15 0%, transparent 60%)`,
          transform: `scale(${bgZoom})`,
        }}
      />

      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(12px, 2vh, 24px)',
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <MaskReveal direction="down" enterFrame={2} duration={12}>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 'clamp(11px, 0.9vw, 15px)',
              fontWeight: 700,
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: GOLD,
            }}
          >
            {season}
          </div>
        </MaskReveal>

        <MaskReveal direction="up" enterFrame={4} duration={14}>
          <h1
            style={{
              margin: 0,
              fontFamily: SERIF,
              fontSize: 'clamp(44px, 7vw, 110px)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: SILK,
              textAlign: 'center',
              lineHeight: 1.05,
            }}
          >
            {brandTitle}
          </h1>
        </MaskReveal>

        <div
          style={{
            fontFamily: SANS,
            fontSize: 'clamp(14px, 1.2vw, 20px)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245, 242, 235, 0.75)',
            opacity: useFadeIn({ from: 6, duration: 10 }),
          }}
        >
          {tagline}
        </div>
      </AbsoluteFill>

      <LightSweep enterFrame={20} duration={28} angle={-15} intensity={0.3} color="#FFFFFF" />
      <FilmGrain opacity={0.3} vignette vignetteStrength={0.4} />
    </AbsoluteFill>
  );
};

const ShowcaseScene: React.FC<FashionProps & { durationInFrames: number }> = ({
  product,
  lookNumber = 'LOOK 01',
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(24px, 4vw, 56px)',
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            flex: layout.horizontalLayout ? '0 0 auto' : '1 1 auto',
            maxWidth: Math.min(650, layout.maxTextWidth),
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            textAlign: layout.horizontalLayout ? 'left' : 'center',
          }}
        >
          <div
            style={{
              fontFamily: SANS,
              fontSize: 'clamp(12px, 1vw, 16px)',
              fontWeight: 700,
              letterSpacing: '0.3em',
              color: GOLD,
            }}
          >
            {lookNumber}
          </div>

          <div
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(32px, 4vw, 64px)',
              fontWeight: 400,
              color: SILK,
              lineHeight: 1.1,
            }}
          >
            {product?.name ?? 'Atelier Piece'}
          </div>

          {product?.description && (
            <div
              style={{
                fontFamily: SANS,
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                fontWeight: 400,
                color: 'rgba(245,242,235,0.7)',
                lineHeight: 1.5,
              }}
            >
              {product.description}
            </div>
          )}
        </div>

        <div
          style={{
            flex: '0 1 auto',
            maxWidth: Math.min(550, layout.maxImageWidth),
            width: '100%',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 24px 70px rgba(0,0,0,0.6)',
          }}
        >
          <SplitImageReveal
            src={product?.imageUrl}
            alt={product?.name ?? 'Lookbook Piece'}
            enterFrame={4}
            duration={18}
            accentColor={GOLD}
            borderRadius={12}
          />
        </div>
      </AbsoluteFill>

      <FilmGrain opacity={0.25} />
    </AbsoluteFill>
  );
};

const FeaturesScene: React.FC<FashionProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = (product?.features ?? []).slice(0, 3);

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(20px, 3vh, 36px)',
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            fontFamily: SANS,
            fontSize: 'clamp(11px, 0.9vw, 15px)',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: GOLD,
          }}
        >
          Craftsmanship & Material
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: Math.min(700, layout.maxTextWidth),
          }}
        >
          {features.map((feat, i) => {
            const delay = 4 + i * 5;
            const itemOpacity = useFadeIn({ from: delay, duration: 10 });
            const itemY = useSpringSlideUp({ from: delay, distance: 16, damping: 18, stiffness: 140 });

            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  opacity: itemOpacity,
                  transform: `translateY(${itemY}px)`,
                  padding: '16px 24px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: GOLD,
                    boxShadow: `0 0 10px ${GOLD}88`,
                  }}
                />
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(18px, 1.8vw, 28px)',
                    color: SILK,
                  }}
                >
                  {feat}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const PricingScene: React.FC<FashionProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const price = product?.price ?? '$890';
  const scale = useSpringScale({ from: 3, damping: 16, stiffness: 150 });

  return (
    <AbsoluteFill
      style={{
        opacity,
        background: DARK_BG,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: SANS,
          fontSize: 'clamp(11px, 0.9vw, 15px)',
          fontWeight: 700,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: GOLD,
        }}
      >
        Investment Piece
      </div>

      <div
        style={{
          opacity: useFadeIn({ from: 3, duration: 10 }),
          transform: `scale(${scale})`,
          fontFamily: SERIF,
          fontSize: 'clamp(64px, 9vw, 130px)',
          fontWeight: 400,
          color: SILK,
          letterSpacing: '-0.02em',
        }}
      >
        {price}
      </div>
    </AbsoluteFill>
  );
};

const CTAScene: React.FC<FashionProps & { durationInFrames: number }> = ({
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
        background: DARK_BG,
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
          fontFamily: SERIF,
          fontSize: 'clamp(28px, 4vw, 56px)',
          color: SILK,
          textAlign: 'center',
        }}
      >
        {brand?.name ?? 'MAISON NOIR'}
      </div>

      <CTAButton
        text={cta?.text ?? 'Explore Lookbook'}
        subtext={cta?.subtext ?? 'Free Worldwide Express Delivery'}
        primaryColor={GOLD}
        accentColor="#B8860B"
        enterFrame={4}
      />
    </AbsoluteFill>
  );
};

const SCENE_COMPONENTS: Record<
  string,
  React.FC<FashionProps & { durationInFrames: number }>
> = {
  intro: IntroScene,
  product: ShowcaseScene,
  features: FeaturesScene,
  headline: PricingScene,
  cta: CTAScene,
};

export const FashionLookbook: React.FC<FashionProps> = (rawContent) => {
  const content = { ...fashionLookbookDefaultContent, ...rawContent };
  const { durationInFrames } = useVideoConfig();
  const scenes = scaleScenesToDuration(fashionLookbookScenes, durationInFrames);

  return (
    <AbsoluteFill style={{ backgroundColor: DARK_BG }}>
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
