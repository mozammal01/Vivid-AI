import { Sparkles } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-md">
      <div className="relative flex flex-col items-center gap-6 p-8 rounded-2xl border border-border/50 bg-card/60 shadow-2xl">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>
        <div className="text-center space-y-1">
          <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            VividAI
          </h3>
          <p className="text-xs text-muted-foreground animate-pulse">
            Loading intelligent workspace...
          </p>
        </div>
      </div>
    </div>
  );
}
