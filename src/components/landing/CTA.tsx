import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <div className="relative">
          {/* Glow Effects */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
          
          <div className="glass-card-elevated p-12 md:p-16 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to See Through the Noise?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Start your first investigation and discover what narratives are clashing 
              on the topics you care about.
            </p>
            <Link to="/auth">
              <Button variant="gradient" size="xl" className="group">
                Start Free Investigation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Analyze up to 50 videos free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
