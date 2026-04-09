import { useState, useRef } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { FileText, Upload, BarChart3, Target, Brain, ShieldCheck, Star } from "lucide-react";

const analyzeSteps = [
  { icon: FileText, label: "Parsing your resume", sub: "Extracting text & sections…" },
  { icon: Brain, label: "Running AI analysis", sub: "Matching keywords & ATS rules…" },
  { icon: BarChart3, label: "Calculating ATS score", sub: "Scoring format, skills & experience…" },
  { icon: ShieldCheck, label: "Generating recommendations", sub: "Building your action plan…" },
  { icon: Star, label: "Finalising report", sub: "Wrapping up insights…" },
];

export default function ResumeAnalysisPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    setFile(f);
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setScore(Math.floor(Math.random() * 30) + 65); }, 4000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Resume Analysis</h2>
        <p className="text-muted-foreground mb-8">Upload your resume for AI-powered ATS compatibility scoring</p>

        {!file ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-foreground font-medium mb-2">Upload your resume</p>
            <p className="text-sm text-muted-foreground mb-6">PDF, DOC, or DOCX · Max 10MB</p>
            <button onClick={() => inputRef.current?.click()} className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all">
              Choose File
            </button>
          </div>
        ) : analyzing ? (
          <div className="glass-card rounded-2xl p-8">
            <p className="text-foreground font-medium mb-6">Analyzing: {file.name}</p>
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
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">Your ATS Score</p>
              <p className={`text-6xl font-bold ${score >= 80 ? "text-primary" : score >= 60 ? "text-foreground" : "text-destructive"}`}>{score}%</p>
              <p className="text-sm text-muted-foreground mt-2">{score >= 80 ? "Excellent! Your resume is ATS-ready." : score >= 60 ? "Good, but there's room for improvement." : "Needs work. Follow our suggestions."}</p>
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
            <button onClick={() => { setFile(null); setScore(null); }} className="px-6 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-accent transition-all">
              Analyze Another Resume
            </button>
          </div>
        ) : null}
      </div>
    </DashboardLayout>
  );
}
