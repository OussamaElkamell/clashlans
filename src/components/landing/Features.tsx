import { Eye, GitCompare, MessageSquare, FileText, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: GitCompare,
    title: "Contradiction Detection",
    description: "Automatically identify opposing claims across multiple videos on the same topic.",
  },
  {
    icon: Eye,
    title: "Narrative Mapping",
    description: "Visualize the split between different perspectives with our signature side-by-side view.",
  },
  {
    icon: MessageSquare,
    title: "Comment Intelligence",
    description: "Analyze audience confusion, agreement patterns, and narrative echoes across both sides.",
  },
  {
    icon: Zap,
    title: "Topic Scanning",
    description: "Scan up to 200 videos on any topic to find contradictions automatically.",
  },
  {
    icon: FileText,
    title: "Deep Dive Reports",
    description: "Get detailed analysis with timestamps, evidence, and stakeholder positions.",
  },
  {
    icon: Shield,
    title: "Evidence-Based",
    description: "Every claim is backed by video timestamps and audience data — no speculation.",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Clarity</span> at Every Level
          </h2>
          <p className="text-lg text-muted-foreground">
            From high-level contradiction summaries to deep audience analysis, 
            understand the full picture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
