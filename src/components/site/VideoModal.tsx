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
        className="group relative w-full max-w-4xl aspect-video overflow-hidden rounded-2xl border border-border/40 bg-black shadow-[var(--shadow-elegant)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-50 grid h-9 w-9 place-items-center rounded-full glass text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:text-primary"
        >
          <X size={16} />
        </button>
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
    </div>
  );
}