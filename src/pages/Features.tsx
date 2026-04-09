import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HighlightsSection } from "@/components/HighlightsSection";
import { DockSection } from "@/components/DockSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Link } from "react-router-dom";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center cosmic-bg">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          Everything you need<br />to land the job.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
          AI-powered career tools that turn the chaos of job hunting into a clear, beautiful, and efficient experience.
        </p>
      </section>

      <HighlightsSection />
      <div className="divider-gradient max-w-6xl mx-auto" />
      <DockSection />
      <div className="divider-gradient max-w-6xl mx-auto" />
      <FeatureShowcase />

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to get started?
        </h2>
        <Link to="/login" className="inline-block px-8 py-4 rounded-full border border-border text-foreground font-semibold text-lg hover:bg-accent/30 transition-all">
          Try it free
        </Link>
      </section>

      <Footer />
    </div>
  );
}
