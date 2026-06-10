import { useEffect } from "react";
import { X } from "lucide-react";
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
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute -right-3 -top-12 z-50 grid h-9 w-9 place-items-center rounded-full glass text-foreground transition-colors hover:text-primary"
        >
          <X size={16} />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
          {project.videoType === "mp4" ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="h-full w-full object-cover"
            />
          ) : (
            <iframe
              src={`${project.videoUrl}?autoplay=1`}
              title={project.title}
              className="h-full w-full"
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