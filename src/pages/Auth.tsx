import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Chrome, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { toast } from "sonner";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    setIsLoading(true);

    // Get Client ID from environment variables
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    if (!clientId) {
      toast.error("Google Client ID is not configured");
      setIsLoading(false);
      return;
    }

    // Direct OAuth endpoint
    const targetUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const redirectUri = `${window.location.origin}/auth/callback`;

    // Construct params
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: "token", // Implicit flow
      scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
      include_granted_scopes: "true",
      state: "random_state_string", // In production, use a cryptographic nonce
    });

    // Redirect
    window.location.href = `${targetUrl}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link to="/">
              <Logo size="lg" className="justify-center mb-8" />
            </Link>
            <h1 className="text-3xl font-display font-bold mb-2">
              Welcome to ClashLens
            </h1>
            <p className="text-muted-foreground">
              Sign in to start uncovering contradictions
            </p>
          </div>

          {/* MVP Badge */}
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
              <Sparkles className="w-4 h-4" />
              <span>MVP Beta Access</span>
            </div>
          </div>

          {/* Google Auth Button */}
          <Button
            variant="gradient"
            size="xl"
            className="w-full group"
            onClick={handleGoogleAuth}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Chrome className="w-5 h-5" />
                Continue with Google
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-violet-accent/5">
        {/* Background Effects */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-violet-accent/30 rounded-full blur-[80px] animate-float" style={{ animationDelay: "1s" }} />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md space-y-6 text-center">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-4">
                Uncover the Truth
              </h2>
              <p className="text-muted-foreground mb-6">
                ClashLens analyzes YouTube videos to find contradicting narratives,
                helping you understand what's really being said — and where the conflicts lie.
              </p>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">Compare videos instantly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-accent/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-violet-accent" />
                  </div>
                  <span className="text-sm">Evidence-based analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">AI-powered insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}