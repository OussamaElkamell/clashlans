import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Clock, CheckCircle, ArrowRight, Eye, Zap } from "lucide-react";
import { userInvestigations, demoInvestigation, executiveSummary } from "@/data/mockData";

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
              <p className="text-muted-foreground">Pick up where you left off or start a new investigation.</p>
            </div>
            <Link to="/new-investigation">
              <Button variant="gradient" size="lg" className="group">
                <Plus className="w-5 h-5" />
                New Investigation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Featured Investigation */}
          <section className="mb-12">
            <h2 className="text-lg font-display font-semibold mb-4 text-muted-foreground">Latest Investigation</h2>
            <Link to="/results/demo-ai-regulation">
              <div className="glass-card-elevated p-6 md:p-8 hover-lift cursor-pointer group">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentiment-agreement/20 text-sentiment-agreement text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Completed
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(demoInvestigation.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {demoInvestigation.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{executiveSummary.mainTension}</p>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span>{demoInvestigation.videosAnalyzed} videos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span>{executiveSummary.contradictionClusters} contradictions</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini Stats */}
                  <div className="flex flex-row lg:flex-col gap-4 lg:min-w-[200px]">
                    <div className="flex-1 glass-card p-4 text-center">
                      <div className="text-sm font-medium text-primary">
                        Public comments included in analysis
                      </div>
                    </div>
                    <div className="flex-1 glass-card p-4 text-center">
                      <div className="text-2xl font-display font-bold text-sentiment-agreement capitalize">
                        High
                      </div>
                      <div className="text-xs text-muted-foreground">Consistency in Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* All Investigations */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-semibold text-muted-foreground">All Investigations</h2>
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
                          Completed
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
                      <span>{inv.videosAnalyzed} videos</span>
                      <span>{inv.contradictions} contradictions</span>
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
                  <p className="font-display font-semibold">Start New Investigation</p>
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
