import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import type { VideoContentProps } from '@/remotion/schema';
import { CinematicCamera } from '../../animations/CinematicCamera';
import { FloatingParticles } from '../../animations/FloatingParticles';
import { GlassPanel } from '../../animations/GlassPanel';
import { ElegantTypography } from '../../animations/ElegantTypography';
import { ObjectReveal } from '../../animations/ObjectReveal';
import { useResponsiveLayout } from '../../animations';

const FALLBACK_PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop'; // High-end watch

export const LuxuryCommercial: React.FC<VideoContentProps> = ({
  brand,
  product,
  headline,
  cta,
}) => {
  const layout = useResponsiveLayout();
  const orbSize = Math.min(600, layout.width * 0.35);
  const imageWidth = layout.isPortrait ? '85%' : layout.isSquare ? '70%' : '60%';
  const imageHeight = layout.isPortrait ? '40%' : layout.isSquare ? '55%' : '80%';
  const panelWidth = Math.min(600, layout.maxTextWidth);
  const panelHeight = Math.round(300 * layout.fontScale);

  const brandName = brand?.name?.toUpperCase() || 'MAISON AURA';
  const teaseHeadline = (headline || brand?.tagline || 'E L E V A T E').toUpperCase();
  const teaseSubtitle = (brand?.tagline || 'Y O U R   S E N S E S').toUpperCase();
  const productImageUrl = product?.imageUrl || FALLBACK_PRODUCT_IMAGE;
  const productTitle = (product?.name || 'THE CROWN').toUpperCase();
  const productDesc = (product?.description || 'PRECISION ENGINEERING. TIMELESS DESIGN.').toUpperCase();
  const outroText = (cta?.text || brandName || 'A U R U M').toUpperCase();

  return (
    <AbsoluteFill className="bg-neutral-950 overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30,30,40,1) 0%, rgba(5,5,10,1) 100%)'
        }}
      />
      
      <CinematicCamera>
        <FloatingParticles count={80} color="rgba(255, 230, 150, 0.3)" />
        
        {/* SCENE 1: The Tease (0 - 3s) */}
        <Sequence durationInFrames={90}>
          <AbsoluteFill className="items-center justify-center">
            <ElegantTypography text={teaseHeadline} delay={10} className="text-6xl text-amber-100/80 font-light" />
            <ElegantTypography text={teaseSubtitle} type="subtitle" delay={45} className="text-xl text-neutral-400 mt-4 tracking-[0.5em]" />
          </AbsoluteFill>
        </Sequence>

        {/* SCENE 2: The Reveal (3s - 13s) */}
        <Sequence from={90} durationInFrames={300}>
          <AbsoluteFill className="items-center justify-center">
            <ObjectReveal 
              src={productImageUrl} 
              delay={15} 
              style={{ width: imageWidth, height: imageHeight, zIndex: 5 }} 
            />
            
            {/* Background glowing orb behind product */}
            <div className="absolute rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: `${orbSize}px`, height: `${orbSize}px`, background: 'rgba(245, 158, 11, 0.1)' }} />
          </AbsoluteFill>
        </Sequence>

        {/* SCENE 3: The Details / Glassmorphism (13s - 18s) */}
        <Sequence from={390} durationInFrames={150}>
          <AbsoluteFill className="items-center justify-center">
             <ObjectReveal 
              src={productImageUrl} 
              delay={0} 
              style={{ width: '85%', height: '100%', zIndex: 1, filter: 'blur(10px) brightness(0.4)' }} 
            />
            <GlassPanel intensity={20} style={{ width: `${panelWidth}px`, height: `${panelHeight}px`, zIndex: 10, borderRadius: '20px' }}>
              <div className="w-full h-full flex flex-col items-center justify-center text-center" style={{ padding: `${Math.round(48 * layout.fontScale)}px` }}>
                <ElegantTypography text={productTitle} delay={20} className="text-4xl text-white font-medium" />
                <div className="w-12 h-px bg-amber-500/50 my-6" />
                <ElegantTypography text={productDesc} type="subtitle" delay={60} className="text-sm text-neutral-300 leading-loose" />
              </div>
            </GlassPanel>
          </AbsoluteFill>
        </Sequence>

        {/* SCENE 4: Outro (18s - 20s) */}
        <Sequence from={540} durationInFrames={60}>
          <AbsoluteFill className="items-center justify-center bg-black">
            <ElegantTypography text={outroText} delay={5} className="text-5xl text-amber-500 font-bold tracking-widest" />
          </AbsoluteFill>
        </Sequence>

      </CinematicCamera>
    </AbsoluteFill>
  );
};
