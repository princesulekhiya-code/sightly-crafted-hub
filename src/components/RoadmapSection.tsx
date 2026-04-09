import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FileSearch, FileText, Briefcase, Send, Mic, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const phases = [
  {
    num: "01", label: "Phase 1", title: "Resume Analysis", subtitle: "Instant ATS Score & Feedback",
    icon: FileSearch, color: "#6352dc", glowColor: "99, 82, 220", status: "Live",
    features: ["Upload resume with or without Job Description", "Select target Job Role for tailored analysis", "Generate ATS score & improvement suggestions"],
    href: "/resume-analysis", cta: "Try Now",
  },
  {
    num: "02", label: "Phase 2", title: "Resume Correction", subtitle: "AI-Powered Resume Rewriting",
    icon: FileText, color: "#0ea5e9", glowColor: "14, 165, 233", status: "Live",
    features: ["Improve grammar, structure & formatting", "Auto-suggest power words & better descriptions", "Export as polished PDF"],
    href: "/resume-builder", cta: "Build Resume",
  },
  {
    num: "03", label: "Phase 3", title: "Job Suggestions", subtitle: "Smart Job Matching Engine",
    icon: Briefcase, color: "#f59e0b", glowColor: "245, 158, 11", status: "Live",
    features: ["Suggest jobs based on skills & experience", "Compatibility score for each job role", "Filter by location, salary & industry"],
    href: "/job-matches", cta: "Find Jobs",
  },
  {
    num: "04", label: "Phase 4", title: "Direct Job Apply", subtitle: "One-Click Apply & Auto-Fill",
    icon: Send, color: "#10b981", glowColor: "16, 185, 129", status: "Coming Soon",
    features: ["Allow one-click apply to jobs", "Auto-fill job applications from resume data", "Track application status in real-time"],
    href: "/job-matches", cta: "Explore",
  },
  {
    num: "05", label: "Phase 5", title: "Interview Prep", subtitle: "AI Interview Coach",
    icon: Mic, color: "#ec4899", glowColor: "236, 72, 153", status: "Coming Soon",
    features: ["AI voice assistant for interview preparation", "Role-specific question generation", "Real-time scoring on answers & delivery"],
    href: "/interview", cta: "Practice",
  },
];

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const phase = phases[activePhase];
  const Icon = phase.icon;
  const isLive = phase.status === "Live";

  const goToPhase = useCallback((idx: number) => {
    if (idx === activePhase) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePhase(idx);
      setProgressWidth(0);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  }, [activePhase]);

  useEffect(() => {
    setProgressWidth(0);
    const t = setTimeout(() => setProgressWidth(100), 100);
    return () => clearTimeout(t);
  }, [activePhase]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActivePhase(prev => (prev + 1) % phases.length);
        setProgressWidth(0);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 250);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-primary">Product Roadmap</span>
            <h2 className="section-heading mt-4">From resume to dream job</h2>
            <p className="section-subheading mx-auto mt-4">5 powerful phases — from resume analysis to AI interview coaching.</p>
          </div>

          {/* Timeline stepper */}
          <div className="hidden md:flex items-center justify-between mb-12 px-8">
            {phases.map((p, i) => {
              const isActive = i === activePhase;
              return (
                <button key={i} onClick={() => goToPhase(i)} className="relative z-10 flex flex-col items-center gap-2 group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${isActive ? "scale-110" : ""}`} style={{ background: isActive ? p.color : "rgba(255,255,255,0.05)", color: isActive ? "#fff" : "rgba(255,255,255,0.3)" }}>
                    {p.num}
                  </div>
                  <span className={`text-xs transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{p.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content card */}
          <div className={`glass-card rounded-2xl p-8 md:p-10 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <div className="grid md:grid-cols-[1fr_280px] gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-muted-foreground">{phase.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${isLive ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
                    {isLive ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {phase.status}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground mt-1 mb-6">{phase.subtitle}</p>
                <ul className="space-y-3">
                  {phase.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to={phase.href} className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90" style={{ background: phase.color, color: "#fff" }}>
                  {phase.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Progress tracker */}
              <div className="hidden md:block">
                <p className="text-xs text-muted-foreground mb-4">Platform Progress</p>
                {phases.map((p, i) => (
                  <button key={i} onClick={() => goToPhase(i)} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl mb-1.5 transition-all duration-300 text-left text-sm ${i === activePhase ? "" : "hover:bg-accent/30"}`} style={i === activePhase ? { background: `rgba(${p.glowColor}, 0.06)`, border: `1px solid rgba(${p.glowColor}, 0.15)` } : { border: "1px solid transparent" }}>
                    <span className={i === activePhase ? "text-foreground" : "text-muted-foreground"}>{p.title}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{p.status === "Live" ? "100%" : "Soon"}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom dots */}
          <div className="flex justify-center gap-2 mt-8">
            {phases.map((p, i) => (
              <button key={i} onClick={() => goToPhase(i)} className="rounded-full transition-all duration-500" style={{ width: i === activePhase ? "32px" : "8px", height: "8px", background: i === activePhase ? `linear-gradient(90deg, ${p.color}, rgba(${p.glowColor}, 0.6))` : "rgba(255,255,255,0.08)" }} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default RoadmapSection;
