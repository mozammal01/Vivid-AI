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
import { youtubePodcastVideoIntroScenes } from './scenes';
import {
  youtubePodcastVideoIntroDefaultContent,
  type YouTubePodcastVideoIntroProps,
} from './defaults';

const DARK_BLUE = '#0A1128';
const BLUE_ACCENT = '#3B82F6';
const EMERALD = '#10B981';
const WHITE = '#FFFFFF';

const PodcastOpenerScene: React.FC<
  YouTubePodcastVideoIntroProps & { durationInFrames: number }
> = ({
  podcastTitle = youtubePodcastVideoIntroDefaultContent.podcastTitle,
  episodeNumber = youtubePodcastVideoIntroDefaultContent.episodeNumber,
  topicTagline = youtubePodcastVideoIntroDefaultContent.topicTagline,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BLUE }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 30% 50%, ${BLUE_ACCENT}25 0%, transparent 60%)`,
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
            background: BLUE_ACCENT,
            color: WHITE,
            fontWeight: 800,
            fontSize: layout.badgeFontSize,
            padding: '6px 18px',
            borderRadius: 20,
            letterSpacing: '0.1em',
          }}
        >
          {episodeNumber}
        </div>

        <KineticTypography
          text={
            podcastTitle ||
            youtubePodcastVideoIntroDefaultContent.podcastTitle ||
            'THE DEEP DIVE SHOW'
          }
          accentColor={BLUE_ACCENT}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: EMERALD,
            fontSize: layout.subtitleFontSize,
            fontWeight: 800,
            letterSpacing: '0.05em',
          }}
        >
          🎙️ {topicTagline}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SpeakersCardsScene: React.FC<
  YouTubePodcastVideoIntroProps & { durationInFrames: number }
> = ({
  hostName = youtubePodcastVideoIntroDefaultContent.hostName,
  guestName = youtubePodcastVideoIntroDefaultContent.guestName,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const hostSlide = interpolate(frame, [0, 20], [-60, 0], {
    extrapolateRight: 'clamp',
  });
  const guestSlide = interpolate(frame, [10, 30], [60, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BLUE }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            color: WHITE,
            fontWeight: 900,
            fontSize: layout.titleFontSize * 0.9,
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          "{product?.name || youtubePodcastVideoIntroDefaultContent.product.name}"
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: layout.horizontalLayout ? 'row' : 'column',
            gap: 24,
            width: '100%',
            maxWidth: 800,
            justifyContent: 'center',
          }}
        >
          {/* Host Card */}
          <div
            style={{
              transform: `translateX(${hostSlide}px)`,
              flex: 1,
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${BLUE_ACCENT}`,
              borderRadius: 16,
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: '50%',
                background: BLUE_ACCENT,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
              }}
            >
              🎙️
            </div>
            <div>
              <div
                style={{
                  color: WHITE,
                  fontWeight: 900,
                  fontSize: layout.subtitleFontSize * 0.9,
                }}
              >
                {hostName}
              </div>
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: layout.bodyFontSize * 0.9,
                }}
              >
                Podcast Host
              </div>
            </div>
          </div>

          {/* Guest Card */}
          <div
            style={{
              transform: `translateX(${guestSlide}px)`,
              flex: 1,
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${EMERALD}`,
              borderRadius: 16,
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: '50%',
                background: EMERALD,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
              }}
            >
              ⭐
            </div>
            <div>
              <div
                style={{
                  color: WHITE,
                  fontWeight: 900,
                  fontSize: layout.subtitleFontSize * 0.9,
                }}
              >
                {guestName}
              </div>
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: layout.bodyFontSize * 0.9,
                }}
              >
                Special Keynote Guest
              </div>
            </div>
          </div>
        </div>

        {/* Audio Waveform Equalizer Mockup */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {[30, 60, 40, 80, 50, 90, 45, 70, 35].map((h, i) => {
            const barH = (Math.sin(frame * 0.2 + i) * 0.4 + 0.6) * h;
            return (
              <div
                key={i}
                style={{
                  width: 6,
                  height: barH,
                  borderRadius: 3,
                  background: i % 2 === 0 ? BLUE_ACCENT : EMERALD,
                }}
              />
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TopicOutroScene: React.FC<
  YouTubePodcastVideoIntroProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BLUE }}>
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
        <KineticTypography
          text={brand?.name || youtubePodcastVideoIntroDefaultContent.brand.name}
          accentColor={BLUE_ACCENT}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={cta?.text || youtubePodcastVideoIntroDefaultContent.cta.text}
          subtext={
            cta?.subtext || youtubePodcastVideoIntroDefaultContent.cta.subtext
          }
          primaryColor={BLUE_ACCENT}
          accentColor={WHITE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubePodcastVideoIntro: React.FC<
  YouTubePodcastVideoIntroProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubePodcastVideoIntroScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_BLUE }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'podcast-opener-header' && (
            <PodcastOpenerScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'podcast-speakers-cards' && (
            <SpeakersCardsScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'podcast-topic-outro' && (
            <TopicOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubePodcastVideoIntro;
