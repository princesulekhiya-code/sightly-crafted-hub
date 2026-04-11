interface AmbientGlowProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const positionStyles: Record<string, string> = {
  "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
  "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
  "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
  "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
};

export function AmbientGlow({ className = "", position = "top-right" }: AmbientGlowProps) {
  return (
    <div
      className={`absolute pointer-events-none w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px] ${positionStyles[position]} ${className}`}
      style={{
        background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
        animation: "ambientFloat 12s ease-in-out infinite alternate",
      }}
    />
  );
}

export default AmbientGlow;
