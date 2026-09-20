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
import { eventWebinarTeaserScenes } from './scenes';
import { eventWebinarTeaserDefaultContent } from './defaults';

const INDIGO = '#6366F1';
const TEAL = '#14B8A6';
const EVENT_DARK = '#0B0F19';
const CARD_BG = '#151C2C';
const WHITE = '#FFFFFF';

const IntroScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  brand,
  headline = eventWebinarTeaserDefaultContent.headline,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: EVENT_DARK }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${INDIGO}35 0%, transparent 70%)`,
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
            background: INDIGO,
            color: WHITE,
            fontWeight: 800,
            fontSize: 14,
            padding: '6px 20px',
            borderRadius: 20,
            letterSpacing: '0.12em',
            boxShadow: `0 0 20px ${INDIGO}66`,
          }}
        >
          {headline}
        </div>

        <KineticTypography
          text={brand?.name || eventWebinarTeaserDefaultContent.brand.name}
          accentColor={TEAL}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: TEAL,
            fontSize: layout.subtitleFontSize,
            fontWeight: 700,
            letterSpacing: '0.06em',
          }}
        >
          {brand?.tagline || eventWebinarTeaserDefaultContent.brand.tagline}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SpeakerKeynoteScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  speakerName = eventWebinarTeaserDefaultContent.speakerName,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: EVENT_DARK }}>
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
            width: layout.horizontalLayout ? '46%' : '85%',
            maxWidth: layout.maxImageWidth,
            borderRadius: 16,
            overflow: 'hidden',
            border: `2px solid ${INDIGO}`,
            boxShadow: `0 0 30px ${INDIGO}44`,
          }}
        >
          <ProductImage
            imageUrl={product?.imageUrl || eventWebinarTeaserDefaultContent.product.imageUrl}
            productName={speakerName}
            primaryColor={INDIGO}
            accentColor={TEAL}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: layout.horizontalLayout ? 'flex-start' : 'center',
            textAlign: layout.horizontalLayout ? 'left' : 'center',
            maxWidth: 500,
            gap: 16,
          }}
        >
          <div
            style={{
              color: TEAL,
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {speakerName}
          </div>

          <h2
            style={{
              color: WHITE,
              fontSize: layout.titleFontSize,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {product?.name || eventWebinarTeaserDefaultContent.product.name}
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: layout.bodyFontSize,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {product?.description || eventWebinarTeaserDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const AgendaTopicsScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  product,
  eventDate = eventWebinarTeaserDefaultContent.eventDate,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || eventWebinarTeaserDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: EVENT_DARK }}>
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
        <div style={{ textAlign: 'center' }}>
          <KineticTypography
            text="WHAT TO EXPECT 🚀"
            accentColor={TEAL}
            style={{
              fontSize: layout.titleFontSize,
              color: WHITE,
              fontWeight: 900,
            }}
          />
          <div
            style={{
              color: INDIGO,
              fontSize: 14,
              fontWeight: 800,
              marginTop: 6,
              letterSpacing: '0.1em',
            }}
          >
            {eventDate}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: 680,
          }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 22px',
                borderRadius: 14,
                background: CARD_BG,
                border: `1px solid rgba(99, 102, 241, 0.3)`,
              }}
            >
              <div
                style={{
                  background: INDIGO,
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
                0{i + 1}
              </div>
              <div
                style={{
                  color: WHITE,
                  fontSize: layout.bodyFontSize * 1.05,
                  fontWeight: 600,
                }}
              >
                {feature}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const RegisterCTAScene: React.FC<VideoContentProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: EVENT_DARK }}>
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
        <div style={{ fontSize: 44 }}>🎟️</div>

        <KineticTypography
          text={brand?.name || eventWebinarTeaserDefaultContent.brand.name}
          accentColor={TEAL}
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
          {cta?.subtext || eventWebinarTeaserDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || eventWebinarTeaserDefaultContent.cta.text}
          subtext={cta?.subtext || eventWebinarTeaserDefaultContent.cta.subtext}
          primaryColor={INDIGO}
          accentColor={TEAL}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const EventWebinarTeaser: React.FC<VideoContentProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    eventWebinarTeaserScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: EVENT_DARK }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'event-intro' && (
            <IntroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'event-speaker-keynote' && (
            <SpeakerKeynoteScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'event-agenda-topics' && (
            <AgendaTopicsScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'event-register-cta' && (
            <RegisterCTAScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default EventWebinarTeaser;
