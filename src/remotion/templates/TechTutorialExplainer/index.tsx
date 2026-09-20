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
} from '../../components';
import { techTutorialExplainerScenes } from './scenes';
import { techTutorialExplainerDefaultContent } from './defaults';

const EMERALD = '#10B981';
const CYAN = '#06B6D4';
const IDE_NAVY = '#0F172A';
const SLATE_CARD = '#1E293B';
const WHITE = '#FFFFFF';

interface TechTutorialProps extends VideoContentProps {
  codeSnippet?: string;
  versionBadge?: string;
}

const TerminalHeader: React.FC<{ title?: string }> = ({ title = 'index.ts — Editor' }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#090D16',
      padding: '10px 16px',
      borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
      fontFamily: 'monospace',
      fontSize: 13,
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    <div style={{ display: 'flex', gap: 6 }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
    </div>
    <div>{title}</div>
    <div style={{ fontSize: 11, color: EMERALD }}>TS 5.4</div>
  </div>
);

const IntroScene: React.FC<TechTutorialProps & { durationInFrames: number }> = ({
  brand,
  headline = techTutorialExplainerDefaultContent.headline,
  versionBadge = techTutorialExplainerDefaultContent.versionBadge,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: IDE_NAVY }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${EMERALD}18 0%, transparent 60%)`,
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 6,
            background: 'rgba(16, 185, 129, 0.15)',
            border: `1px solid ${EMERALD}`,
            color: EMERALD,
            fontWeight: 700,
            fontSize: 13,
            fontFamily: 'monospace',
          }}
        >
          <span>⚡</span> {versionBadge}
        </div>

        <KineticTypography
          text={brand?.name || techTutorialExplainerDefaultContent.brand.name}
          accentColor={EMERALD}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <div
          style={{
            color: CYAN,
            fontWeight: 600,
            fontSize: layout.subtitleFontSize,
            fontFamily: 'monospace',
          }}
        >
          // {headline}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CodeSnippetScene: React.FC<TechTutorialProps & { durationInFrames: number }> = ({
  product,
  codeSnippet = techTutorialExplainerDefaultContent.codeSnippet,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: IDE_NAVY }}>
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
            width: layout.horizontalLayout ? '50%' : '90%',
            maxWidth: 600,
            background: SLATE_CARD,
            borderRadius: 12,
            overflow: 'hidden',
            border: `1px solid rgba(16, 185, 129, 0.3)`,
            boxShadow: `0 0 25px rgba(16, 185, 129, 0.15)`,
          }}
        >
          <TerminalHeader title="tutorial_worker.ts" />
          <pre
            style={{
              padding: 20,
              margin: 0,
              color: EMERALD,
              fontFamily: 'Consolas, Monaco, monospace',
              fontSize: layout.bodyFontSize * 0.85,
              lineHeight: 1.5,
              overflowX: 'auto',
            }}
          >
            <code>{codeSnippet}</code>
          </pre>
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
              fontSize: layout.titleFontSize,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {product?.name || techTutorialExplainerDefaultContent.product.name}
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: layout.bodyFontSize,
              margin: 0,
            }}
          >
            {product?.description || techTutorialExplainerDefaultContent.product.description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const StepsSpecsScene: React.FC<TechTutorialProps & { durationInFrames: number }> = ({
  product,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();
  const features = product?.features || techTutorialExplainerDefaultContent.product.features;

  return (
    <AbsoluteFill style={{ opacity, background: IDE_NAVY }}>
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
          text="TUTORIAL WORKFLOW STEPS 💻"
          accentColor={EMERALD}
          style={{
            fontSize: layout.titleFontSize,
            color: EMERALD,
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
          {features.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 24px',
                borderRadius: 10,
                background: SLATE_CARD,
                border: `1px solid rgba(6, 182, 212, 0.3)`,
              }}
            >
              <div
                style={{
                  background: EMERALD,
                  color: IDE_NAVY,
                  fontWeight: 900,
                  fontSize: 14,
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontFamily: 'monospace',
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
                {step}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CTAGithubScene: React.FC<TechTutorialProps & { durationInFrames: number }> = ({
  cta,
  brand,
  durationInFrames,
}) => {
  const opacity = useSceneOpacity(durationInFrames);
  const layout = useResponsiveLayout();

  return (
    <AbsoluteFill style={{ opacity, background: IDE_NAVY }}>
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
            fontSize: 44,
          }}
        >
          💻
        </div>

        <KineticTypography
          text={brand?.name || techTutorialExplainerDefaultContent.brand.name}
          accentColor={EMERALD}
          style={{
            fontSize: layout.titleFontSize * 1.2,
            color: WHITE,
            fontWeight: 900,
          }}
        />

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: layout.subtitleFontSize,
            margin: 0,
            maxWidth: 550,
          }}
        >
          {cta?.subtext || techTutorialExplainerDefaultContent.cta.subtext}
        </p>

        <CTAButton
          text={cta?.text || techTutorialExplainerDefaultContent.cta.text}
          subtext={cta?.subtext || techTutorialExplainerDefaultContent.cta.subtext}
          primaryColor={EMERALD}
          accentColor={CYAN}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const TechTutorialExplainer: React.FC<TechTutorialProps> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const scaledScenes = scaleScenesToDuration(
    techTutorialExplainerScenes,
    durationInFrames
  );

  return (
    <AbsoluteFill style={{ background: IDE_NAVY }}>
      {scaledScenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          {scene.id === 'tutorial-intro' && (
            <IntroScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'tutorial-code-snippet' && (
            <CodeSnippetScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'tutorial-steps-specs' && (
            <StepsSpecsScene {...props} durationInFrames={scene.durationInFrames} />
          )}
          {scene.id === 'tutorial-cta-github' && (
            <CTAGithubScene {...props} durationInFrames={scene.durationInFrames} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default TechTutorialExplainer;
