import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Clock, CheckCircle, ArrowRight, Eye, Trash2 } from "lucide-react";
import { userInvestigations } from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function Investigations() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">My Investigations</h1>
              <p className="text-muted-foreground">All your contradiction analyses in one place.</p>
            </div>
            <Link to="/new-investigation">
              <Button variant="gradient" className="group">
                <Plus className="w-5 h-5" />
                New Investigation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Investigations List */}
          <div className="space-y-4">
            {userInvestigations.map((inv) => (
              <div key={inv.id} className="glass-card p-6 hover-lift">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
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
                      <span className="text-xs text-muted-foreground">
                        {new Date(inv.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1">{inv.title}</h3>
                    <p className="text-sm text-muted-foreground">{inv.topic}</p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-lg font-display font-bold">{inv.videosAnalyzed}</div>
                      <div className="text-xs text-muted-foreground">Videos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-display font-bold text-primary">{inv.contradictions}</div>
                      <div className="text-xs text-muted-foreground">Contradictions</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to={`/results/${inv.id}`}>
                        <Button variant="glow-outline" size="sm">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {userInvestigations.length === 0 && (
            <div className="glass-card p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">No investigations yet</h3>
              <p className="text-muted-foreground mb-6">Start your first investigation to uncover contradictions.</p>
              <Link to="/new-investigation">
                <Button variant="gradient">
                  <Plus className="w-5 h-5" />
                  Start Investigation
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
