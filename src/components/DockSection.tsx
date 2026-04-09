import { useState } from "react";
import { FileSearch, Mic, Briefcase, BarChart3, Users, FileText, Brain, Settings } from "lucide-react";

/* Fey-style dock navigation with numbered sections */
const DOCK_ITEMS = [
  { icon: Brain, label: "AI Career Overview", desc: "See your personalized career dashboard with AI insights, daily job market recaps, and skill analytics. Updated continuously to keep you ahead." },
  { icon: FileSearch, label: "Resume Analysis", desc: "Upload your resume and get instant ATS compatibility scores, keyword optimization tips, and formatting suggestions powered by AI." },
  { icon: Briefcase, label: "Job Matching", desc: "AI-matched job opportunities based on your skills, experience, and career goals. See compatibility scores for every role." },
  { icon: Mic, label: "Interview Prep", desc: "Practice with AI-powered mock interviews. Get real-time feedback on your answers, body language tips, and industry-specific questions." },
  { icon: BarChart3, label: "Skill Analytics", desc: "Track your skill growth over time. See which skills are trending in your industry and get personalized learning recommendations." },
  { icon: FileText, label: "Resume Builder", desc: "Create ATS-optimized resumes with AI-generated content. Choose from professional templates and export in multiple formats." },
  { icon: Users, label: "Mentor Network", desc: "Connect with industry mentors for guidance, resume reviews, and career advice from professionals in your target field." },
  { icon: Settings, label: "Settings", desc: "Manage your subscription, notification preferences, and account details. Everything about your JOBRA account in one place." },
];

export function DockSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          From overwhelming to effortless.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Dock-style icon strip */}
          <div>
            {/* Fey-style stone/icon block */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-card to-secondary/50 border border-border/30 flex items-center justify-center mb-6 overflow-hidden relative">
              <div className="text-8xl font-bold text-primary/10 select-none">{active + 1}</div>
              <div className="absolute inset-0 flex items-center justify-center">
                {(() => { const Icon = DOCK_ITEMS[active].icon; return <Icon className="w-16 h-16 text-primary/40" />; })()}
              </div>
            </div>

            {/* Dock icons */}
            <div className="flex items-center justify-center gap-1 bg-secondary/50 rounded-2xl p-2">
              {DOCK_ITEMS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    i === active ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Description */}
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-foreground mb-3">{DOCK_ITEMS[active].label}</h3>
            <p className="text-muted-foreground leading-relaxed">{DOCK_ITEMS[active].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DockSection;
