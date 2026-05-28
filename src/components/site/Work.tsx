import { useState } from "react";
import { Play } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { VideoModal } from "./VideoModal";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div className="group">
      <button
        onClick={onOpen}
        className="relative block aspect-video w-full overflow-hidden rounded-2xl border border-border/40 bg-card glow-hover"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
            <Play size={20} className="ml-1 text-primary-foreground" fill="currentColor" />
          </span>
        </div>
      </button>
      <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary">
            {project.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">{project.title}</h3>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-primary">
              Featured work
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-[1] tracking-tight sm:text-6xl">
              Selected <span className="text-gradient">cuts</span> from the reel
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Recent YouTube edits showcasing my work. Click any thumbnail to watch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}