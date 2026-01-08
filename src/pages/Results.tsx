import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowRight, Download, Share2, AlertTriangle, CheckCircle, 
  TrendingUp, MessageSquare, Eye, Zap, ChevronDown, ChevronUp,
  Info
} from "lucide-react";
import { 
  executiveSummary, 
  contradictionCards, 
  narrativeSplitData, 
  commentIntelligence 
} from "@/data/mockData";
import { cn } from "@/lib/utils";
import { ExpertResponsePanel } from "@/components/ExpertResponsePanel";

export default function Results() {
  const { id } = useParams();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"map" | "comments">("map");

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-7xl">
          {/* Research Disclaimer */}
          <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Disclaimer:</span> The analyses and indicators presented by ClashLens are qualitative research outputs generated from publicly available content. They are not official YouTube metrics, do not replace or replicate YouTube analytics, and should not be interpreted as performance or ranking measures.
              </p>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="mb-12">
            <div className="glass-card-elevated p-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentiment-agreement/20 text-sentiment-agreement text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Analysis Complete
                    </span>
                    <span className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm",
                      executiveSummary.confidence === "high" 
                        ? "bg-sentiment-agreement/20 text-sentiment-agreement"
                        : executiveSummary.confidence === "medium"
                        ? "bg-sentiment-confusion/20 text-sentiment-confusion"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {executiveSummary.confidence === "high" ? "High Consistency in Analysis" : executiveSummary.confidence === "medium" ? "Medium Consistency" : "Low Consistency"}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                    AI Regulation: Innovation vs Safety
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    We found <span className="text-primary font-semibold">{executiveSummary.contradictionClusters} contradiction analysis groups</span> across {executiveSummary.totalVideosAnalyzed} videos
                  </p>
                  
                  {/* Main Tension */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Main Tension</p>
                    <p className="font-medium">{executiveSummary.mainTension}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <Button variant="gradient" className="group">
                    <Download className="w-4 h-4" />
                    Export Research Summary
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="glass">
                    <Share2 className="w-4 h-4" />
                    Share Investigation
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-muted/50">
                  <Eye className="w-5 h-5 text-muted-foreground mb-2" />
                  <div className="text-2xl font-display font-bold">{executiveSummary.totalVideosAnalyzed}</div>
                  <div className="text-sm text-muted-foreground">Videos Analyzed</div>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <Zap className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-display font-bold text-primary">{executiveSummary.contradictionClusters}</div>
                  <div className="text-sm text-muted-foreground">Contradictions Found</div>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <MessageSquare className="w-5 h-5 text-muted-foreground mb-2" />
                  <div className="text-sm font-medium">Public comments included in analysis</div>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <AlertTriangle className="w-5 h-5 text-sentiment-confusion mb-2" />
                  <div className="text-2xl font-display font-bold text-sentiment-confusion">High</div>
                  <div className="text-sm text-muted-foreground">Audience Confusion Level</div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("map")}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all",
                activeTab === "map" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              Contradiction Analysis
            </button>
            <button
              onClick={() => setActiveTab("comments")}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all",
                activeTab === "comments" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              Comment Research
            </button>
          </div>

          {activeTab === "map" && (
            <>
              {/* Contradiction Cards */}
              <section className="mb-12">
                <h2 className="text-xl font-display font-semibold mb-6">Contradiction Analysis Groups</h2>
                <div className="space-y-4">
                  {contradictionCards.map((card) => (
                    <div key={card.id} className="glass-card overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer"
                        onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={cn(
                                "px-2 py-0.5 rounded-full text-xs font-medium",
                                card.severity === "critical" && "bg-destructive/20 text-destructive",
                                card.severity === "high" && "bg-sentiment-confusion/20 text-sentiment-confusion",
                                card.severity === "medium" && "bg-muted text-muted-foreground"
                              )}>
                                {card.severity.toUpperCase()}
                              </span>
                              <h3 className="font-display font-semibold text-lg">{card.title}</h3>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              {/* Claim A */}
                              <div className="p-4 rounded-lg bg-narrative-a/5 border border-narrative-a/20 narrative-a">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-3 h-3 rounded-full bg-narrative-a" />
                                  <span className="text-sm font-medium text-narrative-a">Side A</span>
                                </div>
                                <p className="text-sm">{card.claimA}</p>
                              </div>
                              
                              {/* Claim B */}
                              <div className="p-4 rounded-lg bg-violet-accent/5 border border-violet-accent/20 narrative-b">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-3 h-3 rounded-full bg-violet-accent" />
                                  <span className="text-sm font-medium text-violet-accent">Side B</span>
                                </div>
                                <p className="text-sm">{card.claimB}</p>
                              </div>
                            </div>
                          </div>
                          
                          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                            {expandedCard === card.id ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {expandedCard === card.id && (
                        <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Videos A */}
                            <div>
                              <h4 className="font-medium mb-3 text-narrative-a">Top Videos - Side A</h4>
                              <div className="space-y-3">
                                {card.videosA.map((video) => (
                                  <div key={video.id} className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                    <img 
                                      src={video.thumbnail} 
                                      alt={video.title}
                                      className="w-24 h-14 rounded-md object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium truncate">{video.title}</p>
                                      <p className="text-xs text-muted-foreground">{video.channel}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Videos B */}
                            <div>
                              <h4 className="font-medium mb-3 text-violet-accent">Top Videos - Side B</h4>
                              <div className="space-y-3">
                                {card.videosB.map((video) => (
                                  <div key={video.id} className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                    <img 
                                      src={video.thumbnail} 
                                      alt={video.title}
                                      className="w-24 h-14 rounded-md object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium truncate">{video.title}</p>
                                      <p className="text-xs text-muted-foreground">{video.channel}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-border">
                            <Link to={`/deep-dive/${card.id}`}>
                              <Button variant="glow-outline" className="group">
                                Open Deep Dive
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Narrative Split View */}
              <section>
                <h2 className="text-xl font-display font-semibold mb-6">Narrative Split View</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Narrative A */}
                  <div className="glass-card p-6 narrative-a">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-4 h-4 rounded-full bg-narrative-a" />
                      <h3 className="font-display font-semibold text-xl text-narrative-a">
                        {narrativeSplitData.narrativeA.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {/* Key Claims */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Claims ({narrativeSplitData.narrativeA.keyClaimsCount})</h4>
                        <ul className="space-y-2">
                          {narrativeSplitData.narrativeA.keyClaims.map((claim, i) => (
                            <li key={i} className="flex gap-2 text-sm">
                              <span className="text-narrative-a">•</span>
                              <span>{claim}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Top Videos */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Top Videos</h4>
                        <div className="space-y-2">
                          {narrativeSplitData.narrativeA.topVideos.map((video, i) => (
                            <div key={i} className="p-3 rounded-lg bg-muted/50 text-sm">
                              <p className="font-medium">{video.title}</p>
                              <p className="text-xs text-muted-foreground">{video.channel}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Phrases */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Phrases</h4>
                        <div className="flex flex-wrap gap-2">
                          {narrativeSplitData.narrativeA.keyPhrases.map((phrase, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-narrative-a/10 text-narrative-a text-xs">
                              {phrase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Narrative B */}
                  <div className="glass-card p-6 narrative-b">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-4 h-4 rounded-full bg-violet-accent" />
                      <h3 className="font-display font-semibold text-xl text-violet-accent">
                        {narrativeSplitData.narrativeB.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {/* Key Claims */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Claims ({narrativeSplitData.narrativeB.keyClaimsCount})</h4>
                        <ul className="space-y-2">
                          {narrativeSplitData.narrativeB.keyClaims.map((claim, i) => (
                            <li key={i} className="flex gap-2 text-sm">
                              <span className="text-violet-accent">•</span>
                              <span>{claim}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Top Videos */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Top Videos</h4>
                        <div className="space-y-2">
                          {narrativeSplitData.narrativeB.topVideos.map((video, i) => (
                            <div key={i} className="p-3 rounded-lg bg-muted/50 text-sm">
                              <p className="font-medium">{video.title}</p>
                              <p className="text-xs text-muted-foreground">{video.channel}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Phrases */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Phrases</h4>
                        <div className="flex flex-wrap gap-2">
                          {narrativeSplitData.narrativeB.keyPhrases.map((phrase, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-violet-accent/10 text-violet-accent text-xs">
                              {phrase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "comments" && (
            <CommentIntelligenceSection />
          )}

          {/* Expert Response Panel - Available for this investigation */}
          <section className="mt-8">
            <ExpertResponsePanel />
          </section>
        </div>
      </main>
    </div>
  );
}

function CommentIntelligenceSection() {
  return (
    <div className="space-y-8">
      {/* Audience Confusion Indicators */}
      <section className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-sentiment-confusion" />
          <h3 className="text-xl font-display font-semibold">Audience Confusion Indicators</h3>
        </div>

        {/* Top Questions */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Most Common Confusion Questions</h4>
          <div className="space-y-3">
            {commentIntelligence.confusionSignals.topQuestions.map((q, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-sentiment-confusion/5 border border-sentiment-confusion/20">
                <p className="text-sm italic">"{q.text}"</p>
                <span className="text-sm font-medium text-sentiment-confusion">{q.frequency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Example Comments */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Example Confusion Comments</h4>
          <div className="space-y-3">
            {commentIntelligence.confusionSignals.exampleComments.map((c, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm mb-2">"{c.text}"</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>👍 {c.likes.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agreement & Disagreement Patterns */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-display font-semibold mb-6">Observed Agreement & Disagreement Patterns</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Agreements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-sentiment-agreement" />
              <h4 className="font-medium text-sentiment-agreement">Common Agreements</h4>
            </div>
            <ul className="space-y-2">
              {commentIntelligence.agreementPatterns.commonAgreements.map((item, i) => (
                <li key={i} className="p-3 rounded-lg bg-sentiment-agreement/5 border border-sentiment-agreement/20 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Disagreements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-sentiment-disagreement" />
              <h4 className="font-medium text-sentiment-disagreement">Main Disagreements</h4>
            </div>
            <ul className="space-y-2">
              {commentIntelligence.agreementPatterns.mainDisagreements.map((item, i) => (
                <li key={i} className="p-3 rounded-lg bg-sentiment-disagreement/5 border border-sentiment-disagreement/20 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Narrative Echoes */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-display font-semibold mb-6">Narrative Echoes from Comments</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Side A */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-narrative-a" />
              <h4 className="font-medium text-narrative-a">Side A Phrases</h4>
            </div>
            <div className="space-y-2">
              {commentIntelligence.narrativeEchoes.sideA.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-narrative-a/5">
                  <span className="text-sm">"{item.phrase}"</span>
                  <span className="text-xs font-medium text-narrative-a">{item.frequency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side B */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-violet-accent" />
              <h4 className="font-medium text-violet-accent">Side B Phrases</h4>
            </div>
            <div className="space-y-2">
              {commentIntelligence.narrativeEchoes.sideB.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-violet-accent/5">
                  <span className="text-sm">"{item.phrase}"</span>
                  <span className="text-xs font-medium text-violet-accent">{item.frequency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience Tone Overview */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-display font-semibold mb-6">Audience Tone Overview</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Side A Tones */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-narrative-a" />
              <h4 className="font-medium">Side A Audience Tone</h4>
            </div>
            <div className="space-y-3">
              {commentIntelligence.toneAnalysis.sideA.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{item.tone}</span>
                    <span className="text-xs text-muted-foreground">{item.level}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${item.width}%`,
                        backgroundColor: item.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side B Tones */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-violet-accent" />
              <h4 className="font-medium">Side B Audience Tone</h4>
            </div>
            <div className="space-y-3">
              {commentIntelligence.toneAnalysis.sideB.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{item.tone}</span>
                    <span className="text-xs text-muted-foreground">{item.level}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${item.width}%`,
                        backgroundColor: item.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Representative Comment Samples */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-display font-semibold mb-6">Representative Comment Samples</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Side A */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-narrative-a" />
              <h4 className="font-medium text-narrative-a">Side A Comments</h4>
            </div>
            <div className="space-y-3">
              {commentIntelligence.representativeComments.sideA.map((c, i) => (
                <div key={i} className="p-4 rounded-lg bg-narrative-a/5 border border-narrative-a/20">
                  <p className="text-sm mb-3">"{c.text}"</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>👍 {c.likes.toLocaleString()}</span>
                    <span>💬 {c.replies}</span>
                    <span className="px-2 py-0.5 rounded-full bg-muted capitalize">{c.sentiment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side B */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-violet-accent" />
              <h4 className="font-medium text-violet-accent">Side B Comments</h4>
            </div>
            <div className="space-y-3">
              {commentIntelligence.representativeComments.sideB.map((c, i) => (
                <div key={i} className="p-4 rounded-lg bg-violet-accent/5 border border-violet-accent/20">
                  <p className="text-sm mb-3">"{c.text}"</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>👍 {c.likes.toLocaleString()}</span>
                    <span>💬 {c.replies}</span>
                    <span className="px-2 py-0.5 rounded-full bg-muted capitalize">{c.sentiment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
