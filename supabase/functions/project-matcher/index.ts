// AI Project Matcher — removable feature. Delete this folder + src/features/project-matcher to remove.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SERVICES = ["Sound Design", "Short Form Content", "YouTube Editing", "Color Grading", "Motion Graphics", "Social Media Ads"];

const schema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "services", "projectIds"],
  properties: {
    summary: { type: "string" },
    services: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "reason"],
        properties: { name: { type: "string", enum: SERVICES }, reason: { type: "string" } },
      },
    },
    projectIds: { type: "array", items: { type: "string" } },
  },
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const { description, projects } = await req.json();
    if (typeof description !== "string" || description.trim().length < 10 || description.length > 2000)
      return json({ error: "Please describe your project in 10–2000 characters." }, 400);
    const list = (Array.isArray(projects) ? projects : []).slice(0, 30)
      .map((p: any) => `- id: ${String(p.id)} | ${String(p.title)} | ${String(p.category)} | ${String(p.orientation ?? "landscape")} | ${String(p.description).slice(0, 300)}`)
      .join("\n");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      signal: req.signal,
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": Deno.env.get("LOVABLE_API_KEY") ?? "",
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low" },
        instructions:
          `You help Robert, a freelance video editor, match prospective clients to his services and portfolio. ` +
          `Services: ${SERVICES.join(", ")}. Portfolio:\n${list}\n` +
          `Recommend 1-3 services with one short reason each (speak to the client as "you"), and 1-3 portfolio ids that best fit. ` +
          `Summary: one friendly sentence, max 25 words. Only use ids from the list.`,
        input: description.trim(),
        text: { format: { type: "json_schema", name: "match", strict: true, schema } },
      }),
    });
    if (!res.ok || !res.body) {
      const t = await res.text();
      console.error("gateway", res.status, t);
      const msg = res.status === 429 ? "Too many requests, try again in a moment." :
        res.status === 402 ? "AI is temporarily unavailable." : "Could not get a recommendation.";
      return json({ error: msg }, res.status);
    }
    // consume SSE stream
    const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
    let buf = "", out = "";
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += value;
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const d = line.slice(5).trim();
        if (!d || d === "[DONE]") continue;
        try {
          const ev = JSON.parse(d);
          if (ev.type === "response.output_text.delta") out += ev.delta;
          if (ev.type === "response.failed" || ev.type === "error") return json({ error: "Could not get a recommendation." }, 502);
        } catch { /* partial */ }
      }
    }
    if (!out) return json({ error: "Could not get a recommendation." }, 502);
    return json(JSON.parse(out));
  } catch (e) {
    if ((e as Error).name === "AbortError") return json({ error: "aborted" }, 499);
    console.error(e);
    return json({ error: "Something went wrong." }, 500);
  }
});
