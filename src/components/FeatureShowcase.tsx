import { Link } from "react-router-dom";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

/* Fey-style feature showcase sections with large visuals */

function FeatureBlock({ title, desc, linkTo, linkText, children, reverse = false }: {
  title: string; desc: string; linkTo: string; linkText: string; children: React.ReactNode; reverse?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "direction-reverse" : ""}`}>
      <div className={reverse ? "md:order-2" : ""}>
        <Link to={linkTo} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 mb-3">
          {linkText} <ArrowRight className="w-3 h-3" />
        </Link>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-lg">{desc}</p>
      </div>
      <div className={reverse ? "md:order-1" : ""}>{children}</div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section className="py-24 px-6 space-y-32">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Feature 1: Resume Analysis */}
        <FeatureBlock
          title="Resume analysis in real time."
          desc="JOBRA scans your resume the moment you upload it and delivers clear, actionable insights instantly. See your ATS score, keyword gaps, and formatting issues—without guessing."
          linkTo="/resume-analysis"
          linkText="Learn more"
        >
          <div className="rounded-2xl border border-border/30 bg-card p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">AI Analysis Results</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "ATS Compatibility", score: 87, color: "bg-primary" },
                { label: "Keyword Match", score: 72, color: "bg-primary/70" },
                { label: "Formatting", score: 95, color: "bg-primary" },
                { label: "Impact Statements", score: 68, color: "bg-primary/50" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                    <span className="text-xs font-medium text-foreground">{item.score}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
            {/* Notification cards */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-foreground">Resume improved to <span className="text-primary">87%</span></p>
                  <p className="text-[9px] text-muted-foreground">AI suggestions applied</p>
                </div>
              </div>
            </div>
          </div>
        </FeatureBlock>

        {/* Feature 2: Job Matching - Fey Screener style */}
        <FeatureBlock
          title="Job matching reimagined."
          desc="Quickly discover roles by describing exactly what you're looking for—no complicated filters. JOBRA turns your words into precise job matches."
          linkTo="/job-matches"
          linkText="Learn more"
          reverse
        >
          <div className="rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border/30 p-6 shadow-lg">
            <div className="bg-secondary/50 rounded-xl p-4 mb-4 border border-border/20">
              <p className="text-sm text-muted-foreground italic">Remote design roles at Series B+ startups</p>
            </div>
            <div className="space-y-3">
              {[
                { role: "Senior Product Designer", company: "Notion", match: "94%", tag: "Remote" },
                { role: "Design Engineer", company: "Linear", match: "91%", tag: "Remote" },
                { role: "UX Lead", company: "Figma", match: "88%", tag: "Hybrid" },
              ].map((job, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-xs font-bold text-primary">
                    {job.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{job.role}</p>
                    <p className="text-xs text-muted-foreground">{job.company} · {job.tag}</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{job.match}</span>
                </div>
              ))}
            </div>
          </div>
        </FeatureBlock>

        {/* Feature 3: Interview Prep */}
        <FeatureBlock
          title="Interview prep, powered by AI."
          desc="Practice with realistic mock interviews tailored to your target role. Get instant feedback, suggested improvements, and confidence scores."
          linkTo="/interview"
          linkText="Learn more"
        >
          <div className="rounded-2xl border border-border/30 bg-card p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">Live Mock Interview</span>
            </div>
            <div className="bg-secondary/30 rounded-xl p-4 mb-3">
              <p className="text-sm text-foreground">"Tell me about a time you led a cross-functional team to deliver a product under a tight deadline."</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Clarity", score: "8.5" },
                { label: "Structure", score: "7.8" },
                { label: "Impact", score: "9.1" },
              ].map((s, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-secondary/30">
                  <p className="text-lg font-bold text-primary">{s.score}</p>
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FeatureBlock>
      </div>
    </section>
  );
}

export default FeatureShowcase;
