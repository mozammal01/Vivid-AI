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
import { youtubeCodingProjectShowcaseScenes } from './scenes';
import {
  youtubeCodingProjectShowcaseDefaultContent,
  type YouTubeCodingProjectShowcaseProps,
} from './defaults';

const DARK_IDE = '#0D1117';
const BLUE_CODE = '#3B82F6';
const GREEN_CODE = '#10B981';
const WHITE = '#FFFFFF';

const RepoIntroScene: React.FC<
  YouTubeCodingProjectShowcaseProps & { durationInFrames: number }
> = ({
  repoName = youtubeCodingProjectShowcaseDefaultContent.repoName,
  githubStars = youtubeCodingProjectShowcaseDefaultContent.githubStars,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_IDE }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${BLUE_CODE}25 0%, transparent 60%)`,
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
            background: 'rgba(59, 130, 246, 0.12)',
            border: `1px solid ${BLUE_CODE}`,
            color: BLUE_CODE,
            fontWeight: 800,
            fontSize: layout.badgeFontSize,
            padding: '6px 18px',
            borderRadius: 20,
            letterSpacing: '0.1em',
          }}
        >
          ⭐ {githubStars}
        </div>

        <KineticTypography
          text={
            repoName ||
            youtubeCodingProjectShowcaseDefaultContent.repoName ||
            'mozammal01/Vivid-AI'
          }
          accentColor={BLUE_CODE}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
            fontFamily: 'monospace',
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: layout.subtitleFontSize,
            maxWidth: 650,
            margin: 0,
          }}
        >
          {product?.description ||
            youtubeCodingProjectShowcaseDefaultContent.product.description}
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TerminalStackScene: React.FC<
  YouTubeCodingProjectShowcaseProps & { durationInFrames: number }
> = ({
  techStackTags = youtubeCodingProjectShowcaseDefaultContent.techStackTags,
  terminalCommand = youtubeCodingProjectShowcaseDefaultContent.terminalCommand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_IDE }}>
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
        {/* Terminal Window Mockup */}
        <div
          style={{
            width: '100%',
            maxWidth: 700,
            background: '#161B22',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {/* Window Bar */}
          <div
            style={{
              background: '#21262D',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#FF5F56',
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#FFBD2E',
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#27C93F',
              }}
            />
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: 12,
                fontFamily: 'monospace',
                marginLeft: 8,
              }}
            >
              bash — 80x24
            </span>
          </div>

          {/* Terminal Body */}
          <div style={{ padding: 24, fontFamily: 'monospace' }}>
            <div style={{ color: GREEN_CODE, fontSize: layout.bodyFontSize }}>
              $ {terminalCommand}
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {techStackTags?.map((tag, i) => (
            <span
              key={i}
              style={{
                background: 'rgba(59, 130, 246, 0.15)',
                border: `1px solid ${BLUE_CODE}`,
                color: WHITE,
                fontWeight: 700,
                fontSize: layout.bodyFontSize * 0.9,
                padding: '6px 16px',
                borderRadius: 20,
              }}
            >
              ⚡ {tag}
            </span>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const GithubOutroScene: React.FC<
  YouTubeCodingProjectShowcaseProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_IDE }}>
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
        <div style={{ fontSize: 60 }}>💻</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeCodingProjectShowcaseDefaultContent.brand.name
          }
          accentColor={BLUE_CODE}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeCodingProjectShowcaseDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeCodingProjectShowcaseDefaultContent.cta.subtext
          }
          primaryColor={BLUE_CODE}
          accentColor={DARK_IDE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeCodingProjectShowcase: React.FC<
  YouTubeCodingProjectShowcaseProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeCodingProjectShowcaseScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_IDE }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'code-repo-intro' && (
            <RepoIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'code-terminal-stack' && (
            <TerminalStackScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'code-github-outro' && (
            <GithubOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeCodingProjectShowcase;
