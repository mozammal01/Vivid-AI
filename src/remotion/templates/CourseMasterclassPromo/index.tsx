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
import { courseMasterclassPromoScenes } from './scenes';
import { courseMasterclassPromoDefaultContent } from './defaults';

const ORANGE = '#F97316';
const YELLOW = '#FACC15';
const COURSE_DARK = '#0C0A09';
const CARD_BG = '#1C1917';
const WHITE = '#FFFFFF';

const IntroScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  brand,
  headline = courseMasterclassPromoDefaultContent.headline,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: COURSE_DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${ORANGE}22 0%, transparent 65%)`,
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
            background: 'rgba(249, 115, 22, 0.15)',
            border: `1px solid ${ORANGE}`,
            color: YELLOW,
            fontWeight: 800,
            fontSize: 13,
            padding: '6px 16px',
            borderRadius: 20,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          🎓 {headline}
        </div>

        <KineticTypography
          text={brand?.name || courseMasterclassPromoDefaultContent.brand.name}
          accentColor={YELLOW}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: layout.subtitleFontSize,
            fontWeight: 600,
          }}
        >
          {brand?.tagline || courseMasterclassPromoDefaultContent.brand.tagline}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const InstructorRevealScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: COURSE_DARK }}>
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
            borderRadius: 16,
            overflow: 'hidden',
            border: `3px solid ${ORANGE}`,
            boxShadow: `0 0 35px ${ORANGE}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || courseMasterclassPromoDefaultContent.product.imageUrl}
            productName={product?.name || 'Masterclass Preview'}
            primaryColor={ORANGE}
            accentColor={YELLOW}
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
              color: ORANGE,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || courseMasterclassPromoDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || courseMasterclassPromoDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CurriculumModulesScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || courseMasterclassPromoDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: COURSE_DARK }}>
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
          text="COURSE CURRICULUM MODULES 📚"
          accentColor={YELLOW}
          style={{
            fontSize: layout.titleFontSize,
            color: ORANGE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: 750,
          }}
        >
          {features.map((mod, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 24px',
                borderRadius: 12,
                background: CARD_BG,
                border: `1px solid rgba(249, 115, 22, 0.3)`,
              }}
            >
              <div
                style={{
                  background: ORANGE,
                  color: COURSE_DARK,
                  fontWeight: 900,
                  fontSize: 14,
                  padding: '4px 12px',
                  borderRadius: 6,
                  fontFamily: 'sans-serif',
                }}
              >
                0{idx + 1}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontSize: layout.bodyFontSize,
                  fontWeight: 600,
                }}
              >
                {mod}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const EnrollCTAScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: COURSE_DARK }}>
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
        <div style={{ fontSize: 48 }}>🎓</div>

        <KineticTypography
          text={brand?.name || courseMasterclassPromoDefaultContent.brand.name}
          accentColor={YELLOW}
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
          {cta?.subtext || courseMasterclassPromoDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || courseMasterclassPromoDefaultContent.cta.text}
          subtext={cta?.subtext || courseMasterclassPromoDefaultContent.cta.subtext}
          primaryColor={ORANGE}
          accentColor={YELLOW}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const CourseMasterclassPromo: React.FC<VideoContentProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    courseMasterclassPromoScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: COURSE_DARK }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'course-intro' && (
            <IntroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'course-instructor-reveal' && (
            <InstructorRevealScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'course-curriculum-modules' && (
            <CurriculumModulesScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'course-enroll-cta' && (
            <EnrollCTAScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default CourseMasterclassPromo;
