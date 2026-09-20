import { Sparkles } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  text = "Loading...",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 p-4 ${className}`}>
      <div className="relative flex items-center justify-center">
        <div
          className={`${sizeClasses[size]} rounded-full border-primary/20 border-t-primary animate-spin`}
        />
        <Sparkles className={`absolute ${iconSizes[size]} text-primary animate-pulse`} />
      </div>
      {text && (
        <p className="text-xs font-medium text-muted-foreground animate-pulse tracking-wide">
          {text}
        </p>
      )}
    </div>
  );
}
