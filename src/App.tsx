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
    <main className="relative bg-[var(--bg-deep)] text-foreground">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}