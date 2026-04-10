import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, FileText, Shield, Clock, BarChart3, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  { num: 1, label: "Upload", desc: "Drop your resume" },
  { num: 2, label: "Analyze", desc: "AI scans your file" },
  { num: 3, label: "Optimize", desc: "Get actionable tips" },
];

export function ScoreSection() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentStep = file ? 1 : 0;

  const handleFile = (f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) { setError("Only PDF or DOCX files are accepted"); return; }
    if (f.size > 5 * 1024 * 1024) { setError("File size must not exceed 5MB"); return; }
    setError(null); setFile(f);
  };

  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <span className="text-xs tracking-widest uppercase text-primary">✦ AI-Powered Analysis</span>
          <h2 className="section-heading mt-4">Get your resume score now!</h2>
          <p className="section-subheading mx-auto mt-4">
            Upload your resume and get instant ATS compatibility analysis with actionable improvement tips.
          </p>

          {/* Steps */}
          <div className="flex items-center justify-center gap-4 mt-10 mb-10">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                  i < currentStep
                    ? "bg-primary text-primary-foreground border-primary"
                    : i === currentStep
                    ? "border-primary/50 text-primary bg-primary/10"
                    : "border-border text-muted-foreground bg-secondary"
                }`}>
                  {i < currentStep ? <CheckCircle className="w-4 h-4" /> : step.num}
                </div>
                <div className="text-left">
                  <p className={`text-sm font-semibold ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                  <p className="text-[11px] text-muted-foreground">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="w-10 h-px bg-border ml-2" />}
              </div>
            ))}
          </div>

          {/* Drop zone */}
          <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
          <div
            className={`border-2 border-dashed rounded-2xl p-10 cursor-pointer transition-all mx-auto max-w-xl ${
              isDragging ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/40 hover:bg-primary/[0.02]"
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
            onClick={() => !file && fileInputRef.current?.click()}
          >
            {file ? (
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-8 h-8 text-primary" />
                <p className="text-sm text-foreground font-medium truncate max-w-full">{file.name}</p>
              </div>
            ) : (
              <>
                <Upload className="w-8 h-8 text-primary/70 mx-auto mb-3" />
                <p className="text-sm text-foreground font-semibold">Drop your resume here</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX · Max 5MB</p>
              </>
            )}
          </div>

          {error && <p className="text-xs text-destructive mt-3">{error}</p>}

          {/* CTA Button */}
          {file && (
            <button
              onClick={() => navigate("/resume-analysis")}
              className="mt-6 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all group active:scale-[0.98]"
            >
              Analyze Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {[{ icon: Shield, text: "ATS Verified" }, { icon: Clock, text: "30 Sec Analysis" }, { icon: BarChart3, text: "Detailed Report" }].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <item.icon className="w-3.5 h-3.5 text-primary/60" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ScoreSection;
