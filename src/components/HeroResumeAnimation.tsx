import { useState, useEffect } from "react";
import { FileText, CheckCircle2, Star, TrendingUp, Award, Zap, Shield, BarChart3, Sparkles } from "lucide-react";
import resumeImage from "@/assets/resume-sample.webp";

type Phase = "resume" | "scanning" | "scoring" | "results";

export function HeroResumeAnimation() {
  const [phase, setPhase] = useState<Phase>("resume");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("scanning"), 800),
      setTimeout(() => setPhase("scoring"), 3200),
      setTimeout(() => setPhase("results"), 5400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-[360px] mx-auto">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-primary/[0.03] rounded-[32px] blur-3xl" />
      <div className="absolute -inset-4 bg-primary/[0.05] rounded-3xl blur-xl" />

      {/* Grid dots */}
      <div className="absolute -inset-12 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }} />

      {/* Main card */}
      <div className="relative rounded-2xl border border-border/40 overflow-hidden"
        style={{ background: "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(0 0% 5%) 100%)" }}>

        {/* Scan line overlay */}
        {(phase === "scanning") && <ScanPulse />}

        {/* Top accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Header */}
        <div className="px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-foreground">Resume_OliviaBennett.pdf</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full inline-block ${phase === "results" ? "bg-green-500" : "bg-primary animate-pulse"}`} />
                {phase === "resume" ? "Uploaded" : phase === "scanning" ? "Scanning…" : phase === "scoring" ? "Analyzing…" : "Complete"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 rounded-full px-2 py-1">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[9px] font-semibold text-primary uppercase tracking-wider">AI</span>
          </div>
        </div>

        <div className="h-px w-full bg-border/30" />

        {/* Resume preview phase */}
        {(phase === "resume" || phase === "scanning") && (
          <div className="relative px-3 py-3">
            <div className="rounded-lg overflow-hidden border border-border/20 relative">
              <img
                src={resumeImage}
                alt="Resume being scanned"
                className="w-full h-[340px] object-cover object-top opacity-90"
                style={{ filter: phase === "scanning" ? "grayscale(0.3)" : "none" }}
              />
              {/* Dark overlay that intensifies during scan */}
              <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, hsl(var(--card) / 0.3) 60%, hsl(var(--card) / 0.8) 100%)",
                  opacity: phase === "scanning" ? 1 : 0.5,
                }}
              />
              {/* Scanning status badge */}
              {phase === "scanning" && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-primary/20 animate-fade-up">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-medium text-primary">Extracting data…</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Score + results phase */}
        {(phase === "scoring" || phase === "results") && (
          <div className="px-5 py-5 flex flex-col items-center gap-5 animate-fade-up">
            {/* Mini resume thumbnail + score */}
            <div className="flex items-center gap-4 w-full">
              <div className="w-16 h-20 rounded-lg overflow-hidden border border-border/30 flex-shrink-0">
                <img src={resumeImage} alt="Resume" className="w-full h-full object-cover object-top" />
              </div>
              <AnimatedScore startScoring={phase === "scoring" || phase === "results"} />
            </div>

            {/* Divider */}
            <div className="w-full flex items-center gap-3">
              <div className="flex-1 h-px bg-border/30" />
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">Breakdown</span>
              <div className="flex-1 h-px bg-border/30" />
            </div>

            {/* Scan results */}
            <div className="w-full space-y-3">
              <ScanLine delay={800} label="Keywords Match" score={96} icon={Sparkles} />
              <ScanLine delay={1200} label="Format & Structure" score={92} icon={BarChart3} />
              <ScanLine delay={1600} label="Experience Impact" score={95} icon={TrendingUp} />
              <ScanLine delay={2000} label="Skills Alignment" score={91} icon={Shield} />
            </div>

            <BadgeReveal delay={2400} />
          </div>
        )}

        {/* Bottom accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Floating badges */}
      {phase === "results" && (
        <>
          <FloatingBadge
            delay={2800}
            icon={<Star className="w-3 h-3 fill-primary text-primary" />}
            text="Top 5% Resume"
            className="absolute -top-4 -right-4"
          />
          <FloatingBadge
            delay={3100}
            icon={<Award className="w-3 h-3 text-primary" />}
            text="Interview Ready"
            className="absolute -bottom-4 -left-4"
          />
        </>
      )}
    </div>
  );
}

/* ── Animated circular score ring ── */
function AnimatedScore({ startScoring }: { startScoring: boolean }) {
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const targetScore = 94;

  useEffect(() => {
    if (!startScoring) return;
    let current = 0;
    const iv = setInterval(() => {
      current += 1;
      if (current >= targetScore) {
        setScore(targetScore);
        clearInterval(iv);
        setTimeout(() => setDone(true), 400);
      } else {
        setScore(current);
      }
    }, 20);
    return () => clearInterval(iv);
  }, [startScoring]);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const glowColor = score >= 90 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))";

  return (
    <div className="relative flex-1 flex flex-col items-center">
      {done && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 animate-pulse" />
        </div>
      )}
      <svg width="110" height="110" className="transform -rotate-90 relative z-10">
        <circle cx="55" cy="55" r={radius} stroke="hsl(var(--secondary))" strokeWidth="5" fill="none" opacity="0.5" />
        <circle
          cx="55" cy="55" r={radius}
          stroke="url(#scoreGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.08s ease-out", filter: `drop-shadow(0 0 6px ${glowColor})` }}
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--warm-light))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <span className="text-3xl font-bold text-foreground tracking-tight">
          {score}<span className="text-sm text-primary">%</span>
        </span>
        <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">
          {!done ? "Analyzing…" : "ATS Score"}
        </span>
      </div>
    </div>
  );
}

/* ── Scan line item ── */
function ScanLine({ delay, label, score, icon: Icon }: { delay: number; label: string; score: number; icon: React.ElementType }) {
  const [visible, setVisible] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setBarWidth(score), 100);
    }, delay);
    return () => clearTimeout(t);
  }, [delay, score]);

  if (!visible) return <div className="h-9" />;

  return (
    <div className="space-y-1.5 animate-fade-up">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-primary/70" />
          <span className="text-[11px] text-foreground/70 font-medium">{label}</span>
        </div>
        <span className="text-[11px] font-bold text-primary">{score}%</span>
      </div>
      <div className="w-full h-1 bg-secondary/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${barWidth}%`,
            transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            background: "linear-gradient(90deg, hsl(var(--warm-dim)), hsl(var(--primary)), hsl(var(--warm-light)))",
          }}
        />
      </div>
    </div>
  );
}

/* ── Scanning pulse overlay ── */
function ScanPulse() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
      <div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/80 to-transparent"
        style={{ animation: "scanMove 1.8s ease-in-out infinite" }}
      />
      <style>{`
        @keyframes scanMove {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ── Success badge ── */
function BadgeReveal({ delay }: { delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className="w-full animate-fade-up">
      <div className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 border border-primary/20"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.05))" }}>
        <CheckCircle2 className="w-4 h-4 text-primary" />
        <span className="text-[11px] font-semibold text-primary tracking-wide">ATS Optimized — Ready to Apply</span>
      </div>
    </div>
  );
}

/* ── Floating badge pill ── */
function FloatingBadge({ delay, icon, text, className }: { delay: number; icon: React.ReactNode; text: string; className: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className={`${className} z-20 animate-fade-up`}>
      <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-border/40"
        style={{
          background: "linear-gradient(135deg, hsl(var(--card)), hsl(0 0% 6%))",
          boxShadow: "0 8px 32px -8px hsl(var(--primary) / 0.15), 0 2px 8px -2px hsl(0 0% 0% / 0.4)",
        }}>
        {icon}
        <span className="text-[10px] font-semibold text-foreground whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
}

export default HeroResumeAnimation;
