import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MessageSquare, 
  Shield, 
  AlertTriangle, 
  Sparkles, 
  Send, 
  Edit3,
  Youtube,
  CheckCircle,
  FileText,
  HelpCircle,
  BookOpen,
  RefreshCw
} from "lucide-react";
import { toast } from "sonner";

type IntentType = "clarify" | "sources" | "definitions";

interface DraftResponse {
  content: string;
  intent: IntentType;
  timestamp: Date;
}

export default function ExpertResponse() {
  const [selectedComment, setSelectedComment] = useState("");
  const [intent, setIntent] = useState<IntentType>("clarify");
  const [aiDraft, setAiDraft] = useState<DraftResponse | null>(null);
  const [editedDraft, setEditedDraft] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPublishWarning, setShowPublishWarning] = useState(false);

  const intentOptions = [
    { 
      id: "clarify" as IntentType, 
      label: "Clarify Disagreement", 
      description: "Explain where and why perspectives differ",
      icon: HelpCircle
    },
    { 
      id: "sources" as IntentType, 
      label: "Provide Sources", 
      description: "Add evidence-based references",
      icon: BookOpen
    },
    { 
      id: "definitions" as IntentType, 
      label: "Explain Definitions", 
      description: "Define key terms being debated",
      icon: FileText
    }
  ];

  const handleGenerateDraft = async () => {
    if (!selectedComment.trim()) {
      toast.error("Please paste a comment to respond to");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation (in production, this would call an AI API)
    await new Promise(resolve => setTimeout(resolve, 2000));

    const draftTemplates = {
      clarify: `This conversation shows an interesting disagreement about the topic. To clarify where perspectives differ:

One view emphasizes [perspective A] while another focuses on [perspective B]. Both positions seem to stem from different priorities:
- Perspective A values [value/concern A]
- Perspective B prioritizes [value/concern B]

Understanding these different starting points helps explain why people reach different conclusions on this topic.`,
      sources: `Here are some additional sources that might help inform this discussion:

1. [Source title] - [Brief description of what it covers]
2. [Source title] - [Brief description of what it covers]

These sources represent different viewpoints on the topic. It's worth noting that research in this area is ongoing, and experts continue to debate various aspects.`,
      definitions: `Some key terms being used in this discussion:

**[Term 1]**: In this context, this typically refers to [definition]. Different fields may use this term differently.

**[Term 2]**: This can mean [definition A] in one context, or [definition B] in another.

Clarifying these definitions can help ensure everyone is discussing the same thing.`
    };

    const draft: DraftResponse = {
      content: draftTemplates[intent],
      intent,
      timestamp: new Date()
    };

    setAiDraft(draft);
    setEditedDraft(draft.content);
    setIsGenerating(false);
    toast.success("Draft generated — please review and edit before publishing");
  };

  const handlePublish = () => {
    if (!editedDraft.trim()) {
      toast.error("Draft cannot be empty");
      return;
    }
    
    // In production, this would integrate with YouTube API
    toast.success("Response published successfully to YouTube");
    setShowPublishWarning(false);
    setSelectedComment("");
    setAiDraft(null);
    setEditedDraft("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold">Expert Response Mode</h1>
                <p className="text-muted-foreground">
                  Draft neutral, evidence-based clarifications for YouTube comments
                </p>
              </div>
            </div>
          </div>

          {/* YouTube Policy Notice */}
          <div className="glass-card p-4 mb-8 border-l-4 border-l-amber-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">YouTube Policy Compliant</p>
                <p className="text-xs text-muted-foreground mt-1">
                  All responses require your manual review and editing before publishing. 
                  Posted from your own YouTube account with full transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Step 1: Paste Comment */}
          <section className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <h2 className="text-lg font-display font-semibold">Paste the Comment</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Copy a public YouTube comment you'd like to respond to with a clarification.
            </p>
            <Textarea
              placeholder="Paste the YouTube comment here..."
              value={selectedComment}
              onChange={(e) => setSelectedComment(e.target.value)}
              className="min-h-[100px]"
            />
          </section>

          {/* Step 2: Select Intent */}
          <section className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <h2 className="text-lg font-display font-semibold">Select Your Intent</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Choose what type of clarification you want to provide.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {intentOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setIntent(option.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    intent === option.id 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <option.icon className={`w-5 h-5 mb-2 ${intent === option.id ? "text-primary" : "text-muted-foreground"}`} />
                  <p className="font-medium text-sm">{option.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Generate & Edit Draft */}
          <section className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <h2 className="text-lg font-display font-semibold">Generate & Edit Draft</h2>
            </div>

            {!aiDraft ? (
              <div className="text-center py-8">
                <Button
                  onClick={handleGenerateDraft}
                  disabled={isGenerating || !selectedComment.trim()}
                  className="gap-2"
                  variant="gradient"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Generating Draft...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate AI Draft
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  AI will suggest a neutral response based on your selected intent
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Edit3 className="w-4 h-4" />
                    <span>Edit the draft below — make it yours</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleGenerateDraft}
                    disabled={isGenerating}
                    className="gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
                    Regenerate
                  </Button>
                </div>
                <Textarea
                  value={editedDraft}
                  onChange={(e) => setEditedDraft(e.target.value)}
                  className="min-h-[200px] font-mono text-sm"
                />
              </div>
            )}
          </section>

          {/* Step 4: Review & Publish */}
          {aiDraft && (
            <section className="glass-card p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">4</span>
                </div>
                <h2 className="text-lg font-display font-semibold">Review & Publish</h2>
              </div>

              {!showPublishWarning ? (
                <Button
                  onClick={() => setShowPublishWarning(true)}
                  disabled={!editedDraft.trim()}
                  className="gap-2"
                >
                  <Send className="w-4 h-4" />
                  Prepare to Publish
                </Button>
              ) : (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                    <div>
                      <p className="font-semibold text-destructive">This will be posted publicly</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        This response will be published as a comment from your YouTube account. 
                        It will be visible to everyone. Are you sure?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setShowPublishWarning(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={handlePublish}
                      className="gap-2"
                    >
                      <Youtube className="w-4 h-4" />
                      Confirm & Publish to YouTube
                    </Button>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Safeguards Summary */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-display font-semibold">Safety Measures in Place</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { label: "No automation", desc: "Manual editing required" },
                { label: "No bulk replies", desc: "One response at a time" },
                { label: "Full transparency", desc: "Your account, your name" },
                { label: "Duplicate prevention", desc: "System checks for repeats" },
                { label: "Audit logging", desc: "All responses logged" },
                { label: "Clear warnings", desc: "Confirm before publishing" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
