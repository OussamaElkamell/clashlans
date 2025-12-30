import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Quote, Users, MessageSquare } from "lucide-react";
import { deepDiveData } from "@/data/mockData";

export default function DeepDive() {
  const { contradictionId } = useParams();
  const data = deepDiveData["contradiction-1"]; // Use first contradiction for demo

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-5xl">
          {/* Back Button */}
          <Link to="/results/demo-ai-regulation" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Investigation
          </Link>

          {/* Header */}
          <div className="glass-card-elevated p-8 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm mb-4">
              CRITICAL
            </span>
            <h1 className="text-3xl font-display font-bold mb-4">{data.title}</h1>
            <p className="text-lg text-muted-foreground">{data.fullAnalysis.summary}</p>
          </div>

          {/* Historical Context */}
          <section className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Historical Context</h2>
            </div>
            <p className="text-muted-foreground">{data.fullAnalysis.historicalContext}</p>
          </section>

          {/* Claims Deep Dive */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Claim A */}
            <div className="glass-card p-6 narrative-a">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-narrative-a" />
                <h3 className="font-display font-semibold text-lg text-narrative-a">Side A Claim</h3>
              </div>
              
              <p className="text-foreground mb-6">{data.claimA.fullText}</p>

              {/* Evidence */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Evidence Cited</h4>
                <ul className="space-y-2">
                  {data.claimA.evidenceCited.map((ev, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-narrative-a">•</span>
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speaker Credentials */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Speaker Credentials</h4>
                <p className="text-sm">{data.claimA.speakerCredentials}</p>
              </div>

              {/* Timestamps */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Moments</h4>
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

            {/* Claim B */}
            <div className="glass-card p-6 narrative-b">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-violet-accent" />
                <h3 className="font-display font-semibold text-lg text-violet-accent">Side B Claim</h3>
              </div>
              
              <p className="text-foreground mb-6">{data.claimB.fullText}</p>

              {/* Evidence */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Evidence Cited</h4>
                <ul className="space-y-2">
                  {data.claimB.evidenceCited.map((ev, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-violet-accent">•</span>
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speaker Credentials */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Speaker Credentials</h4>
                <p className="text-sm">{data.claimB.speakerCredentials}</p>
              </div>

              {/* Timestamps */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Moments</h4>
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

          {/* Stakeholder Positions */}
          <section className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Stakeholder Positions</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {data.fullAnalysis.stakeholderPositions.map((s, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">{s.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">Position: {s.position}</p>
                  <p className="text-xs text-muted-foreground">Influence: {s.influence}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comment Analysis */}
          <section className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-semibold">Comment Analysis for This Contradiction</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <div className="text-2xl font-display font-bold">{data.commentAnalysis.totalComments.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Comments</div>
              </div>
              <div className="p-4 rounded-lg bg-narrative-a/10 text-center">
                <div className="text-2xl font-display font-bold text-narrative-a">{data.commentAnalysis.sentimentBreakdown.sideA}%</div>
                <div className="text-sm text-muted-foreground">Side A Support</div>
              </div>
              <div className="p-4 rounded-lg bg-violet-accent/10 text-center">
                <div className="text-2xl font-display font-bold text-violet-accent">{data.commentAnalysis.sentimentBreakdown.sideB}%</div>
                <div className="text-sm text-muted-foreground">Side B Support</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Top Debate Points</h4>
              <ul className="space-y-2">
                {data.commentAnalysis.topDebatePoints.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm p-3 rounded-lg bg-muted/50">
                    <span className="text-primary font-bold">{i + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
