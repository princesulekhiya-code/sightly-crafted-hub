import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Sparkles, ArrowUpRight } from "lucide-react";

type Category = "all" | "simple" | "modern" | "creative";

const templates = [
  // Simple
  { name: "Classic", category: "simple" as const, desc: "Center-aligned name, serif font, clean section dividers" },
  { name: "Harvard", category: "simple" as const, desc: "Classic academic style with centered headers and thin lines" },
  { name: "Executive", category: "simple" as const, desc: "Professional serif layout for senior executives" },
  { name: "Finance", category: "simple" as const, desc: "Elegant layout for banking & finance professionals" },
  { name: "Legal", category: "simple" as const, desc: "Traditional format preferred by law firms" },
  { name: "Academic", category: "simple" as const, desc: "Structured layout for academic and research roles" },
  // Modern
  { name: "Starter", category: "modern" as const, desc: "Clean modern layout with sidebar highlights" },
  { name: "Developer", category: "modern" as const, desc: "Tech-focused with skills grid and project links" },
  { name: "Designer", category: "modern" as const, desc: "Visual layout with portfolio section integration" },
  { name: "Analyst", category: "modern" as const, desc: "Data-driven layout with metrics and charts" },
  { name: "Marketing", category: "modern" as const, desc: "Creative header with campaign highlights" },
  { name: "Product", category: "modern" as const, desc: "Outcome-focused with roadmap timeline" },
  { name: "Startup", category: "modern" as const, desc: "Bold layout for fast-paced environments" },
  { name: "Remote", category: "modern" as const, desc: "Highlights remote tools and async communication" },
  // Creative
  { name: "Portfolio", category: "creative" as const, desc: "Visual-first with image grid and color accents" },
  { name: "Infographic", category: "creative" as const, desc: "Data visualization with progress bars and icons" },
  { name: "Minimal Art", category: "creative" as const, desc: "Whitespace-heavy with bold typography" },
  { name: "Dark Mode", category: "creative" as const, desc: "Inverted colors for a standout impression" },
  { name: "Timeline", category: "creative" as const, desc: "Chronological flow with vertical timeline" },
  { name: "Split", category: "creative" as const, desc: "Two-column split with accent color sidebar" },
  { name: "Gradient", category: "creative" as const, desc: "Subtle gradient header with modern typography" },
  { name: "Card Style", category: "creative" as const, desc: "Section cards with rounded corners and shadows" },
];

const categories: { key: Category; label: string; count: number }[] = [
  { key: "all", label: "All Templates", count: templates.length },
  { key: "simple", label: "Simple", count: templates.filter(t => t.category === "simple").length },
  { key: "modern", label: "Modern", count: templates.filter(t => t.category === "modern").length },
  { key: "creative", label: "Creative", count: templates.filter(t => t.category === "creative").length },
];

// Generate unique skeleton lines per template for visual variety
function SkeletonPreview({ seed, category }: { seed: number; category: string }) {
  const isModern = category === "modern";
  const isCreative = category === "creative";

  return (
    <div className="w-full h-full bg-[hsl(0_0%_92%)] rounded-lg p-5 flex flex-col gap-2 overflow-hidden">
      {/* Header area */}
      {isCreative ? (
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-[hsl(0_0%_75%)]" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3 bg-[hsl(0_0%_30%)] rounded-full w-3/5" />
            <div className="h-2 bg-[hsl(0_0%_70%)] rounded-full w-2/5" />
          </div>
        </div>
      ) : isModern ? (
        <div className="mb-2 space-y-1.5">
          <div className="h-3.5 bg-[hsl(0_0%_30%)] rounded-full w-3/5" />
          <div className="h-2 bg-[hsl(0_0%_70%)] rounded-full w-2/5" />
          <div className="h-[1px] bg-[hsl(200_60%_55%)] w-full mt-1" />
        </div>
      ) : (
        <div className="text-center mb-2 space-y-1.5">
          <div className="h-3.5 bg-[hsl(0_0%_30%)] rounded-full w-3/5 mx-auto" />
          <div className="h-2 bg-[hsl(0_0%_70%)] rounded-full w-2/5 mx-auto" />
          <div className="h-[1px] bg-[hsl(0_0%_60%)] w-full mt-1" />
        </div>
      )}

      {/* Content lines */}
      {isModern ? (
        <div className="flex gap-3 flex-1">
          <div className="w-1/3 space-y-2">
            {[60, 80, 50, 70, 45].map((w, i) => (
              <div key={i} className="h-1.5 bg-[hsl(0_0%_78%)] rounded-full" style={{ width: `${w + (seed * 3 + i * 7) % 20}%` }} />
            ))}
          </div>
          <div className="flex-1 space-y-2">
            {[85, 70, 90, 60, 75, 55, 80].map((w, i) => (
              <div key={i} className="h-1.5 bg-[hsl(0_0%_78%)] rounded-full" style={{ width: `${w + (seed * 5 + i * 11) % 15}%` }} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-2 flex-1">
          {[85, 70, 95, 60, 80, 50, 90, 65, 75].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full" style={{
              width: `${w + (seed * 7 + i * 13) % 20}%`,
              backgroundColor: i % 4 === 0 ? "hsl(0 0% 30%)" : "hsl(0 0% 78%)"
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ResumeBuilderPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all" ? templates : templates.filter(t => t.category === activeCategory);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Choose a Template for Your Resume
          </h2>
          <p className="text-sm text-secondary-foreground max-w-lg mx-auto">
            Select a professional template. Your improved resume data will be automatically filled in.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.2)]"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-border/60"
              }`}
            >
              {cat.label}
              <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.key ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((t, i) => (
            <div key={t.name} className="group rounded-2xl bg-card border border-border/60 overflow-hidden hover:border-primary/30 transition-all duration-300">
              {/* Use Template Button on top */}
              <div className="p-2">
                <Link to="/resume-editor" className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-primary/10 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20">
                  <Sparkles className="w-3 h-3" />
                  Use this template
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Preview */}
              <div className="px-3 pb-2">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <SkeletonPreview seed={i} category={t.category} />
                </div>
              </div>

              {/* Info */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground">{t.name}</h3>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium bg-secondary px-1.5 py-0.5 rounded">
                    {t.category}
                  </span>
                </div>
                <p className="text-[11px] text-secondary-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
