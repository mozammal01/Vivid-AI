import { Sparkles } from "lucide-react";

export default function CreateVideoLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center justify-between border-b border-border/50 pb-4">
        <div className="space-y-2">
          <div className="h-7 w-48 bg-muted rounded-lg" />
          <div className="h-4 w-64 bg-muted/60 rounded" />
        </div>
        <div className="flex gap-3">
          <div className="h-9 w-24 bg-muted rounded-lg" />
          <div className="h-9 w-32 bg-primary/30 rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form Controls Skeleton */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl border border-border bg-card/60 space-y-4">
            <div className="h-5 w-32 bg-muted rounded" />
            <div className="h-10 w-full bg-muted/70 rounded-lg" />
            <div className="h-20 w-full bg-muted/40 rounded-lg" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-10 bg-muted/60 rounded-lg" />
              <div className="h-10 bg-muted/60 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Right Preview Skeleton */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card/40 min-h-[450px]">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Sparkles className="w-5 h-5 text-primary animate-spin" />
            <span className="text-sm font-medium">Preparing Remotion Video Studio...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
