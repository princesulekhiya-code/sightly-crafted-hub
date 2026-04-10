import { SiGoogle, SiMicrosoft, SiAmazon, SiMeta, SiApple, SiNetflix, SiSpotify, SiUber, SiAirbnb, SiTesla } from "react-icons/si";

const BRANDS = [
  { name: "Google", icon: SiGoogle, color: "#4285F4" },
  { name: "Microsoft", icon: SiMicrosoft, color: "#00A4EF" },
  { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
  { name: "Meta", icon: SiMeta, color: "#0082FB" },
  { name: "Apple", icon: SiApple, color: "#A2AAAD" },
  { name: "Netflix", icon: SiNetflix, color: "#E50914" },
  { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
  { name: "Uber", icon: SiUber, color: "#FFFFFF" },
  { name: "Airbnb", icon: SiAirbnb, color: "#FF5A5F" },
  { name: "Tesla", icon: SiTesla, color: "#CC0000" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-6">
        Trusted by professionals at
      </p>
      <div className="relative">
        <div className="flex gap-16 items-center animate-[marquee-scroll_30s_linear_infinite] w-max">
          {[...BRANDS, ...BRANDS].map((brand, i) => {
            const Icon = brand.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap select-none group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <Icon
                  className="w-7 h-7 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--glow)]"
                  style={{ color: brand.color, "--glow": brand.color } as React.CSSProperties}
                />
                <span
                  className="text-lg font-bold transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--glow)]"
                  style={{ color: brand.color, "--glow": brand.color } as React.CSSProperties}
                >
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
