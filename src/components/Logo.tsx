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
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* 2026 Logo - Modern geometric lens with split perspective */}
      <div className="relative" style={{ width: icon, height: icon }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer ring - gradient stroke */}
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="url(#ring-gradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          
          {/* Left lens half - Primary indigo */}
          <path
            d="M24 6C13.5 6 5 14.5 5 24C5 33.5 13.5 42 24 42"
            stroke="url(#left-gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Right lens half - Violet accent */}
          <path
            d="M24 6C34.5 6 43 14.5 43 24C43 33.5 34.5 42 24 42"
            stroke="url(#right-gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Center clash symbol - modern angular divide */}
          <path
            d="M24 14L19 23H29L24 34"
            stroke="url(#clash-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Inner glow dots */}
          <circle cx="16" cy="24" r="2" fill="url(#left-gradient)" opacity="0.6" />
          <circle cx="32" cy="24" r="2" fill="url(#right-gradient)" opacity="0.6" />
          
          <defs>
            <linearGradient id="ring-gradient" x1="4" y1="24" x2="44" y2="24">
              <stop stopColor="hsl(245, 75%, 60%)" />
              <stop offset="1" stopColor="hsl(270, 70%, 60%)" />
            </linearGradient>
            <linearGradient id="left-gradient" x1="5" y1="24" x2="24" y2="24">
              <stop stopColor="hsl(245, 75%, 65%)" />
              <stop offset="1" stopColor="hsl(245, 75%, 55%)" />
            </linearGradient>
            <linearGradient id="right-gradient" x1="24" y1="24" x2="43" y2="24">
              <stop stopColor="hsl(270, 70%, 65%)" />
              <stop offset="1" stopColor="hsl(285, 60%, 55%)" />
            </linearGradient>
            <linearGradient id="clash-gradient" x1="24" y1="14" x2="24" y2="34">
              <stop stopColor="hsl(245, 75%, 65%)" />
              <stop offset="0.5" stopColor="hsl(260, 70%, 60%)" />
              <stop offset="1" stopColor="hsl(285, 60%, 55%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <span className={cn("font-display font-bold tracking-tight", text)}>
          <span className="text-foreground">Clash</span>
          <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Lens</span>
        </span>
      )}
    </div>
  );
}
