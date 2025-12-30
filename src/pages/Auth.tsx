import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Chrome, Mail, ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    setIsLoading(true);
    // Simulate auth - in production this would use Supabase
    setTimeout(() => {
      toast.success("Welcome to ClashLens!");
      navigate("/dashboard");
    }, 1500);
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      toast.success(isLogin ? "Welcome back!" : "Account created successfully!");
      navigate("/dashboard");
    }, 1500);
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
              {isLogin ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Sign in to continue your investigations" 
                : "Start uncovering contradictions today"}
            </p>
          </div>

          {/* Google Auth */}
          <Button 
            variant="glass" 
            size="lg" 
            className="w-full" 
            onClick={handleGoogleAuth}
            disabled={isLoading}
          >
            <Chrome className="w-5 h-5" />
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-muted-foreground">or continue with email</span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              variant="gradient" 
              size="lg" 
              className="w-full group" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          {/* Toggle */}
          <p className="text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline font-medium"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
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
              <p className="text-muted-foreground">
                ClashLens analyzes YouTube videos to find contradicting narratives, 
                helping you understand what's really being said — and where the conflicts lie.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-display font-bold text-primary">47+</div>
                <div className="text-xs text-muted-foreground">Videos Analyzed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-display font-bold text-violet-accent">4</div>
                <div className="text-xs text-muted-foreground">Contradictions</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-display font-bold text-sentiment-confusion">12K</div>
                <div className="text-xs text-muted-foreground">Comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
