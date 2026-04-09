import { Scan, TrendingUp, Briefcase, Target, FileText, BarChart3 } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  { icon: Scan, title: "Resume Scan", description: "Upload your resume and our AI will parse through, identifying key qualifications and providing insights.", num: "01" },
  { icon: TrendingUp, title: "Career Trajectory", description: "Get tailored career suggestions based on current skills and industry trends.", num: "02" },
  { icon: Target, title: "Smart Matching", description: "Understand where your career could lead, get pathways curated from market data.", num: "03" },
  { icon: Briefcase, title: "Job Compatibility", description: "Match your skills with job listings, see compatibility scores for various roles.", num: "04" },
  { icon: FileText, title: "Resume Builder", description: "Build a compelling resume. Let our AI help you craft impactful professional documents.", num: "05" },
  { icon: BarChart3, title: "Industry Analytics", description: "Stay informed about industry trends, explore which sectors are hiring and growing.", num: "06" },
];

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-primary">✦ Powerful Tools</span>
            <h2 className="section-heading mt-4">Everything you need to land your dream job</h2>
            <p className="section-subheading mx-auto mt-4">Six powerful AI tools working together to analyze, optimize, and position your career for success.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              const Icon = feature.icon;
              return (
                <div key={index} className="relative">
                  <div
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`glow-border-hover glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${isActive ? "scale-[1.02]" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">{feature.num}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default FeaturesSection;
