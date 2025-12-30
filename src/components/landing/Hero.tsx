import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>MVP Beta — Early Access</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">See Through the</span>
            <br />
            <span className="gradient-text">Contradiction</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Detect and understand conflicting narratives across YouTube videos. 
            Know which claims clash, see the evidence, and understand the audience reaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/auth">
              <Button variant="gradient" size="xl" className="group">
                Start an Investigation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/results/demo-ai-regulation">
              <Button variant="glass" size="lg" className="group">
                <Play className="w-4 h-4" />
                See Demo Report
              </Button>
            </Link>
          </div>

          {/* MVP Info */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground">
              Currently in MVP beta. Core features available for testing.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}