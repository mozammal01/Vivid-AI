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
  useSpringSlideUp,
  useSpringScale,
  useResponsiveLayout,
} from '../../animations';
import {
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { fitnessMotivationScenes } from './scenes';
import { fitnessMotivationDefaultContent } from './defaults';

const ORANGE = '#FF3300';
const GOLD = '#FFD700';
const DARK_BG = '#08080A';
const WHITE = '#FFFFFF';

interface FitnessProps extends VideoContentProps {
  statNumber?: string;
  statLabel?: string;
}

const BackgroundEnergy: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.15) * 0.15 + 0.85;

  return (
    <AbsoluteFill style={{ background: DARK_BG, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${ORANGE}33 0%, transparent 65%)`,
          transform: `scale(${pulse})`,
        }}
      />
    </AbsoluteFill>
  );
};

const IntroScene: React.FC<FitnessProps & { durationInFrames: number }> = ({
  headline,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const title = headline ?? 'NO LIMITS. NO EXCUSES.';

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundEnergy />

      <AbsoluteFill
        style={{
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
            padding: '6px 18px',
            borderRadius: 6,
            background: 'rgba(255, 51, 0, 0.2)',
            border: `1px solid ${ORANGE}`,
            color: GOLD,
            fontSize: 13,
            fontWeight: 900,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            boxShadow: `0 0 20px ${ORANGE}66`,
          }}
        >
          {(brand?.name ?? 'IRON ATHLETICS').toUpperCase()}
        </div>

        <KineticTypography
          text={title}
          enterFrame={3}
          stagger={3}
          tokenDuration={10}
          variant="rise"
          accentColor={GOLD}
          style={{
            fontSize: 'clamp(36px, 7vw, 96px)',
            fontWeight: 900,
            color: WHITE,
            textAlign: 'center',
            lineHeight: 1.05,
            fontStyle: 'italic',
            textShadow: `0 0 40px ${ORANGE}66`,
            maxWidth: '90%',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ShowcaseScene: React.FC<FitnessProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundEnergy />

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
            maxWidth: Math.min(500, layout.maxImageWidth),
            width: '100%',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: `0 20px 60px ${ORANGE}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl}
            productName={product?.name ?? 'Fitness Supplement'}
            primaryColor={ORANGE}
            accentColor={GOLD}
            enterFrame={3}
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
              fontSize: 'clamp(30px, 4.5vw, 60px)',
              fontWeight: 900,
              fontStyle: 'italic',
              color: WHITE,
              lineHeight: 1.1,
              textTransform: 'uppercase',
            }}
          >
            {product?.name ?? 'HYPERDRIVE PRE-WORKOUT'}
          </div>

          {product?.description && (
            <div
              style={{
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.8)',
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

const FeaturesScene: React.FC<FitnessProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = (product?.features ?? []).slice(0, 3);

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundEnergy />

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
            fontWeight: 900,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: GOLD,
          }}
        >
          Engineered Formula
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: Math.min(750, layout.maxTextWidth),
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
                  gap: 20,
                  opacity: itemOpacity,
                  transform: `translateY(${itemY}px)`,
                  padding: '18px 28px',
                  background: 'rgba(15, 15, 20, 0.9)',
                  border: `1px solid ${ORANGE}`,
                  borderRadius: 12,
                  boxShadow: `0 10px 30px ${ORANGE}22`,
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: ORANGE,
                  }}
                >
                  ⚡
                </div>
                <div
                  style={{
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 800,
                    fontStyle: 'italic',
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

const StatScene: React.FC<FitnessProps & { durationInFrames: number }> = ({
  statNumber = '100%',
  statLabel = 'PURE ATHLETIC PERFORMANCE',
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const scale = useSpringScale({ from: 3, damping: 14, stiffness: 150 });

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundEnergy />

      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            opacity: useFadeIn({ from: 3, duration: 10 }),
            transform: `scale(${scale})`,
            fontSize: 'clamp(64px, 10vw, 140px)',
            fontWeight: 900,
            fontStyle: 'italic',
            color: WHITE,
            textShadow: `0 0 50px ${ORANGE}`,
            letterSpacing: '-0.03em',
          }}
        >
          {statNumber}
        </div>

        <div
          style={{
            fontSize: 'clamp(14px, 1.3vw, 22px)',
            fontWeight: 900,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: GOLD,
            textAlign: 'center',
          }}
        >
          {statLabel}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CTAScene: React.FC<FitnessProps & { durationInFrames: number }> = ({
  brand,
  cta,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundEnergy />

      <AbsoluteFill
        style={{
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
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            fontWeight: 900,
            fontStyle: 'italic',
            color: WHITE,
            textAlign: 'center',
          }}
        >
          {(brand?.name ?? 'IRON ATHLETICS').toUpperCase()}
        </div>

        <CTAButton
          text={cta?.text ?? 'Claim 20% Off Now'}
          subtext={cta?.subtext ?? 'Use Code: UNSTOPPABLE'}
          primaryColor={ORANGE}
          accentColor={GOLD}
          enterFrame={3}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SCENE_COMPONENTS: Record<
  string,
  React.FC<FitnessProps & { durationInFrames: number }>
> = {
  intro: IntroScene,
  product: ShowcaseScene,
  features: FeaturesScene,
  headline: StatScene,
  cta: CTAScene,
};

export const FitnessMotivation: React.FC<FitnessProps> = (rawContent) => {
  const content = { ...fitnessMotivationDefaultContent, ...rawContent };
  const { durationInFrames } = useVideoConfig();
  const scenes = scaleScenesToDuration(fitnessMotivationScenes, durationInFrames);

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
