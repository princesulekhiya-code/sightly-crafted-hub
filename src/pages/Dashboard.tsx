import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  BarChart3, Target, AlertCircle, Award, CheckCircle, Sparkles,
  ArrowRight, ArrowUpRight, Zap, BookOpen, RefreshCw
} from "lucide-react";

const scoreBreakdown = [
  { label: "Format", score: 95, color: "bg-primary" },
  { label: "Skills", score: 88, color: "bg-primary" },
  { label: "Experience", score: 95, color: "bg-primary" },
  { label: "Education", score: 90, color: "bg-primary" },
];

const keySkills = [
  "Java", "Spring Boot", "React.js", "JavaScript", "TypeScript",
  "HTML", "CSS", "REST API", "SQL", "NoSQL", "MySQL", "MongoDB",
];

const aiSuggestions = [
  "Consider adding a brief mention of familiarity or interest in Node.js, PHP, Ruby, and Vue.js if you have any exposure or are willing to learn, to broaden keyword matching for backend and frontend.",
  "If you have any experience or knowledge of GraphQL APIs, even basic, it would be beneficial to include it.",
  "While GitHub is mentioned, explicitly listing 'GitLab' if you have experience with it would further align with the version control requirements.",
  "Tailor the 'PROFILE' section slightly to mirror more of the exact phrasing from the job description's responsibilities.",
];

const strengths = [
  "Strong full-stack development expertise with a focus on Java/Spring Boot for backend and React.js for frontend, directly aligning with the role.",
  "Demonstrated ability to design, implement, and optimize APIs and databases, coupled with a solid understanding of application security.",
  "Proven experience in Agile environments, leveraging modern DevOps practices like Docker, Git, and CI/CD pipelines for efficient deployments.",
  "Quantifiable achievements and strong action verbs used throughout the professional experience, showcasing impactful contributions.",
];

const achievements = [
  "Web Page Designing & Development - MeitY & BECIL, Government of India",
  "Data Science Distribution (Anaconda) - SAGE University (Winter School Program)",
  "Nexus Program: Development, Blockchain & DSA - Cloud Nexus",
  "SAGE Influencer Award — Recognized for outstanding contribution to the college tech and innovation community (2024)",
];

const repeatWords = [
  { word: "development", count: 8 },
  { word: "experience", count: 6 },
  { word: "application", count: 5 },
  { word: "implement", count: 4 },
  { word: "design", count: 4 },
  { word: "optimize", count: 3 },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl space-y-6">
        {/* Hero Card */}
        <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 border border-primary/20 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
          {/* Score Circle */}
          <div className="relative w-28 h-28 shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="8"
                strokeDasharray={`${93 * 2.64} ${264}`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-primary">93%</span>
              <span className="text-[10px] text-muted-foreground font-medium">ATS SCORE</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-muted-foreground">Hello 👋</p>
            <h2 className="text-xl font-semibold text-foreground mb-2">Your Resume Analysis</h2>
            <p className="text-sm text-muted-foreground mb-4 max-w-xl">
              The resume presents a highly skilled Full-Stack Developer with 2+ years of experience, aligning strongly with the job description's requirements.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">Excellent</span>
              <Link to="/resume-builder" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-sm text-foreground hover:border-primary/50 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Upgrade Resume <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: BarChart3, label: "ATS Match Score", value: "93%", sub: "vs industry average", color: "text-primary" },
            { icon: Target, label: "Skills Identified", value: "15", sub: "key skills found", color: "text-green-400" },
            { icon: AlertCircle, label: "Missing Keywords", value: "1", sub: "areas to improve", color: "text-red-400" },
            { icon: Award, label: "Achievements", value: "5", sub: "certifications & wins", color: "text-primary" },
            { icon: RefreshCw, label: "Repeat Words", value: String(repeatWords.length), sub: "overused words", color: "text-yellow-400" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 flex items-start gap-3">
              <div className={`p-2 rounded-xl bg-primary/10 ${s.color}`}>
                <s.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[11px] text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Prediction */}
        <Link to="/interview" className="block glass-card rounded-2xl p-4 hover:border-primary/30 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI Prediction: 93% Interview Chance</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </Link>

        {/* Score Breakdown + AI Suggestions */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <BarChart3 className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Score Breakdown</h3>
            </div>
            <div className="space-y-5">
              {scoreBreakdown.map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" /> {item.label}
                    </span>
                    <span className="font-medium text-foreground">{item.score}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full transition-all duration-700`} style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">AI Suggestions</h3>
            </div>
            <div className="space-y-3">
              {aiSuggestions.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-semibold">{i + 1}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Skills + Missing Keywords */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <h3 className="text-base font-semibold text-foreground">Key Skills</h3>
              </div>
              <span className="text-xs bg-primary/20 text-primary px-2.5 py-1 rounded-full font-medium">{keySkills.length} found</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {keySkills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-full border border-primary/30 text-sm text-primary bg-primary/5">{skill}</span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <h3 className="text-base font-semibold text-foreground">Missing Keywords</h3>
              </div>
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">+1</span>
            </div>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-sm font-medium text-red-400">SKILLS</p>
              <p className="text-sm text-muted-foreground mt-1">You have 6 missing keywords in SKILLS Section</p>
            </div>
          </div>
        </div>

        {/* Repeat Words (NEW) */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <RefreshCw className="w-4 h-4 text-yellow-400" />
            <h3 className="text-base font-semibold text-foreground">Repeat Words</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {repeatWords.map((rw) => (
              <div key={rw.word} className="p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20 text-center">
                <p className="text-sm font-medium text-foreground capitalize">{rw.word}</p>
                <p className="text-lg font-bold text-yellow-400">{rw.count}x</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Tip: Reduce repetition by using synonyms or rephrasing sentences to improve readability.</p>
        </div>

        {/* Strengths + Achievements */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Resume Strengths</h3>
            </div>
            <div className="space-y-3">
              {strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Achievements & Certifications</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center py-4">
          <Link to="/resume-builder" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            <Sparkles className="w-4 h-4" />
            Upgrade Your Resume with AI
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
