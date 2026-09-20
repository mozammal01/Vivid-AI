"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  X,
  Layers,
  Film,
  Sparkles,
  ArrowRight,
  Video,
  LayoutDashboard,
  Settings,
  Clock,
  Compass,
  Command,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import { templateList } from "@/remotion/templates";
import { demoProjects } from "@/data/defaults";
import { cn } from "@/lib/utils";
import { formatDuration } from "@/utils";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "templates" | "projects" | "navigation">("all");

  // Keyboard shortcut listener (Ctrl+K or Cmd+K to toggle, Esc to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query and tab when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveTab("all");
    }
  }, [isOpen]);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    if (!query.trim()) return templateList;
    const q = query.toLowerCase().trim();
    return templateList.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [query]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!query.trim()) return demoProjects;
    const q = query.toLowerCase().trim();
    return demoProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.template?.name && p.template.name.toLowerCase().includes(q)) ||
        (p.template?.category && p.template.category.toLowerCase().includes(q))
    );
  }, [query]);

  // Quick Navigation Links
  const quickLinks = [
    { name: "Dashboard Overview", href: "/dashboard", icon: LayoutDashboard, category: "Navigation", desc: "Main control panel & recent activity" },
    { name: "Create Video Studio", href: "/create-video", icon: Video, category: "Studio", desc: "AI script-to-video studio generator" },
    { name: "All Video Templates (26)", href: "/dashboard/templates", icon: Layers, category: "Gallery", desc: "Explore all 26 professional presets" },
    { name: "My Videos & Exports", href: "/dashboard/my-videos", icon: Film, category: "Library", desc: "Manage saved projects & renders" },
    { name: "Account & Settings", href: "/dashboard/settings", icon: Settings, category: "System", desc: "API keys, profile & rendering defaults" },
  ];

  const filteredQuickLinks = useMemo(() => {
    if (!query.trim()) return quickLinks;
    const q = query.toLowerCase().trim();
    return quickLinks.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        l.desc.toLowerCase().includes(q)
    );
  }, [query]);

  const totalResults = filteredTemplates.length + filteredProjects.length + filteredQuickLinks.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 cursor-default"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Command Palette Dialog - Centered, strictly capped height to NEVER overflow screen top */}
      <div className="relative w-full max-w-2xl bg-card border border-border/80 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[78vh] my-auto z-10 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-xl shrink-0">
        
        {/* Search Input Bar - Clean, Compact & Sleek */}
        <div className="relative flex items-center px-4 h-14 border-b border-border/70 bg-muted/20 shrink-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0 mr-3">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search templates, projects, categories (e.g. SaaS, Podcast, News)..."
            className="w-full bg-transparent text-sm font-medium focus:outline-none text-foreground placeholder:text-muted-foreground/70"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted mr-2 transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd
            onClick={onClose}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-muted/80 text-muted-foreground border border-border/80 shadow-xs cursor-pointer hover:bg-muted transition-colors shrink-0"
          >
            ESC
          </kbd>
        </div>

        {/* Category Filter Tabs Bar - Clean & Fits nicely without native scrollbar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/70 bg-card/40 text-xs font-medium overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-0">
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0 select-none border",
              activeTab === "all"
                ? "bg-primary text-primary-foreground border-primary shadow-xs font-semibold"
                : "bg-muted/30 text-muted-foreground border-border/50 hover:text-foreground hover:bg-muted/60"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Results</span>
            <span
              className={cn(
                "ml-1 px-1.5 py-0.2 text-[10px] rounded-full font-bold",
                activeTab === "all"
                  ? "bg-white/20 text-white"
                  : "bg-muted-foreground/15 text-muted-foreground"
              )}
            >
              {totalResults}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("templates")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0 select-none border",
              activeTab === "templates"
                ? "bg-primary text-primary-foreground border-primary shadow-xs font-semibold"
                : "bg-muted/30 text-muted-foreground border-border/50 hover:text-foreground hover:bg-muted/60"
            )}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Templates</span>
            <span
              className={cn(
                "ml-1 px-1.5 py-0.2 text-[10px] rounded-full font-bold",
                activeTab === "templates"
                  ? "bg-white/20 text-white"
                  : "bg-muted-foreground/15 text-muted-foreground"
              )}
            >
              {filteredTemplates.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0 select-none border",
              activeTab === "projects"
                ? "bg-primary text-primary-foreground border-primary shadow-xs font-semibold"
                : "bg-muted/30 text-muted-foreground border-border/50 hover:text-foreground hover:bg-muted/60"
            )}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Recent Videos</span>
            <span
              className={cn(
                "ml-1 px-1.5 py-0.2 text-[10px] rounded-full font-bold",
                activeTab === "projects"
                  ? "bg-white/20 text-white"
                  : "bg-muted-foreground/15 text-muted-foreground"
              )}
            >
              {filteredProjects.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("navigation")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0 select-none border",
              activeTab === "navigation"
                ? "bg-primary text-primary-foreground border-primary shadow-xs font-semibold"
                : "bg-muted/30 text-muted-foreground border-border/50 hover:text-foreground hover:bg-muted/60"
            )}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Quick Links</span>
            <span
              className={cn(
                "ml-1 px-1.5 py-0.2 text-[10px] rounded-full font-bold",
                activeTab === "navigation"
                  ? "bg-white/20 text-white"
                  : "bg-muted-foreground/15 text-muted-foreground"
              )}
            >
              {filteredQuickLinks.length}
            </span>
          </button>
        </div>

        {/* Results List Section - Scrollable inner area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 [scrollbar-width:thin] scrollbar-thin scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40">
          
          {/* Empty State */}
          {totalResults === 0 && (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <div className="w-10 h-10 rounded-full bg-muted/50 text-muted-foreground flex items-center justify-center mx-auto">
                <Search className="w-5 h-5 opacity-60" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">No matches found for &quot;{query}&quot;</p>
                <p className="text-xs text-muted-foreground mt-0.5">Try searching for &quot;SaaS&quot;, &quot;Podcast&quot;, &quot;Fashion&quot;, or &quot;Dashboard&quot;.</p>
              </div>
            </div>
          )}

          {/* Quick Navigation Section */}
          {(activeTab === "all" || activeTab === "navigation") && filteredQuickLinks.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span>Quick Navigation</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredQuickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-card hover:bg-primary/5 hover:border-primary/40 transition-all duration-200 group shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-muted-foreground line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Video Templates Section */}
          {(activeTab === "all" || activeTab === "templates") && filteredTemplates.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Video Templates ({filteredTemplates.length})</span>
                </div>
                <span className="text-[10px] text-muted-foreground">Select to open in Studio</span>
              </div>
              <div className="space-y-2">
                {filteredTemplates.map((template) => (
                  <Link
                    key={template.id}
                    href={`/create-video?template=${template.id}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-border/60 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group shadow-xs"
                  >
                    <div className="relative w-16 h-10 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-border/60 shadow-xs">
                      <Image
                        src={template.thumbnailUrl}
                        alt={template.name}
                        fill
                        unoptimized={template.thumbnailUrl.endsWith(".svg")}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                        <PlayCircle className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-foreground group-hover:text-primary truncate transition-colors">
                          {template.name}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-primary/10 text-primary border border-primary/20 uppercase tracking-tight shrink-0">
                          {template.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground truncate">
                        {template.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground shrink-0 bg-muted/50 px-2 py-0.5 rounded-md border border-border/50">
                      <Clock className="w-3 h-3 text-primary" />
                      {formatDuration(template.durationInFrames, template.fps)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Recent Projects Section */}
          {(activeTab === "all" || activeTab === "projects") && filteredProjects.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  <Film className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Recent Projects ({filteredProjects.length})</span>
                </div>
              </div>
              <div className="space-y-2">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href="/dashboard/my-videos"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group shadow-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                        <Film className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-foreground group-hover:text-primary truncate transition-colors">
                          {project.title}
                        </div>
                        <div className="text-[10px] text-muted-foreground truncate">
                          {project.template?.name ?? 'Video Preset'} • {project.aspectRatio}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {project.status}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-border/70 bg-muted/40 text-[11px] text-muted-foreground shrink-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px] font-bold text-foreground">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px] font-bold text-foreground">↵</kbd> Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px] font-bold text-foreground">ESC</kbd> Close
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-primary">
            <Command className="w-3.5 h-3.5" />
            <span>VividAI Command Palette</span>
          </div>
        </div>
      </div>
    </div>
  );
}
