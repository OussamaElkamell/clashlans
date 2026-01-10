import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Clock, CheckCircle, ArrowRight, Eye, Quote, FileText } from "lucide-react";
import { userInvestigations, demoInvestigation } from "@/data/mockData";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">Welcome back</h1>
              <p className="text-muted-foreground">Continue exploring or start a new research workspace.</p>
            </div>
            <Link to="/new-investigation">
              <Button variant="gradient" size="lg" className="group">
                <Plus className="w-5 h-5" />
                New Research Workspace
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Featured Workspace */}
          <section className="mb-12">
            <h2 className="text-lg font-display font-semibold mb-4 text-muted-foreground">Latest Research Workspace</h2>
            <Link to="/results/demo-ai-regulation">
              <div className="glass-card-elevated p-6 md:p-8 hover-lift cursor-pointer group">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentiment-agreement/20 text-sentiment-agreement text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Ready to Explore
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(demoInvestigation.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {demoInvestigation.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">Explore differing viewpoints on AI development pace and safety requirements</p>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span>{demoInvestigation.videosSelected} videos selected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Quote className="w-4 h-4 text-primary" />
                        <span>Excerpts collected</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Info Cards */}
                  <div className="flex flex-row lg:flex-col gap-4 lg:min-w-[200px]">
                    <div className="flex-1 glass-card p-4 text-center">
                      <FileText className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-primary">
                        Public content available for exploration
                      </div>
                    </div>
                    <div className="flex-1 glass-card p-4 text-center">
                      <div className="text-2xl font-display font-bold text-sentiment-agreement capitalize">
                        Ready
                      </div>
                      <div className="text-xs text-muted-foreground">Research Workspace</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* All Workspaces */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-semibold text-muted-foreground">All Research Workspaces</h2>
              <Link to="/investigations" className="text-sm text-primary hover:underline">
                View all →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userInvestigations.map((inv) => (
                <Link key={inv.id} to={`/results/${inv.id}`}>
                  <div className="glass-card p-5 hover-lift cursor-pointer group h-full">
                    <div className="flex items-center gap-2 mb-3">
                      {inv.status === "completed" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sentiment-agreement/20 text-sentiment-agreement text-xs">
                          <CheckCircle className="w-3 h-3" />
                          Ready
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sentiment-confusion/20 text-sentiment-confusion text-xs">
                          <Clock className="w-3 h-3" />
                          In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                      {inv.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{inv.topic}</p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                      <span>{inv.videosSelected} videos selected</span>
                      <span>Excerpts available</span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Create New Card */}
              <Link to="/new-investigation">
                <div className="glass-card p-5 hover-lift cursor-pointer h-full flex flex-col items-center justify-center text-center min-h-[180px] border-dashed border-2 border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Plus className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-display font-semibold">Start New Research</p>
                  <p className="text-sm text-muted-foreground">Compare two videos</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
