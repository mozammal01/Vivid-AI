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
import { youtubeBusinessCaseStudyScenes } from './scenes';
import {
  youtubeBusinessCaseStudyDefaultContent,
  type YouTubeBusinessCaseStudyProps,
} from './defaults';

const DARK_NAVY = '#0A1224';
const BLUE_BIZ = '#2563EB';
const EMERALD_BIZ = '#10B981';
const WHITE = '#FFFFFF';

const BizIntroHeaderScene: React.FC<
  YouTubeBusinessCaseStudyProps & { durationInFrames: number }
> = ({
  companyName = youtubeBusinessCaseStudyDefaultContent.companyName,
  valuationStat = youtubeBusinessCaseStudyDefaultContent.valuationStat,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NAVY }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${BLUE_BIZ}30 0%, transparent 60%)`,
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
            background: EMERALD_BIZ,
            color: DARK_NAVY,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.12em',
          }}
        >
          📈 {valuationStat}
        </div>

        <KineticTypography
          text={
            product?.name ||
            youtubeBusinessCaseStudyDefaultContent.product.name
          }
          accentColor={BLUE_BIZ}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
            maxWidth: 750,
          }}
        />

        <div
          style={{
            color: BLUE_BIZ,
            fontSize: layout.subtitleFontSize,
            fontWeight: 800,
          }}
        >
          {companyName}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const BizGrowthDriversScene: React.FC<
  YouTubeBusinessCaseStudyProps & { durationInFrames: number }
> = ({
  keyGrowthDrivers = youtubeBusinessCaseStudyDefaultContent.keyGrowthDrivers,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NAVY }}>
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
            color: BLUE_BIZ,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.05em',
          }}
        >
          📊 KEY GROWTH DRIVERS & STRATEGY
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: 700,
          }}
        >
          {keyGrowthDrivers?.map((driver, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(37, 99, 235, 0.08)',
                border: `1px solid ${BLUE_BIZ}`,
                borderRadius: 14,
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                color: WHITE,
                fontWeight: 700,
                fontSize: layout.bodyFontSize,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: EMERALD_BIZ,
                  color: DARK_NAVY,
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                }}
              >
                {i + 1}
              </div>
              <span>{driver}</span>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const BizTakeawayOutroScene: React.FC<
  YouTubeBusinessCaseStudyProps & { durationInFrames: number }
> = ({
  cta,
  brand,
  takeawayConclusion = youtubeBusinessCaseStudyDefaultContent.takeawayConclusion,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_NAVY }}>
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
            background: 'rgba(255, 255, 255, 0.08)',
            border: `1px solid ${EMERALD_BIZ}`,
            borderRadius: 20,
            padding: '24px 28px',
            color: WHITE,
            fontWeight: 800,
            fontSize: layout.subtitleFontSize * 0.9,
            maxWidth: 650,
            lineHeight: 1.3,
          }}
        >
          💡 {takeawayConclusion}
        </div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeBusinessCaseStudyDefaultContent.brand.name
          }
          accentColor={BLUE_BIZ}
          style={{
            fontSize: layout.titleFontSize * 1.1,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeBusinessCaseStudyDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeBusinessCaseStudyDefaultContent.cta.subtext
          }
          primaryColor={BLUE_BIZ}
          accentColor={DARK_NAVY}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeBusinessCaseStudy: React.FC<
  YouTubeBusinessCaseStudyProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeBusinessCaseStudyScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_NAVY }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'biz-intro-header' && (
            <BizIntroHeaderScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'biz-growth-drivers' && (
            <BizGrowthDriversScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'biz-takeaway-outro' && (
            <BizTakeawayOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeBusinessCaseStudy;
