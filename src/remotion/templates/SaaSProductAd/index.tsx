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
import { saasProductAdScenes } from './scenes';
import { saasProductAdDefaultContent } from './defaults';

const BLUE = '#3B82F6';
const CYAN = '#06B6D4';
const SAAS_DARK = '#090D16';
const CARD_BG = '#111827';
const WHITE = '#FFFFFF';

const IntroScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  brand,
  headline = saasProductAdDefaultContent.headline,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: SAAS_DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${BLUE}20 0%, transparent 60%)`,
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
            background: 'rgba(59, 130, 246, 0.15)',
            border: `1px solid ${BLUE}`,
            color: CYAN,
            fontWeight: 800,
            fontSize: 13,
            padding: '6px 16px',
            borderRadius: 20,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          🚀 {headline}
        </div>

        <KineticTypography
          text={brand?.name || saasProductAdDefaultContent.brand.name}
          accentColor={CYAN}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: layout.subtitleFontSize,
            fontWeight: 600,
          }}
        >
          {brand?.tagline || saasProductAdDefaultContent.brand.tagline}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const UiShowcaseScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: SAAS_DARK }}>
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
            width: layout.horizontalLayout ? '48%' : '90%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            border: `2px solid ${CYAN}`,
            boxShadow: `0 0 35px ${CYAN}33`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || saasProductAdDefaultContent.product.imageUrl}
            productName={product?.name || 'SaaS Dashboard UI'}
            primaryColor={BLUE}
            accentColor={CYAN}
          />
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
              color: BLUE,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || saasProductAdDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || saasProductAdDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const FeatureMatrixScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || saasProductAdDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: SAAS_DARK }}>
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
          text="ENTERPRISE PRODUCT FEATURES ⚡"
          accentColor={CYAN}
          style={{
            fontSize: layout.titleFontSize,
            color: BLUE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: layout.horizontalLayout ? 'row' : 'column',
            gap: 20,
            width: '100%',
            maxWidth: 900,
            justifyContent: 'center',
          }}
        >
          {features.map((feat, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                background: CARD_BG,
                border: `1px solid ${index % 2 === 0 ? BLUE : CYAN}`,
                boxShadow: `0 0 20px ${index % 2 === 0 ? BLUE : CYAN}22`,
                borderRadius: 14,
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>
                {index === 0 ? '⚡' : index === 1 ? '🛡️' : '🔐'}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontWeight: 800,
                  fontSize: layout.subtitleFontSize * 0.9,
                }}
              >
                {feat}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const TrialCTAScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: SAAS_DARK }}>
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
        <div style={{ fontSize: 48 }}>⚡</div>

        <KineticTypography
          text={brand?.name || saasProductAdDefaultContent.brand.name}
          accentColor={CYAN}
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
          {cta?.subtext || saasProductAdDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || saasProductAdDefaultContent.cta.text}
          subtext={cta?.subtext || saasProductAdDefaultContent.cta.subtext}
          primaryColor={BLUE}
          accentColor={CYAN}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SaaSProductAd: React.FC<VideoContentProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    saasProductAdScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: SAAS_DARK }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'saas-intro' && (
            <IntroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'saas-ui-showcase' && (
            <UiShowcaseScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'saas-feature-matrix' && (
            <FeatureMatrixScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'saas-trial-cta' && (
            <TrialCTAScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default SaaSProductAd;
