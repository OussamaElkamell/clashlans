import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { DemoPreview } from "@/components/landing/DemoPreview";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <DemoPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
