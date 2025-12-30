import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Collecting videos", description: "Searching YouTube for relevant content" },
  { id: 2, title: "Extracting narratives", description: "Analyzing video transcripts and context" },
  { id: 3, title: "Detecting contradictions", description: "Finding opposing claims and viewpoints" },
  { id: 4, title: "Analyzing comments", description: "Understanding audience reactions" },
  { id: 5, title: "Generating report", description: "Compiling findings and insights" },
];

export default function Progress() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/results/demo-ai-regulation");
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="fixed top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="fixed bottom-1/3 right-1/4 w-64 h-64 bg-violet-accent/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Logo size="lg" className="justify-center mb-8" />
          <h1 className="text-2xl font-display font-bold mb-2">Analyzing Investigation</h1>
          <p className="text-muted-foreground">This usually takes 1-2 minutes</p>
        </div>

        {/* Progress Steps */}
        <div className="glass-card-elevated p-8">
          <div className="space-y-0">
            {steps.map((step, index) => {
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;
              const isUpcoming = currentStep < step.id;

              return (
                <div key={step.id} className="relative">
                  <div className="flex items-start gap-4">
                    {/* Step Indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                          isCompleted && "bg-sentiment-agreement text-white",
                          isCurrent && "bg-primary text-primary-foreground animate-pulse-glow",
                          isUpcoming && "bg-muted text-muted-foreground"
                        )}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5" />
                        ) : isCurrent ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <span className="text-sm font-semibold">{step.id}</span>
                        )}
                      </div>
                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div
                          className={cn(
                            "w-0.5 h-12 transition-all duration-500",
                            isCompleted ? "bg-sentiment-agreement" : "bg-border"
                          )}
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="pt-2 pb-8">
                      <h3
                        className={cn(
                          "font-display font-semibold transition-colors",
                          isCompleted && "text-sentiment-agreement",
                          isCurrent && "text-primary",
                          isUpcoming && "text-muted-foreground"
                        )}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full gradient-primary transition-all duration-1000 ease-out"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              {currentStep >= steps.length 
                ? "Complete! Redirecting to results..." 
                : `Step ${currentStep} of ${steps.length}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
