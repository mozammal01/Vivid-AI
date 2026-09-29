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
import { youtubeRealEstatePropertyTourScenes } from './scenes';
import {
  youtubeRealEstatePropertyTourDefaultContent,
  type YouTubeRealEstatePropertyTourProps,
} from './defaults';

const DARK_SLATE = '#0F172A';
const GOLD = '#D97706';
const WHITE = '#FFFFFF';

const EstateIntroScene: React.FC<
  YouTubeRealEstatePropertyTourProps & { durationInFrames: number }
> = ({
  propertyName = youtubeRealEstatePropertyTourDefaultContent.propertyName,
  propertyPriceTag = youtubeRealEstatePropertyTourDefaultContent.propertyPriceTag,
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
          background: `radial-gradient(circle at 50% 30%, ${GOLD}25 0%, transparent 60%)`,
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
            boxShadow: `0 20px 40px ${GOLD}33`,
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeRealEstatePropertyTourDefaultContent.product.imageUrl
            }
            productName={
              propertyName ||
              youtubeRealEstatePropertyTourDefaultContent.propertyName ||
              'Luxury Home'
            }
            primaryColor={GOLD}
            accentColor={DARK_SLATE}
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
              background: GOLD,
              color: DARK_SLATE,
              fontWeight: 900,
              fontSize: layout.badgeFontSize,
              padding: '6px 18px',
              borderRadius: 20,
              letterSpacing: '0.1em',
            }}
          >
            🏡 LUXURY WALKTHROUGH
          </span>

          <KineticTypography
            text={
              propertyName ||
              youtubeRealEstatePropertyTourDefaultContent.propertyName ||
              'BEVERLY HILLS MANSION'
            }
            accentColor={GOLD}
            style={{
              fontSize: layout.titleFontSize * 1.2,
              color: WHITE,
              fontWeight: 900,
            }}
          />

          <div
            style={{
              color: GOLD,
              fontWeight: 900,
              fontSize: layout.titleFontSize * 1.1,
            }}
          >
            {propertyPriceTag}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const EstateSpecsScene: React.FC<
  YouTubeRealEstatePropertyTourProps & { durationInFrames: number }
> = ({
  propertySpecs = youtubeRealEstatePropertyTourDefaultContent.propertySpecs,
  durationInFrames,
}) => {
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
        }}
      >
        <div
          style={{
            color: GOLD,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.05em',
          }}
        >
          ✨ PROPERTY HIGHLIGHTS & SPECS
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: layout.horizontalLayout ? '1fr 1fr' : '1fr',
            gap: 16,
            width: '100%',
            maxWidth: 800,
          }}
        >
          {propertySpecs?.map((spec, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(217, 119, 6, 0.08)',
                border: `1px solid ${GOLD}`,
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
              <span style={{ color: GOLD, fontWeight: 900 }}>✦</span>
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const EstateRealtorOutroScene: React.FC<
  YouTubeRealEstatePropertyTourProps & { durationInFrames: number }
> = ({
  cta,
  brand,
  realtorContact = youtubeRealEstatePropertyTourDefaultContent.realtorContact,
  durationInFrames,
}) => {
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
            youtubeRealEstatePropertyTourDefaultContent.brand.name
          }
          accentColor={GOLD}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: 700,
            fontSize: layout.subtitleFontSize * 0.9,
          }}
        >
          {realtorContact}
        </div>

        <CTAButton
          text={
            cta?.text ||
            youtubeRealEstatePropertyTourDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeRealEstatePropertyTourDefaultContent.cta.subtext
          }
          primaryColor={GOLD}
          accentColor={DARK_SLATE}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeRealEstatePropertyTour: React.FC<
  YouTubeRealEstatePropertyTourProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeRealEstatePropertyTourScenes,
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
          {scene.id === 'estate-intro-reveal' && (
            <EstateIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'estate-specs-grid' && (
            <EstateSpecsScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'estate-realtor-outro' && (
            <EstateRealtorOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeRealEstatePropertyTour;
