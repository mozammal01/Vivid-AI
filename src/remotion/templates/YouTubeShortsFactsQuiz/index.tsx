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
import { youtubeShortsFactsQuizScenes } from './scenes';
import {
  youtubeShortsFactsQuizDefaultContent,
  type YouTubeShortsFactsQuizProps,
} from './defaults';

const PURPLE_BG = '#13092A';
const AMBER = '#F59E0B';
const VIOLET = '#8B5CF6';
const WHITE = '#FFFFFF';
const GREEN = '#10B981';

const QuestionRevealScene: React.FC<
  YouTubeShortsFactsQuizProps & { durationInFrames: number }
> = ({
  brand,
  questionText = youtubeShortsFactsQuizDefaultContent.questionText,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: PURPLE_BG }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${VIOLET}40 0%, transparent 70%)`,
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
            background: AMBER,
            color: PURPLE_BG,
            fontWeight: 900,
            fontSize: layout.badgeFontSize * 1.2,
            padding: '8px 24px',
            borderRadius: 30,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
          }}
        >
          {brand?.name || youtubeShortsFactsQuizDefaultContent.brand.name}
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '2px solid rgba(139, 92, 246, 0.5)',
            borderRadius: 24,
            padding: '32px 24px',
            maxWidth: 650,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          <KineticTypography
            text={
              questionText ||
              youtubeShortsFactsQuizDefaultContent.questionText ||
              'Quiz Question'
            }
            accentColor={AMBER}
            style={{
              fontSize: layout.titleFontSize * 1.1,
              color: WHITE,
              fontWeight: 900,
              lineHeight: 1.3,
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CountdownChoicesScene: React.FC<
  YouTubeShortsFactsQuizProps & { durationInFrames: number }
> = ({
  options = youtubeShortsFactsQuizDefaultContent.options,
  correctOptionIndex = youtubeShortsFactsQuizDefaultContent.correctOptionIndex,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const secondsLeft = Math.max(
    1,
    Math.ceil((durationInFrames - frame) / 30)
  );

  return (
    <AbsoluteFill style={{ opacity, background: PURPLE_BG }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        {/* Timer Ring */}
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: `4px solid ${AMBER}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: AMBER,
            fontWeight: 900,
            fontSize: 28,
            boxShadow: '0 0 30px rgba(245, 158, 11, 0.5)',
          }}
        >
          {secondsLeft}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            width: '100%',
            maxWidth: 600,
          }}
        >
          {options?.map((opt, i) => {
            const isCorrect = i === correctOptionIndex;
            const revealAnswer = frame > durationInFrames - 30;

            return (
              <div
                key={i}
                style={{
                  background:
                    revealAnswer && isCorrect
                      ? GREEN
                      : 'rgba(255, 255, 255, 0.08)',
                  border: `2px solid ${
                    revealAnswer && isCorrect
                      ? GREEN
                      : 'rgba(255, 255, 255, 0.2)'
                  }`,
                  color: WHITE,
                  fontWeight: 800,
                  fontSize: layout.bodyFontSize * 1.1,
                  padding: '16px 20px',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  boxShadow:
                    revealAnswer && isCorrect
                      ? '0 10px 30px rgba(16, 185, 129, 0.5)'
                      : 'none',
                }}
              >
                <span>{opt}</span>
                {revealAnswer && isCorrect && <span>✓ CORRECT!</span>}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const AnswerPopOutroScene: React.FC<
  YouTubeShortsFactsQuizProps & { durationInFrames: number }
> = ({
  cta,
  explanationText = youtubeShortsFactsQuizDefaultContent.explanationText,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const pop = spring({ frame, fps: 30, config: { damping: 10 } });

  return (
    <AbsoluteFill style={{ opacity, background: PURPLE_BG }}>
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
            transform: `scale(${pop})`,
            background: GREEN,
            color: WHITE,
            fontWeight: 900,
            fontSize: 24,
            padding: '12px 28px',
            borderRadius: 40,
            boxShadow: '0 15px 35px rgba(16, 185, 129, 0.5)',
          }}
        >
          🎉 BINGO!
        </div>

        <p
          style={{
            color: WHITE,
            fontWeight: 800,
            fontSize: layout.subtitleFontSize,
            maxWidth: 600,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {explanationText}
        </p>

        <CTAButton
          text={cta?.text || youtubeShortsFactsQuizDefaultContent.cta.text}
          subtext={
            cta?.subtext || youtubeShortsFactsQuizDefaultContent.cta.subtext
          }
          primaryColor={AMBER}
          accentColor={PURPLE_BG}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeShortsFactsQuiz: React.FC<YouTubeShortsFactsQuizProps> = (
  props
) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeShortsFactsQuizScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: PURPLE_BG }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'quiz-question-reveal' && (
            <QuestionRevealScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'quiz-countdown-choices' && (
            <CountdownChoicesScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'quiz-answer-pop-outro' && (
            <AnswerPopOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeShortsFactsQuiz;
