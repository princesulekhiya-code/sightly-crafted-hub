import { DashboardLayout } from "@/components/DashboardLayout";
import { Briefcase, MapPin, DollarSign, Clock, Bookmark, ExternalLink, Target, TrendingUp, CheckCircle, Search } from "lucide-react";

const JOBS = [
  { title: "Senior Product Designer", company: "DesignFlow Systems", location: "San Francisco, CA", salary: "$120k–$160k", posted: "2 days ago", match: 94, skills: ["Figma", "Design Systems", "User Research"] },
  { title: "Lead UX Designer", company: "TechCorp", location: "New York, NY", salary: "$130k–$170k", posted: "3 days ago", match: 89, skills: ["Sketch", "UX Strategy", "A/B Testing"] },
  { title: "Frontend Engineer", company: "StartupAI", location: "Remote", salary: "$140k–$180k", posted: "1 day ago", match: 92, skills: ["React", "TypeScript", "Tailwind"] },
  { title: "Data Scientist", company: "AnalyticsPro", location: "Austin, TX", salary: "$150k–$190k", posted: "5 days ago", match: 78, skills: ["Python", "ML", "SQL"] },
];

export default function JobMatchesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Smart Job Matches</h2>
        <p className="text-muted-foreground mb-8">AI-matched jobs based on your resume and skills</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[{ label: "Total Matches", value: "47", icon: Target }, { label: "High Match", value: "12", icon: TrendingUp }, { label: "Saved", value: "8", icon: Bookmark }, { label: "Applied", value: "5", icon: CheckCircle }].map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-4 text-center">
              <s.icon className="w-4 h-4 text-primary mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {JOBS.map((job, i) => (
            <div key={i} className="glass-card rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-foreground font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <div className="text-right">
                  <span className={`text-2xl font-bold ${job.match >= 90 ? "text-primary" : "text-foreground"}`}>{job.match}%</span>
                  <p className="text-xs text-muted-foreground">match</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.posted}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((s, j) => <span key={j} className="px-2.5 py-1 rounded-full bg-accent/50 text-xs text-accent-foreground">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
