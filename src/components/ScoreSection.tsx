import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, FileText, Shield, Clock, BarChart3 } from "lucide-react";
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
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-primary">✦ AI-Powered Analysis</span>
          <h2 className="section-heading mt-4">Get your resume score now!</h2>
          <p className="section-subheading mx-auto mt-4">Upload your resume and get instant ATS compatibility analysis with actionable improvement tips.</p>

          <div className="flex items-center justify-center gap-6 mt-10">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${i < currentStep ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {i < currentStep ? <CheckCircle className="w-5 h-5" /> : step.num}
                </div>
                <div className="text-left hidden sm:block">
                  <p className={`text-sm font-medium ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="w-12 h-px bg-border hidden sm:block" />}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            <div
              className={`max-w-lg mx-auto border-2 border-dashed rounded-2xl p-10 cursor-pointer transition-all ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
              onClick={() => !file && fileInputRef.current?.click()}
            >
              {file ? (
                <div className="flex flex-col items-center gap-4">
                  <FileText className="w-10 h-10 text-primary" />
                  <p className="text-sm text-foreground">{file.name}</p>
                  <button onClick={() => navigate("/resume-analysis")} className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all">Analyze Now</button>
                </div>
              ) : (
                <>
                  <Upload className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-sm text-foreground font-medium">Drop your resume here</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX · Max 5MB</p>
                </>
              )}
            </div>

            {error && <p className="text-xs text-destructive mt-3">{error}</p>}

            <div className="flex items-center justify-center gap-6 mt-8">
              {[{ icon: Shield, text: "ATS Verified" }, { icon: Clock, text: "30 Sec Analysis" }, { icon: BarChart3, text: "Detailed Report" }].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ScoreSection;
