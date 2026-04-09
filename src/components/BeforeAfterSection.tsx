import { ScrollReveal } from "./ScrollReveal";
import { AlertCircle, CheckCircle } from "lucide-react";

export function BeforeAfterSection() {
  const beforeItems = [
    { label: "Generic keywords", score: 35 },
    { label: "Poor formatting", score: 22 },
    { label: "No metrics", score: 18 },
    { label: "Missing sections", score: 40 },
  ];
  const afterItems = [
    { label: "Targeted keywords", score: 95 },
    { label: "ATS-optimized format", score: 92 },
    { label: "Impact metrics", score: 88 },
    { label: "Complete sections", score: 96 },
  ];

  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-primary">✦ Transformation</span>
          <h2 className="section-heading mt-4">Before & After JOBRA</h2>
          <p className="section-subheading mx-auto mt-4">See how our AI transforms your resume from overlooked to outstanding.</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Before */}
            <div className="glass-card rounded-2xl p-8 text-left border border-destructive/20">
              <h3 className="text-lg font-semibold text-destructive mb-6 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Before JOBRA</h3>
              {beforeItems.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-destructive">{item.score}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-destructive/60 rounded-full" style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
              <div className="mt-6 text-center">
                <span className="text-4xl font-bold text-destructive">28%</span>
                <p className="text-xs text-muted-foreground mt-1">Average ATS Score</p>
              </div>
            </div>

            {/* After */}
            <div className="glass-card rounded-2xl p-8 text-left border border-primary/20">
              <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> After JOBRA</h3>
              {afterItems.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{item.label}</span>
                    <span className="text-primary">{item.score}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
              <div className="mt-6 text-center">
                <span className="text-4xl font-bold text-primary">93%</span>
                <p className="text-xs text-muted-foreground mt-1">Average ATS Score</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default BeforeAfterSection;
