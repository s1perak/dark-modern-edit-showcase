import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Toaster } from "@/components/ui/sonner";
// Removable AI feature: delete this import + <ProjectMatcher /> below to remove.
import { ProjectMatcher } from "@/features/project-matcher/ProjectMatcher";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal();
  return (
    <main className="relative text-foreground">
      <div className="relative z-10">
        <LoadingScreen />
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Services />
        <ProjectMatcher />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </main>
  );
}