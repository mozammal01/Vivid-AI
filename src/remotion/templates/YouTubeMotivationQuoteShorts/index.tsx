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
import { youtubeMotivationQuoteShortsScenes } from './scenes';
import {
  youtubeMotivationQuoteShortsDefaultContent,
  type YouTubeMotivationQuoteShortsProps,
} from './defaults';

const DARK_GOLD_BG = '#0D0B05';
const GOLD = '#F59E0B';
const WHITE = '#FFFFFF';

const QuoteRevealScene: React.FC<
  YouTubeMotivationQuoteShortsProps & { durationInFrames: number }
> = ({
  brand,
  quoteText = youtubeMotivationQuoteShortsDefaultContent.quoteText,
  quoteAuthor = youtubeMotivationQuoteShortsDefaultContent.quoteAuthor,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_GOLD_BG }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${GOLD}30 0%, transparent 70%)`,
        }}
      />
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
            transform: `scale(${scale})`,
            background: GOLD,
            color: DARK_GOLD_BG,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 22px',
            borderRadius: 30,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
          }}
        >
          {brand?.name ||
            youtubeMotivationQuoteShortsDefaultContent.brand.name}
        </div>

        <div
          style={{
            fontSize: 64,
            lineHeight: 1,
            color: GOLD,
            opacity: 0.6,
          }}
        >
          “
        </div>

        <KineticTypography
          text={
            quoteText ||
            youtubeMotivationQuoteShortsDefaultContent.quoteText ||
            'The mind is everything.'
          }
          accentColor={GOLD}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
            lineHeight: 1.25,
            maxWidth: 650,
          }}
        />

        <div
          style={{
            color: GOLD,
            fontSize: layout.subtitleFontSize,
            fontWeight: 800,
            letterSpacing: '0.08em',
          }}
        >
          {quoteAuthor}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const MindsetTakeawayScene: React.FC<
  YouTubeMotivationQuoteShortsProps & { durationInFrames: number }
> = ({
  keyMindsetPoint = youtubeMotivationQuoteShortsDefaultContent.keyMindsetPoint,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  const points = keyMindsetPoint?.split('•') || [];

  return (
    <AbsoluteFill style={{ opacity, background: DARK_GOLD_BG }}>
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
        <div
          style={{
            color: GOLD,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          👑 MINDSET PILLARS
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: 600,
          }}
        >
          {points.map((pt, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: 16,
                padding: '20px 24px',
                color: WHITE,
                fontWeight: 800,
                fontSize: layout.bodyFontSize * 1.1,
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              }}
            >
              {pt.trim()}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SubscribeSignoffScene: React.FC<
  YouTubeMotivationQuoteShortsProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_GOLD_BG }}>
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
        <div style={{ fontSize: 60 }}>👑</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeMotivationQuoteShortsDefaultContent.brand.name
          }
          accentColor={GOLD}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeMotivationQuoteShortsDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeMotivationQuoteShortsDefaultContent.cta.subtext
          }
          primaryColor={GOLD}
          accentColor={DARK_GOLD_BG}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeMotivationQuoteShorts: React.FC<
  YouTubeMotivationQuoteShortsProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeMotivationQuoteShortsScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_GOLD_BG }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'motivation-quote-reveal' && (
            <QuoteRevealScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'motivation-mindset-takeaway' && (
            <MindsetTakeawayScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'motivation-subscribe-signoff' && (
            <SubscribeSignoffScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeMotivationQuoteShorts;
