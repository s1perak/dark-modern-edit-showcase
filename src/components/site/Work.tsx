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
  return (
    <article className={`mosaic-item mosaic-${index + 1} group`}>
      <Button
        variant="ghost"
        onClick={onOpen}
        aria-label={`Watch ${project.title}`}
        className="project-image relative block h-full min-h-0 w-full overflow-hidden rounded-md border border-border bg-card p-0"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70" />
      </Button>

      <div className="mosaic-caption pointer-events-none absolute inset-x-0 bottom-0 p-6">
        <span className="mb-2 block text-[9px] font-bold uppercase text-primary">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <h3 className="text-2xl font-black uppercase text-foreground">{project.title}</h3>
      </div>
    </article>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-36">
      <div className="site-container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">PROJECT ARCHIVE // 01—08</p>
            <h2 className="section-title max-w-2xl uppercase">
              Selected <span className="text-gradient">cuts</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            Recent YouTube edits showcasing my work. Click any thumbnail to watch.
          </p>
        </div>

        <div className="work-mosaic">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>

        <div className="mt-28 border-t border-border pt-14">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="section-title max-w-3xl uppercase">
              Short-form <span className="text-gradient">content</span>
            </h2>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Cut from long-form client footage for Reels, Shorts and TikTok.
            </p>
          </div>

          <div className="short-mosaic">
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
