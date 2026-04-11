import { useState, useEffect, useCallback } from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "features", label: "Features" },
  { id: "evaluation", label: "Analysis" },
  { id: "demo", label: "Preview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "who-is-it-for", label: "Audience" },
  { id: "testimonials", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Get Started" },
];

export function ScrollNavDots() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    setVisible(scrollY > 300);

    // Find active section
    let current = "hero";
    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          current = section.id;
        }
      }
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Scroll progress bar at top */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[2px] bg-transparent">
        <div
          className="h-full transition-all duration-150"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(var(--warm-dim)), hsl(var(--primary)), hsl(var(--warm-light)))",
          }}
        />
      </div>

      {/* Side navigation dots */}
      <nav
        className={`fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 transition-all duration-500 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-3"
              title={section.label}
            >
              {/* Label - shows on hover */}
              <span
                className={`text-[10px] tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "text-primary opacity-100"
                    : "text-muted-foreground opacity-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>

              {/* Dot */}
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                    : "w-1.5 h-1.5 bg-muted-foreground/40 group-hover:bg-muted-foreground"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default ScrollNavDots;
