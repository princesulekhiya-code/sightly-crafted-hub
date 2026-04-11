import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, CheckCircle2, X, ArrowRight, Sparkles } from "lucide-react";
import { HeroResumeAnimation } from "./HeroResumeAnimation";

const JOB_TITLES = [
  "Frontend Developer", "Data Scientist", "Product Manager", "UX Designer",
  "Cloud Architect", "DevOps Engineer", "Machine Learning Engineer", "Full Stack Developer",
];

function TypingText() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) { const t = setTimeout(() => { setDeleting(true); setPause(false); }, 1800); return () => clearTimeout(t); }
    const target = JOB_TITLES[titleIdx];
    if (!deleting) {
      if (displayed.length < target.length) { const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60); return () => clearTimeout(t); }
      else setPause(true);
    } else {
      if (displayed.length > 0) { const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35); return () => clearTimeout(t); }
      else { setDeleting(false); setTitleIdx((i) => (i + 1) % JOB_TITLES.length); }
    }
  }, [displayed, deleting, pause, titleIdx]);

  return <span className="warm-text">{displayed}<span className="animate-pulse text-primary/60">|</span></span>;
}

function ResumeDropZone({ visible }: { visible: boolean }) {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) { setError("Only PDF or DOCX files accepted"); return; }
    if (f.size > 10 * 1024 * 1024) { setError("File must be under 10MB"); return; }
    setError(null); setFile(f); setProgress(0);
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) { p = 100; clearInterval(iv); setTimeout(() => navigate("/resume-analysis"), 600); }
      setProgress(p);
    }, 200);
  }, [navigate]);

  if (!visible) return null;

  return (
    <div className="mt-10 animate-fade-up-delay-2">
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      {!file ? (
        <div className="max-w-xl">
          <div
            className={`group relative rounded-2xl p-8 text-center cursor-pointer transition-all duration-500 ${
              isDragging
                ? "border-primary bg-primary/[0.04]"
                : "hover:bg-card/40"
            }`}
            style={{
              border: "1px solid",
              borderColor: isDragging ? "hsl(var(--primary))" : "hsl(var(--border) / 0.5)",
            }}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
            onClick={() => inputRef.current?.click()}
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
                <Upload className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground font-semibold">Drop your resume here</p>
              <p className="text-xs text-muted-foreground mt-1.5">PDF, DOC, DOCX · Max 10MB</p>
            </div>
          </div>

          {/* Or button */}
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={() => inputRef.current?.click()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--warm-dim)))",
                color: "hsl(var(--primary-foreground))",
              }}
            >
              <Sparkles className="w-4 h-4" />
              Analyze Resume
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-muted-foreground">Free · No signup required</span>
          </div>
        </div>
      ) : (
        <div className="max-w-md rounded-2xl p-6 border border-border/50 bg-card/50">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground truncate flex-1">{file.name}</span>
            {progress >= 100 ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <button onClick={() => { setFile(null); setProgress(0); }}><X className="w-4 h-4 text-muted-foreground" /></button>}
          </div>
          <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, hsl(var(--warm-dim)), hsl(var(--primary)))",
              }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{progress >= 100 ? "Redirecting to analysis…" : "Uploading…"}</p>
        </div>
      )}
      {error && <p className="text-xs text-destructive mt-3">{error}</p>}
    </div>
  );
}

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 py-20 md:py-28 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 text-left flex flex-col justify-center">
          <div className="animate-fade-up mb-8">
            <span className="text-[10px] tracking-[0.35em] uppercase text-primary/50 font-medium">✦ Resume Checker</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] animate-fade-up"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your career, at the
            <br />
            speed of <span className="warm-text">now</span>.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground/80 mt-7 animate-fade-up-delay-1 max-w-xl leading-relaxed">
            AI-powered resume analysis, job matching, and career intelligence.
            <br className="hidden md:block" />
            Land your next role as a <TypingText />
          </p>

          <ResumeDropZone visible={visible} />

          {/* Trust signals */}
          <div className="mt-10 flex items-center gap-6 animate-fade-up-delay-2">
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                    <span className="text-[8px] text-muted-foreground">✦</span>
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">10k+ users</span>
            </div>
            <div className="w-px h-4 bg-border/30" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-[10px]">★</span>
              ))}
              <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
            </div>
          </div>
        </div>

        {/* Right animation */}
        <div className="flex-1 hidden lg:flex items-center justify-center animate-fade-up-delay-2">
          <HeroResumeAnimation />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
