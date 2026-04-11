import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap, RefreshCw, Briefcase, Users, Code, PenTool, ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-28 px-0">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-6">
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

          {/* Navigation arrows */}
          <div className="flex justify-end gap-2 px-6 mb-5">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Horizontal scroll */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide px-6 pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {audiences.map((item, i) => (
              <div
                key={item.title}
                className="group relative flex-shrink-0 w-[300px] rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-500 cursor-pointer"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Background image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={item.bg}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={512}
                    className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-85 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-5 bg-card/50">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default WhoIsItForSection;
