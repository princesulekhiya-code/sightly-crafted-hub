import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { TrendingUp, Award, Target, BarChart3, ArrowRight, Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Welcome back, Marcus</h2>
        <p className="text-muted-foreground mb-8">Here's your career intelligence overview</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BarChart3, label: "ATS Score", value: "87%", color: "text-primary" },
            { icon: Target, label: "Job Matches", value: "47", color: "text-foreground" },
            { icon: Award, label: "Interviews", value: "12", color: "text-foreground" },
            { icon: TrendingUp, label: "Profile Views", value: "234", color: "text-foreground" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center">
              <s.icon className={`w-5 h-5 mx-auto mb-2 ${s.color}`} />
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: "Analyze Resume", href: "/resume-analysis", desc: "Upload & scan your resume" },
            { label: "Build Resume", href: "/resume-builder", desc: "Create ATS-friendly resumes" },
            { label: "Find Jobs", href: "/job-matches", desc: "AI-matched opportunities" },
            { label: "Practice Interview", href: "/interview", desc: "Mock interview prep" },
          ].map((a, i) => (
            <Link key={i} to={a.href} className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:border-primary/30 transition-all">
              <div>
                <p className="text-sm font-medium text-foreground">{a.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-4">AI Insights</h3>
        <div className="space-y-3">
          {[
            { tip: "Add more quantified achievements to your experience section", impact: "High" },
            { tip: "Your skills section could benefit from industry-specific keywords", impact: "Medium" },
            { tip: "Consider adding a professional summary at the top", impact: "High" },
          ].map((t, i) => (
            <div key={i} className="glass-card rounded-xl p-4 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-foreground">{t.tip}</p>
                <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${t.impact === "High" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>{t.impact} Impact</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
