import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HighlightsSection } from "@/components/HighlightsSection";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Briefcase, TrendingUp } from "lucide-react";

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Fey style */}
      <section className="pt-28 pb-16 px-6 text-center cosmic-bg">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          Career-ready tools,<br />before the career starts.
        </h1>
        <div className="mt-8">
          <Link to="/login" className="inline-block px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-accent/30 transition-all">
            Start studying
          </Link>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <span className="font-medium text-foreground">Free</span> for students with a .edu email. Terms apply.*
        </p>
      </section>

      {/* Highlights */}
      <HighlightsSection />

      <div className="divider-gradient max-w-6xl mx-auto" />

      {/* Beyond the Classroom */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Beyond the Classroom
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
            JOBRA gives you everything you need to build the perfect resume, prepare for interviews, and find internships—without expensive career coaching. Whether you're in class, in the library, or at home, JOBRA works wherever you do.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: GraduationCap, title: "Internship Matching", desc: "AI-matched internship opportunities based on your major, skills, and career goals." },
              { icon: BookOpen, title: "Resume for New Grads", desc: "Build compelling resumes even without years of experience. Highlight projects, coursework, and skills." },
              { icon: Briefcase, title: "First Job Prep", desc: "Tailored interview prep for entry-level roles. Practice common questions and get feedback." },
              { icon: TrendingUp, title: "Skill Development", desc: "Track in-demand skills in your target industry and get personalized learning paths." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gradient max-w-6xl mx-auto" />

      {/* Keyboard section - like Fey */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          You'll feel right at home.
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-12">
          Navigate with ease, search roles instantly, and breeze through interview prep. Built for the generation that grew up online.
        </p>

        {/* Command palette mockup */}
        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 border-b border-border/30 pb-3 mb-3">
              <span className="text-xs text-muted-foreground">⌘K</span>
              <span className="text-sm text-muted-foreground">Search roles, companies, or skills...</span>
            </div>
            <div className="space-y-2">
              {["Frontend Developer at Stripe", "UX Designer internship", "Data Science roles remote"].map((s, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/30 transition-colors">
                  <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Start building your future.
        </h2>
        <Link to="/login" className="inline-block px-8 py-4 rounded-full border border-border text-foreground font-semibold text-lg hover:bg-accent/30 transition-all">
          Get started free
        </Link>
      </section>

      <Footer />
    </div>
  );
}
