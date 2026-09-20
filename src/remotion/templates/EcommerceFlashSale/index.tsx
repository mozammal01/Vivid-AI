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
import { ecommerceFlashSaleScenes } from './scenes';
import { ecommerceFlashSaleDefaultContent } from './defaults';

const RED = '#EF4444';
const AMBER = '#F59E0B';
const ECOM_DARK = '#0F090A';
const CARD_BG = '#1A1012';
const WHITE = '#FFFFFF';

const IntroScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  brand,
  headline = ecommerceFlashSaleDefaultContent.headline,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: ECOM_DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${RED}33 0%, transparent 70%)`,
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
            background: RED,
            color: WHITE,
            fontWeight: 900,
            fontSize: 14,
            padding: '6px 20px',
            borderRadius: 20,
            letterSpacing: '0.15em',
            boxShadow: `0 0 25px ${RED}88`,
          }}
        >
          {headline}
        </div>

        <KineticTypography
          text={brand?.name || ecommerceFlashSaleDefaultContent.brand.name}
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
            fontWeight: 800,
            letterSpacing: '0.08em',
          }}
        >
          {brand?.tagline || ecommerceFlashSaleDefaultContent.brand.tagline}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ProductSpotlightScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  const discount = product?.discount || ecommerceFlashSaleDefaultContent.product.discount;
  const price = product?.price || ecommerceFlashSaleDefaultContent.product.price;
  const origPrice = product?.originalPrice || ecommerceFlashSaleDefaultContent.product.originalPrice;

  return (
    <AbsoluteFill style={{ opacity, background: ECOM_DARK }}>
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
            width: layout.horizontalLayout ? '48%' : '88%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            border: `3px solid ${RED}`,
            boxShadow: `0 0 35px ${RED}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || ecommerceFlashSaleDefaultContent.product.imageUrl}
            productName={product?.name || 'Product Sale'}
            primaryColor={RED}
            accentColor={AMBER}
          />
          <div
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              background: RED,
              color: WHITE,
              fontWeight: 900,
              fontSize: 14,
              padding: '6px 14px',
              borderRadius: 20,
              boxShadow: `0 0 20px ${RED}`,
            }}
          >
            {discount}
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
              color: WHITE,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || ecommerceFlashSaleDefaultContent.product.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontSize: layout.titleFontSize * 1.2, fontWeight: 900, color: RED }}>
              {price}
            </span>
            <span style={{ fontSize: layout.subtitleFontSize, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>
              {origPrice}
            </span>
          </div>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || ecommerceFlashSaleDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const PerksHighlightsScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || ecommerceFlashSaleDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: ECOM_DARK }}>
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
          text="SPECIAL DEAL PERKS 🔥"
          accentColor={AMBER}
          style={{
            fontSize: layout.titleFontSize,
            color: RED,
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
          {features.map((perk, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 20px',
                borderRadius: 12,
                background: CARD_BG,
                border: `1px solid rgba(239, 68, 68, 0.4)`,
              }}
            >
              <div
                style={{
                  background: RED,
                  color: WHITE,
                  fontWeight: 900,
                  fontSize: 14,
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✓
              </div>
              <div
                style={{
                  color: WHITE,
                  fontSize: layout.bodyFontSize * 1.1,
                  fontWeight: 700,
                }}
              >
                {perk}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ShopCTAScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: ECOM_DARK }}>
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
        <div style={{ fontSize: 48 }}>🛍️</div>

        <KineticTypography
          text={brand?.name || ecommerceFlashSaleDefaultContent.brand.name}
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
          {cta?.subtext || ecommerceFlashSaleDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || ecommerceFlashSaleDefaultContent.cta.text}
          subtext={cta?.subtext || ecommerceFlashSaleDefaultContent.cta.subtext}
          primaryColor={RED}
          accentColor={AMBER}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const EcommerceFlashSale: React.FC<VideoContentProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    ecommerceFlashSaleScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: ECOM_DARK }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'flash-sale-intro' && (
            <IntroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'flash-product-spotlight' && (
            <ProductSpotlightScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'flash-perks-highlights' && (
            <PerksHighlightsScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'flash-shop-cta' && (
            <ShopCTAScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default EcommerceFlashSale;
