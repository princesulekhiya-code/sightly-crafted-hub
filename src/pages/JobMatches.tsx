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
      <div className="max-w-5xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Smart Job Matches</h2>
          <p className="text-sm text-secondary-foreground">AI-matched jobs based on your resume and skills</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total Matches", value: "47", icon: Target },
            { label: "High Match", value: "12", icon: TrendingUp },
            { label: "Saved", value: "8", icon: Bookmark },
            { label: "Applied", value: "5", icon: CheckCircle },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/60 p-4 text-center hover:border-primary/20 transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{s.value}</p>
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border/60">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search jobs by title, company, or skills..." className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1" />
        </div>

        <div className="space-y-3">
          {JOBS.map((job, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/60 p-5 hover:border-primary/20 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{job.title}</h3>
                  <p className="text-xs text-secondary-foreground mt-0.5">{job.company}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xl font-bold ${job.match >= 90 ? "text-primary" : "text-foreground"}`}>{job.match}%</span>
                  <p className="text-[10px] text-muted-foreground">match</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] text-secondary-foreground mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-muted-foreground" />{job.location}</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-muted-foreground" />{job.salary}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-muted-foreground" />{job.posted}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((s, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-full bg-secondary/30 border border-border/50 text-[10px] text-accent-foreground">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
