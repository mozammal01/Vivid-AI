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
import { youtubeLifeHacksTipsScenes } from './scenes';
import {
  youtubeLifeHacksTipsDefaultContent,
  type YouTubeLifeHacksTipsProps,
} from './defaults';

const DARK_BLUE = '#08131A';
const CYAN = '#06B6D4';
const AMBER = '#F59E0B';
const WHITE = '#FFFFFF';

const ProblemIntroScene: React.FC<
  YouTubeLifeHacksTipsProps & { durationInFrames: number }
> = ({
  brand,
  hackTitle = youtubeLifeHacksTipsDefaultContent.hackTitle,
  problemStatement = youtubeLifeHacksTipsDefaultContent.problemStatement,
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
          background: `radial-gradient(circle at 50% 30%, ${CYAN}30 0%, transparent 70%)`,
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
            transform: `scale(${scale})`,
            background: CYAN,
            color: DARK_BLUE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 22px',
            borderRadius: 30,
            letterSpacing: '0.12em',
          }}
        >
          💡 LIFE HACK #42
        </div>

        <KineticTypography
          text={
            hackTitle ||
            youtubeLifeHacksTipsDefaultContent.hackTitle ||
            'GENIUS LIFE HACK'
          }
          accentColor={CYAN}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '2px solid rgba(6, 182, 212, 0.4)',
            borderRadius: 20,
            padding: '24px 28px',
            color: WHITE,
            fontWeight: 800,
            fontSize: layout.subtitleFontSize,
            maxWidth: 600,
          }}
        >
          ❓ {problemStatement}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SolutionCardScene: React.FC<
  YouTubeLifeHacksTipsProps & { durationInFrames: number }
> = ({
  solutionHack = youtubeLifeHacksTipsDefaultContent.solutionHack,
  hackDifficulty = youtubeLifeHacksTipsDefaultContent.hackDifficulty,
  durationInFrames,
}) => {
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
          gap: 28,
          padding: `0 ${layout.paddingX}px`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: AMBER,
            color: DARK_BLUE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
          }}
        >
          {hackDifficulty}
        </div>

        <div
          style={{
            background: 'rgba(6, 182, 212, 0.1)',
            border: `2px solid ${CYAN}`,
            borderRadius: 24,
            padding: '32px 28px',
            maxWidth: 650,
            boxShadow: `0 20px 40px ${CYAN}33`,
          }}
        >
          <div
            style={{
              color: CYAN,
              fontWeight: 900,
              fontSize: 16,
              letterSpacing: '0.15em',
              marginBottom: 12,
            }}
          >
            ⚡ THE SOLUTION HACK
          </div>
          <div
            style={{
              color: WHITE,
              fontWeight: 800,
              fontSize: layout.titleFontSize * 0.9,
              lineHeight: 1.3,
            }}
          >
            {solutionHack}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const HackSubscribeOutroScene: React.FC<
  YouTubeLifeHacksTipsProps & { durationInFrames: number }
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
        <div style={{ fontSize: 60 }}>💡</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeLifeHacksTipsDefaultContent.brand.name
          }
          accentColor={CYAN}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text || youtubeLifeHacksTipsDefaultContent.cta.text
          }
          subtext={
            cta?.subtext || youtubeLifeHacksTipsDefaultContent.cta.subtext
          }
          primaryColor={CYAN}
          accentColor={DARK_BLUE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeLifeHacksTips: React.FC<YouTubeLifeHacksTipsProps> = (
  props
) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeLifeHacksTipsScenes,
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
          {scene.id === 'hack-problem-intro' && (
            <ProblemIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'hack-solution-card' && (
            <SolutionCardScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'hack-subscribe-outro' && (
            <HackSubscribeOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeLifeHacksTips;
