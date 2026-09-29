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
import { youtubeDiyCraftTutorialScenes } from './scenes';
import {
  youtubeDiyCraftTutorialDefaultContent,
  type YouTubeDiyCraftTutorialProps,
} from './defaults';

const DARK_CREAM = '#171216';
const PINK_CRAFT = '#EC4899';
const TEAL_CRAFT = '#10B981';
const WHITE = '#FFFFFF';

const DiyIntroScene: React.FC<
  YouTubeDiyCraftTutorialProps & { durationInFrames: number }
> = ({
  brand,
  product,
  difficultyLevel = youtubeDiyCraftTutorialDefaultContent.difficultyLevel,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_CREAM }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${PINK_CRAFT}25 0%, transparent 70%)`,
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
            background: PINK_CRAFT,
            color: WHITE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.1em',
          }}
        >
          ✨ {difficultyLevel}
        </div>

        <KineticTypography
          text={
            product?.name ||
            youtubeDiyCraftTutorialDefaultContent.product.name
          }
          accentColor={PINK_CRAFT}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
            maxWidth: 700,
          }}
        />

        <div
          style={{
            color: TEAL_CRAFT,
            fontSize: layout.subtitleFontSize,
            fontWeight: 700,
          }}
        >
          {brand?.name || youtubeDiyCraftTutorialDefaultContent.brand.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const DiyMaterialsScene: React.FC<
  YouTubeDiyCraftTutorialProps & { durationInFrames: number }
> = ({
  materialsNeeded = youtubeDiyCraftTutorialDefaultContent.materialsNeeded,
  stepCount = youtubeDiyCraftTutorialDefaultContent.stepCount,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_CREAM }}>
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
        <div
          style={{
            color: PINK_CRAFT,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.05em',
          }}
        >
          ✂️ MATERIALS NEEDED ({stepCount})
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: layout.horizontalLayout ? '1fr 1fr' : '1fr',
            gap: 16,
            width: '100%',
            maxWidth: 750,
          }}
        >
          {materialsNeeded?.map((mat, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: `1px solid ${PINK_CRAFT}55`,
                borderRadius: 14,
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                color: WHITE,
                fontWeight: 700,
                fontSize: layout.bodyFontSize,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: TEAL_CRAFT,
                  color: DARK_CREAM,
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                }}
              >
                {i + 1}
              </div>
              <span>{mat}</span>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const DiyOutroScene: React.FC<
  YouTubeDiyCraftTutorialProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_CREAM }}>
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
        <div style={{ fontSize: 60 }}>🎨</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeDiyCraftTutorialDefaultContent.brand.name
          }
          accentColor={PINK_CRAFT}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text || youtubeDiyCraftTutorialDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeDiyCraftTutorialDefaultContent.cta.subtext
          }
          primaryColor={PINK_CRAFT}
          accentColor={DARK_CREAM}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeDiyCraftTutorial: React.FC<
  YouTubeDiyCraftTutorialProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeDiyCraftTutorialScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_CREAM }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'diy-intro-title' && (
            <DiyIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'diy-materials-list' && (
            <DiyMaterialsScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'diy-subscribe-outro' && (
            <DiyOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeDiyCraftTutorial;
