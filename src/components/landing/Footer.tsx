import { Logo } from "@/components/Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="sm" />
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 ClashLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
