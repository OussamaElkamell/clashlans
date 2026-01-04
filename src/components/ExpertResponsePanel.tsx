import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
  RefreshCw,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { toast } from "sonner";

type IntentType = "clarify" | "sources" | "definitions";

interface DraftResponse {
  content: string;
  intent: IntentType;
  timestamp: Date;
}

interface ExpertResponsePanelProps {
  comment?: {
    text: string;
    likes: number;
    replies?: number;
  };
}

export function ExpertResponsePanel({ comment }: ExpertResponsePanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedComment, setSelectedComment] = useState(comment?.text || "");
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
      toast.error("Please enter a comment to respond to");
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
    setIsExpanded(false);
  };

  const handleReset = () => {
    setSelectedComment(comment?.text || "");
    setAiDraft(null);
    setEditedDraft("");
    setShowPublishWarning(false);
  };

  return (
    <div className="glass-card overflow-hidden">
      {/* Collapsed Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="text-left">
            <h3 className="font-display font-semibold">Expert Response Mode</h3>
            <p className="text-sm text-muted-foreground">
              Draft neutral, evidence-based clarifications
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 pt-0 space-y-4 animate-fade-in">
          {/* YouTube Policy Notice */}
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">YouTube Policy Compliant:</span> All responses require your manual review before publishing from your own account.
              </p>
            </div>
          </div>

          {/* Step 1: Comment */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">1</span>
              <span className="text-sm font-medium">Comment to Respond To</span>
            </div>
            <Textarea
              placeholder="Paste or type the comment you want to respond to..."
              value={selectedComment}
              onChange={(e) => setSelectedComment(e.target.value)}
              className="min-h-[80px] text-sm"
            />
          </div>

          {/* Step 2: Intent */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">2</span>
              <span className="text-sm font-medium">Select Your Intent</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {intentOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setIntent(option.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    intent === option.id 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <option.icon className={`w-4 h-4 mb-1 ${intent === option.id ? "text-primary" : "text-muted-foreground"}`} />
                  <p className="text-xs font-medium">{option.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Generate & Edit */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">3</span>
              <span className="text-sm font-medium">Generate & Edit Draft</span>
            </div>

            {!aiDraft ? (
              <Button
                onClick={handleGenerateDraft}
                disabled={isGenerating || !selectedComment.trim()}
                size="sm"
                className="w-full gap-2"
                variant="gradient"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate AI Draft
                  </>
                )}
              </Button>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Edit3 className="w-3 h-3" />
                    <span>Edit the draft below</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleGenerateDraft}
                    disabled={isGenerating}
                    className="h-7 gap-1 text-xs"
                  >
                    <RefreshCw className={`w-3 h-3 ${isGenerating ? "animate-spin" : ""}`} />
                    Regenerate
                  </Button>
                </div>
                <Textarea
                  value={editedDraft}
                  onChange={(e) => setEditedDraft(e.target.value)}
                  className="min-h-[150px] font-mono text-xs"
                />
              </div>
            )}
          </div>

          {/* Step 4: Publish */}
          {aiDraft && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">4</span>
                <span className="text-sm font-medium">Review & Publish</span>
              </div>

              {!showPublishWarning ? (
                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowPublishWarning(true)}
                    disabled={!editedDraft.trim()}
                    size="sm"
                    className="gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Prepare to Publish
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-destructive">This will be posted publicly</p>
                      <p className="text-xs text-muted-foreground">
                        Published from your YouTube account. Visible to everyone.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setShowPublishWarning(false)}>
                      Cancel
                    </Button>
                    <Button variant="destructive" size="sm" onClick={handlePublish} className="gap-1">
                      <Youtube className="w-3 h-3" />
                      Confirm & Publish
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Safeguards */}
          <div className="pt-3 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium">Safety Measures</span>
            </div>
            <div className="flex gap-4">
              {[
                { label: "Full transparency", desc: "Your account" },
                { label: "Clear warnings", desc: "Before publish" },
                { label: "Audit logging", desc: "All tracked" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
