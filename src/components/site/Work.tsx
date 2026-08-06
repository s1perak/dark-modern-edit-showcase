import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, shortformProjects, type Project } from "@/data/portfolio";
import { VideoModal } from "./VideoModal";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const portrait = project.orientation === "portrait";
  return (
    <div className="group">
      <button
        onClick={onOpen}
        aria-label={`Watch ${project.title}`}
        className={`relative block w-full overflow-hidden rounded-xl border border-border/60 bg-card ${
          portrait ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.3em] text-foreground/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
          Watch
          <ArrowUpRight size={13} />
        </span>
      </button>

      <div className="mt-4 flex items-start justify-between gap-6 border-t border-border/60 pt-4">
        <div>
          <h3 className="text-[17px] tracking-tight text-foreground">{project.title}</h3>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {project.category}
          </p>
        </div>
        <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-muted-foreground md:block">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-[84rem]">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-border/60 pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">(01) — Selected work</p>
            <h2 className="max-w-2xl text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              Selected <span className="text-gradient">cuts</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            Recent YouTube edits showcasing my work. Click any thumbnail to watch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.id} className={p.featured ? "md:col-span-2" : undefined}>
              <ProjectCard project={p} index={i} onOpen={() => setActive(p)} />
            </div>
          ))}
        </div>

        <div className="mt-28 border-t border-border/60 pt-14">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl leading-[0.95] tracking-tight sm:text-6xl">
              Short-form <span className="text-gradient">content</span>
            </h2>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Cut from long-form client footage for Reels, Shorts and TikTok.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-2xl">
            {shortformProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
            ))}
          </div>
        </div>
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
