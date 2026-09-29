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
import { youtubeNewsCommentaryLowerthirdScenes } from './scenes';
import {
  youtubeNewsCommentaryLowerthirdDefaultContent,
  type YouTubeNewsCommentaryLowerthirdProps,
} from './defaults';

const DARK_SLATE = '#0F172A';
const INDIGO = '#6366F1';
const TEAL = '#10B981';
const WHITE = '#FFFFFF';

const EssayTitleScene: React.FC<
  YouTubeNewsCommentaryLowerthirdProps & { durationInFrames: number }
> = ({
  topicChapterTag = youtubeNewsCommentaryLowerthirdDefaultContent.topicChapterTag,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_SLATE }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 30% 30%, ${INDIGO}30 0%, transparent 60%)`,
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
            background: INDIGO,
            color: WHITE,
            fontWeight: 800,
            fontSize: layout.badgeFontSize,
            padding: '6px 18px',
            borderRadius: 20,
            letterSpacing: '0.1em',
          }}
        >
          {topicChapterTag}
        </div>

        <KineticTypography
          text={
            product?.name ||
            youtubeNewsCommentaryLowerthirdDefaultContent.product.name
          }
          accentColor={INDIGO}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
            maxWidth: 750,
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: layout.bodyFontSize,
            maxWidth: 600,
            margin: 0,
          }}
        >
          {product?.description ||
            youtubeNewsCommentaryLowerthirdDefaultContent.product.description}
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const LowerthirdBadgeScene: React.FC<
  YouTubeNewsCommentaryLowerthirdProps & { durationInFrames: number }
> = ({
  commentatorName = youtubeNewsCommentaryLowerthirdDefaultContent.commentatorName,
  commentatorTitle = youtubeNewsCommentaryLowerthirdDefaultContent.commentatorTitle,
  sourceCitationText = youtubeNewsCommentaryLowerthirdDefaultContent.sourceCitationText,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const slideIn = interpolate(frame, [0, 25], [-80, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_SLATE }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: `60px ${layout.paddingX}px`,
        }}
      >
        {/* Animated Lower Third Bar */}
        <div
          style={{
            transform: `translateX(${slideIn}px)`,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            background: 'rgba(15, 23, 42, 0.9)',
            border: `1px solid ${INDIGO}`,
            borderLeft: `6px solid ${TEAL}`,
            padding: '16px 28px',
            borderRadius: 12,
            maxWidth: 650,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: INDIGO,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: WHITE,
              fontWeight: 900,
              fontSize: 22,
            }}
          >
            👤
          </div>
          <div>
            <div
              style={{
                color: WHITE,
                fontWeight: 900,
                fontSize: layout.subtitleFontSize,
              }}
            >
              {commentatorName}
            </div>
            <div
              style={{
                color: TEAL,
                fontWeight: 700,
                fontSize: layout.bodyFontSize * 0.9,
              }}
            >
              {commentatorTitle}
            </div>
          </div>
        </div>

        {/* Source Citation Footnote */}
        <div
          style={{
            marginTop: 16,
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          📄 {sourceCitationText}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SourceOutroScene: React.FC<
  YouTubeNewsCommentaryLowerthirdProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_SLATE }}>
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
          text={
            brand?.name ||
            youtubeNewsCommentaryLowerthirdDefaultContent.brand.name
          }
          accentColor={INDIGO}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeNewsCommentaryLowerthirdDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeNewsCommentaryLowerthirdDefaultContent.cta.subtext
          }
          primaryColor={INDIGO}
          accentColor={WHITE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeNewsCommentaryLowerthird: React.FC<
  YouTubeNewsCommentaryLowerthirdProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeNewsCommentaryLowerthirdScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_SLATE }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'commentary-essay-title' && (
            <EssayTitleScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'commentary-lowerthird-badge' && (
            <LowerthirdBadgeScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'commentary-source-outro' && (
            <SourceOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeNewsCommentaryLowerthird;
