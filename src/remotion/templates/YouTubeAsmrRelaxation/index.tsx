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
import { KineticTypography, CTAButton } from '../../components';
import { youtubeAsmrRelaxationScenes } from './scenes';
import {
  youtubeAsmrRelaxationDefaultContent,
  type YouTubeAsmrRelaxationProps,
} from './defaults';

const DARK_NIGHT = '#0B0D1B';
const INDIGO_GLOW = '#818CF8';
const PURPLE_GLOW = '#C084FC';
const WHITE = '#FFFFFF';

const AsmrNightIntroScene: React.FC<
  YouTubeAsmrRelaxationProps & { durationInFrames: number }
> = ({
  brand,
  product,
  ambientCategory = youtubeAsmrRelaxationDefaultContent.ambientCategory,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NIGHT }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${INDIGO_GLOW}25 0%, transparent 70%)`,
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
            background: INDIGO_GLOW,
            color: DARK_NIGHT,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.1em',
          }}
        >
          🌙 {ambientCategory}
        </div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeAsmrRelaxationDefaultContent.brand.name
          }
          accentColor={INDIGO_GLOW}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: layout.subtitleFontSize,
            maxWidth: 600,
            margin: 0,
          }}
        >
          {product?.description ||
            youtubeAsmrRelaxationDefaultContent.product.description}
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const AsmrTriggerWaveScene: React.FC<
  YouTubeAsmrRelaxationProps & { durationInFrames: number }
> = ({
  soundTriggerName = youtubeAsmrRelaxationDefaultContent.soundTriggerName,
  binauralTag = youtubeAsmrRelaxationDefaultContent.binauralTag,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NIGHT }}>
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
        <div
          style={{
            background: 'rgba(192, 132, 252, 0.12)',
            border: `1px solid ${PURPLE_GLOW}`,
            color: PURPLE_GLOW,
            fontWeight: 800,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.1em',
          }}
        >
          🎧 {binauralTag}
        </div>

        <div
          style={{
            color: WHITE,
            fontWeight: 900,
            fontSize: layout.titleFontSize * 1.1,
            maxWidth: 650,
          }}
        >
          {soundTriggerName}
        </div>

        {/* Soft Glowing Ambient Wave Circles */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {[0.4, 0.7, 1, 0.7, 0.4].map((scaleFactor, i) => {
            const waveH =
              (Math.sin(frame * 0.1 + i) * 0.3 + 0.7) * 40 * scaleFactor;
            return (
              <div
                key={i}
                style={{
                  width: 12,
                  height: waveH,
                  borderRadius: 6,
                  background: INDIGO_GLOW,
                  boxShadow: `0 0 15px ${INDIGO_GLOW}`,
                }}
              />
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const AsmrSleepOutroScene: React.FC<
  YouTubeAsmrRelaxationProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NIGHT }}>
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
        <div style={{ fontSize: 60 }}>😴</div>

        <KineticTypography
          text="SWEET DREAMS & GOOD NIGHT"
          accentColor={INDIGO_GLOW}
          style={{
            fontSize: layout.titleFontSize * 1.1,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text || youtubeAsmrRelaxationDefaultContent.cta.text
          }
          subtext={
            cta?.subtext || youtubeAsmrRelaxationDefaultContent.cta.subtext
          }
          primaryColor={INDIGO_GLOW}
          accentColor={DARK_NIGHT}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeAsmrRelaxation: React.FC<
  YouTubeAsmrRelaxationProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeAsmrRelaxationScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_NIGHT }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'asmr-night-intro' && (
            <AsmrNightIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'asmr-trigger-wave' && (
            <AsmrTriggerWaveScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'asmr-sleep-outro' && (
            <AsmrSleepOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeAsmrRelaxation;
