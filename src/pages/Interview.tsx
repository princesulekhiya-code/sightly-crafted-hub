import { DashboardLayout } from "@/components/DashboardLayout";
import { MessageSquare, Video, Target, Play, Clock, TrendingUp, ArrowRight } from "lucide-react";

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
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Interview Preparation</h2>
        <p className="text-muted-foreground mb-8">AI-powered mock interviews to help you prepare and succeed</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {MODES.map((mode, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-all group">
              <mode.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">{mode.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{mode.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{mode.count}</span>
                <Play className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Sessions</h3>
        <div className="space-y-3">
          {SESSIONS.map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{s.type} Interview</p>
                <p className="text-xs text-muted-foreground">{s.date} · {s.duration} · {s.questions} questions</p>
              </div>
              <div className="text-right">
                <span className={`text-xl font-bold ${s.score >= 80 ? "text-primary" : "text-foreground"}`}>{s.score}%</span>
                <p className="text-xs text-muted-foreground">score</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
