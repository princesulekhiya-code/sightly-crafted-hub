import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, FileText, Shield, Clock, BarChart3, Sparkles, ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import resumeSamplesImg from "@/assets/resume-samples.png";

const STEPS = [
  { num: 1, label: "Upload", desc: "Drop your resume" },
  { num: 2, label: "Analyze", desc: "AI scans your file" },
  { num: 3, label: "Optimize", desc: "Get actionable tips" },
];

const SCAN_LINES = [
  "Checking ATS compatibility…",
  "Analyzing keyword density…",
  "Scanning format structure…",
  "Evaluating experience match…",
  "Optimizing for recruiters…",
];

export function ScoreSection() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeScore, setActiveScore] = useState(0);
  const [scanLineIdx, setScanLineIdx] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentStep = file ? 1 : 0;

  // Animated score counter
  useEffect(() => {
    const target = 94;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setActiveScore(target);
        clearInterval(timer);
      } else {
        setActiveScore(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  // Rotating scan lines
  useEffect(() => {
    const timer = setInterval(() => {
      setScanLineIdx((prev) => (prev + 1) % SCAN_LINES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleFile = (f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) { setError("Only PDF or DOCX files are accepted"); return; }
    if (f.size > 5 * 1024 * 1024) { setError("File size must not exceed 5MB"); return; }
    setError(null); setFile(f);
  };

  const scoreColor = activeScore >= 80 ? "text-primary" : activeScore >= 60 ? "text-foreground" : "text-destructive";

  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          {/* Top label */}
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase text-primary">✦ AI-Powered Analysis</span>
            <h2 className="section-heading mt-4">Get your resume score now!</h2>
            <p className="section-subheading mx-auto mt-4">Upload your resume and get instant ATS compatibility analysis with actionable improvement tips.</p>
          </div>

          {/* Main interactive banner */}
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden group/card">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-5 gap-0">
              {/* Left: Interactive resume showcase (3 cols) */}
              <div
                className="lg:col-span-3 p-6 lg:p-10 flex items-center justify-center"
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => setIsHoveringImage(false)}
              >
                <div className="relative w-full max-w-xl">
                  {/* Copper glow */}
                  <div className={`absolute inset-0 bg-primary/10 rounded-2xl blur-2xl transition-all duration-700 ${isHoveringImage ? "scale-105 bg-primary/20" : "scale-95"}`} />

                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden border border-primary/15 shadow-2xl shadow-primary/10">
                    <img
                      src={resumeSamplesImg}
                      alt="ATS-optimized resume samples"
                      className={`w-full h-auto object-cover transition-all duration-700 ${isHoveringImage ? "scale-105 brightness-110" : "scale-100 brightness-90"}`}
                    />

                    {/* Scanning overlay effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Scan line animation */}
                      <div
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                        style={{
                          animation: "scanMove 3s ease-in-out infinite",
                          top: "0%",
                        }}
                      />
                      {/* Dark overlay gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/40" />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
                    </div>

                    {/* Floating interactive elements */}
                    {/* Score badge - top right */}
                    <div className={`absolute top-4 right-4 bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl px-4 py-3 transition-all duration-500 ${isHoveringImage ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-80"}`}>
                      <p className="text-[10px] text-muted-foreground mb-0.5">ATS Score</p>
                      <p className={`text-2xl font-bold ${scoreColor} tabular-nums`}>{activeScore}%</p>
                      <div className="w-full h-1 bg-secondary rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${activeScore}%` }} />
                      </div>
                    </div>

                    {/* Scan status - bottom left */}
                    <div className={`absolute bottom-4 left-4 bg-card/95 backdrop-blur-md border border-border rounded-xl px-3 py-2.5 flex items-center gap-2.5 transition-all duration-500 ${isHoveringImage ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"}`}>
                      <div className="relative w-5 h-5">
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                        <div className="relative w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                          <Zap className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground">Scanning</p>
                        <p className="text-xs text-foreground font-medium transition-all duration-300" key={scanLineIdx}>
                          {SCAN_LINES[scanLineIdx]}
                        </p>
                      </div>
                    </div>

                    {/* Keyword match - bottom right */}
                    <div className={`absolute bottom-4 right-4 bg-card/95 backdrop-blur-md border border-primary/20 rounded-xl px-3 py-2 transition-all duration-500 ${isHoveringImage ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
                      <div className="flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 text-primary" />
                        <div>
                          <p className="text-[10px] text-muted-foreground">Keywords</p>
                          <p className="text-xs font-semibold text-primary">23/28 matched</p>
                        </div>
                      </div>
                    </div>

                    {/* Trend badge - top left */}
                    <div className={`absolute top-4 left-4 bg-card/95 backdrop-blur-md border border-border rounded-xl px-3 py-2 flex items-center gap-2 transition-all duration-500 ${isHoveringImage ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold text-foreground">+32% improvement</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: CTA content (2 cols) */}
              <div className="lg:col-span-2 p-6 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50">
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Unlock Your Potential</span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-semibold text-foreground leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Land your dream job by boosting your resume's ATS score!
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Our AI scanner identifies gaps, optimizes keywords, and ensures your resume passes every ATS filter.
                  </p>
                </div>

                {/* Steps */}
                <div className="flex items-center gap-3 mb-5">
                  {STEPS.map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${i < currentStep ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                        {i < currentStep ? <CheckCircle className="w-3 h-3" /> : step.num}
                      </div>
                      <span className={`text-[11px] font-medium ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
                      {i < STEPS.length - 1 && <div className="w-4 h-px bg-border" />}
                    </div>
                  ))}
                </div>

                {/* Drop zone */}
                <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
                <div
                  className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${isDragging ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/40 hover:bg-primary/[0.02]"}`}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
                  onClick={() => !file && fileInputRef.current?.click()}
                >
                  {file ? (
                    <div className="flex flex-col items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      <p className="text-sm text-foreground font-medium truncate max-w-full">{file.name}</p>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-primary/70 mx-auto mb-2" />
                      <p className="text-sm text-foreground font-medium">Drop your resume here</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">PDF, DOC, DOCX · Max 5MB</p>
                    </>
                  )}
                </div>

                {error && <p className="text-xs text-destructive mt-2">{error}</p>}

                {/* CTA Button */}
                <button
                  onClick={() => file ? navigate("/resume-analysis") : fileInputRef.current?.click()}
                  className="mt-4 w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all group active:scale-[0.98]"
                >
                  {file ? "Analyze Now" : "Resume Check Score"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  {[{ icon: Shield, text: "ATS Verified" }, { icon: Clock, text: "30s Analysis" }, { icon: BarChart3, text: "Detailed Report" }].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <item.icon className="w-3 h-3 text-primary/60" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Scan line animation keyframe */}
      <style>{`
        @keyframes scanMove {
          0%, 100% { top: 10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { top: 85%; }
        }
      `}</style>
    </section>
  );
}

export default ScoreSection;
