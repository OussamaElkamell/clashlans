import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { GitCompare, ArrowRight, Video, Sparkles } from "lucide-react";
import { toast } from "sonner";

// Pre-filled demo URLs for AI Regulation Investigation
const DEMO_VIDEO_A = "https://youtube.com/watch?v=AI_Innovation_2025";
const DEMO_VIDEO_B = "https://youtube.com/watch?v=AI_Safety_Concerns_2025";

export default function NewInvestigation() {
  const [videoA, setVideoA] = useState(DEMO_VIDEO_A);
  const [videoB, setVideoB] = useState(DEMO_VIDEO_B);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoA || !videoB) {
      toast.error("Please enter both video URLs");
      return;
    }

    navigate("/progress");
  };

  const loadDemoData = () => {
    setVideoA(DEMO_VIDEO_A);
    setVideoB(DEMO_VIDEO_B);
    toast.success("Demo videos loaded!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
              <GitCompare className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-display font-bold mb-2">Direct Compare</h1>
            <p className="text-muted-foreground">
              Compare two specific videos to analyze their contradicting narratives
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="space-y-6">
              {/* Demo Hint */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Demo videos are pre-filled. Click Compare to see an example analysis.
                  </span>
                </div>
                <Button type="button" variant="ghost" size="sm" onClick={loadDemoData}>
                  Reset Demo
                </Button>
              </div>

              {/* Video A */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-narrative-a flex items-center justify-center text-xs font-bold text-primary-foreground">A</div>
                  <Label htmlFor="videoA" className="text-base">First Video URL</Label>
                </div>
                <div className="relative">
                  <Video className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="videoA"
                    placeholder="https://youtube.com/watch?v=..."
                    value={videoA}
                    onChange={(e) => setVideoA(e.target.value)}
                    className="h-14 pl-12"
                  />
                </div>
              </div>

              {/* Versus Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-muted-foreground font-display font-semibold">VS</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Video B */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-violet-accent flex items-center justify-center text-xs font-bold text-white">B</div>
                  <Label htmlFor="videoB" className="text-base">Second Video URL</Label>
                </div>
                <div className="relative">
                  <Video className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="videoB"
                    placeholder="https://youtube.com/watch?v=..."
                    value={videoB}
                    onChange={(e) => setVideoB(e.target.value)}
                    className="h-14 pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button variant="gradient" size="xl" className="w-full group" type="submit">
                Compare Videos
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>

          {/* Info */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Tip: Use videos discussing the same topic with different perspectives for best results
          </p>
        </div>
      </main>
    </div>
  );
}
