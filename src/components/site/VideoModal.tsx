import { useEffect } from "react";
import type { Project } from "@/data/portfolio";

export function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-border/40 bg-card shadow-[var(--shadow-elegant)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-black">
          {project.videoType === "mp4" ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <iframe
              src={`${project.videoUrl}?autoplay=1`}
              title={project.title}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
        <div className="border-t border-border/40 p-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary">
            {project.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </div>
  );
}