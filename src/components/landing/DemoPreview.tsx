import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function DemoPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground">
            A real investigation on AI regulation policies — explore the contradictions.
          </p>
        </div>

        {/* Preview Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card-elevated p-8 md:p-12">
            {/* Investigation Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
                  <CheckCircle className="w-4 h-4" />
                  Completed Investigation
                </div>
                <h3 className="text-2xl font-display font-bold">AI Regulation: Innovation vs Safety</h3>
                <p className="text-muted-foreground mt-1">47 videos analyzed • 4 contradiction clusters</p>
              </div>
              <Link to="/demo">
                <Button variant="glow" size="lg" className="group">
                  Explore Full Report
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Contradiction Preview */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Side A */}
              <div className="p-6 rounded-xl bg-narrative-a/5 border border-narrative-a/20 narrative-a">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-narrative-a" />
                  <span className="font-display font-semibold text-narrative-a">Safety-First View</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  "AI development must pause or slow down significantly to ensure safety protocols 
                  are established before advancing further."
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <span>12 videos</span>
                  <span>•</span>
                  <span>3.2M views</span>
                </div>
              </div>

              {/* Side B */}
              <div className="p-6 rounded-xl bg-violet-accent/5 border border-violet-accent/20 narrative-b">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-violet-accent" />
                  <span className="font-display font-semibold text-violet-accent">Innovation-First View</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  "Slowing AI development would cede technological leadership to less 
                  safety-conscious actors and harm innovation."
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <span>14 videos</span>
                  <span>•</span>
                  <span>5.8M views</span>
                </div>
              </div>
            </div>

            {/* Confusion Signal */}
            <div className="mt-8 p-4 rounded-xl bg-sentiment-confusion/10 border border-sentiment-confusion/20 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-sentiment-confusion flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sentiment-confusion mb-1">High Audience Confusion Detected</p>
                <p className="text-sm text-muted-foreground">
                  "So should I be worried about AI or not? Every video says something different." — 847 similar comments found
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
