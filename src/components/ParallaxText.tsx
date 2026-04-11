import { useEffect, useRef, useState, type ReactNode } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number; // 0.05–0.15 recommended
  className?: string;
}

export function ParallaxText({ children, speed = 0.08, className = "" }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const el = ref.current;
          if (el) {
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const viewCenter = window.innerHeight / 2;
            setOffset((center - viewCenter) * -speed);
          }
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)`, willChange: "transform", transition: "transform 0.1s linear" }}
    >
      {children}
    </div>
  );
}

export default ParallaxText;
