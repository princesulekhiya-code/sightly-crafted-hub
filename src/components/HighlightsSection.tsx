import { FileSearch, Mic, Briefcase, FileText, Brain, TrendingUp, BarChart3, Users, Sparkles, Download } from "lucide-react";

/* Fey-style Highlights grid: feature cards with images replaced by icon+gradient blocks */
const HIGHLIGHTS = [
  { title: "AI Resume Analysis", icon: FileSearch, color: "from-primary/20 to-primary/5" },
  { title: "Smart Job Matching", icon: Briefcase, color: "from-accent to-accent/50" },
  { title: "Interview Coach", icon: Mic, color: "from-primary/10 to-secondary" },
  { title: "ATS Optimization", icon: BarChart3, color: "from-primary/15 to-card" },
  { title: "Career Insights", icon: Brain, color: "from-accent/80 to-secondary" },
  { title: "Resume Builder", icon: FileText, color: "from-primary/20 to-accent/30" },
  { title: "Mentor Network", icon: Users, color: "from-secondary to-accent" },
  { title: "Skill Analytics", icon: TrendingUp, color: "from-primary/10 to-secondary" },
  { title: "AI Cover Letters", icon: Sparkles, color: "from-accent to-primary/10" },
  { title: "Export & Share", icon: Download, color: "from-secondary to-card" },
];

export function HighlightsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-muted-foreground tracking-wide mb-2">Highlights</h3>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
          JOBRA turns complex hiring processes, scattered tools, and noisy job boards into instant career insights, clear guidance, and a beautiful interface—so anyone can land their dream role, without feeling overwhelmed.
        </p>

        {/* Scrollable feature cards - Fey style horizontal scroll */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center mb-2 transition-all group-hover:scale-[1.02]`}>
                <h.icon className="w-8 h-8 text-primary/60" />
              </div>
              <p className="text-sm font-medium text-foreground">{h.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
