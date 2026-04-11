import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Upload, FileText, Brain, BarChart3, ShieldCheck, Star,
  Search, Building2, ClipboardList, Sparkles, Target, CheckCircle2, X, AlertCircle
} from "lucide-react";

const ANALYSIS_TYPES = [
  {
    id: "general",
    icon: ClipboardList,
    label: "General ATS",
    desc: "Standard scan for keyword density and formatting errors.",
  },
  {
    id: "role",
    icon: Building2,
    label: "With Role",
    desc: "Analyze compatibility for a specific target job title.",
  },
  {
    id: "jd",
    icon: Search,
    label: "With JD",
    desc: "Deep-dive match against a specific job description.",
  },
];

const FEATURES = [
  { icon: Search, label: "Keyword Analysis", desc: "Find missing industry terms and professional buzzwords." },
  { icon: BarChart3, label: "ATS Compatibility", desc: "Verify if your resume format is readable by top systems." },
  { icon: Target, label: "Role Matching", desc: "Score your experience against specific market demands." },
  { icon: Sparkles, label: "Smart Suggestions", desc: "AI-driven bullet point improvements and formatting tips." },
];

const analyzeSteps = [
  { icon: FileText, label: "Parsing your resume", sub: "Extracting text & sections…" },
  { icon: Brain, label: "Running AI analysis", sub: "Matching keywords & ATS rules…" },
  { icon: BarChart3, label: "Calculating ATS score", sub: "Scoring format, skills & experience…" },
  { icon: ShieldCheck, label: "Generating recommendations", sub: "Building your action plan…" },
  { icon: Star, label: "Finalising report", sub: "Wrapping up insights…" },
];

export default function ResumeAnalysisPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisType, setAnalysisType] = useState("general");
  const [analyzing, setAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) {
      setError("Only PDF or DOCX files are accepted");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setError("File size must not exceed 5MB");
      return;
    }
    setError(null);
    setFile(f);
  };

  const startAnalysis = () => {
    if (!file) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setScore(Math.floor(Math.random() * 30) + 65);
    }, 4000);
  };

  const reset = () => {
    setFile(null);
    setScore(null);
    setAnalyzing(false);
    setError(null);
    setAnalysisType("general");
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image */}
      <img src={heroBg} alt="" width={1920} height={1080} className="absolute top-0 left-0 w-full h-[700px] object-cover opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[700px] bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <Header />

      <main className="relative z-10 pt-24 pb-20 px-6">
        {/* Hero heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-primary">✦ AI-Powered Analysis</span>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mt-4 leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Optimize Your Resume for Success.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Upload your resume and let our AI analyze your compatibility with modern ATS systems and specific job roles.
          </p>
        </div>

        {/* Main content - depends on state */}
        {!analyzing && score === null ? (
          <div className="max-w-2xl mx-auto space-y-10">
            {/* Step 1: Upload */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center border border-primary/30">1</span>
                <span className="text-sm font-semibold text-foreground">Upload Resume</span>
              </div>

              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />

              <div
                className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
                  isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
                onClick={() => !file && inputRef.current?.click()}
              >
                {file ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground truncate">{file.name}</span>
                    <button onClick={(e) => { e.stopPropagation(); reset(); }}>
                      <X className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-foreground font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-primary/60 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                  </>
                )}
              </div>

              {error && (
                <p className="text-xs text-destructive mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {error}
                </p>
              )}
            </div>

            {/* Step 2: Choose Analysis Type */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center border border-primary/30">2</span>
                <span className="text-sm font-semibold text-foreground">Choose Analysis Type</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {ANALYSIS_TYPES.map((type) => {
                  const Icon = type.icon;
                  const selected = analysisType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setAnalysisType(type.id)}
                      className={`glass-card rounded-xl p-4 text-left transition-all ${
                        selected
                          ? "border-primary/50 bg-primary/5"
                          : "hover:border-primary/20"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                        selected ? "bg-primary/20" : "bg-secondary"
                      }`}>
                        <Icon className={`w-4 h-4 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{type.label}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-3">
              <button
                onClick={startAnalysis}
                disabled={!file}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  file
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-muted-foreground cursor-not-allowed"
                }`}
              >
                Start Analysis →
              </button>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3 h-3" />
                Login required to save progress and access historical scans.
              </p>
            </div>
          </div>
        ) : analyzing ? (
          /* Analyzing state */
          <div className="max-w-lg mx-auto glass-card rounded-2xl p-8">
            <p className="text-foreground font-medium mb-6">Analyzing: {file?.name}</p>
            <div className="space-y-4">
              {analyzeSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: `${i * 0.6}s` }}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : score !== null ? (
          /* Results */
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">Your ATS Score</p>
              <p className={`text-6xl font-bold ${score >= 80 ? "text-primary" : score >= 60 ? "text-foreground" : "text-destructive"}`}>
                {score}%
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {score >= 80 ? "Excellent! Your resume is ATS-ready." : score >= 60 ? "Good, but there's room for improvement." : "Needs work. Follow our suggestions."}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Format", val: Math.min(score + 5, 100) },
                { label: "Keywords", val: Math.max(score - 8, 40) },
                { label: "Experience", val: Math.min(score + 2, 100) },
                { label: "Skills", val: Math.max(score - 3, 50) },
              ].map((s, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="text-foreground font-medium">{s.val}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${s.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={reset} className="px-6 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-accent transition-all">
                Analyze Another Resume
              </button>
            </div>
          </div>
        ) : null}

        {/* Bottom features - show only on initial state */}
        {!analyzing && score === null && (
          <div className="max-w-4xl mx-auto mt-20">
            <div className="divider-gradient mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {FEATURES.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-primary">{feat.label}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
