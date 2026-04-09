import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { DockSection } from "@/components/DockSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HighlightsSection />
      <div className="divider-gradient max-w-6xl mx-auto" />
      <DockSection />
      <div className="divider-gradient max-w-6xl mx-auto" />
      <FeatureShowcase />
      <div className="divider-gradient max-w-6xl mx-auto" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
