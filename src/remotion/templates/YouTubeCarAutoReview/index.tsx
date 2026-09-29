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
import {
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { youtubeCarAutoReviewScenes } from './scenes';
import {
  youtubeCarAutoReviewDefaultContent,
  type YouTubeCarAutoReviewProps,
} from './defaults';

const DARK_CARBON = '#0A0B0E';
const RED_RACE = '#EF4444';
const AMBER_RACE = '#F59E0B';
const WHITE = '#FFFFFF';

const CarIntroScene: React.FC<
  YouTubeCarAutoReviewProps & { durationInFrames: number }
> = ({
  carModelName = youtubeCarAutoReviewDefaultContent.carModelName,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_CARBON }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 60% 40%, ${RED_RACE}30 0%, transparent 60%)`,
        }}
      />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 36,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            width: layout.horizontalLayout ? '45%' : '80%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: `0 20px 50px ${RED_RACE}33`,
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeCarAutoReviewDefaultContent.product.imageUrl
            }
            productName={
              product?.name ||
              youtubeCarAutoReviewDefaultContent.product.name
            }
            primaryColor={RED_RACE}
            accentColor={AMBER_RACE}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            gap: 16,
            maxWidth: 500,
          }}
        >
          <span
            style={{
              background: RED_RACE,
              color: WHITE,
              fontWeight: 900,
              fontSize: layout.badgeFontSize,
              padding: '6px 18px',
              borderRadius: 20,
              letterSpacing: '0.15em',
            }}
          >
            🏎️ TRACK TEST & REVIEW
          </span>

          <KineticTypography
            text={
              carModelName ||
              youtubeCarAutoReviewDefaultContent.carModelName ||
              'APEX GT'
            }
            accentColor={RED_RACE}
            style={{
              fontSize: layout.titleFontSize * 1.3,
              color: WHITE,
              fontWeight: 900,
            }}
          />

          <div
            style={{
              color: AMBER_RACE,
              fontWeight: 900,
              fontSize: layout.titleFontSize * 0.9,
            }}
          >
            {product?.price ||
              youtubeCarAutoReviewDefaultContent.product.price}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CarTelemetryScene: React.FC<
  YouTubeCarAutoReviewProps & { durationInFrames: number }
> = ({
  accelerationStat = youtubeCarAutoReviewDefaultContent.accelerationStat,
  horsepowerStat = youtubeCarAutoReviewDefaultContent.horsepowerStat,
  topSpeedStat = youtubeCarAutoReviewDefaultContent.topSpeedStat,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_CARBON }}>
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
            color: RED_RACE,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.08em',
          }}
        >
          ⏱️ TRACK TELEMETRY SPECS
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: layout.horizontalLayout ? 'row' : 'column',
            gap: 20,
            width: '100%',
            maxWidth: 800,
          }}
        >
          {/* Stat 1 */}
          <div
            style={{
              flex: 1,
              background: 'rgba(239, 68, 68, 0.08)',
              border: `2px solid ${RED_RACE}`,
              borderRadius: 16,
              padding: 24,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>⚡</div>
            <div
              style={{
                color: WHITE,
                fontWeight: 900,
                fontSize: layout.subtitleFontSize * 0.9,
              }}
            >
              {accelerationStat}
            </div>
          </div>

          {/* Stat 2 */}
          <div
            style={{
              flex: 1,
              background: 'rgba(245, 158, 11, 0.08)',
              border: `2px solid ${AMBER_RACE}`,
              borderRadius: 16,
              padding: 24,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>🔥</div>
            <div
              style={{
                color: WHITE,
                fontWeight: 900,
                fontSize: layout.subtitleFontSize * 0.9,
              }}
            >
              {horsepowerStat}
            </div>
          </div>

          {/* Stat 3 */}
          <div
            style={{
              flex: 1,
              background: 'rgba(239, 68, 68, 0.08)',
              border: `2px solid ${RED_RACE}`,
              borderRadius: 16,
              padding: 24,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>🏁</div>
            <div
              style={{
                color: WHITE,
                fontWeight: 900,
                fontSize: layout.subtitleFontSize * 0.9,
              }}
            >
              {topSpeedStat}
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CarOutroScene: React.FC<
  YouTubeCarAutoReviewProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_CARBON }}>
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
            youtubeCarAutoReviewDefaultContent.brand.name
          }
          accentColor={RED_RACE}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text || youtubeCarAutoReviewDefaultContent.cta.text
          }
          subtext={
            cta?.subtext || youtubeCarAutoReviewDefaultContent.cta.subtext
          }
          primaryColor={RED_RACE}
          accentColor={DARK_CARBON}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeCarAutoReview: React.FC<YouTubeCarAutoReviewProps> = (
  props
) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeCarAutoReviewScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_CARBON }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'car-intro-reveal' && (
            <CarIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'car-telemetry-specs' && (
            <CarTelemetryScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'car-testdrive-outro' && (
            <CarOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeCarAutoReview;
