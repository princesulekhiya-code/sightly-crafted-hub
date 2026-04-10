const BRANDS = [
  { name: "Google", color: "#4285F4" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Meta", color: "#0082FB" },
  { name: "Apple", color: "#A2AAAD" },
  { name: "Netflix", color: "#E50914" },
  { name: "Spotify", color: "#1DB954" },
  { name: "Uber", color: "#FFFFFF" },
  { name: "Airbnb", color: "#FF5A5F" },
  { name: "Tesla", color: "#CC0000" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-6">Trusted by professionals at</p>
      <div className="relative">
        <div className="flex gap-16 animate-[marquee-scroll_30s_linear_infinite] w-max">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="text-lg font-bold whitespace-nowrap select-none"
              style={{ color: brand.color }}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
