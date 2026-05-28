import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { AudioToggle } from "@/components/site/AudioToggle";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Robert — Cinematic Video Editor & Colorist" },
      {
        name: "description",
        content:
          "Robert is a freelance video editor crafting cinematic films, commercials and music videos. Premium edits, color and motion.",
      },
      { property: "og:title", content: "Robert — Cinematic Video Editor" },
      {
        property: "og:description",
        content:
          "Selected work, services and contact for Robert — a video editor crafting cinematic stories.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-[var(--bg-deep)] text-foreground">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <AudioToggle />
      <Toaster />
    </main>
  );
}
