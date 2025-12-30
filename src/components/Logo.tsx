import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo Icon - Split lens with lightning gap */}
      <div className="relative" style={{ width: icon, height: icon }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Left half - Cyan */}
          <path
            d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44"
            stroke="url(#gradient-left)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right half - Violet */}
          <path
            d="M24 4C35 4 44 13 44 24C44 35 35 44 24 44"
            stroke="url(#gradient-right)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Lightning gap / contradiction symbol */}
          <path
            d="M24 12L20 22H28L24 36"
            stroke="url(#gradient-lightning)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient-left" x1="4" y1="24" x2="24" y2="24">
              <stop stopColor="hsl(187 100% 50%)" />
              <stop offset="1" stopColor="hsl(187 100% 45%)" />
            </linearGradient>
            <linearGradient id="gradient-right" x1="24" y1="24" x2="44" y2="24">
              <stop stopColor="hsl(270 70% 60%)" />
              <stop offset="1" stopColor="hsl(270 70% 55%)" />
            </linearGradient>
            <linearGradient id="gradient-lightning" x1="24" y1="12" x2="24" y2="36">
              <stop stopColor="hsl(187 100% 50%)" />
              <stop offset="1" stopColor="hsl(270 70% 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <span className={cn("font-display font-bold tracking-tight", text)}>
          <span className="text-foreground">Clash</span>
          <span className="gradient-text">Lens</span>
        </span>
      )}
    </div>
  );
}
