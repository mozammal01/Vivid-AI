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
import { youtubeFitnessWorkoutTimerScenes } from './scenes';
import {
  youtubeFitnessWorkoutTimerDefaultContent,
  type YouTubeFitnessWorkoutTimerProps,
} from './defaults';

const DARK_RED = '#18080A';
const RED_ENERGY = '#EF4444';
const AMBER_GLOW = '#F59E0B';
const WHITE = '#FFFFFF';

const WorkoutTitleIntroScene: React.FC<
  YouTubeFitnessWorkoutTimerProps & { durationInFrames: number }
> = ({
  brand,
  product,
  caloriesBurned = youtubeFitnessWorkoutTimerDefaultContent.caloriesBurned,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_RED }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${RED_ENERGY}35 0%, transparent 70%)`,
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
            background: RED_ENERGY,
            color: WHITE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '8px 22px',
            borderRadius: 30,
            letterSpacing: '0.1em',
            boxShadow: `0 10px 30px ${RED_ENERGY}66`,
          }}
        >
          {caloriesBurned}
        </div>

        <KineticTypography
          text={
            product?.name ||
            youtubeFitnessWorkoutTimerDefaultContent.product.name
          }
          accentColor={RED_ENERGY}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: AMBER_GLOW,
            fontSize: layout.subtitleFontSize,
            fontWeight: 700,
          }}
        >
          {brand?.name || youtubeFitnessWorkoutTimerDefaultContent.brand.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ActiveTimerScene: React.FC<
  YouTubeFitnessWorkoutTimerProps & { durationInFrames: number }
> = ({
  exerciseName = youtubeFitnessWorkoutTimerDefaultContent.exerciseName,
  nextExerciseName = youtubeFitnessWorkoutTimerDefaultContent.nextExerciseName,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const secondsLeft = Math.max(
    0,
    Math.ceil((durationInFrames - frame) / 30)
  );

  const progress = interpolate(frame, [0, durationInFrames], [1, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_RED }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `60px ${layout.paddingX}px`,
        }}
      >
        {/* Exercise Header Banner */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: `2px solid ${RED_ENERGY}`,
            borderRadius: 20,
            padding: '16px 32px',
            textAlign: 'center',
            boxShadow: `0 10px 30px ${RED_ENERGY}33`,
          }}
        >
          <div
            style={{
              color: AMBER_GLOW,
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: '0.1em',
            }}
          >
            ACTIVE EXERCISE
          </div>
          <div
            style={{
              color: WHITE,
              fontWeight: 900,
              fontSize: layout.titleFontSize * 0.9,
              marginTop: 4,
            }}
          >
            {exerciseName}
          </div>
        </div>

        {/* Big Circular Timer Widget */}
        <div
          style={{
            position: 'relative',
            width: 220,
            height: 220,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="220" height="220" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="110"
              cy="110"
              r="95"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="14"
              fill="transparent"
            />
            <circle
              cx="110"
              cy="110"
              r="95"
              stroke={RED_ENERGY}
              strokeWidth="14"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 95}
              strokeDashoffset={2 * Math.PI * 95 * (1 - progress)}
              strokeLinecap="round"
            />
          </svg>
          <div
            style={{
              position: 'absolute',
              color: WHITE,
              fontWeight: 900,
              fontSize: 64,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            :{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
          </div>
        </div>

        {/* Next Exercise Preview Card */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 14,
            padding: '12px 24px',
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: 700,
            fontSize: layout.bodyFontSize,
          }}
        >
          {nextExerciseName}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const RestOutroScene: React.FC<
  YouTubeFitnessWorkoutTimerProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 10 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_RED }}>
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
        <div style={{ transform: `scale(${scale})`, fontSize: 64 }}>💪</div>

        <KineticTypography
          text="GREAT WORKOUT! KEEP PUSHING!"
          accentColor={RED_ENERGY}
          style={{
            fontSize: layout.titleFontSize * 1.1,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: AMBER_GLOW,
            fontSize: layout.subtitleFontSize,
            fontWeight: 700,
          }}
        >
          {brand?.name || youtubeFitnessWorkoutTimerDefaultContent.brand.name}
        </div>

        <CTAButton
          text={cta?.text || youtubeFitnessWorkoutTimerDefaultContent.cta.text}
          subtext={
            cta?.subtext ||
            youtubeFitnessWorkoutTimerDefaultContent.cta.subtext
          }
          primaryColor={RED_ENERGY}
          accentColor={WHITE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeFitnessWorkoutTimer: React.FC<
  YouTubeFitnessWorkoutTimerProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeFitnessWorkoutTimerScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_RED }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'workout-title-intro' && (
            <WorkoutTitleIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'workout-active-timer' && (
            <ActiveTimerScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'workout-rest-outro' && (
            <RestOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeFitnessWorkoutTimer;
