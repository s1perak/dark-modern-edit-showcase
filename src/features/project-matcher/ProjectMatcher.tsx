// AI Project Matcher — self-contained, removable feature.
// To remove: delete src/features/project-matcher, supabase/functions/project-matcher,
// and the <ProjectMatcher /> line in src/App.tsx.
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { projects, shortformProjects, type Project } from "@/data/portfolio";
import { VideoModal } from "@/components/site/VideoModal";

type Result = { summary: string; services: { name: string; reason: string }[]; projectIds: string[] };

const all = [...projects, ...shortformProjects];

export function ProjectMatcher() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null); setResult(null);
    const { data, error } = await supabase.functions.invoke("project-matcher", {
      body: {
        description: text,
        projects: all.map(({ id, title, category, description, orientation }) => ({ id, title, category, description, orientation })),
      },
    });
    setLoading(false);
    if (error || data?.error) {
      let msg = data?.error;
      try { msg ??= (await (error as any)?.context?.json())?.error; } catch { /* ignore */ }
      setError(msg ?? "Could not get a recommendation.");
      return;
    }
    setResult(data as Result);
  };

  const matches = result ? all.filter((p) => result.projectIds.includes(p.id)) : [];

  return (
    <section id="match" className="relative py-16 sm:py-24">
      <div className="site-container">
      <div className="border-t border-border/60 pt-12 sm:pt-16" data-reveal>
        <p className="eyebrow mb-6">AI project match</p>
        <h2 className="section-title uppercase">Tell me about your video</h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Describe your project and get instant suggestions for the right services and similar work.
        </p>

        <form onSubmit={submit} className="mt-12 flex flex-col gap-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={2000}
            rows={6}
            placeholder="e.g. I run a fitness YouTube channel and need punchy edits plus shorts for TikTok…"
            className="w-full resize-none rounded-2xl border border-border bg-card/60 p-6 text-base leading-relaxed text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <div>
            <Button type="submit" size="lg" className="h-14 px-10 text-base" disabled={loading || text.trim().length < 10}>
              {loading ? "Matching…" : "Get recommendations"}
            </Button>
          </div>
        </form>

        {error && <p className="mt-6 text-destructive">{error}</p>}

        {result && (
          <div className="mt-14 space-y-10">
            <p className="max-w-3xl text-xl leading-relaxed">{result.summary}</p>
            <div className="grid gap-6 md:grid-cols-3">
              {result.services.map((s) => (
                <div key={s.name} className="rounded-2xl border border-border bg-card/60 p-7">
                  <h3 className="text-xl tracking-tight">{s.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.reason}</p>
                </div>
              ))}
            </div>
            {matches.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Related work</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {matches.map((p) => (
                    <button key={p.id} type="button" onClick={() => setActive(p)} className="group text-left">
                      <img src={p.thumbnail} alt={p.title} loading="lazy"
                        className={`w-full rounded-lg object-cover transition-opacity group-hover:opacity-80 ${p.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"}`} />
                      <span className="mt-2 block text-sm">{p.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      </div>
      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
