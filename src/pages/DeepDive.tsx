import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Quote, Users, Info, Bookmark } from "lucide-react";
import { deepDiveData } from "@/data/mockData";

export default function DeepDive() {
  const { contradictionId } = useParams();
  const data = deepDiveData["contradiction-1"]; // Use first excerpt for demo

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-5xl">
          {/* Back Button */}
          <Link to="/results/demo-ai-regulation" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Research Workspace
          </Link>

          {/* Research Disclaimer */}
          <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Research Workspace:</span> This page displays raw excerpts from selected videos. ClashLens does not interpret or judge this content. All conclusions are made by you, the researcher.
              </p>
            </div>
          </div>

          {/* Header */}
          <div className="glass-card-elevated p-8 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
              <Quote className="w-4 h-4" />
              DETAILED EXCERPTS
            </span>
            <h1 className="text-3xl font-display font-bold mb-4">{data.title}</h1>
            <p className="text-lg text-muted-foreground">Explore collected excerpts presenting differing viewpoints on this topic</p>
          </div>

          {/* Historical Context - Raw excerpt from videos */}
          <section className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Background Context</h2>
            </div>
            <p className="text-muted-foreground">{data.fullAnalysis.historicalContext}</p>
            <p className="text-xs text-muted-foreground mt-3 italic">Context compiled from video descriptions and publicly available information</p>
          </section>

          {/* Side-by-Side Excerpts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Viewpoint A Excerpts */}
            <div className="glass-card p-6 narrative-a">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-narrative-a" />
                <h3 className="font-display font-semibold text-lg text-narrative-a">Video A Excerpts</h3>
              </div>
              
              <div className="p-4 rounded-lg bg-narrative-a/5 mb-6">
                <p className="text-foreground italic">"{data.claimA.fullText}"</p>
              </div>

              {/* Evidence Mentioned in Video */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Evidence Mentioned in Video</h4>
                <ul className="space-y-2">
                  {data.claimA.evidenceCited.map((ev, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-narrative-a">•</span>
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speaker Background */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Speaker Background</h4>
                <p className="text-sm">{data.claimA.speakerCredentials}</p>
              </div>

              {/* Direct Quotes with Timestamps */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Direct Quotes</h4>
                <div className="space-y-2">
                  {data.claimA.videoTimestamps.map((ts, i) => (
                    <div key={i} className="p-3 rounded-lg bg-narrative-a/10">
                      <div className="flex items-center gap-2 text-xs text-narrative-a mb-1">
                        <span>{ts.video}</span>
                        <span>•</span>
                        <span>{ts.timestamp}</span>
                      </div>
                      <p className="text-sm italic">"{ts.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Viewpoint B Excerpts */}
            <div className="glass-card p-6 narrative-b">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-violet-accent" />
                <h3 className="font-display font-semibold text-lg text-violet-accent">Video B Excerpts</h3>
              </div>
              
              <div className="p-4 rounded-lg bg-violet-accent/5 mb-6">
                <p className="text-foreground italic">"{data.claimB.fullText}"</p>
              </div>

              {/* Evidence Mentioned in Video */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Evidence Mentioned in Video</h4>
                <ul className="space-y-2">
                  {data.claimB.evidenceCited.map((ev, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-violet-accent">•</span>
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speaker Background */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Speaker Background</h4>
                <p className="text-sm">{data.claimB.speakerCredentials}</p>
              </div>

              {/* Direct Quotes with Timestamps */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Direct Quotes</h4>
                <div className="space-y-2">
                  {data.claimB.videoTimestamps.map((ts, i) => (
                    <div key={i} className="p-3 rounded-lg bg-violet-accent/10">
                      <div className="flex items-center gap-2 text-xs text-violet-accent mb-1">
                        <span>{ts.video}</span>
                        <span>•</span>
                        <span>{ts.timestamp}</span>
                      </div>
                      <p className="text-sm italic">"{ts.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stakeholder Viewpoints Mentioned */}
          <section className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Stakeholders Mentioned in Videos</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Stakeholder positions as presented in the selected videos</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {data.fullAnalysis.stakeholderPositions.map((s, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">{s.name}</h4>
                  <p className="text-sm text-muted-foreground">Position stated: {s.position}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Comment Excerpts */}
          <section className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display font-semibold">Selected Comment Excerpts</h2>
              <Button variant="glass" size="sm">
                <Bookmark className="w-4 h-4" />
                Save Collection
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Public comments selected for research exploration. These are raw excerpts—ClashLens does not categorize or interpret them.
            </p>
            
            <div className="space-y-3">
              {data.commentAnalysis.topDebatePoints.map((point, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm italic">"{point}"</p>
                  <p className="text-xs text-muted-foreground mt-2">Topic discussed in comments</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
