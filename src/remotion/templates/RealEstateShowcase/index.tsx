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
  SplitImageReveal,
  CTAButton,
} from '../../components';
import { realEstateShowcaseScenes } from './scenes';
import { realEstateShowcaseDefaultContent } from './defaults';

const EMERALD = '#10B981';
const MINT = '#34D399';
const DARK_BG = '#070C12';
const WHITE = '#FFFFFF';
const GLASS = 'rgba(255, 255, 255, 0.06)';
const GLASS_BORDER = 'rgba(255, 255, 255, 0.12)';

interface EstateProps extends VideoContentProps {
  location?: string;
  agentName?: string;
  agentPhone?: string;
}

const IntroScene: React.FC<EstateProps & { durationInFrames: number }> = ({
  brand,
  product,
  location = 'Beverly Hills, CA',
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const frame = useCurrentFrame();
  const layout = useResponsiveLayout();

  const bgZoom = interpolate(frame, [0, durationInFrames], [1.08, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 35%, ${EMERALD}22 0%, transparent 65%)`,
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
        <div
          style={{
            padding: '6px 18px',
            borderRadius: 999,
            background: 'rgba(16, 185, 129, 0.15)',
            border: `1px solid ${EMERALD}`,
            color: MINT,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          {location}
        </div>

        <MaskReveal direction="up" enterFrame={3} duration={14}>
          <div
            style={{
              fontSize: 'clamp(38px, 6vw, 88px)',
              fontWeight: 850,
              color: WHITE,
              letterSpacing: '-0.03em',
              textAlign: 'center',
              lineHeight: 1.08,
            }}
          >
            {product?.name ?? 'The Grand View Villa'}
          </div>
        </MaskReveal>

        <div
          style={{
            fontSize: 'clamp(14px, 1.2vw, 20px)',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.75)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: useFadeIn({ from: 6, duration: 10 }),
          }}
        >
          Presented by {brand?.name ?? 'AURA ESTATES'}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ShowcaseScene: React.FC<EstateProps & { durationInFrames: number }> = ({
  product,
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
            flex: '0 1 auto',
            maxWidth: Math.min(580, layout.maxImageWidth),
            width: '100%',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
          }}
        >
          <SplitImageReveal
            src={product?.imageUrl}
            alt={product?.name ?? 'Property'}
            enterFrame={3}
            duration={16}
            accentColor={EMERALD}
            borderRadius={16}
          />
        </div>

        <div
          style={{
            flex: layout.horizontalLayout ? '0 0 auto' : '1 1 auto',
            maxWidth: Math.min(600, layout.maxTextWidth),
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            textAlign: layout.horizontalLayout ? 'left' : 'center',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              color: WHITE,
              lineHeight: 1.15,
            }}
          >
            {product?.name ?? 'Architectural Masterpiece'}
          </div>

          {product?.description && (
            <div
              style={{
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.5,
              }}
            >
              {product.description}
            </div>
          )}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const FeaturesScene: React.FC<EstateProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = (product?.features ?? []).slice(0, 4);

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
            fontSize: 'clamp(11px, 0.9vw, 15px)',
            fontWeight: 800,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: MINT,
          }}
        >
          Exclusive Amenities
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: layout.horizontalLayout ? 'repeat(2, 1fr)' : '1fr',
            gap: 16,
            width: '100%',
            maxWidth: Math.min(800, layout.maxTextWidth),
          }}
        >
          {features.map((feat, i) => {
            const delay = 3 + i * 4;
            const itemOpacity = useFadeIn({ from: delay, duration: 8 });
            const itemY = useSpringSlideUp({ from: delay, distance: 16, damping: 18, stiffness: 140 });

            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  opacity: itemOpacity,
                  transform: `translateY(${itemY}px)`,
                  padding: '18px 24px',
                  background: GLASS,
                  border: `1px solid ${GLASS_BORDER}`,
                  borderRadius: 14,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: EMERALD,
                    boxShadow: `0 0 12px ${EMERALD}`,
                  }}
                />
                <div
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 22px)',
                    fontWeight: 700,
                    color: WHITE,
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

const PricingScene: React.FC<EstateProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const price = product?.price ?? '$4,250,000';
  const scale = useSpringScale({ from: 3, damping: 15, stiffness: 140 });

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
          fontSize: 'clamp(11px, 0.9vw, 15px)',
          fontWeight: 800,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: MINT,
        }}
      >
        Listing Price
      </div>

      <div
        style={{
          opacity: useFadeIn({ from: 3, duration: 10 }),
          transform: `scale(${scale})`,
          fontSize: 'clamp(48px, 8vw, 110px)',
          fontWeight: 900,
          color: WHITE,
          letterSpacing: '-0.02em',
          textShadow: `0 0 40px ${EMERALD}55`,
        }}
      >
        {price}
      </div>
    </AbsoluteFill>
  );
};

const CTAScene: React.FC<EstateProps & { durationInFrames: number }> = ({
  brand,
  cta,
  agentName = 'Sarah Jenkins',
  agentPhone = '+1 (800) 555-REAL',
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
        gap: 'clamp(16px, 2.5vh, 28px)',
        padding: `0 ${layout.paddingX}px`,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: 'clamp(24px, 3.5vw, 48px)',
            fontWeight: 850,
            color: WHITE,
          }}
        >
          {brand?.name ?? 'AURA ESTATES'}
        </div>
        <div
          style={{
            fontSize: 'clamp(14px, 1.1vw, 18px)',
            color: MINT,
            fontWeight: 600,
            marginTop: 6,
          }}
        >
          Agent: {agentName} • {agentPhone}
        </div>
      </div>

      <CTAButton
        text={cta?.text ?? 'Schedule Private Tour'}
        subtext={cta?.subtext ?? 'Virtual & In-Person Appointments Available'}
        primaryColor={EMERALD}
        accentColor={MINT}
        enterFrame={4}
      />
    </AbsoluteFill>
  );
};

const SCENE_COMPONENTS: Record<
  string,
  React.FC<EstateProps & { durationInFrames: number }>
> = {
  intro: IntroScene,
  product: ShowcaseScene,
  features: FeaturesScene,
  headline: PricingScene,
  cta: CTAScene,
};

export const RealEstateShowcase: React.FC<EstateProps> = (rawContent) => {
  const content = { ...realEstateShowcaseDefaultContent, ...rawContent };
  const { durationInFrames } = useVideoConfig();
  const scenes = scaleScenesToDuration(realEstateShowcaseScenes, durationInFrames);

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
