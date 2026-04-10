import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, FileText, Shield, Clock, BarChart3, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import resumeSamplesImg from "@/assets/resume-samples.png";

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
        <div className="max-w-6xl mx-auto">
          {/* Top label */}
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase text-primary">✦ AI-Powered Analysis</span>
            <h2 className="section-heading mt-4">Get your resume score now!</h2>
            <p className="section-subheading mx-auto mt-4">Upload your resume and get instant ATS compatibility analysis with actionable improvement tips.</p>
          </div>

          {/* Main interactive banner card */}
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-0 items-center">
              {/* Left: Resume image showcase */}
              <div className="p-8 lg:p-10 flex items-center justify-center">
                <div className="relative group">
                  {/* Copper glow behind image */}
                  <div className="absolute inset-0 bg-primary/15 rounded-2xl blur-2xl scale-95 group-hover:scale-100 group-hover:bg-primary/20 transition-all duration-500" />
                  
                  {/* Resume image with theme overlay */}
                  <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
                    <img
                      src={resumeSamplesImg}
                      alt="ATS-optimized resume samples"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    {/* Dark gradient overlay for theme blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating score badge */}
                    <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-xl px-3 py-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground">ATS Score</p>
                        <p className="text-sm font-bold text-primary">94%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: CTA content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Unlock Your Potential</span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-tight"
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
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/40 hover:bg-primary/[0.02]"}`}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
                  onClick={() => !file && fileInputRef.current?.click()}
                >
                  {file ? (
                    <div className="flex flex-col items-center gap-2">
                      <FileText className="w-7 h-7 text-primary" />
                      <p className="text-sm text-foreground font-medium">{file.name}</p>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-7 h-7 text-primary/70 mx-auto mb-2" />
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

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-5 mt-5">
                  {[{ icon: Shield, text: "ATS Verified" }, { icon: Clock, text: "30s Analysis" }, { icon: BarChart3, text: "Detailed Report" }].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <item.icon className="w-3 h-3 text-primary/70" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ScoreSection;
