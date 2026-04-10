import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

import evalSpelling from "@/assets/eval-spelling.jpg";
import evalCustomization from "@/assets/eval-customization.jpg";
import evalSummary from "@/assets/eval-summary.jpg";
import evalWordChoice from "@/assets/eval-wordchoice.jpg";
import evalFormatting from "@/assets/eval-formatting.jpg";
import evalResults from "@/assets/eval-results.jpg";
import evalLength from "@/assets/eval-length.jpg";
import evalCompleteness from "@/assets/eval-completeness.jpg";

const evaluationItems = [
  {
    title: "Spelling & Grammar",
    description: "Ensure an error-free resume to impress recruiters. Our checker detects mistakes you might miss.",
    image: evalSpelling,
  },
  {
    title: "Customization",
    description: "Enter a job title to extract key skills, keywords, and certifications, ensuring your resume aligns with ATS and hiring manager expectations.",
    image: evalCustomization,
  },
  {
    title: "Summary Statement",
    description: "Highlight your top skills and qualifications in a brief snapshot to capture the hiring manager's attention.",
    image: evalSummary,
  },
  {
    title: "Word Choice",
    description: "Use strong action verbs and avoid personal pronouns, fillers, and informal language for a professional tone.",
    image: evalWordChoice,
  },
  {
    title: "Formatting",
    description: "Ensure a polished, visually appealing layout that is ATS-friendly and recruiter-ready.",
    image: evalFormatting,
  },
  {
    title: "Measurable Results",
    description: "Showcase quantifiable achievements to highlight your impact and stand out from the competition.",
    image: evalResults,
  },
  {
    title: "Optimal Length",
    description: "Keep it concise—one page or ~1,100 characters for easy scanning by employers.",
    image: evalLength,
  },
  {
    title: "Completeness",
    description: "Include contact details, a summary, key skills, and work history for a well-rounded resume.",
    image: evalCompleteness,
  },
];

export function EvaluationSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-primary">✦ Comprehensive Analysis</span>
            <h2 className="section-heading mt-4">What Our ATS Resume Scanner Evaluates</h2>
            <p className="section-subheading mx-auto mt-4">
              Our resume grader analyzes your existing or newly created resume, checking key criteria and providing feedback to optimize it for both ATS and recruiters.
            </p>
          </div>

          {/* Top row: 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {evaluationItems.slice(0, 3).map((item, index) => (
              <EvalCard
                key={index}
                item={item}
                index={index}
                isActive={activeIndex === index}
                onEnter={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex(null)}
              />
            ))}
          </div>

          {/* Middle row: 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {evaluationItems.slice(3, 6).map((item, index) => {
              const i = index + 3;
              return (
                <EvalCard
                  key={i}
                  item={item}
                  index={i}
                  isActive={activeIndex === i}
                  onEnter={() => setActiveIndex(i)}
                  onLeave={() => setActiveIndex(null)}
                />
              );
            })}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {evaluationItems.slice(6, 8).map((item, index) => {
              const i = index + 6;
              return (
                <EvalCard
                  key={i}
                  item={item}
                  index={i}
                  isActive={activeIndex === i}
                  onEnter={() => setActiveIndex(i)}
                  onLeave={() => setActiveIndex(null)}
                />
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function EvalCard({
  item,
  index,
  isActive,
  onEnter,
  onLeave,
}: {
  item: (typeof evaluationItems)[0];
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <ScrollReveal delay={index * 60} direction="up">
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border group ${
          isActive
            ? "border-primary/50 scale-[1.02] shadow-lg shadow-primary/10"
            : "border-border/50 hover:border-primary/30"
        }`}
      >
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            width={640}
            height={512}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isActive ? "scale-110 brightness-90" : "scale-100 brightness-75"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative bg-card p-5 -mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
        </div>

        {/* Hover glow */}
        <div
          className={`absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
          }}
        />
      </div>
    </ScrollReveal>
  );
}

export default EvaluationSection;
