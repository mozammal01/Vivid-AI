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
import { youtubeBeautyMakeupTutorialScenes } from './scenes';
import {
  youtubeBeautyMakeupTutorialDefaultContent,
  type YouTubeBeautyMakeupTutorialProps,
} from './defaults';

const DARK_ROSE = '#1A0C14';
const PINK_GLAM = '#EC4899';
const PEACH_GLAM = '#F472B6';
const WHITE = '#FFFFFF';

const BeautyIntroScene: React.FC<
  YouTubeBeautyMakeupTutorialProps & { durationInFrames: number }
> = ({
  lookName = youtubeBeautyMakeupTutorialDefaultContent.lookName,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_ROSE }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${PINK_GLAM}30 0%, transparent 60%)`,
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
            width: layout.horizontalLayout ? '40%' : '75%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: `0 20px 40px ${PINK_GLAM}44`,
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeBeautyMakeupTutorialDefaultContent.product.imageUrl
            }
            productName={
              lookName ||
              youtubeBeautyMakeupTutorialDefaultContent.lookName ||
              'Soft Glam Look'
            }
            primaryColor={PINK_GLAM}
            accentColor={PEACH_GLAM}
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
              background: PINK_GLAM,
              color: WHITE,
              fontWeight: 900,
              fontSize: layout.badgeFontSize,
              padding: '6px 18px',
              borderRadius: 20,
              letterSpacing: '0.1em',
            }}
          >
            💄 STEP-BY-STEP TUTORIAL
          </span>

          <KineticTypography
            text={
              lookName ||
              youtubeBeautyMakeupTutorialDefaultContent.lookName ||
              'SUNSET GLOW'
            }
            accentColor={PINK_GLAM}
            style={{
              fontSize: layout.titleFontSize * 1.3,
              color: WHITE,
              fontWeight: 900,
            }}
          />

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description ||
              youtubeBeautyMakeupTutorialDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const PaletteShadesScene: React.FC<
  YouTubeBeautyMakeupTutorialProps & { durationInFrames: number }
> = ({
  paletteColors = youtubeBeautyMakeupTutorialDefaultContent.paletteColors,
  discountCodeTag = youtubeBeautyMakeupTutorialDefaultContent.discountCodeTag,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_ROSE }}>
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
            color: PINK_GLAM,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.05em',
          }}
        >
          🎨 FEATURED SHADES & PRODUCTS
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          {paletteColors?.map((shade, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(236, 72, 153, 0.1)',
                border: `1px solid ${PINK_GLAM}`,
                borderRadius: 20,
                padding: '12px 24px',
                color: WHITE,
                fontWeight: 700,
                fontSize: layout.bodyFontSize,
              }}
            >
              ✨ {shade}
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'rgba(244, 114, 182, 0.15)',
            border: `2px dashed ${PEACH_GLAM}`,
            color: PEACH_GLAM,
            fontWeight: 900,
            fontSize: layout.subtitleFontSize * 0.9,
            padding: '10px 24px',
            borderRadius: 30,
            marginTop: 12,
          }}
        >
          {discountCodeTag}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const BeautyCodeOutroScene: React.FC<
  YouTubeBeautyMakeupTutorialProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_ROSE }}>
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
        <div style={{ fontSize: 60 }}>💄</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeBeautyMakeupTutorialDefaultContent.brand.name
          }
          accentColor={PINK_GLAM}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeBeautyMakeupTutorialDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeBeautyMakeupTutorialDefaultContent.cta.subtext
          }
          primaryColor={PINK_GLAM}
          accentColor={DARK_ROSE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeBeautyMakeupTutorial: React.FC<
  YouTubeBeautyMakeupTutorialProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeBeautyMakeupTutorialScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_ROSE }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'beauty-look-intro' && (
            <BeautyIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'beauty-palette-shades' && (
            <PaletteShadesScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'beauty-code-outro' && (
            <BeautyCodeOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeBeautyMakeupTutorial;
