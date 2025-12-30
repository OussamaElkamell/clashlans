import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";
import { Search, GitCompare, ArrowRight, Calendar, Globe, Video, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type InvestigationType = "compare" | "topic";

// Pre-filled demo URLs for Direct Compare
const DEMO_VIDEO_A = "https://youtube.com/watch?v=dQw4w9WgXcQ";
const DEMO_VIDEO_B = "https://youtube.com/watch?v=9bZkp7q19f0";

export default function NewInvestigation() {
  const [type, setType] = useState<InvestigationType>("compare");
  const [topic, setTopic] = useState("");
  const [videoA, setVideoA] = useState(DEMO_VIDEO_A);
  const [videoB, setVideoB] = useState(DEMO_VIDEO_B);
  const [maxVideos, setMaxVideos] = useState([30]);
  const [timeframe, setTimeframe] = useState("30");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === "topic" && !topic) {
      toast.error("Please enter a topic to scan");
      return;
    }
    
    if (type === "compare" && (!videoA || !videoB)) {
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
            <h1 className="text-3xl font-display font-bold mb-2">New Investigation</h1>
            <p className="text-muted-foreground">Choose how you want to find contradictions</p>
          </div>

          {/* Type Selector */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setType("compare")}
              className={cn(
                "glass-card p-6 text-left transition-all hover-lift",
                type === "compare" 
                  ? "ring-2 ring-primary border-primary/50" 
                  : "hover:border-border"
              )}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <GitCompare className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Direct Compare</h3>
              <p className="text-sm text-muted-foreground">
                Compare two specific videos to analyze their contradictions
              </p>
            </button>

            <button
              onClick={() => setType("topic")}
              className={cn(
                "glass-card p-6 text-left transition-all hover-lift",
                type === "topic" 
                  ? "ring-2 ring-primary border-primary/50" 
                  : "hover:border-border"
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-violet-accent flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Topic Scan</h3>
              <p className="text-sm text-muted-foreground">
                Scan multiple videos on a topic to find contradictions
              </p>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8">
            {type === "compare" ? (
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
            ) : (
              <div className="space-y-6">
                {/* Topic Input */}
                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-base">Topic or Keyword</Label>
                  <Input
                    id="topic"
                    placeholder="e.g., AI regulation, climate change, cryptocurrency"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="h-14 text-lg"
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter the topic you want to investigate for contradicting narratives
                  </p>
                </div>

                {/* Max Videos Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Maximum Videos to Analyze</Label>
                    <span className="text-lg font-display font-semibold text-primary">{maxVideos[0]}</span>
                  </div>
                  <Slider
                    value={maxVideos}
                    onValueChange={setMaxVideos}
                    min={10}
                    max={100}
                    step={10}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>10 videos</span>
                    <span>100 videos</span>
                  </div>
                </div>

                {/* Timeframe */}
                <div className="space-y-2">
                  <Label className="text-base">Timeframe</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "7", label: "Last 7 days" },
                      { value: "30", label: "Last 30 days" },
                      { value: "90", label: "Last 90 days" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setTimeframe(option.value)}
                        className={cn(
                          "p-4 rounded-xl border transition-all text-center",
                          timeframe === option.value
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-muted-foreground/50"
                        )}
                      >
                        <Calendar className="w-5 h-5 mx-auto mb-2 opacity-60" />
                        <span className="text-sm font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language Filter */}
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-base">Language (Optional)</Label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="language"
                      placeholder="Any language"
                      className="h-12 pl-12"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <Button variant="gradient" size="xl" className="w-full group" type="submit">
                {type === "compare" ? "Compare Videos" : "Run Contradiction Scan"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}