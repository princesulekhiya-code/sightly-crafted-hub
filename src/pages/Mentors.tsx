import { DashboardLayout } from "@/components/DashboardLayout";
import { Star, Calendar } from "lucide-react";

const MENTORS = [
  { name: "Sarah Chen", title: "Senior Product Designer", company: "Meta", rating: 4.9, reviews: 47, expertise: ["Product Design", "Design Systems"], price: "$120/hr", available: true },
  { name: "Michael Rodriguez", title: "Design Director", company: "Google", rating: 5.0, reviews: 63, expertise: ["Leadership", "Strategy"], price: "$150/hr", available: false },
  { name: "Emily Zhang", title: "UX Lead", company: "Apple", rating: 4.8, reviews: 35, expertise: ["UX Research", "Accessibility"], price: "$100/hr", available: true },
  { name: "David Kim", title: "Staff Engineer", company: "Netflix", rating: 4.9, reviews: 52, expertise: ["React", "System Design"], price: "$130/hr", available: true },
];

export default function MentorsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Find a Mentor</h2>
        <p className="text-muted-foreground mb-8">Connect with industry professionals for personalized career guidance</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {MENTORS.map((m, i) => (
            <div key={i} className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-foreground font-semibold">{m.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${m.available ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
                      {m.available ? "Available" : "Busy"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.title} at {m.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-primary fill-primary" />{m.rating} ({m.reviews})</span>
                <span>{m.price}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {m.expertise.map((e, j) => <span key={j} className="px-2.5 py-1 rounded-full bg-accent/50 text-xs text-accent-foreground">{e}</span>)}
              </div>
              <button className="w-full py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
