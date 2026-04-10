import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { FileText, Download, Eye, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  {
    name: "Executive Pro",
    category: "Professional",
    atsScore: 96,
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    popular: true,
  },
  {
    name: "Modern Minimal",
    category: "Creative",
    atsScore: 92,
    color: "from-accent/40 to-accent/10",
    accent: "bg-accent-foreground",
    popular: false,
  },
  {
    name: "Classic Elegant",
    category: "Traditional",
    atsScore: 98,
    color: "from-secondary to-secondary/50",
    accent: "bg-muted-foreground",
    popular: true,
  },
  {
    name: "Tech Stack",
    category: "Engineering",
    atsScore: 94,
    color: "from-primary/15 to-accent/20",
    accent: "bg-primary",
    popular: false,
  },
  {
    name: "Design Portfolio",
    category: "Creative",
    atsScore: 90,
    color: "from-accent/30 to-primary/10",
    accent: "bg-accent-foreground",
    popular: false,
  },
  {
    name: "Leadership",
    category: "Executive",
    atsScore: 97,
    color: "from-primary/25 to-secondary",
    accent: "bg-primary",
    popular: true,
  },
];

function TemplateCard({ template, index }: { template: typeof templates[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <ScrollReveal delay={index * 100} direction="up">
      <div
        className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Template Preview */}
        <div className={`relative aspect-[3/4] bg-gradient-to-br ${template.color} p-5 overflow-hidden`}>
          {/* Popular badge */}
          {template.popular && (
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 flex items-center gap-1 z-10">
              <Star className="w-3 h-3 text-primary fill-primary" />
              <span className="text-[10px] font-medium text-primary">Popular</span>
            </div>
          )}

          {/* Fake resume lines */}
          <div className="space-y-3">
            {/* Header area */}
            <div className={`h-3 ${template.accent} rounded-full w-2/3 opacity-30`} />
            <div className="h-2 bg-foreground/10 rounded-full w-1/2" />
            <div className="mt-4 h-px bg-foreground/10" />

            {/* Section */}
            <div className="mt-3 space-y-2">
              <div className={`h-2 ${template.accent} rounded-full w-1/3 opacity-25`} />
              {[75, 90, 60, 85, 70].map((w, i) => (
                <div key={i} className="h-1.5 bg-foreground/5 rounded-full" style={{ width: `${w}%` }} />
              ))}
            </div>

            {/* Section 2 */}
            <div className="mt-3 space-y-2">
              <div className={`h-2 ${template.accent} rounded-full w-2/5 opacity-25`} />
              {[80, 65, 90, 55].map((w, i) => (
                <div key={i} className="h-1.5 bg-foreground/5 rounded-full" style={{ width: `${w}%` }} />
              ))}
            </div>

            {/* Section 3 */}
            <div className="mt-3 space-y-2">
              <div className={`h-2 ${template.accent} rounded-full w-1/4 opacity-25`} />
              {[70, 85, 50].map((w, i) => (
                <div key={i} className="h-1.5 bg-foreground/5 rounded-full" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <button className="p-3 rounded-xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-colors">
              <Eye className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-foreground">{template.name}</h3>
            <span className="text-xs font-mono text-primary">{template.atsScore}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{template.category}</span>
            <div className="flex items-center gap-1">
              <div className="text-[10px] text-muted-foreground">ATS</div>
              <div className="w-12 h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${template.atsScore}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ResumeTemplatesSection() {
  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-primary">✦ Resume Templates</span>
            <h2 className="section-heading mt-4">
              ATS-optimized templates that get you <span className="warm-text">hired</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Professionally designed, recruiter-approved templates with 90%+ ATS compatibility scores.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <TemplateCard key={index} template={template} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/resume-builder"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
            >
              Browse All Templates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ResumeTemplatesSection;
