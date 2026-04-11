import { ScrollReveal } from "./ScrollReveal";
import demoShot from "@/assets/demo-video-frame-v3.jpg";

export function DemoVideoSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary/70 font-medium">✦ Product Preview</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-5 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Inside JOBRA
            </h2>
            <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto">
              Clean preview of the resume analysis experience without the broken mixed-frame video.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-card/20">
            <img
              src={demoShot}
              alt="JOBRA resume analysis dashboard displayed on a laptop in a dark premium workspace"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/10 pointer-events-none" />

            <div className="absolute left-5 right-5 bottom-5 flex flex-wrap gap-2 pointer-events-none">
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
