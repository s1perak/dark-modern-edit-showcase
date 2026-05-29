import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
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