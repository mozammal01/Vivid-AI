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
import { youtubeTopTrendingNewsScenes } from './scenes';
import {
  youtubeTopTrendingNewsDefaultContent,
  type YouTubeTopTrendingNewsProps,
} from './defaults';

const DARK_TABLOID = '#140612';
const PINK_VIRAL = '#EC4899';
const BLUE_VIRAL = '#3B82F6';
const WHITE = '#FFFFFF';

const TrendingIntroScene: React.FC<
  YouTubeTopTrendingNewsProps & { durationInFrames: number }
> = ({
  brand,
  product,
  trendingTopic = youtubeTopTrendingNewsDefaultContent.trendingTopic,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_TABLOID }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${PINK_VIRAL}30 0%, transparent 60%)`,
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
            background: PINK_VIRAL,
            color: WHITE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.12em',
            boxShadow: `0 0 25px ${PINK_VIRAL}`,
          }}
        >
          🔥 {trendingTopic}
        </div>

        <KineticTypography
          text={
            product?.name ||
            youtubeTopTrendingNewsDefaultContent.product.name
          }
          accentColor={PINK_VIRAL}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
            maxWidth: 750,
          }}
        />

        <div
          style={{
            color: BLUE_VIRAL,
            fontSize: layout.subtitleFontSize,
            fontWeight: 800,
          }}
        >
          {brand?.name || youtubeTopTrendingNewsDefaultContent.brand.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TrendingPostSnippetScene: React.FC<
  YouTubeTopTrendingNewsProps & { durationInFrames: number }
> = ({
  socialPostSnippet = youtubeTopTrendingNewsDefaultContent.socialPostSnippet,
  viralCountText = youtubeTopTrendingNewsDefaultContent.viralCountText,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_TABLOID }}>
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
            background: 'rgba(59, 130, 246, 0.12)',
            border: `1px solid ${BLUE_VIRAL}`,
            color: BLUE_VIRAL,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 20,
          }}
        >
          📈 {viralCountText}
        </div>

        {/* Social Post Box Mockup */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '2px solid rgba(236, 72, 153, 0.4)',
            borderRadius: 20,
            padding: '32px 28px',
            maxWidth: 650,
            boxShadow: `0 20px 40px ${PINK_VIRAL}33`,
          }}
        >
          <p
            style={{
              color: WHITE,
              fontWeight: 800,
              fontSize: layout.subtitleFontSize * 1.1,
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {socialPostSnippet}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TrendingOutroScene: React.FC<
  YouTubeTopTrendingNewsProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_TABLOID }}>
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
        <div style={{ fontSize: 60 }}>⚡</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeTopTrendingNewsDefaultContent.brand.name
          }
          accentColor={PINK_VIRAL}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text || youtubeTopTrendingNewsDefaultContent.cta.text
          }
          subtext={
            cta?.subtext || youtubeTopTrendingNewsDefaultContent.cta.subtext
          }
          primaryColor={PINK_VIRAL}
          accentColor={DARK_TABLOID}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeTopTrendingNews: React.FC<
  YouTubeTopTrendingNewsProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeTopTrendingNewsScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_TABLOID }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'trending-intro-badge' && (
            <TrendingIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'trending-post-snippet' && (
            <TrendingPostSnippetScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'trending-subscribe-outro' && (
            <TrendingOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeTopTrendingNews;
