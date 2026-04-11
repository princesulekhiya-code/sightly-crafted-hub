import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { StatsSection } from "@/components/StatsSection";
import { ScoreSection } from "@/components/ScoreSection";
import { DemoVideoSection } from "@/components/DemoVideoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { EvaluationSection } from "@/components/EvaluationSection";
import { BeforeAfterResumeSection } from "@/components/BeforeAfterResumeSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { WhoIsItForSection } from "@/components/WhoIsItForSection";
import { IntegrationPartnersSection } from "@/components/IntegrationPartnersSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <ScoreSection />
      <DemoVideoSection />
      <FeaturesSection />
      <EvaluationSection />
      <BeforeAfterResumeSection />
      <HowItWorksSection />
      <RoadmapSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
