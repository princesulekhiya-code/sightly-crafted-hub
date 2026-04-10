import { useState, useEffect } from "react";
import { FileText, CheckCircle2, Star, TrendingUp, Award } from "lucide-react";

function AnimatedScore() {
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<"scanning" | "scoring" | "done">("scanning");
  const targetScore = 94;

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("scoring"), 2000);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== "scoring") return;
    let current = 0;
    const iv = setInterval(() => {
      current += 2;
      if (current >= targetScore) {
        setScore(targetScore);
        clearInterval(iv);
        setTimeout(() => setPhase("done"), 400);
      } else {
        setScore(current);
      }
    }, 30);
    return () => clearInterval(iv);
  }, [phase]);

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <svg width="140" height="140" className="transform -rotate-90">
        <circle cx="70" cy="70" r="54" stroke="hsl(var(--secondary))" strokeWidth="8" fill="none" />
        <circle
          cx="70" cy="70" r="54"
          stroke="hsl(var(--primary))"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-100"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-foreground">{score}%</span>
        <span className="text-[10px] text-muted-foreground">ATS Score</span>
      </div>
    </div>
  );
}

function ScanLine({ delay, label, score }: { delay: number; label: string; score: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return <div className="h-8" />;

  return (
    <div className="flex items-center justify-between animate-fade-up">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs text-foreground/80">{label}</span>
      </div>
      <span className="text-xs font-semibold text-primary">{score}%</span>
    </div>
  );
}

export function HeroResumeAnimation() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow effect behind card */}
      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative glass-card rounded-2xl border border-border/50 overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-border/50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Resume_JohnDoe.pdf</p>
            <p className="text-[10px] text-muted-foreground">Uploaded just now</p>
          </div>
        </div>

        {/* Score area */}
        {started && (
          <div className="px-5 py-6 flex flex-col items-center gap-5">
            <AnimatedScore />

            {/* Scan results */}
            <div className="w-full space-y-2.5">
              <ScanLine delay={2200} label="Keywords Match" score={96} />
              <ScanLine delay={2600} label="Format & Structure" score={92} />
              <ScanLine delay={3000} label="Experience Impact" score={95} />
              <ScanLine delay={3400} label="Skills Alignment" score={91} />
            </div>

            {/* Badge */}
            <div className="w-full mt-1">
              <BadgeReveal delay={3800} />
            </div>
          </div>
        )}
      </div>

      {/* Floating elements */}
      <FloatingBadge delay={4200} icon={<Star className="w-3 h-3" />} text="Top 5% Resume" className="absolute -top-3 -right-3" />
      <FloatingBadge delay={4500} icon={<TrendingUp className="w-3 h-3" />} text="Interview Ready" className="absolute -bottom-3 -left-3" />
    </div>
  );
}

function BadgeReveal({ delay }: { delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className="flex items-center gap-2 bg-primary/10 rounded-xl px-4 py-2.5 animate-fade-up">
      <Award className="w-4 h-4 text-primary" />
      <span className="text-xs font-medium text-primary">ATS Optimized — Ready to Apply</span>
    </div>
  );
}

function FloatingBadge({ delay, icon, text, className }: { delay: number; icon: React.ReactNode; text: string; className: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className={`${className} z-10 animate-fade-up`}>
      <div className="flex items-center gap-1.5 bg-card border border-border/50 rounded-full px-3 py-1.5 shadow-lg">
        <span className="text-primary">{icon}</span>
        <span className="text-[10px] font-medium text-foreground whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
}

export default HeroResumeAnimation;
