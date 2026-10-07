import { useState } from "react";
import { Play } from "lucide-react";
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
    <article
      className={`mosaic-item mosaic-${index + 1} ${project.orientation === "portrait" ? "mosaic-portrait" : "mosaic-landscape"} group`}
    >
      <Button
        variant="ghost"
        onClick={onOpen}
        aria-label={`Watch ${project.title}`}
        className="project-image relative block h-full min-h-0 w-full overflow-hidden border border-border bg-card p-0"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
        />
        <span className="project-shade pointer-events-none absolute inset-0" />
        <span className="project-timecode pointer-events-none absolute left-4 top-4 font-mono text-[9px] uppercase text-foreground/60">
          {project.orientation === "portrait" ? "9:16 / VERTICAL" : "16:9 / PLAYBACK"}
        </span>
        <span className="project-play pointer-events-none absolute right-4 top-4 grid size-9 place-items-center border border-foreground/30 bg-background/50 text-foreground backdrop-blur-sm transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <Play className="size-3.5 fill-current" aria-hidden="true" />
        </span>
      </Button>

      <div className="mosaic-caption pointer-events-none absolute inset-x-0 bottom-0 p-6">
        <span className="mb-2 block font-mono text-[9px] font-bold uppercase text-primary">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <h3 className="text-2xl font-black uppercase text-foreground">{project.title}</h3>
      </div>
    </article>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const selectedCuts = [
    projects[0],
    projects[1],
    shortformProjects[0],
    projects[2],
    projects[3],
    shortformProjects[1],
    ...projects.slice(4),
  ].filter((project): project is Project => Boolean(project));

  return (
    <section id="work" className="relative py-24 sm:py-36">
      <div className="site-container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">PROJECT ARCHIVE // 01—10</p>
            <h2 className="section-title max-w-2xl uppercase">
              Selected <span className="text-gradient">cuts</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            Recent YouTube edits showcasing my work. Click any thumbnail to watch.
          </p>
        </div>

        {(() => {
          const reels = selectedCuts.filter((p) => p.orientation === "portrait");
          const wide = selectedCuts.filter((p) => p.orientation !== "portrait");
          const idx = (p: Project) => selectedCuts.indexOf(p);
          const columns: Project[][] = [
            [...wide.slice(0, 2), ...(reels[1] ? [reels[1]] : [])],
            wide.slice(2, 6),
            [...(reels[0] ? [reels[0]] : []), ...wide.slice(6)],
          ];
          return (
            <>
              <div className="work-masonry hidden md:grid">
                {columns.map((col, c) => (
                  <div key={c} className="work-masonry-col">
                    {col.map((p) => (
                      <ProjectCard key={p.id} project={p} index={idx(p)} onOpen={() => setActive(p)} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="work-masonry-mobile md:hidden">
                {selectedCuts.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
                ))}
              </div>
            </>
          );
        })()}
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
