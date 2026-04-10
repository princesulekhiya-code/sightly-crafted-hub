import { FaGoogle, FaMicrosoft, FaAmazon, FaMeta, FaApple, FaSpotify, FaUber, FaAirbnb } from "react-icons/fa6";
import { SiNetflix, SiTesla } from "react-icons/si";

const BRANDS = [
  { name: "Google", icon: FaGoogle, color: "#4285F4" },
  { name: "Microsoft", icon: FaMicrosoft, color: "#00A4EF" },
  { name: "Amazon", icon: FaAmazon, color: "#FF9900" },
  { name: "Meta", icon: FaMeta, color: "#0082FB" },
  { name: "Apple", icon: FaApple, color: "#A2AAAD" },
  { name: "Netflix", icon: SiNetflix, color: "#E50914" },
  { name: "Spotify", icon: FaSpotify, color: "#1DB954" },
  { name: "Uber", icon: FaUber, color: "#FFFFFF" },
  { name: "Airbnb", icon: FaAirbnb, color: "#FF5A5F" },
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
              <div key={i} className="flex items-center gap-2 whitespace-nowrap select-none">
                <Icon className="w-6 h-6" style={{ color: brand.color }} />
                <span className="text-lg font-bold" style={{ color: brand.color }}>
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
