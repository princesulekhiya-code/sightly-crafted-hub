import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Upload, ArrowRight, FileText, CheckCircle2, X, Star, Shield } from "lucide-react";

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

  return <span className="warm-text">{displayed}<span className="animate-pulse">|</span></span>;
}

function AnimatedCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let c = 0; const step = Math.ceil(target / 40);
        const iv = setInterval(() => { c += step; if (c >= target) { setCount(target); clearInterval(iv); } else setCount(c); }, 40);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
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
    <div className="mt-8 animate-fade-up-delay-2">
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      {!file ? (
        <div className="max-w-md">
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
            onClick={() => inputRef.current?.click()}
          >
            <Upload className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-foreground font-medium">Drop your resume here</p>
            <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX · Max 10MB</p>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto glass-card rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground truncate flex-1">{file.name}</span>
            {progress >= 100 ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <button onClick={() => { setFile(null); setProgress(0); }}><X className="w-4 h-4 text-muted-foreground" /></button>}
          </div>
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{progress >= 100 ? "Redirecting to analysis…" : "Uploading…"}</p>
        </div>
      )}
      {error && <div className="mt-3 text-center"><p className="text-xs text-destructive">{error}</p></div>}
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
    <section ref={ref} className="relative min-h-screen flex items-center pt-16">
      <div className="relative z-10 w-full px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36 text-left py-24 md:py-32">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-[1.1] animate-fade-up" style={{ fontFamily: "'Playfair Display', serif" }}>
          Your career, at the <br /> speed of <span className="warm-text">now</span>.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-8 md:mt-10 animate-fade-up-delay-1 max-w-2xl leading-relaxed">
          AI-powered resume analysis, job matching, and career intelligence. Land your next role as a{" "}
          <TypingText />
        </p>
        <div className="flex items-center gap-4 mt-10 md:mt-12 animate-fade-up-delay-1">
          <Link to="/resume-analysis" className="px-8 py-4 rounded-full bg-primary text-primary-foreground text-base md:text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2">
            Analyze My Resume <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#features" className="px-8 py-4 rounded-full border border-border text-foreground text-base md:text-lg font-semibold hover:bg-accent/50 transition-all">
            See How It Works
          </a>
        </div>
        <ResumeDropZone visible={visible} />
      </div>
    </section>
  );
}

export default HeroSection;
