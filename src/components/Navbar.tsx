import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isAuthenticated?: boolean;
}

export function Navbar({ isAuthenticated = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    isActive("/dashboard") ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/investigations" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    isActive("/investigations") ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  My Investigations
                </Link>
                <Link 
                  to="/new-investigation" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    isActive("/new-investigation") ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  New Investigation
                </Link>
                <Link to="/settings">
                  <Button variant="ghost" size="sm">Settings</Button>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/demo" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Demo
                </Link>
                <Link to="/auth">
                  <Button variant="glow" size="sm">Sign In</Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/investigations" 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    My Investigations
                  </Link>
                  <Link 
                    to="/new-investigation" 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    New Investigation
                  </Link>
                  <Link 
                    to="/settings" 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Settings
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/demo" 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Demo
                  </Link>
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="glow" size="sm" className="w-full">Sign In</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
