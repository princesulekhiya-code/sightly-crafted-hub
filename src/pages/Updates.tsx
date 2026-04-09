import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const UPDATES = [
  {
    date: "April 2, 2026",
    title: "AI Resume Builder is live!",
    desc: "Create ATS-optimized resumes with AI-generated bullet points, professional templates, and one-click export. Our AI analyzes thousands of successful resumes to craft compelling content tailored to your target role.",
    tag: "Feature",
  },
  {
    date: "March 18, 2026",
    title: "Smart Job Matching 2.0",
    desc: "Completely rebuilt job matching engine with improved accuracy. Now considers company culture fit, growth potential, and salary expectations alongside skills matching. Average match accuracy improved by 23%.",
    tag: "Update",
  },
  {
    date: "March 5, 2026",
    title: "Interview Coach improvements",
    desc: "Added industry-specific question banks for Tech, Finance, Healthcare, and Marketing. New confidence scoring algorithm provides more nuanced feedback on your interview responses.",
    tag: "Update",
  },
  {
    date: "February 19, 2026",
    title: "Mentor Network launch",
    desc: "Connect with verified industry mentors for resume reviews, career advice, and mock interviews. Browse mentors by industry, experience level, and availability.",
    tag: "Feature",
  },
  {
    date: "February 1, 2026",
    title: "Cover Letter Generator",
    desc: "Generate tailored cover letters that match job descriptions. AI analyzes the job posting and your resume to create compelling, personalized cover letters in seconds.",
    tag: "Feature",
  },
  {
    date: "January 15, 2026",
    title: "Skill Gap Analysis",
    desc: "New analytics dashboard showing skill trends in your target industry. See which skills are growing in demand and get personalized learning path recommendations.",
    tag: "Feature",
  },
  {
    date: "January 6, 2026",
    title: "Performance & reliability",
    desc: "Major infrastructure upgrade. Resume analysis is now 3x faster. Improved uptime to 99.95%. Better error handling and retry mechanisms across all AI features.",
    tag: "Improvement",
  },
  {
    date: "December 12, 2025",
    title: "JOBRA launches publicly",
    desc: "After months of beta testing with over 5,000 professionals, JOBRA is now available to everyone. AI-powered career intelligence that helps you land your dream job faster.",
    tag: "Launch",
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 cosmic-bg">
        <div className="max-w-4xl mx-auto">
          {/* Timeline dots on left */}
          <div className="space-y-12">
            {UPDATES.map((update, i) => (
              <div key={i} className="relative pl-8 border-l border-border/30">
                {/* Dot */}
                <div className={`absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[5px] ${i === 0 ? "bg-primary" : "bg-muted-foreground/30"}`} />

                {/* Date */}
                <p className="text-xs text-muted-foreground mb-2">{update.date}</p>

                {/* Tag */}
                <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full mb-3 ${
                  update.tag === "Feature" ? "bg-primary/10 text-primary" :
                  update.tag === "Launch" ? "bg-primary/20 text-primary" :
                  "bg-secondary text-muted-foreground"
                }`}>
                  {update.tag}
                </span>

                {/* Content */}
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{update.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{update.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
