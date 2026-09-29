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
import { youtubeCinematicTravelOpenerScenes } from './scenes';
import {
  youtubeCinematicTravelOpenerDefaultContent,
  type YouTubeCinematicTravelOpenerProps,
} from './defaults';

const DARK_WARM = '#120E0B';
const AMBER = '#D97706';
const WHITE = '#FFFFFF';

const LetterboxTitleScene: React.FC<
  YouTubeCinematicTravelOpenerProps & { durationInFrames: number }
> = ({
  filmTitle = youtubeCinematicTravelOpenerDefaultContent.filmTitle,
  cinematicTagline = youtubeCinematicTravelOpenerDefaultContent.cinematicTagline,
  gpsCoordinates = youtubeCinematicTravelOpenerDefaultContent.gpsCoordinates,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const scale = spring({ frame, fps: 30, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_WARM }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${AMBER}25 0%, transparent 70%)`,
        }}
      />

      {/* Cinematic Top/Bottom Letterbox Bars */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 40,
          background: '#000000',
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          background: '#000000',
          zIndex: 10,
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
            color: AMBER,
            fontSize: layout.badgeFontSize,
            fontWeight: 800,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          📍 {gpsCoordinates}
        </div>

        <KineticTypography
          text={
            filmTitle ||
            youtubeCinematicTravelOpenerDefaultContent.filmTitle ||
            'THE SWISS ALPS'
          }
          accentColor={AMBER}
          style={{
            fontSize: layout.titleFontSize * 1.4,
            color: WHITE,
            fontWeight: 900,
            letterSpacing: '0.05em',
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: layout.subtitleFontSize,
            fontStyle: 'italic',
            letterSpacing: '0.1em',
            margin: 0,
          }}
        >
          "{cinematicTagline}"
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const GpsParallaxScene: React.FC<
  YouTubeCinematicTravelOpenerProps & { durationInFrames: number }
> = ({
  product,
  altitudeMetres = youtubeCinematicTravelOpenerDefaultContent.altitudeMetres,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const frame = useCurrentFrame();

  const imgZoom = interpolate(frame, [0, durationInFrames], [1, 1.08], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity, background: DARK_WARM }}>
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
            width: layout.horizontalLayout ? '45%' : '85%',
            maxWidth: layout.maxImageWidth,
            transform: `scale(${imgZoom})`,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
            position: 'relative',
          }}
        >
          <ProductImage
            imageUrl={
              product?.imageUrl ||
              youtubeCinematicTravelOpenerDefaultContent.product.imageUrl
            }
            productName={
              product?.name ||
              youtubeCinematicTravelOpenerDefaultContent.product.name
            }
            primaryColor={AMBER}
            accentColor={DARK_WARM}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              background: 'rgba(0, 0, 0, 0.75)',
              color: AMBER,
              padding: '6px 14px',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.1em',
            }}
          >
            ⛰️ {altitudeMetres}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            maxWidth: 480,
            textAlign: layout.horizontalLayout ? 'left' : 'center',
          }}
        >
          <h2
            style={{
              color: AMBER,
              fontSize: layout.titleFontSize * 1.1,
              fontWeight: 900,
              margin: 0,
            }}
          >
            {product?.name ||
              youtubeCinematicTravelOpenerDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: layout.bodyFontSize,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {product?.description ||
              youtubeCinematicTravelOpenerDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const FilmOutroScene: React.FC<
  YouTubeCinematicTravelOpenerProps & { durationInFrames: number }
> = ({ cta, brand, durationInFrames }) => {
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
        <div style={{ fontSize: 52 }}>🍿</div>

        <KineticTypography
          text={
            brand?.name ||
            youtubeCinematicTravelOpenerDefaultContent.brand.name
          }
          accentColor={AMBER}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <CTAButton
          text={
            cta?.text || youtubeCinematicTravelOpenerDefaultContent.cta.text
          }
          subtext={
            cta?.subtext ||
            youtubeCinematicTravelOpenerDefaultContent.cta.subtext
          }
          primaryColor={AMBER}
          accentColor={DARK_WARM}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const YouTubeCinematicTravelOpener: React.FC<
  YouTubeCinematicTravelOpenerProps
> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    youtubeCinematicTravelOpenerScenes,
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
          {scene.id === 'travel-letterbox-title' && (
            <LetterboxTitleScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'travel-gps-parallax' && (
            <GpsParallaxScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
          {scene.id === 'travel-film-outro' && (
            <FilmOutroScene
              {...props}
              durationInFrames={scene.durationInFrames}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default YouTubeCinematicTravelOpener;
