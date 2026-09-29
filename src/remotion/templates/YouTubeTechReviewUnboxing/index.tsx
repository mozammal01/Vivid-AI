import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
  useCurrentFrame,
  spring,
  interpolate,
} from 'remotion';
import { scaleScenesToDuration } from '@/remotion/utils/scenes';
import { useSceneOpacity, useResponsiveLayout } from '../../animations';
import {
  KineticTypography,
  CTAButton,
  ProductImage,
} from '../../components';
import { youtubeTechReviewUnboxingScenes } from './scenes';
import {
  youtubeTechReviewUnboxingDefaultContent,
  type YouTubeTechReviewUnboxingProps,
} from './defaults';

const DARK_BG = '#0B0F19';
const CYAN = '#00F0FF';
const PURPLE = '#7000FF';
const WHITE = '#FFFFFF';
const GREEN = '#10B981';
const RED = '#EF4444';

const TechIntroScene: React.FC<
  YouTubeTechReviewUnboxingProps & { durationInFrames: number }
> = ({
  brand,
  product,
  techCategory = youtubeTechReviewUnboxingDefaultContent.techCategory,
  ratingScore = youtubeTechReviewUnboxingDefaultContent.ratingScore,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 70% 30%, ${CYAN}20 0%, transparent 60%)`,
        }}
      />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            width: layout.horizontalLayout ? '45%' : '80%',
            maxWidth: layout.maxImageWidth,
            position: 'relative',
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeTechReviewUnboxingDefaultContent.product.imageUrl
            }
            productName={
              product?.name ||
              youtubeTechReviewUnboxingDefaultContent.product.name
            }
            primaryColor={CYAN}
            accentColor={PURPLE}
          />
          <div
            style={{
              position: 'absolute',
              top: -15,
              right: -15,
              background: `linear-gradient(135deg, ${CYAN}, ${PURPLE})`,
              color: DARK_BG,
              fontWeight: 900,
              fontSize: 16,
              padding: '8px 16px',
              borderRadius: 30,
              boxShadow: '0 10px 25px rgba(0, 240, 255, 0.4)',
            }}
          >
            ★ {ratingScore}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            gap: 16,
            maxWidth: 550,
          }}
        >
          <span
            style={{
              background: 'rgba(0, 240, 255, 0.12)',
              border: `1px solid ${CYAN}`,
              color: CYAN,
              fontSize: layout.badgeFontSize,
              fontWeight: 800,
              padding: '6px 14px',
              borderRadius: 20,
              letterSpacing: '0.08em',
            }}
          >
            {techCategory}
          </span>

          <KineticTypography
            text={
              product?.name ||
              youtubeTechReviewUnboxingDefaultContent.product.name
            }
            accentColor={CYAN}
            style={{
              fontSize: layout.titleFontSize * 1.2,
              color: WHITE,
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          />

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description ||
              youtubeTechReviewUnboxingDefaultContent.product.description}
          </p>

          <div
            style={{
              color: CYAN,
              fontWeight: 800,
              fontSize: layout.titleFontSize * 0.9,
            }}
          >
            {product?.price ||
              youtubeTechReviewUnboxingDefaultContent.product.price}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SpecsGridScene: React.FC<
  YouTubeTechReviewUnboxingProps & { durationInFrames: number }
> = ({ product, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const specs =
    product?.features ||
    youtubeTechReviewUnboxingDefaultContent.product.features ||
    [];

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
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
            color: CYAN,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          ⚡ KEY HARDWARE SPECS
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
          {specs.map((spec, i) => {
            const delay = i * 6;
            const slide = interpolate(frame - delay, [0, 15], [30, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const specOpacity = interpolate(frame - delay, [0, 15], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            return (
              <div
                key={i}
                style={{
                  transform: `translateY(${slide}px)`,
                  opacity: specOpacity,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: 12,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: PURPLE,
                    color: WHITE,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: 14,
                  }}
                >
                  {i + 1}
                </div>
                <div
                  style={{
                    color: WHITE,
                    fontWeight: 700,
                    fontSize: layout.bodyFontSize,
                  }}
                >
                  {spec}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ProsConsScene: React.FC<
  YouTubeTechReviewUnboxingProps & { durationInFrames: number }
> = ({
  pros = youtubeTechReviewUnboxingDefaultContent.pros,
  cons = youtubeTechReviewUnboxingDefaultContent.cons,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: layout.horizontalLayout ? 'row' : 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          gap: 24,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        {/* Pros */}
        <div
          style={{
            flex: 1,
            maxWidth: 480,
            background: 'rgba(16, 185, 129, 0.08)',
            border: `1px solid ${GREEN}`,
            borderRadius: 16,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div
            style={{
              color: GREEN,
              fontWeight: 900,
              fontSize: layout.subtitleFontSize,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>👍</span> PROS
          </div>
          {pros?.map((p, i) => (
            <div
              key={i}
              style={{
                color: WHITE,
                fontSize: layout.bodyFontSize,
                fontWeight: 600,
              }}
            >
              ✓ {p}
            </div>
          ))}
        </div>

        {/* Cons */}
        <div
          style={{
            flex: 1,
            maxWidth: 480,
            background: 'rgba(239, 68, 68, 0.08)',
            border: `1px solid ${RED}`,
            borderRadius: 16,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div
            style={{
              color: RED,
              fontWeight: 900,
              fontSize: layout.subtitleFontSize,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>👎</span> CONS
          </div>
          {cons?.map((c, i) => (
            <div
              key={i}
              style={{
                color: WHITE,
                fontSize: layout.bodyFontSize,
                fontWeight: 600,
              }}
            >
              ✗ {c}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const VerdictOutroScene: React.FC<
  YouTubeTechReviewUnboxingProps & { durationInFrames: number }
> = ({
  cta,
  verdictSummary = youtubeTechReviewUnboxingDefaultContent.verdictSummary,
  ratingScore = youtubeTechReviewUnboxingDefaultContent.ratingScore,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_BG }}>
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
            background: `linear-gradient(135deg, ${CYAN}, ${PURPLE})`,
            padding: '12px 28px',
            borderRadius: 40,
            color: DARK_BG,
            fontWeight: 900,
            fontSize: layout.titleFontSize * 1.1,
            boxShadow: '0 10px 30px rgba(0, 240, 255, 0.4)',
          }}
        >
          FINAL VERDICT: {ratingScore}
        </div>

        <p
          style={{
            color: WHITE,
            fontWeight: 800,
            fontSize: layout.subtitleFontSize * 1.1,
            maxWidth: 600,
            margin: 0,
          }}
        >
          "{verdictSummary}"
        </p>

        <CTAButton
          text={cta?.text || youtubeTechReviewUnboxingDefaultContent.cta.text}
          subtext={
            cta?.subtext || youtubeTechReviewUnboxingDefaultContent.cta.subtext
          }
          primaryColor={CYAN}
          accentColor={DARK_BG}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeTechReviewUnboxing: React.FC<
  YouTubeTechReviewUnboxingProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeTechReviewUnboxingScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_BG }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'tech-intro-reveal' && (
            <TechIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'tech-specs-grid' && (
            <SpecsGridScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'tech-pros-cons' && (
            <ProsConsScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'tech-verdict-outro' && (
            <VerdictOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeTechReviewUnboxing;
