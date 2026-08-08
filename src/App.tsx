import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Toaster } from "@/components/ui/sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal();
  return (
    <main className="relative text-foreground">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100svh+12rem)] dotgrid"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)",
        }}
      />
      <div className="relative z-10">
        <LoadingScreen />
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </main>
  );
}