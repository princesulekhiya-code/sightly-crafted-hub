import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Upload, FileText, CheckCircle2, X, BarChart3, Users, Briefcase, Mic, Brain, TrendingUp } from "lucide-react";

/* ── Fey-style Hero: Large app mockup + minimal tagline below ── */

function AppMockup() {
  return (
    <div className="relative mx-auto max-w-5xl px-4">
      {/* Main dashboard mockup */}
      <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl shadow-black/50">
        <div className="bg-card p-6 md:p-8">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Welcome back, Sarah</p>
                <p className="text-xs text-muted-foreground">Your career dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Resume Score</span>
              <span className="text-lg font-bold text-primary">87/100</span>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {/* Left: Stats + Chart area */}
            <div className="md:col-span-3 space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "ATS Score", value: "87%", change: "+12%", icon: BarChart3 },
                  { label: "Job Matches", value: "24", change: "New", icon: Briefcase },
                  { label: "Interviews", value: "6", change: "This week", icon: Mic },
                ].map((stat, i) => (
                  <div key={i} className="bg-secondary/50 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <stat.icon className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <span className="text-[10px] text-primary">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Application Progress</span>
                  <div className="flex gap-2">
                    {["1W", "1M", "3M", "YTD"].map((t) => (
                      <span key={t} className={`text-[10px] px-2 py-0.5 rounded ${t === "1M" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}>{t}</span>
                    ))}
                  </div>
                </div>
                {/* Fake chart line */}
                <svg viewBox="0 0 400 80" className="w-full h-16">
                  <path d="M0,60 C50,55 80,40 120,45 C160,50 200,20 250,25 C300,30 350,10 400,15" fill="none" stroke="hsl(25, 55%, 58%)" strokeWidth="2" />
                  <path d="M0,60 C50,55 80,40 120,45 C160,50 200,20 250,25 C300,30 350,10 400,15 L400,80 L0,80Z" fill="url(#chartGrad)" opacity="0.1" />
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(25, 55%, 58%)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Sector performance */}
              <div className="space-y-2">
                {[
                  { label: "Technology", score: "92%", bar: 92 },
                  { label: "Product", score: "78%", bar: 78 },
                  { label: "Design", score: "85%", bar: 85 },
                  { label: "Marketing", score: "64%", bar: 64 },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-20">{s.label}</span>
                    <span className={`text-xs font-medium ${s.bar >= 80 ? "text-primary" : "text-foreground"}`}>{s.score}</span>
                    <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary/40 rounded-full" style={{ width: `${s.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI Insights feed (like Fey's news feed) */}
            <div className="md:col-span-2 space-y-3">
              {/* AI Summary card */}
              <div className="bg-secondary/50 rounded-xl p-4 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Career Insight</span>
                  <span className="text-[10px] text-muted-foreground ml-auto">Just now</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your resume's ATS compatibility improved by 12% this week. Adding quantified achievements in your latest role could push your score above 90%.
                </p>
              </div>

              {/* Job match cards */}
              {[
                { company: "Google", role: "Sr. Product Designer", match: "94%" },
                { company: "Stripe", role: "Frontend Engineer", match: "91%" },
                { company: "Notion", role: "Design Engineer", match: "88%" },
              ].map((job, i) => (
                <div key={i} className="bg-secondary/30 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-xs font-bold text-primary">
                    {job.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{job.role}</p>
                    <p className="text-[10px] text-muted-foreground">{job.company} · Remote</p>
                  </div>
                  <span className="text-xs font-bold text-primary">{job.match}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 cosmic-bg">
      {/* App Mockup - Fey style: large screenshot first */}
      <AppMockup />

      {/* Tagline below mockup - Fey style */}
      <div className="text-center mt-16 px-6">
        <p className="text-sm text-muted-foreground tracking-wide">JOBRA</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Land your dream career.
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
