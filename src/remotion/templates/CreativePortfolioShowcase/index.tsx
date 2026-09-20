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
import { creativePortfolioShowcaseScenes } from './scenes';
import { creativePortfolioShowcaseDefaultContent } from './defaults';

const PURPLE = '#8B5CF6';
const PINK = '#EC4899';
const PORTFOLIO_DARK = '#0D0B18';
const CARD_BG = '#171329';
const WHITE = '#FFFFFF';

const IntroScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  brand,
  headline = creativePortfolioShowcaseDefaultContent.headline,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: PORTFOLIO_DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 35%, ${PURPLE}25 0%, transparent 65%)`,
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
            background: 'rgba(139, 92, 246, 0.15)',
            border: `1px solid ${PURPLE}`,
            color: PINK,
            fontWeight: 800,
            fontSize: 13,
            padding: '6px 16px',
            borderRadius: 20,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          ✨ {headline}
        </div>

        <KineticTypography
          text={brand?.name || creativePortfolioShowcaseDefaultContent.brand.name}
          accentColor={PINK}
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
            letterSpacing: '0.05em',
          }}
        >
          {brand?.tagline || creativePortfolioShowcaseDefaultContent.brand.tagline}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const WorkRevealScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: PORTFOLIO_DARK }}>
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
            width: layout.horizontalLayout ? '46%' : '88%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            border: `2px solid ${PURPLE}`,
            boxShadow: `0 0 35px ${PURPLE}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || creativePortfolioShowcaseDefaultContent.product.imageUrl}
            productName={product?.name || 'Portfolio Feature'}
            primaryColor={PURPLE}
            accentColor={PINK}
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
              color: PINK,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || creativePortfolioShowcaseDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || creativePortfolioShowcaseDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SkillsSpecsScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || creativePortfolioShowcaseDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: PORTFOLIO_DARK }}>
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
          text="CORE CREATIVE CAPABILITIES ✨"
          accentColor={PURPLE}
          style={{
            fontSize: layout.titleFontSize,
            color: WHITE,
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
          {features.map((skill, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                background: CARD_BG,
                border: `1px solid ${index % 2 === 0 ? PURPLE : PINK}`,
                boxShadow: `0 0 20px ${index % 2 === 0 ? PURPLE : PINK}33`,
                borderRadius: 14,
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>
                {index === 0 ? '🎨' : index === 1 ? '💎' : '💻'}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontWeight: 800,
                  fontSize: layout.subtitleFontSize * 0.9,
                }}
              >
                {skill}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const HireCTAScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: PORTFOLIO_DARK }}>
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
        <div style={{ fontSize: 48 }}>✨</div>

        <KineticTypography
          text={brand?.name || creativePortfolioShowcaseDefaultContent.brand.name}
          accentColor={PINK}
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
          {cta?.subtext || creativePortfolioShowcaseDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || creativePortfolioShowcaseDefaultContent.cta.text}
          subtext={cta?.subtext || creativePortfolioShowcaseDefaultContent.cta.subtext}
          primaryColor={PURPLE}
          accentColor={PINK}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const CreativePortfolioShowcase: React.FC<VideoContentProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    creativePortfolioShowcaseScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: PORTFOLIO_DARK }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'portfolio-intro' && (
            <IntroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'portfolio-work-reveal' && (
            <WorkRevealScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'portfolio-skills-specs' && (
            <SkillsSpecsScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'portfolio-hire-cta' && (
            <HireCTAScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default CreativePortfolioShowcase;
