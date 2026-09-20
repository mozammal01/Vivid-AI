import Link from "next/link";
import {
  Video,
  ArrowRight,
  Film,
  Layers,
  Clock,
  CheckCircle2,
  Loader2,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { demoProjects } from "@/data/defaults";
import {
  featuredTemplates,
  otherTemplates,
  templateList,
} from "@/remotion/templates";
import Image from "next/image";
import { TemplateCard } from "@/components/video/TemplateCard";
import { WelcomeVideoModal } from "@/components/video/WelcomeVideoModal";
import { formatDate, formatDuration } from "@/utils";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardHome() {
  return (
    <div className="space-y-10">
      <WelcomeVideoModal />
      {/* Welcome Banner */}
      <section className="relative rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/5 via-indigo-500/5 to-transparent p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/10 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            AI Video Suite Active
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back!
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg">
            Create high-quality, professional social media videos from scripts
            and templates using the Remotion rendering engine.
          </p>
        </div>
        <Link href="/create-video">
          <Button size="lg" className="gap-2 shrink-0">
            <Video className="w-4 h-4" />
            Create New Video
          </Button>
        </Link>
      </section>

      {/* Overview Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Projects
            </CardTitle>
            <Film className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{demoProjects.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {demoProjects.filter((p) => p.status === "completed").length}{" "}
              completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Renders
            </CardTitle>
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {demoProjects.filter((p) => p.status === "rendering").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Estimated completion in 45s
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Video Templates
            </CardTitle>
            <Layers className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{templateList.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {new Set(templateList.map((t) => t.category)).size} categories
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Recent Videos */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight">Recent Videos</h2>
            <p className="text-xs text-muted-foreground">
              Access your recently generated videos and rendering statuses.
            </p>
          </div>
          <Link href="/dashboard/my-videos">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-all shadow-sm"
            >
              {/* Real Thumbnail */}
              <div className="aspect-video w-full bg-slate-950 border-b border-border/40 relative overflow-hidden">
                {project.thumbnailUrl ? (
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    unoptimized={project.thumbnailUrl.endsWith(".svg")}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-primary/5 to-slate-900/20 flex flex-col items-center justify-center text-muted-foreground/40">
                    <Film className="w-10 h-10 stroke-[1.2]" />
                    <span className="text-[10px] mt-2 tracking-widest font-mono">
                      {project.aspectRatio} · {project.width}×{project.height}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Duration chip */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 text-[10px] font-medium text-white flex items-center gap-1 backdrop-blur-xs">
                  <Clock className="w-3 h-3" />
                  {formatDuration(project.durationInFrames, project.fps)}
                </div>

                {/* Status badge */}
                <div className="absolute top-2.5 left-2.5">
                  {project.status === "rendering" ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/80 text-white shadow-xs backdrop-blur-xs">
                      <Loader2 className="w-2.5 h-2.5 animate-spin" />
                      Rendering
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/80 text-white shadow-xs backdrop-blur-xs">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Completed
                    </span>
                  )}
                </div>
              </div>

              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm truncate font-semibold">
                  {project.title}
                </CardTitle>
                <CardDescription className="flex items-center justify-between text-xs pt-1">
                  <span className="text-muted-foreground">{project.template?.name ?? "Video Template"}</span>
                  <span className="text-[10px] font-mono text-muted-foreground/70">{formatDate(project.createdAt)}</span>
                </CardDescription>
              </CardHeader>

              <CardFooter className="p-4 pt-2 mt-0 border-t-0">
                <Link href={project.template ? `/create-video?template=${project.template.id}` : "/create-video"} className="w-full">
                  <Button variant="outline" size="sm" className="w-full text-xs gap-1.5 hover:bg-primary/10 hover:text-primary">
                    {project.status === "rendering" ? "View Rendering Status" : "Open In Editor"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Available Templates */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight">
              Available Templates (26)
            </h2>
            <p className="text-xs text-muted-foreground">
              Select any high-converting template to launch the editor with pre-loaded demo data.
            </p>
          </div>
          <Link href="/dashboard/templates">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              View All 26 Templates
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {featuredTemplates.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary flex items-center gap-1.5">
              <Star className="w-4 h-4" />
              Featured Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  href={`/create-video?template=${template.id}`}
                />
              ))}
            </div>
          </div>
        )}

        {otherTemplates.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              More Industry Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  href={`/create-video?template=${template.id}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
