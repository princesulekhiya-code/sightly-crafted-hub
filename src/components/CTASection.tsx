import { Link } from "react-router-dom";

/* Fey-style laptop mockup + CTA at bottom */
export function CTASection() {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
        Get started with JOBRA.
      </h2>
      <Link
        to="/login"
        className="inline-block px-8 py-4 rounded-full border border-border text-foreground font-semibold text-lg hover:bg-accent/30 transition-all"
      >
        Try it free
      </Link>

      {/* Laptop mockup */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="relative">
          <div className="rounded-t-2xl border border-border/30 border-b-0 bg-card overflow-hidden shadow-2xl shadow-black/40">
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warm/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="text-[10px] text-muted-foreground ml-2">JOBRA — Career Dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {["Resume Score: 87%", "24 Job Matches", "6 Interviews"].map((s, i) => (
                  <div key={i} className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-xs font-medium text-foreground">{s}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((l) => (
                  <div key={l} className="h-2 bg-secondary/30 rounded-full" style={{ width: `${50 + l * 10}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-4 bg-gradient-to-b from-border/30 to-border/10 rounded-b-lg" />
          <div className="h-2 bg-border/5 rounded-b-2xl mx-12" />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
