const BRANDS = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple",
  "Netflix", "Spotify", "Uber", "Airbnb", "Tesla",
];

export function TrustedBySection() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-6">Trusted by professionals at</p>
      <div className="relative">
        <div className="flex gap-16 animate-[marquee-scroll_30s_linear_infinite] w-max">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="text-lg font-semibold text-muted-foreground/40 whitespace-nowrap select-none">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
