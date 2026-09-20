"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Player } from "@remotion/player";
import { Sparkles, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTemplateComponent } from "@/remotion/templates/components";
import { resolveTemplateOrDefault } from "@/remotion/templates";

const STORAGE_KEY = "vivid_welcome_video_seen";

export function WelcomeVideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeen = localStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      // Delay opening slightly for a smooth page load transition
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  const template = resolveTemplateOrDefault("youtube-shorts-viral-hook");
  const CompositionComponent = getTemplateComponent(template.id);

  const sampleProps = {
    brand: {
      name: "VIVID-AI STUDIO",
      tagline: "WELCOME TO THE FUTURE OF VIDEO",
      primaryColor: "#FACC15",
      accentColor: "#22C55E",
    },
    product: {
      name: "TURN IDEAS INTO VIRAL VIDEOS IN SECONDS",
      description: "AI-powered video creation platform for YouTube, Shorts, TikTok & Reels.",
      features: [
        "21+ High-Converting Templates",
        "Instant Remotion Live Preview",
        "Export 1080p MP4 Videos Fast",
      ],
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    },
    cta: {
      text: "CREATE YOUR FIRST VIDEO 🚀",
      subtext: "Start generating social media videos for free",
      url: "/create-video",
    },
    headline: "WELCOME TO VIVID-AI STUDIO 🚀",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-lg transition-all duration-300 animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-primary/30 bg-slate-950/95 shadow-2xl shadow-primary/20 text-slate-100 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/60 shadow-md"
          aria-label="Close welcome video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Column */}
        <div className="w-full md:w-7/12 p-5 sm:p-8 bg-slate-900/70 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800">
          <div className="w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-slate-950">
            <Player
              component={CompositionComponent}
              inputProps={sampleProps}
              durationInFrames={450}
              fps={30}
              compositionWidth={1080}
              compositionHeight={1920}
              style={{
                width: "100%",
                height: "100%",
              }}
              autoPlay
              loop
              controls
              acknowledgeRemotionLicense
            />
          </div>
        </div>

        {/* Info Column */}
        <div className="w-full md:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              Welcome to Vivid-AI
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
              Create Scroll-Stopping Videos in Seconds 🎬
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Watch how Vivid-AI programmatically turns product briefs &amp; scripts into high-converting videos for YouTube Shorts, Reels, and ads.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>21+ Custom Remotion Video Templates</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time Live Canvas Preview</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Click 1080p MP4 Server Rendering</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Link href="/create-video" onClick={handleClose} className="w-full">
              <Button size="lg" className="w-full gap-2 font-bold text-sm shadow-xl shadow-primary/25 h-11">
                Create Your Video Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <button
              type="button"
              onClick={handleClose}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all text-center bg-transparent border border-transparent"
            >
              Skip &amp; Continue Browsing
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
