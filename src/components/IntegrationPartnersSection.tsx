import { ScrollReveal } from "./ScrollReveal";

const partners = [
  { name: "LinkedIn", icon: "in" },
  { name: "Indeed", icon: "ind" },
  { name: "Glassdoor", icon: "G" },
  { name: "Google Jobs", icon: "G" },
  { name: "ZipRecruiter", icon: "Z" },
  { name: "Monster", icon: "M" },
];

export function IntegrationPartnersSection() {
  return (
    <section className="py-20 px-6">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary/70 font-medium">
              ✦ Integrations
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mt-5 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Works With Your Favorite Platforms
            </h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
              Seamlessly optimized for top job platforms worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 60}>
                <div className="group flex flex-col items-center gap-3 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl border border-border/40 bg-card/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/60">
                    <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {partner.icon}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default IntegrationPartnersSection;
