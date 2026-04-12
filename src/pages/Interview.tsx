import { DashboardLayout } from "@/components/DashboardLayout";
import { MessageSquare, Video, Target, Play, Clock, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

const MODES = [
  { icon: MessageSquare, title: "Behavioral Questions", desc: "Master the STAR method with common behavioral questions.", count: "50+ questions" },
  { icon: Target, title: "Technical Interview", desc: "Role-specific technical questions tailored to your target job.", count: "200+ questions" },
  { icon: Video, title: "Video Interview", desc: "Practice with video recording and get AI analysis on delivery.", count: "AI feedback" },
];

const SESSIONS = [
  { type: "Behavioral", date: "2 days ago", duration: "25 min", score: 87, questions: 8 },
  { type: "Technical", date: "5 days ago", duration: "40 min", score: 72, questions: 12 },
  { type: "Video", date: "1 week ago", duration: "15 min", score: 91, questions: 5 },
];

export default function InterviewPage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Interview Preparation</h2>
          <p className="text-sm text-secondary-foreground">AI-powered mock interviews to help you prepare and succeed</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {MODES.map((mode, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/60 p-5 cursor-pointer hover:border-primary/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <mode.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">{mode.title}</h3>
              <p className="text-xs text-secondary-foreground leading-relaxed mb-4">{mode.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">{mode.count}</span>
                <div className="flex items-center gap-1 text-primary text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Start <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Recent Sessions</h3>
          <div className="space-y-2.5">
            {SESSIONS.map((s, i) => (
              <div key={i} className="rounded-xl bg-card border border-border/60 p-4 flex items-center justify-between hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{s.type} Interview</p>
                    <p className="text-[11px] text-muted-foreground">{s.date} · {s.duration} · {s.questions} questions</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-lg font-bold ${s.score >= 80 ? "text-primary" : "text-foreground"}`}>{s.score}%</span>
                  <p className="text-[10px] text-muted-foreground">score</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="rounded-2xl bg-gradient-to-br from-[hsl(var(--primary)/0.08)] via-[hsl(var(--card))] to-[hsl(var(--primary)/0.04)] border border-border/60 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Pro Tips</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              "Practice at least 3 sessions per week for best results",
              "Review AI feedback carefully and work on weak areas",
              "Record yourself to improve body language and delivery",
            ].map((tip, i) => (
              <div key={i} className="p-3 rounded-xl bg-secondary/30 text-xs text-secondary-foreground leading-relaxed">{tip}</div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
