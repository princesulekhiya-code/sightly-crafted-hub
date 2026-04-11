import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";

const beforePoints = [
  { text: "Managed a team of developers", issue: "Vague, no metrics" },
  { text: "Responsible for sales growth", issue: "Passive language" },
  { text: "Worked on various projects", issue: "No specifics" },
  { text: "Good communication skills", issue: "Generic filler" },
  { text: "Proficient in many tools", issue: "No keywords" },
];

const afterPoints = [
  { text: "Led a cross-functional team of 12 engineers, delivering 3 products on schedule", improved: "Quantified impact" },
  { text: "Drove 47% YoY revenue growth through strategic partnership development", improved: "Measurable results" },
  { text: "Architected microservices platform serving 2M+ daily active users", improved: "Specific & impressive" },
  { text: "Presented quarterly insights to C-suite, influencing $5M budget allocation", improved: "Action-oriented" },
  { text: "Expert in React, TypeScript, AWS, Docker, and CI/CD pipelines", improved: "ATS keywords" },
];

export function BeforeAfterResumeSection() {
  const [hoveredSide, setHoveredSide] = useState<"before" | "after" | null>(null);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[100px] pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary/70 font-medium">✦ AI Transformation</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-5 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              See the difference AI makes
            </h2>
            <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto">
              Your resume before and after JOBRA's AI optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
            {/* Before */}
            <div
              onMouseEnter={() => setHoveredSide("before")}
              onMouseLeave={() => setHoveredSide(null)}
              className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 ${
                hoveredSide === "before"
                  ? "border-destructive/30 bg-destructive/[0.03]"
                  : "border-border/50 bg-card/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-destructive/50" />
                <span className="text-xs font-medium text-destructive/70 uppercase tracking-widest">Before</span>
              </div>

              <div className="space-y-4">
                {beforePoints.map((point, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start gap-3">
                      <X className="w-4 h-4 text-destructive/40 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground/70 line-through decoration-destructive/20">{point.text}</p>
                        <span className="text-[10px] text-destructive/50 mt-1 block">{point.issue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/50">ATS Score</span>
                  <span className="text-lg font-bold text-destructive/60">32%</span>
                </div>
                <div className="w-full h-1 bg-secondary rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-destructive/30 rounded-full" style={{ width: "32%" }} />
                </div>
              </div>
            </div>

            {/* Center arrow */}
            <div className="hidden md:flex flex-col items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary/40" />
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <ArrowRight className="w-5 h-5 text-primary/50" />
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <span className="text-[10px] text-primary/40 font-medium tracking-widest">AI</span>
            </div>

            {/* After */}
            <div
              onMouseEnter={() => setHoveredSide("after")}
              onMouseLeave={() => setHoveredSide(null)}
              className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 ${
                hoveredSide === "after"
                  ? "border-primary/30 bg-primary/[0.03]"
                  : "border-border/50 bg-card/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                <span className="text-xs font-medium text-primary/70 uppercase tracking-widest">After</span>
              </div>

              <div className="space-y-4">
                {afterPoints.map((point, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-foreground/80">{point.text}</p>
                        <span className="text-[10px] text-primary/40 mt-1 block">{point.improved}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/50">ATS Score</span>
                  <span className="text-lg font-bold text-primary/80">94%</span>
                </div>
                <div className="w-full h-1 bg-secondary rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-primary/40 rounded-full" style={{ width: "94%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default BeforeAfterResumeSection;
