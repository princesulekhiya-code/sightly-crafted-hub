import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap, RefreshCw, Briefcase, Users, Code, PenTool } from "lucide-react";

import whoFreshGraduates from "@/assets/who-fresh-graduates.jpg";
import whoCareerSwitchers from "@/assets/who-career-switchers.jpg";
import whoProfessionals from "@/assets/who-professionals.jpg";
import whoTechIt from "@/assets/who-tech-it.jpg";
import whoFreelancers from "@/assets/who-freelancers.jpg";
import whoCoaches from "@/assets/who-coaches.jpg";

const audiences = [
  {
    icon: GraduationCap,
    title: "Fresh Graduates",
    description: "Stand out from thousands of applicants with an ATS-optimized resume that highlights your potential.",
    bg: whoFreshGraduates,
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    description: "Reframe your experience for a new industry. Our AI identifies transferable skills that matter.",
    bg: whoCareerSwitchers,
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description: "Level up your resume for that next promotion or dream role with data-driven improvements.",
    bg: whoProfessionals,
  },
  {
    icon: Code,
    title: "Tech & IT Professionals",
    description: "Showcase technical skills effectively with keyword optimization tailored for tech recruiters.",
    bg: whoTechIt,
  },
  {
    icon: PenTool,
    title: "Freelancers & Creatives",
    description: "Present your diverse portfolio of work in a structured, recruiter-friendly format.",
    bg: whoFreelancers,
  },
  {
    icon: Users,
    title: "Career Coaches & Mentors",
    description: "Empower your clients with AI-powered resume insights and actionable feedback at scale.",
    bg: whoCoaches,
  },
];

export function WhoIsItForSection() {
  return (
    <section className="py-28 px-6">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary/70 font-medium">
              ✦ Built For You
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-5 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who Is It For?
            </h2>
            <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto">
              Whether you're just starting out or pivoting your career, JOBRA adapts to your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="group relative rounded-2xl border border-border/40 overflow-hidden min-h-[240px] transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Background image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={item.bg}
                      alt=""
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/40" />

                  {/* Content */}
                  <div className="relative z-10 p-7 flex flex-col justify-end h-full min-h-[240px]">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/25">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default WhoIsItForSection;
