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
  MaskReveal,
  CTAButton,
  ProductImage,
} from '../../components';
import { TypingEffect } from '../../animations/TypingEffect';
import { techProductLaunchScenes } from './scenes';
import { techProductLaunchDefaultContent } from './defaults';

const CYAN = '#00F0FF';
const PINK = '#FF0055';
const DARK = '#050B14';
const WHITE = '#FFFFFF';

interface TechProps extends VideoContentProps {
  version?: string;
  codeSnippet?: string;
}

const BackgroundGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = (frame * 1.5) % 80;

  return (
    <AbsoluteFill style={{ overflow: 'hidden', background: DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: -100,
          opacity: 0.15,
          backgroundImage: `linear-gradient(${CYAN}33 1px, transparent 1px), linear-gradient(90deg, ${CYAN}33 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: `translateY(${drift}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 75% 20%, ${CYAN}25, transparent 40%), radial-gradient(circle at 20% 80%, ${PINK}25, transparent 45%)`,
        }}
      />
    </AbsoluteFill>
  );
};

const IntroScene: React.FC<TechProps & { durationInFrames: number }> = ({
  brand,
  product,
  headline,
  version = 'v4.0 RELEASE',
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundGrid />

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
            borderRadius: 8,
            background: 'rgba(0, 240, 255, 0.1)',
            border: `1px solid ${CYAN}`,
            color: CYAN,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            boxShadow: `0 0 20px ${CYAN}44`,
          }}
        >
          {version}
        </div>

        <MaskReveal direction="up" enterFrame={3} duration={12}>
          <div
            style={{
              fontSize: 'clamp(36px, 6vw, 96px)',
              fontWeight: 900,
              color: WHITE,
              letterSpacing: '-0.04em',
              textAlign: 'center',
              lineHeight: 1.05,
              textShadow: `0 0 40px ${CYAN}55`,
            }}
          >
            {(product?.name ?? 'Nexus Engine').toUpperCase()}
          </div>
        </MaskReveal>

        <div
          style={{
            fontSize: 'clamp(14px, 1.2vw, 22px)',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textAlign: 'center',
            opacity: useFadeIn({ from: 6, duration: 10 }),
          }}
        >
          {headline ?? brand?.tagline ?? 'Next-Gen Autonomous Agent Engine'}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TerminalScene: React.FC<TechProps & { durationInFrames: number }> = ({
  product,
  codeSnippet,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const code = codeSnippet ?? techProductLaunchDefaultContent.codeSnippet;

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundGrid />

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
            flex: '1 1 auto',
            maxWidth: Math.min(650, layout.maxTextWidth),
            background: '#040810',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: 12,
            padding: 24,
            boxShadow: `0 20px 60px ${CYAN}22`,
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
          </div>
          <TypingEffect text={code} delay={3} charsPerSecond={45} />
        </div>

        <div
          style={{
            flex: '0 1 auto',
            maxWidth: Math.min(500, layout.maxImageWidth),
            width: '100%',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: `0 20px 60px ${PINK}33`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl}
            productName={product?.name ?? 'Tech Launch'}
            primaryColor={CYAN}
            accentColor={PINK}
            enterFrame={4}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SpecsScene: React.FC<TechProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const specs = (product?.features ?? []).slice(0, 3);

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundGrid />

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
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: CYAN,
          }}
        >
          Benchmark Specs
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
          {specs.map((spec, i) => {
            const delay = 3 + i * 4;
            const itemOpacity = useFadeIn({ from: delay, duration: 8 });
            const itemY = useSpringSlideUp({ from: delay, distance: 16, damping: 18, stiffness: 140 });

            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  opacity: itemOpacity,
                  transform: `translateY(${itemY}px)`,
                  padding: '18px 28px',
                  background: 'rgba(5, 11, 20, 0.8)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  borderRadius: 12,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(18px, 2vw, 30px)',
                    fontWeight: 800,
                    color: WHITE,
                  }}
                >
                  {spec}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: PINK,
                    letterSpacing: '0.1em',
                  }}
                >
                  VERIFIED
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const PricingScene: React.FC<TechProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const price = product?.price ?? 'Free Tier Available';
  const scale = useSpringScale({ from: 3, damping: 14, stiffness: 140 });

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundGrid />

      <AbsoluteFill
        style={{
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
            color: CYAN,
          }}
        >
          Developer Access
        </div>

        <div
          style={{
            opacity: useFadeIn({ from: 3, duration: 10 }),
            transform: `scale(${scale})`,
            fontSize: 'clamp(36px, 6vw, 84px)',
            fontWeight: 900,
            color: WHITE,
            textShadow: `0 0 40px ${CYAN}66`,
          }}
        >
          {price}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CTAScene: React.FC<TechProps & { durationInFrames: number }> = ({
  brand,
  cta,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity }}>
      <BackgroundGrid />

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
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 900,
            color: WHITE,
            textAlign: 'center',
          }}
        >
          {(brand?.name ?? 'NEXUS AI').toUpperCase()}
        </div>

        <CTAButton
          text={cta?.text ?? 'Deploy in 60 Seconds'}
          subtext={cta?.subtext ?? 'Get 100,000 Free Credits'}
          primaryColor={CYAN}
          accentColor={PINK}
          enterFrame={3}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SCENE_COMPONENTS: Record<
  string,
  React.FC<TechProps & { durationInFrames: number }>
> = {
  intro: IntroScene,
  product: TerminalScene,
  features: SpecsScene,
  headline: PricingScene,
  cta: CTAScene,
};

export const TechProductLaunch: React.FC<TechProps> = (rawContent) => {
  const content = { ...techProductLaunchDefaultContent, ...rawContent };
  const { durationInFrames } = useVideoConfig();
  const scenes = scaleScenesToDuration(techProductLaunchScenes, durationInFrames);

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
