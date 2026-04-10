import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, FileText, Shield, Clock, BarChart3, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  { num: 1, label: "Upload", desc: "Drop your resume" },
  { num: 2, label: "Analyze", desc: "AI scans your file" },
  { num: 3, label: "Optimize", desc: "Get actionable tips" },
];

const RESUME_CARDS = [
  { name: "Sarah Johnson", role: "Marketing Manager", score: 87, color: "from-primary/30 to-primary/5" },
  { name: "Alex Thomas", role: "Software Engineer", score: 94, color: "from-primary/40 to-primary/10" },
  { name: "Kavita Patel", role: "Data Analyst", score: 72, color: "from-primary/20 to-primary/5" },
];

function MiniScoreRing({ score, size = 48 }: { score: number; size?: number }) {
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none"
        stroke="hsl(var(--primary))" strokeWidth="3"
        strokeDasharray={circumference} strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
      <text
        x={size / 2} y={size / 2}
        textAnchor="middle" dominantBaseline="central"
        className="fill-foreground text-[10px] font-bold"
        transform={`rotate(90, ${size / 2}, ${size / 2})`}
      >
        {score}
      </text>
    </svg>
  );
}

export function ScoreSection() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animatedScores, setAnimatedScores] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentStep = file ? 1 : 0;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScores(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleFile = (f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) { setError("Only PDF or DOCX files are accepted"); return; }
    if (f.size > 5 * 1024 * 1024) { setError("File size must not exceed 5MB"); return; }
    setError(null); setFile(f);
  };

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

          {/* Main interactive card */}
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* Left: Resume preview cards */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-3">
                  {RESUME_CARDS.map((card, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredCard(i)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`group relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default
                        ${hoveredCard === i
                          ? "border-primary/40 bg-primary/5 scale-[1.02] shadow-lg shadow-primary/10"
                          : "border-border/50 bg-secondary/30 hover:border-primary/20"
                        }`}
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      {/* Resume icon */}
                      <div className={`w-12 h-14 rounded-lg bg-gradient-to-b ${card.color} border border-primary/20 flex items-center justify-center shrink-0`}>
                        <FileText className="w-5 h-5 text-primary" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{card.name}</p>
                        <p className="text-xs text-muted-foreground">{card.role}</p>
                        <div className="mt-1.5 w-full h-1 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: animatedScores ? `${card.score}%` : "0%" }}
                          />
                        </div>
                      </div>

                      {/* Score ring */}
                      <MiniScoreRing score={animatedScores ? card.score : 0} />
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-5 mt-6 pl-1">
                  {[{ icon: Shield, text: "ATS Verified" }, { icon: Clock, text: "30s Analysis" }, { icon: BarChart3, text: "Detailed Report" }].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <item.icon className="w-3 h-3 text-primary/70" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Upload + CTA */}
              <div className="p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50">
                {/* Heading */}
                <div className="mb-6">
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
                <div className="flex items-center gap-4 mb-6">
                  {STEPS.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${i < currentStep ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                        {i < currentStep ? <CheckCircle className="w-3.5 h-3.5" /> : step.num}
                      </div>
                      <span className={`text-xs font-medium hidden sm:inline ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
                      {i < STEPS.length - 1 && <div className="w-6 h-px bg-border" />}
                    </div>
                  ))}
                </div>

                {/* Drop zone */}
                <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
                <div
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/40 hover:bg-primary/[0.02]"}`}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
                  onClick={() => !file && fileInputRef.current?.click()}
                >
                  {file ? (
                    <div className="flex flex-col items-center gap-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <p className="text-sm text-foreground font-medium">{file.name}</p>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-primary/70 mx-auto mb-3" />
                      <p className="text-sm text-foreground font-medium">Drop your resume here</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX · Max 5MB</p>
                    </>
                  )}
                </div>

                {error && <p className="text-xs text-destructive mt-2">{error}</p>}

                {/* CTA Button */}
                <button
                  onClick={() => file ? navigate("/resume-analysis") : fileInputRef.current?.click()}
                  className="mt-5 w-full py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all group"
                >
                  {file ? "Analyze Now" : "Resume Check Score"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ScoreSection;
