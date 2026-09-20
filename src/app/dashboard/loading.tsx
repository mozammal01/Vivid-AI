export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/50 pb-5">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-muted rounded-lg" />
          <div className="h-4 w-72 bg-muted/60 rounded-md" />
        </div>
        <div className="h-10 w-36 bg-primary/20 rounded-lg" />
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-5 rounded-xl border border-border bg-card/60 space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 bg-muted rounded" />
              <div className="h-8 w-8 bg-muted/80 rounded-lg" />
            </div>
            <div className="h-7 w-20 bg-muted rounded-md" />
            <div className="h-3 w-32 bg-muted/50 rounded" />
          </div>
        ))}
      </div>

      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="h-6 w-36 bg-muted rounded-md" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl border border-border bg-card/40 p-4 space-y-3">
                <div className="h-36 w-full bg-muted/70 rounded-lg" />
                <div className="h-5 w-3/4 bg-muted rounded" />
                <div className="h-4 w-1/2 bg-muted/60 rounded" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-6 w-32 bg-muted rounded-md" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 w-full bg-card/60 border border-border rounded-xl p-3" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
