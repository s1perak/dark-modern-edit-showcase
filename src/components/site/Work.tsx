import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      <Button
        variant="ghost"
        onClick={onOpen}
        aria-label={`Watch ${project.title}`}
        className={`project-image relative block h-auto w-full overflow-hidden rounded-lg border border-border bg-card p-0 ${
          portrait ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 grid h-7 min-w-7 place-items-center rounded-full bg-background/80 px-2 text-[10px] text-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Button>

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
    <section id="work" className="relative py-20 sm:py-28">
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-border/60 pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">(01) — Selected work</p>
            <h2 className="section-title max-w-2xl">
              Selected <span className="text-gradient">cuts</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            Recent YouTube edits showcasing my work. Click any thumbnail to watch.
          </p>
        </div>

        <div className="work-grid grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.id} className={p.featured ? "md:col-span-2" : undefined}>
              <ProjectCard project={p} index={i} onOpen={() => setActive(p)} />
            </div>
          ))}
        </div>

        <div className="mt-28 border-t border-border/60 pt-14">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="section-title max-w-3xl">
              Short-form <span className="text-gradient">content</span>
            </h2>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Cut from long-form client footage for Reels, Shorts and TikTok.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:max-w-3xl sm:grid-cols-2">
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
