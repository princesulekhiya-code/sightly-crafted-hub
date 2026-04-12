import { DashboardLayout } from "@/components/DashboardLayout";
import { Star, Calendar, MapPin, ExternalLink } from "lucide-react";

const MENTORS = [
  { name: "Sarah Chen", title: "Senior Product Designer", company: "Meta", rating: 4.9, reviews: 47, expertise: ["Product Design", "Design Systems"], price: "$120/hr", available: true },
  { name: "Michael Rodriguez", title: "Design Director", company: "Google", rating: 5.0, reviews: 63, expertise: ["Leadership", "Strategy"], price: "$150/hr", available: false },
  { name: "Emily Zhang", title: "UX Lead", company: "Apple", rating: 4.8, reviews: 35, expertise: ["UX Research", "Accessibility"], price: "$100/hr", available: true },
  { name: "David Kim", title: "Staff Engineer", company: "Netflix", rating: 4.9, reviews: 52, expertise: ["React", "System Design"], price: "$130/hr", available: true },
];

export default function MentorsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Find a Mentor</h2>
          <p className="text-sm text-secondary-foreground">Connect with industry professionals for personalized career guidance</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {MENTORS.map((m, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/60 p-5 hover:border-primary/20 transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground truncate">{m.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${m.available ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>
                      {m.available ? "Available" : "Busy"}
                    </span>
                  </div>
                  <p className="text-xs text-secondary-foreground">{m.title} at {m.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-primary" />{m.rating} ({m.reviews})</span>
                <span className="text-accent-foreground font-medium">{m.price}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {m.expertise.map((e, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-full bg-secondary/30 border border-border/50 text-[10px] text-accent-foreground">{e}</span>
                ))}
              </div>
              <button className="w-full py-2.5 rounded-xl bg-primary/90 text-primary-foreground text-xs font-medium hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
