import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

import stepUpload from "@/assets/step-upload.jpg";
import stepAtsScore from "@/assets/step-ats-score.jpg";
import stepAiUpgrade from "@/assets/step-ai-upgrade.jpg";
import stepTemplate from "@/assets/step-template.jpg";
import stepJobMatch from "@/assets/step-job-match.jpg";
import stepInterview from "@/assets/step-interview.jpg";
import stepMentorship from "@/assets/step-mentorship.jpg";

const steps = [
  { num: 1, title: "Upload Your Resume", desc: "Upload your resume (PDF/DOCX) with a job description, specific role, or for a general ATS scan.", tags: ["With JD", "With Role", "General Scan"], accent: "#8b5cf6", img: stepUpload },
  { num: 2, title: "ATS Score & Suggestions", desc: "AI analyzes your resume against ATS systems — detailed score breakdown for Format, Skills, Experience, Keywords.", tags: ["ATS Score", "Breakdown", "Keywords"], accent: "#3b82f6", img: stepAtsScore },
  { num: 3, title: "AI Upgrades Your Resume", desc: "JOBRA AI rewrites your resume — adding quantified achievements, industry keywords, and proper ATS formatting.", tags: ["AI Rewrite", "Keywords", "Achievements"], accent: "#6366f1", img: stepAiUpgrade },
  { num: 4, title: "Choose a Template", desc: "Pick from 22 professional resume templates. Your AI-improved data is auto-filled. Export as PDF.", tags: ["22 Templates", "Auto-Fill", "PDF Export"], accent: "#06b6d4", img: stepTemplate },
  { num: 5, title: "Smart Job Matching", desc: "JOBRA finds matching job listings with compatibility scores based on your optimized resume.", tags: ["Job Matches", "Compatibility", "Apply Direct"], accent: "#f59e0b", img: stepJobMatch },
  { num: 6, title: "AI Mock Interview", desc: "Practice with our AI interviewer — get role-specific questions and real-time scoring.", tags: ["AI Interviewer", "Real-Time Scoring"], accent: "#f43f5e", img: stepInterview },
  { num: 7, title: "Expert Mentorship", desc: "Connect with industry professionals for 1-on-1 career coaching and personalized guidance.", tags: ["1-on-1 Sessions", "Industry Pros"], accent: "#a855f7", img: stepMentorship },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [autoplay]);

  const handleClick = (idx: number) => {
    setAutoplay(false);
    setActiveStep(idx);
    clearInterval(timerRef.current);
    setTimeout(() => setAutoplay(true), 14000);
  };

  const step = steps[activeStep];

  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-primary">✦ How It Works</span>
            <h2 className="section-heading mt-4">Your complete career pipeline</h2>
            <p className="section-subheading mx-auto mt-4">From resume upload to dream job — 7 steps, fully guided by AI.</p>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Steps sidebar */}
            <div className="space-y-2" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${i === activeStep ? "glass-card" : "hover:bg-accent/30"}`}
                  style={i === activeStep ? { borderLeft: `3px solid ${s.accent}` } : {}}
                >
                  <span className="text-xs font-mono text-muted-foreground w-5">{s.num}</span>
                  <span className={`text-sm ${i === activeStep ? "text-foreground font-medium" : "text-muted-foreground"}`}>{s.title}</span>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="glass-card rounded-2xl overflow-hidden relative">
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  key={activeStep}
                  src={step.img}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover opacity-25 scale-105 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/70" />
                {/* Accent glow */}
                <div
                  className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 transition-colors duration-700"
                  style={{ background: step.accent }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="text-xs text-muted-foreground mb-2">Step {step.num} of 7</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">{step.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {step.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${step.accent}15`, color: step.accent }}>{tag}</span>
                  ))}
                </div>
                <div className="flex gap-1">
                  {steps.map((_, i) => (
                    <div key={i} className="h-1 rounded-full flex-1 transition-all duration-500" style={{ background: i <= activeStep ? step.accent : "rgba(255,255,255,0.06)" }} />
                  ))}
                </div>
                {activeStep < steps.length - 1 && (
                  <button onClick={() => handleClick(activeStep + 1)} className="mt-6 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                    Next: {steps[activeStep + 1].title}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mobile dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {steps.map((s, i) => (
              <button key={i} onClick={() => handleClick(i)} className="rounded-full transition-all duration-300" style={{ width: i === activeStep ? "20px" : "8px", height: "8px", background: i === activeStep ? s.accent : "rgba(255,255,255,0.08)" }} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default HowItWorksSection;
