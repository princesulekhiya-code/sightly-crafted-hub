import { DashboardLayout } from "@/components/DashboardLayout";
import { Plus, Eye, Download, Sparkles } from "lucide-react";

const templates = [
  { name: "Classic", color: "bg-primary/10" },
  { name: "Modern", color: "bg-accent" },
  { name: "Minimal", color: "bg-secondary" },
  { name: "Professional", color: "bg-primary/5" },
];

export default function ResumeBuilderPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Resume Builder</h2>
        <p className="text-muted-foreground mb-8">Create ATS-optimized professional resumes</p>

        <div className="flex items-center gap-3 mb-6">
          <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Resume
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {templates.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 cursor-pointer hover:border-primary/30 transition-all">
              <div className={`${t.color} rounded-xl aspect-[3/4] mb-3 p-3`}>
                {[1, 2, 3, 4].map((l) => (
                  <div key={l} className="h-2 bg-foreground/5 rounded-full mb-2" style={{ width: `${60 + Math.random() * 30}%` }} />
                ))}
              </div>
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">ATS Optimized</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> AI Resume Writer
          </h3>
          <p className="text-sm text-muted-foreground mb-6">Let our AI help you craft compelling bullet points and summaries based on your experience.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Job Title</label>
              <input type="text" placeholder="e.g. Senior Product Designer" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Key Skills</label>
              <input type="text" placeholder="e.g. React, TypeScript, Figma" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>
          <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all">Generate Content</button>
          <div className="mt-4 p-4 rounded-xl bg-secondary/50 min-h-[80px]">
            <p className="text-sm text-muted-foreground italic">AI-generated content will appear here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
