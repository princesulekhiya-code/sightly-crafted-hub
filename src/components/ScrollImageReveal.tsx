import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollImageRevealProps {
  children: ReactNode;
  className?: string;
}

export function ScrollImageReveal({ children, className = "" }: ScrollImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="transition-all duration-1000 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateY(0) scale(1)"
            : "translateY(30px) scale(1.08)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ScrollImageReveal;
