import { ScrollReveal } from "./ScrollReveal";
import demoShot from "@/assets/demo-video-frame-v3.jpg";

export function DemoVideoSection() {
  return (
    <section className="py-16 px-0 relative overflow-hidden">
      <ScrollReveal>
        <div className="max-w-full mx-auto">
          <div className="text-center mb-10 px-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary/70 font-medium">✦ Product Preview</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-5 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Inside JOBRA
            </h2>
            <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto">
              A glimpse into the resume analysis experience.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={demoShot}
              alt="JOBRA resume analysis dashboard displayed on a laptop in a dark premium workspace"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />

            <div className="absolute left-6 right-6 bottom-6 flex flex-wrap gap-2 pointer-events-none">
              <span className="rounded-full border border-border/50 bg-background/70 px-3 py-1 text-[11px] text-foreground/80 backdrop-blur-sm">
                Resume Analysis
              </span>
              <span className="rounded-full border border-border/50 bg-background/70 px-3 py-1 text-[11px] text-foreground/80 backdrop-blur-sm">
                ATS Score
              </span>
              <span className="rounded-full border border-border/50 bg-background/70 px-3 py-1 text-[11px] text-foreground/80 backdrop-blur-sm">
                AI Suggestions
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default DemoVideoSection;
