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
import { youtubeLofiMusicVisualizerScenes } from './scenes';
import {
  youtubeLofiMusicVisualizerDefaultContent,
  type YouTubeLofiMusicVisualizerProps,
} from './defaults';

const DARK_PURPLE = '#18122B';
const PINK_ACCENT = '#F472B6';
const INDIGO_ACCENT = '#818CF8';
const WHITE = '#FFFFFF';

const LofiIntroTitleScene: React.FC<
  YouTubeLofiMusicVisualizerProps & { durationInFrames: number }
> = ({
  brand,
  product,
  streamSchedule = youtubeLofiMusicVisualizerDefaultContent.streamSchedule,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_PURPLE }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${PINK_ACCENT}25 0%, transparent 70%)`,
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
            background: PINK_ACCENT,
            color: DARK_PURPLE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.1em',
          }}
        >
          ● {streamSchedule}
        </div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeLofiMusicVisualizerDefaultContent.brand.name
          }
          accentColor={PINK_ACCENT}
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
            youtubeLofiMusicVisualizerDefaultContent.product.description}
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const VinylVisualizerScene: React.FC<
  YouTubeLofiMusicVisualizerProps & { durationInFrames: number }
> = ({
  trackTitle = youtubeLofiMusicVisualizerDefaultContent.trackTitle,
  artistName = youtubeLofiMusicVisualizerDefaultContent.artistName,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const vinylRotation = frame * 1.5;

  return (
    <AbsoluteFill style={{ opacity, background: DARK_PURPLE }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        {/* Spinning Vinyl Disk */}
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #222 30%, #111 70%, #000 100%)',
            border: '8px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotate(${vinylRotation}deg)`,
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: PINK_ACCENT,
              color: DARK_PURPLE,
              fontWeight: 900,
              fontSize: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            🎵
          </div>
        </div>

        {/* Track Title & Audio Spectrum Visualizer */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            gap: 16,
            maxWidth: 500,
          }}
        >
          <div
            style={{
              color: PINK_ACCENT,
              fontWeight: 900,
              fontSize: layout.titleFontSize,
            }}
          >
            {trackTitle}
          </div>
          <div
            style={{
              color: INDIGO_ACCENT,
              fontWeight: 700,
              fontSize: layout.subtitleFontSize,
            }}
          >
            {artistName}
          </div>

          {/* Equalizer Spectrum */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'flex-end',
              height: 60,
              marginTop: 12,
            }}
          >
            {[20, 45, 75, 30, 90, 60, 40, 85, 50, 70, 35].map((h, i) => {
              const animatedH =
                (Math.sin(frame * 0.25 + i * 0.8) * 0.4 + 0.6) * h;
              return (
                <div
                  key={i}
                  style={{
                    width: 8,
                    height: animatedH,
                    borderRadius: 4,
                    background: i % 2 === 0 ? PINK_ACCENT : INDIGO_ACCENT,
                    boxShadow: `0 0 10px ${
                      i % 2 === 0 ? PINK_ACCENT : INDIGO_ACCENT
                    }`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const LofiSubscribeOutroScene: React.FC<
  YouTubeLofiMusicVisualizerProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_PURPLE }}>
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
        <div style={{ fontSize: 60 }}>🎧</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeLofiMusicVisualizerDefaultContent.brand.name
          }
          accentColor={PINK_ACCENT}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeLofiMusicVisualizerDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeLofiMusicVisualizerDefaultContent.cta.subtext
          }
          primaryColor={PINK_ACCENT}
          accentColor={DARK_PURPLE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeLofiMusicVisualizer: React.FC<
  YouTubeLofiMusicVisualizerProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeLofiMusicVisualizerScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_PURPLE }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'lofi-intro-title' && (
            <LofiIntroTitleScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'lofi-vinyl-visualizer' && (
            <VinylVisualizerScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'lofi-subscribe-outro' && (
            <LofiSubscribeOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeLofiMusicVisualizer;
