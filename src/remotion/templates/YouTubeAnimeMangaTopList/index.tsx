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
import { youtubeAnimeMangaTopListScenes } from './scenes';
import {
  youtubeAnimeMangaTopListDefaultContent,
  type YouTubeAnimeMangaTopListProps,
} from './defaults';

const DARK_MANGA = '#12050A';
const ROSE_NEON = '#F43F5E';
const PURPLE_NEON = '#A855F7';
const WHITE = '#FFFFFF';

const AnimeIntroScene: React.FC<
  YouTubeAnimeMangaTopListProps & { durationInFrames: number }
> = ({
  brand,
  product,
  studioName = youtubeAnimeMangaTopListDefaultContent.studioName,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_MANGA }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${ROSE_NEON}30 0%, transparent 60%)`,
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
            transform: `scale(${scale})`,
            background: ROSE_NEON,
            color: WHITE,
            fontWeight: 900,
            fontSize: layout.badgeFontSize,
            padding: '6px 20px',
            borderRadius: 30,
            letterSpacing: '0.12em',
            boxShadow: `0 0 25px ${ROSE_NEON}`,
          }}
        >
          ⚔️ {studioName}
        </div>

        <KineticTypography
          text={
            product?.name ||
            youtubeAnimeMangaTopListDefaultContent.product.name
          }
          accentColor={ROSE_NEON}
          style={{
            fontSize: layout.titleFontSize * 1.3,
            color: WHITE,
            fontWeight: 900,
            maxWidth: 750,
          }}
        />

        <div
          style={{
            color: PURPLE_NEON,
            fontSize: layout.subtitleFontSize,
            fontWeight: 800,
          }}
        >
          {brand?.name || youtubeAnimeMangaTopListDefaultContent.brand.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const AnimeCharacterScene: React.FC<
  YouTubeAnimeMangaTopListProps & { durationInFrames: number }
> = ({
  characterName = youtubeAnimeMangaTopListDefaultContent.characterName,
  powerLevelScore = youtubeAnimeMangaTopListDefaultContent.powerLevelScore,
  animeTitle = youtubeAnimeMangaTopListDefaultContent.animeTitle,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_MANGA }}>
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
            width: layout.horizontalLayout ? '45%' : '80%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: `0 20px 40px ${PURPLE_NEON}44`,
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeAnimeMangaTopListDefaultContent.product.imageUrl
            }
            productName={characterName || 'Sung Jin-woo (Shadow Monarch)'}
            primaryColor={ROSE_NEON}
            accentColor={PURPLE_NEON}
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
          <div
            style={{
              color: PURPLE_NEON,
              fontWeight: 800,
              fontSize: layout.bodyFontSize,
              letterSpacing: '0.1em',
            }}
          >
            {animeTitle}
          </div>

          <div
            style={{
              color: WHITE,
              fontWeight: 900,
              fontSize: layout.titleFontSize * 1.1,
              lineHeight: 1.2,
            }}
          >
            {characterName}
          </div>

          <div
            style={{
              background: 'rgba(244, 63, 94, 0.12)',
              border: `2px solid ${ROSE_NEON}`,
              color: ROSE_NEON,
              fontWeight: 900,
              fontSize: layout.subtitleFontSize * 0.9,
              padding: '8px 20px',
              borderRadius: 30,
              boxShadow: `0 0 20px ${ROSE_NEON}44`,
            }}
          >
            ⚡ {powerLevelScore}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const AnimeOutroScene: React.FC<
  YouTubeAnimeMangaTopListProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_MANGA }}>
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
            youtubeAnimeMangaTopListDefaultContent.brand.name
          }
          accentColor={ROSE_NEON}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text ||
            youtubeAnimeMangaTopListDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeAnimeMangaTopListDefaultContent.cta.subtext
          }
          primaryColor={ROSE_NEON}
          accentColor={DARK_MANGA}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeAnimeMangaTopList: React.FC<
  YouTubeAnimeMangaTopListProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeAnimeMangaTopListScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_MANGA }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'anime-intro-title' && (
            <AnimeIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'anime-character-card' && (
            <AnimeCharacterScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'anime-subscribe-outro' && (
            <AnimeOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeAnimeMangaTopList;
