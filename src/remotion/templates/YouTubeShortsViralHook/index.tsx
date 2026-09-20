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
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { youtubeShortsViralHookScenes } from './scenes';
import { youtubeShortsViralHookDefaultContent } from './defaults';

const YELLOW = '#FACC15';
const GREEN = '#22C55E';
const DARK_OBSIDIAN = '#0F172A';
const WHITE = '#FFFFFF';

interface ShortsProps extends VideoContentProps {
  audioWaveformText?: string;
}

const AudioWaveBar: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 48 }}>
      {Array.from({ length: count }).map((_, i) => {
        const height = 10 + Math.abs(Math.sin(frame / 6 + i * 0.5)) * 38;
        return (
          <div
            key={i}
            style={{
              width: 6,
              height: `${height}px`,
              borderRadius: 3,
              background: `linear-gradient(180deg, ${YELLOW}, ${GREEN})`,
              boxShadow: `0 0 10px ${YELLOW}66`,
            }}
          />
        );
      })}
    </div>
  );
};

const HookTitleScene: React.FC<ShortsProps & { durationInFrames: number }> = ({
  brand,
  headline = youtubeShortsViralHookDefaultContent.headline,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_OBSIDIAN }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${YELLOW}22 0%, transparent 70%)`,
        }}
      />
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
            background: YELLOW,
            color: DARK_OBSIDIAN,
            fontWeight: 900,
            fontSize: 14,
            padding: '6px 16px',
            borderRadius: 20,
            letterSpacing: '0.15em',
            boxShadow: `0 0 20px ${YELLOW}88`,
          }}
        >
          {brand?.tagline || youtubeShortsViralHookDefaultContent.brand.tagline}
        </div>

        <KineticTypography
          text={headline}
          accentColor={YELLOW}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: YELLOW,
            fontWeight: 800,
            fontSize: layout.subtitleFontSize,
            letterSpacing: '0.05em',
          }}
        >
          ⚡ {brand?.name || youtubeShortsViralHookDefaultContent.brand.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const WaveformRevealScene: React.FC<ShortsProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_OBSIDIAN }}>
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
            width: layout.horizontalLayout ? '45%' : '85%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            border: `3px solid ${YELLOW}`,
            boxShadow: `0 0 30px ${YELLOW}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || youtubeShortsViralHookDefaultContent.product.imageUrl}
            productName={product?.name || 'Shorts Teaser'}
            primaryColor={YELLOW}
            accentColor={GREEN}
          />
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
          <h2
            style={{
              color: YELLOW,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || youtubeShortsViralHookDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: WHITE,
              fontSize: layout.bodyFontSize,
              margin: 0,
              opacity: 0.9,
            }}
          >
            {product?.description || youtubeShortsViralHookDefaultContent.product.description}
          </p>

          <AudioWaveBar count={layout.horizontalLayout ? 24 : 16} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TakeawaysScene: React.FC<ShortsProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || youtubeShortsViralHookDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: DARK_OBSIDIAN }}>
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
          text="KEY VIRAL TAKEAWAYS 📌"
          accentColor={YELLOW}
          style={{
            fontSize: layout.titleFontSize,
            color: YELLOW,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: 700,
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 20px',
                borderRadius: 12,
                background: 'rgba(255, 255, 255, 0.05)',
                borderLeft: `5px solid ${index === 0 ? YELLOW : index === 1 ? GREEN : WHITE}`,
              }}
            >
              <div
                style={{
                  background: YELLOW,
                  color: DARK_OBSIDIAN,
                  fontWeight: 900,
                  fontSize: 16,
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontSize: layout.bodyFontSize * 1.1,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CTASubscribeScene: React.FC<ShortsProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_OBSIDIAN }}>
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
            fontSize: 48,
          }}
        >
          🔔
        </div>

        <KineticTypography
          text={brand?.name || youtubeShortsViralHookDefaultContent.brand.name}
          accentColor={YELLOW}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: layout.subtitleFontSize,
            margin: 0,
            maxWidth: 550,
          }}
        >
          {cta?.subtext || youtubeShortsViralHookDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || youtubeShortsViralHookDefaultContent.cta.text}
          subtext={cta?.subtext || youtubeShortsViralHookDefaultContent.cta.subtext}
          primaryColor={YELLOW}
          accentColor={GREEN}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeShortsViralHook: React.FC<ShortsProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeShortsViralHookScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_OBSIDIAN }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'viral-hook-title' && (
            <HookTitleScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'viral-waveform-reveal' && (
            <WaveformRevealScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'viral-takeaways' && (
            <TakeawaysScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'viral-cta-subscribe' && (
            <CTASubscribeScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeShortsViralHook;
