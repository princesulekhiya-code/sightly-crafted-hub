import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ScoreSection } from "@/components/ScoreSection";

import { FeaturesSection } from "@/components/FeaturesSection";
import { EvaluationSection } from "@/components/EvaluationSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ResumeTemplatesSection } from "@/components/ResumeTemplatesSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ScoreSection />
      <FeaturesSection />
      <FeaturesSection />
      <EvaluationSection />
      <HowItWorksSection />
      <RoadmapSection />
      <TestimonialsSection />
      <ResumeTemplatesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
