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
import { youtubeMovieReviewRatingScenes } from './scenes';
import {
  youtubeMovieReviewRatingDefaultContent,
  type YouTubeMovieReviewRatingProps,
} from './defaults';

const DARK_THEATER = '#0A0507';
const ROSE_RED = '#E11D48';
const AMBER_GOLD = '#F59E0B';
const WHITE = '#FFFFFF';

const MovieIntroScene: React.FC<
  YouTubeMovieReviewRatingProps & { durationInFrames: number }
> = ({
  movieTitle = youtubeMovieReviewRatingDefaultContent.movieTitle,
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_THEATER }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${ROSE_RED}30 0%, transparent 60%)`,
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
            boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeMovieReviewRatingDefaultContent.product.imageUrl
            }
            productName={movieTitle || 'DUNE: PART THREE'}
            primaryColor={ROSE_RED}
            accentColor={AMBER_GOLD}
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
              background: ROSE_RED,
              color: WHITE,
              fontWeight: 900,
              fontSize: layout.badgeFontSize,
              padding: '6px 18px',
              borderRadius: 20,
              letterSpacing: '0.1em',
            }}
          >
            🍿 NO SPOILER REVIEW
          </span>

          <KineticTypography
            text={
              movieTitle ||
              youtubeMovieReviewRatingDefaultContent.movieTitle ||
              'DUNE'
            }
            accentColor={ROSE_RED}
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
              youtubeMovieReviewRatingDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const MovieScoreScene: React.FC<
  YouTubeMovieReviewRatingProps & { durationInFrames: number }
> = ({
  criticScore = youtubeMovieReviewRatingDefaultContent.criticScore,
  audienceScore = youtubeMovieReviewRatingDefaultContent.audienceScore,
  verdictBadge = youtubeMovieReviewRatingDefaultContent.verdictBadge,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_THEATER }}>
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          padding: `0 ${layout.paddingX}px`,
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${ROSE_RED}, ${AMBER_GOLD})`,
            color: DARK_THEATER,
            fontWeight: 900,
            fontSize: layout.subtitleFontSize * 0.9,
            padding: '10px 24px',
            borderRadius: 30,
            boxShadow: `0 10px 30px ${ROSE_RED}44`,
          }}
        >
          {verdictBadge}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: layout.horizontalLayout ? 'row' : 'column',
            gap: 24,
            width: '100%',
            maxWidth: 700,
          }}
        >
          {/* Critic Score Card */}
          <div
            style={{
              flex: 1,
              background: 'rgba(225, 29, 72, 0.08)',
              border: `2px solid ${ROSE_RED}`,
              borderRadius: 16,
              padding: 24,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <div style={{ fontSize: 44 }}>🍅</div>
            <div
              style={{
                color: WHITE,
                fontWeight: 900,
                fontSize: layout.titleFontSize * 0.9,
              }}
            >
              {criticScore}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 13 }}>
              CRITIC SCORE
            </div>
          </div>

          {/* Audience Score Card */}
          <div
            style={{
              flex: 1,
              background: 'rgba(245, 158, 11, 0.08)',
              border: `2px solid ${AMBER_GOLD}`,
              borderRadius: 16,
              padding: 24,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <div style={{ fontSize: 44 }}>🍿</div>
            <div
              style={{
                color: WHITE,
                fontWeight: 900,
                fontSize: layout.titleFontSize * 0.9,
              }}
            >
              {audienceScore}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 13 }}>
              AUDIENCE SCORE
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const MovieVerdictOutroScene: React.FC<
  YouTubeMovieReviewRatingProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: DARK_THEATER }}>
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
            youtubeMovieReviewRatingDefaultContent.brand.name
          }
          accentColor={ROSE_RED}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text || youtubeMovieReviewRatingDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeMovieReviewRatingDefaultContent.cta.subtext
          }
          primaryColor={ROSE_RED}
          accentColor={DARK_THEATER}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeMovieReviewRating: React.FC<
  YouTubeMovieReviewRatingProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeMovieReviewRatingScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: DARK_THEATER }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'movie-intro-title' && (
            <MovieIntroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'movie-score-dial' && (
            <MovieScoreScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'movie-verdict-outro' && (
            <MovieVerdictOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeMovieReviewRating;
