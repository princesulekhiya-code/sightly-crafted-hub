import googleLogo from "@/assets/logos/google.png";
import microsoftLogo from "@/assets/logos/microsoft.png";
import amazonLogo from "@/assets/logos/amazon.png";
import metaLogo from "@/assets/logos/meta.png";
import appleLogo from "@/assets/logos/apple.png";
import netflixLogo from "@/assets/logos/netflix.png";
import spotifyLogo from "@/assets/logos/spotify.png";
import uberLogo from "@/assets/logos/uber.png";
import airbnbLogo from "@/assets/logos/airbnb.png";
import teslaLogo from "@/assets/logos/tesla.png";

const BRANDS = [
  { name: "Google", logo: googleLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Apple", logo: appleLogo },
  { name: "Netflix", logo: netflixLogo },
  { name: "Spotify", logo: spotifyLogo },
  { name: "Uber", logo: uberLogo },
  { name: "Airbnb", logo: airbnbLogo },
  { name: "Tesla", logo: teslaLogo },
];

export function TrustedBySection() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-6">
        Trusted by professionals at
      </p>
      <div className="relative">
        <div className="flex gap-16 items-center animate-[marquee-scroll_30s_linear_infinite] w-max">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap select-none cursor-pointer transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
