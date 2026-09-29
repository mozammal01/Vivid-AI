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
import { youtubeCookingRecipeCardScenes } from './scenes';
import {
  youtubeCookingRecipeCardDefaultContent,
  type YouTubeCookingRecipeCardProps,
} from './defaults';

const WARM_BG = '#1C130E';
const ORANGE = '#F97316';
const LIME = '#84CC16';
const WHITE = '#FFFFFF';

const DishIntroScene: React.FC<
  YouTubeCookingRecipeCardProps & { durationInFrames: number }
> = ({
  brand,
  product,
  prepTime = youtubeCookingRecipeCardDefaultContent.prepTime,
  servings = youtubeCookingRecipeCardDefaultContent.servings,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ opacity, background: WARM_BG }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 70% 40%, ${ORANGE}30 0%, transparent 60%)`,
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
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeCookingRecipeCardDefaultContent.product.imageUrl
            }
            productName={
              product?.name ||
              youtubeCookingRecipeCardDefaultContent.product.name
            }
            primaryColor={ORANGE}
            accentColor={LIME}
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
          <div style={{ display: 'flex', gap: 10 }}>
            <span
              style={{
                background: ORANGE,
                color: WARM_BG,
                fontWeight: 900,
                fontSize: layout.badgeFontSize,
                padding: '4px 14px',
                borderRadius: 20,
              }}
            >
              ⏱️ {prepTime}
            </span>
            <span
              style={{
                background: LIME,
                color: WARM_BG,
                fontWeight: 900,
                fontSize: layout.badgeFontSize,
                padding: '4px 14px',
                borderRadius: 20,
              }}
            >
              🍽️ {servings}
            </span>
          </div>

          <KineticTypography
            text={
              product?.name ||
              youtubeCookingRecipeCardDefaultContent.product.name
            }
            accentColor={ORANGE}
            style={{
              fontSize: layout.titleFontSize * 1.1,
              color: WHITE,
              fontWeight: 900,
              lineHeight: 1.2,
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
              youtubeCookingRecipeCardDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const IngredientsListScene: React.FC<
  YouTubeCookingRecipeCardProps & { durationInFrames: number }
> = ({
  ingredientsList = youtubeCookingRecipeCardDefaultContent.ingredientsList,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ opacity, background: WARM_BG }}>
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
            color: ORANGE,
            fontWeight: 900,
            fontSize: layout.titleFontSize,
            letterSpacing: '0.05em',
          }}
        >
          🛒 INGREDIENTS YOU NEED
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            width: '100%',
            maxWidth: 650,
          }}
        >
          {ingredientsList?.map((item, i) => {
            const delay = i * 6;
            const slide = interpolate(frame - delay, [0, 15], [20, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            return (
              <div
                key={i}
                style={{
                  transform: `translateY(${slide}px)`,
                  background: 'rgba(255, 255, 255, 0.07)',
                  border: `1px solid ${ORANGE}44`,
                  borderRadius: 12,
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  color: WHITE,
                  fontWeight: 700,
                  fontSize: layout.bodyFontSize,
                }}
              >
                <span style={{ color: LIME, fontWeight: 900 }}>✓</span>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const RecipeOutroScene: React.FC<
  YouTubeCookingRecipeCardProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: WARM_BG }}>
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
        <div style={{ fontSize: 60 }}>👩‍🍳</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeCookingRecipeCardDefaultContent.brand.name
          }
          accentColor={ORANGE}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeCookingRecipeCardDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeCookingRecipeCardDefaultContent.cta.subtext
          }
          primaryColor={ORANGE}
          accentColor={WARM_BG}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeCookingRecipeCard: React.FC<
  YouTubeCookingRecipeCardProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeCookingRecipeCardScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: WARM_BG }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'cooking-dish-intro' && (
            <DishIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'cooking-ingredients-list' && (
            <IngredientsListScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'cooking-recipe-outro' && (
            <RecipeOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeCookingRecipeCard;
