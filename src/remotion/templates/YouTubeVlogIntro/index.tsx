import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
} from 'remotion';
import type { VideoContentProps } from '@/remotion/schema';
import { scaleScenesToDuration } from '@/remotion/utils/scenes';
import {
  useSceneOpacity,
  useResponsiveLayout,
} from '../../animations';
import {
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { youtubeVlogIntroScenes } from './scenes';
import { youtubeVlogIntroDefaultContent } from './defaults';

const AMBER = '#F59E0B';
const DARK_WARM = '#1C1917';
const WARM_CARD = '#292524';
const WHITE = '#FFFFFF';

interface VlogProps extends VideoContentProps {
  locationStamp?: string;
  seasonTag?: string;
}

const VlogOpenerScene: React.FC<VlogProps & { durationInFrames: number }> = ({
  brand,
  headline = youtubeVlogIntroDefaultContent.headline,
  locationStamp = youtubeVlogIntroDefaultContent.locationStamp,
  seasonTag = youtubeVlogIntroDefaultContent.seasonTag,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_WARM }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${AMBER}22 0%, transparent 70%)`,
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
            background: AMBER,
            color: DARK_WARM,
            fontWeight: 800,
            fontSize: 13,
            padding: '5px 14px',
            borderRadius: 20,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {seasonTag}
        </div>

        <KineticTypography
          text={brand?.name || youtubeVlogIntroDefaultContent.brand.name}
          accentColor={AMBER}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: AMBER,
            fontSize: layout.subtitleFontSize,
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          📍 {locationStamp}
        </div>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: layout.bodyFontSize,
            margin: 0,
            maxWidth: 600,
          }}
        >
          {headline}
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const PhotoGalleryScene: React.FC<VlogProps & { durationInFrames: number }> = ({
  product,
  locationStamp = youtubeVlogIntroDefaultContent.locationStamp,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_WARM }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: layout.horizontalLayout ? '45%' : '85%',
            maxWidth: layout.maxImageWidth,
            background: WHITE,
            padding: '12px 12px 40px 12px',
            borderRadius: 8,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            transform: 'rotate(-2deg)',
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || youtubeVlogIntroDefaultContent.product.imageUrl}
            productName={product?.name || 'Vlog Photo'}
            primaryColor={AMBER}
            accentColor={DARK_WARM}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 12,
              left: 16,
              color: '#333333',
              fontFamily: 'serif',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            📍 {locationStamp}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            maxWidth: 480,
            gap: 16,
          }}
        >
          <h2
            style={{
              color: AMBER,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || youtubeVlogIntroDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || youtubeVlogIntroDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ChapterHighlightsScene: React.FC<VlogProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || youtubeVlogIntroDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: DARK_WARM }}>
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
        <KineticTypography
          text="EPISODE CHAPTERS 🧭"
          accentColor={AMBER}
          style={{
            fontSize: layout.titleFontSize,
            color: AMBER,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: 700,
          }}
        >
          {features.map((ch, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 20px',
                borderRadius: 10,
                background: WARM_CARD,
                border: `1px solid rgba(245, 158, 11, 0.3)`,
              }}
            >
              <div
                style={{
                  background: AMBER,
                  color: DARK_WARM,
                  fontWeight: 900,
                  fontSize: 14,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {i + 1}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontSize: layout.bodyFontSize,
                  fontWeight: 600,
                }}
              >
                {ch}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ChannelOutroScene: React.FC<VlogProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_WARM }}>
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
        <div style={{ fontSize: 44 }}>✨</div>

        <KineticTypography
          text={brand?.name || youtubeVlogIntroDefaultContent.brand.name}
          accentColor={AMBER}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: layout.subtitleFontSize,
            margin: 0,
            maxWidth: 550,
          }}
        >
          {cta?.subtext || youtubeVlogIntroDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || youtubeVlogIntroDefaultContent.cta.text}
          subtext={cta?.subtext || youtubeVlogIntroDefaultContent.cta.subtext}
          primaryColor={AMBER}
          accentColor={DARK_WARM}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeVlogIntro: React.FC<VlogProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeVlogIntroScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_WARM }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'vlog-opener' && (
            <VlogOpenerScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'vlog-photo-gallery' && (
            <PhotoGalleryScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'vlog-chapter-highlights' && (
            <ChapterHighlightsScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'vlog-channel-outro' && (
            <ChannelOutroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeVlogIntro;
