import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight, Share2,
  Eye, ChevronDown, ChevronUp,
  Info, FileText, MessageSquare, Quote, Bookmark
} from "lucide-react";
import { WorkspaceNotes } from "@/components/WorkspaceNotes";
import {
  videoExcerpts,
  commentExcerpts,
} from "@/data/mockData";
import { cn } from "@/lib/utils";
import { ExpertResponsePanel } from "@/components/ExpertResponsePanel";

export default function Results() {
  const { id } = useParams();
  const [expandedExcerpt, setExpandedExcerpt] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"excerpts" | "comments">("excerpts");

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />

      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-7xl">
          {/* Research Workspace Disclaimer */}
          <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Research Workspace:</span> ClashLens helps you collect, organize, and explore publicly available YouTube content to understand differing viewpoints. All interpretation is performed by you, the researcher. ClashLens does not analyze, score, rank, or measure YouTube content or audience behavior.
              </p>
            </div>
          </div>

          {/* Workspace Header */}
          <section className="mb-12">
            <div className="glass-card-elevated p-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                      <FileText className="w-4 h-4" />
                      Research Workspace
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                    AI Regulation: Innovation vs Safety
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Explore excerpts from selected videos presenting differing viewpoints
                  </p>

                  {/* Research Focus */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Research Focus</p>
                    <p className="font-medium">Comparing perspectives on AI development pace and safety requirements</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <WorkspaceNotes />
                  <Button variant="glass">
                    <Share2 className="w-4 h-4" />
                    Share Workspace
                  </Button>
                </div>
              </div>

              {/* Workspace Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-muted/50">
                  <Eye className="w-5 h-5 text-muted-foreground mb-2" />
                  <div className="text-2xl font-display font-bold">2</div>
                  <div className="text-sm text-muted-foreground">Videos Selected</div>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-display font-bold text-primary">{videoExcerpts.length}</div>
                  <div className="text-sm text-muted-foreground">Excerpts Collected</div>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <MessageSquare className="w-5 h-5 text-muted-foreground mb-2" />
                  <div className="text-sm font-medium">Public comments available for exploration</div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("excerpts")}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all",
                activeTab === "excerpts"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              Video Excerpts
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
              Comment Excerpts
            </button>
          </div>

          {activeTab === "excerpts" && (
            <>
              {/* Video Excerpts - Side by Side Comparison */}
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-semibold">Collected Video Excerpts</h2>
                  <p className="text-sm text-muted-foreground">User-selected statements for comparison</p>
                </div>
                
                <div className="space-y-6">
                  {videoExcerpts.map((excerpt) => (
                    <div key={excerpt.id} className="glass-card overflow-hidden">
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() => setExpandedExcerpt(expandedExcerpt === excerpt.id ? null : excerpt.id)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                {excerpt.topic}
                              </span>
                              <h3 className="font-display font-semibold text-lg">{excerpt.title}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              {/* Statement A */}
                              <div className="p-4 rounded-lg bg-narrative-a/5 border border-narrative-a/20 narrative-a">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-3 h-3 rounded-full bg-narrative-a" />
                                  <span className="text-sm font-medium text-narrative-a">Video A Statement</span>
                                </div>
                                <p className="text-sm italic">"{excerpt.statementA}"</p>
                                <p className="text-xs text-muted-foreground mt-2">Source: {excerpt.sourceA}</p>
                              </div>

                              {/* Statement B */}
                              <div className="p-4 rounded-lg bg-violet-accent/5 border border-violet-accent/20 narrative-b">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-3 h-3 rounded-full bg-violet-accent" />
                                  <span className="text-sm font-medium text-violet-accent">Video B Statement</span>
                                </div>
                                <p className="text-sm italic">"{excerpt.statementB}"</p>
                                <p className="text-xs text-muted-foreground mt-2">Source: {excerpt.sourceB}</p>
                              </div>
                            </div>
                          </div>

                          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                            {expandedExcerpt === excerpt.id ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Content - More Context */}
                      {expandedExcerpt === excerpt.id && (
                        <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in">
                          <h4 className="font-medium mb-4">Additional Context from Videos</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Video A Context */}
                            <div>
                              <h5 className="text-sm font-medium mb-3 text-narrative-a">Video A - Extended Excerpt</h5>
                              <div className="p-4 rounded-lg bg-muted/50">
                                <p className="text-sm italic mb-2">"{excerpt.contextA}"</p>
                                <p className="text-xs text-muted-foreground">Timestamp: {excerpt.timestampA}</p>
                              </div>
                            </div>

                            {/* Video B Context */}
                            <div>
                              <h5 className="text-sm font-medium mb-3 text-violet-accent">Video B - Extended Excerpt</h5>
                              <div className="p-4 rounded-lg bg-muted/50">
                                <p className="text-sm italic mb-2">"{excerpt.contextB}"</p>
                                <p className="text-xs text-muted-foreground">Timestamp: {excerpt.timestampB}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                            <Button variant="glass" size="sm">
                              <Bookmark className="w-4 h-4" />
                              Save to Collection
                            </Button>
                            <Link to={`/deep-dive/${excerpt.id}`}>
                              <Button variant="glow-outline" size="sm" className="group">
                                View Full Context
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

              {/* Side-by-Side View */}
              <section>
                <h2 className="text-xl font-display font-semibold mb-2">Side-by-Side Viewpoint Comparison</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  This view presents user-collected statements side by side for manual comparison. ClashLens does not determine viewpoints or conclusions.
                </p>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Viewpoint A */}
                  <div className="glass-card p-6 narrative-a">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-4 h-4 rounded-full bg-narrative-a" />
                      <h3 className="font-display font-semibold text-xl text-narrative-a">
                        Safety-First Viewpoint
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {/* Key Statements */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Collected Statements</h4>
                        <ul className="space-y-2">
                          <li className="flex gap-2 text-sm">
                            <span className="text-narrative-a">•</span>
                            <span>"AI development should be paused until safety measures are proven"</span>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <span className="text-narrative-a">•</span>
                            <span>"Government regulation is essential for responsible AI deployment"</span>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <span className="text-narrative-a">•</span>
                            <span>"Current AI capabilities already pose significant risks"</span>
                          </li>
                        </ul>
                      </div>

                      {/* Key Phrases from Video */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Phrases from Video</h4>
                        <div className="flex flex-wrap gap-2">
                          {["existential risk", "alignment problem", "pause development", "precautionary principle"].map((phrase, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-narrative-a/10 text-narrative-a text-xs">
                              "{phrase}"
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Viewpoint B */}
                  <div className="glass-card p-6 narrative-b">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-4 h-4 rounded-full bg-violet-accent" />
                      <h3 className="font-display font-semibold text-xl text-violet-accent">
                        Innovation-First Viewpoint
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {/* Key Statements */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Collected Statements</h4>
                        <ul className="space-y-2">
                          <li className="flex gap-2 text-sm">
                            <span className="text-violet-accent">•</span>
                            <span>"AI development benefits humanity and should continue at pace"</span>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <span className="text-violet-accent">•</span>
                            <span>"Regulation will stifle innovation and push development overseas"</span>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <span className="text-violet-accent">•</span>
                            <span>"Competition with China requires rapid AI advancement"</span>
                          </li>
                        </ul>
                      </div>

                      {/* Key Phrases from Video */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Phrases from Video</h4>
                        <div className="flex flex-wrap gap-2">
                          {["innovation at stake", "competitive advantage", "progress cannot wait", "self-regulation"].map((phrase, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-violet-accent/10 text-violet-accent text-xs">
                              "{phrase}"
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
            <CommentExcerptsSection />
          )}

          {/* Expert Response Panel */}
          <section className="mt-8">
            <ExpertResponsePanel />
          </section>
        </div>
      </main>
    </div>
  );
}

function CommentExcerptsSection() {
  return (
    <div className="space-y-8">
      {/* Section Intro */}
      <div className="glass-card p-6">
        <div className="flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-semibold mb-2">Comment Excerpts Collection</h3>
            <p className="text-sm text-muted-foreground">
              Below are selected public comments from the videos. These are raw excerpts for your research—ClashLens does not interpret, categorize, or score these comments. You decide what they mean for your research.
            </p>
          </div>
        </div>
      </div>

      {/* Comments expressing questions */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-display font-semibold mb-4">Comments Expressing Questions</h3>
        <p className="text-sm text-muted-foreground mb-6">Selected comments where viewers ask questions (user-curated)</p>

        <div className="space-y-3">
          {commentExcerpts.questions.map((q, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm italic">"{q.text}"</p>
              <p className="text-xs text-muted-foreground mt-2">From: {q.videoSource}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comments from different perspectives */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-display font-semibold mb-6">Comments from Different Perspectives</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Perspective A Comments */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-narrative-a" />
              <h4 className="font-medium text-narrative-a">Comments on Video A</h4>
            </div>
            <div className="space-y-3">
              {commentExcerpts.videoA.map((c, i) => (
                <div key={i} className="p-4 rounded-lg bg-narrative-a/5 border border-narrative-a/20">
                  <p className="text-sm">"{c.text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Perspective B Comments */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-violet-accent" />
              <h4 className="font-medium text-violet-accent">Comments on Video B</h4>
            </div>
            <div className="space-y-3">
              {commentExcerpts.videoB.map((c, i) => (
                <div key={i} className="p-4 rounded-lg bg-violet-accent/5 border border-violet-accent/20">
                  <p className="text-sm">"{c.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Phrases from Comments */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-display font-semibold mb-2">Example Phrases Observed in Selected Comments</h3>
        <p className="text-sm text-muted-foreground mb-6">Manually selected phrases from user-chosen comments. ClashLens does not aggregate or calculate frequency.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Video A phrases */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-narrative-a" />
              <h4 className="font-medium text-narrative-a">Phrases from Video A Comments</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {commentExcerpts.phrasesA.map((phrase, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-narrative-a/10 text-narrative-a text-sm">
                  "{phrase}"
                </span>
              ))}
            </div>
          </div>

          {/* Video B phrases */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-violet-accent" />
              <h4 className="font-medium text-violet-accent">Phrases from Video B Comments</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {commentExcerpts.phrasesB.map((phrase, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-violet-accent/10 text-violet-accent text-sm">
                  "{phrase}"
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
