import { SiGoogle, SiMeta, SiApple, SiNetflix, SiSpotify, SiUber, SiAirbnb, SiTesla } from "react-icons/si";
import { FaMicrosoft, FaAmazon } from "react-icons/fa6";

const BRANDS = [
  { name: "Google", icon: SiGoogle },
  { name: "Microsoft", icon: FaMicrosoft },
  { name: "Amazon", icon: FaAmazon },
  { name: "Meta", icon: SiMeta },
  { name: "Apple", icon: SiApple },
  { name: "Netflix", icon: SiNetflix },
  { name: "Spotify", icon: SiSpotify },
  { name: "Uber", icon: SiUber },
  { name: "Airbnb", icon: SiAirbnb },
  { name: "Tesla", icon: SiTesla },
];

export function TrustedBySection() {
  return (
    <section className="py-14 border-y border-border/30 overflow-hidden">
      <p className="text-center text-[11px] text-muted-foreground/50 tracking-[0.3em] uppercase mb-8 font-medium">
        Trusted by professionals at
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-14 items-center animate-[marquee-scroll_35s_linear_infinite] w-max">
          {[...BRANDS, ...BRANDS].map((brand, i) => {
            const Icon = brand.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 whitespace-nowrap select-none group cursor-default transition-all duration-500 opacity-30 hover:opacity-60"
              >
                <Icon className="w-5 h-5 text-foreground/80 transition-all duration-500" />
                <span className="text-sm font-medium text-foreground/80 tracking-wide transition-all duration-500">
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
