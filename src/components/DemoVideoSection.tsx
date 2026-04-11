import { useState, useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Play, Pause } from "lucide-react";
import demoVideoAsset from "@/assets/demo-video.mp4.asset.json";

export function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary/70 font-medium">✦ See It In Action</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-5 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Watch how JOBRA works
            </h2>
            <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto">
              From resume upload to AI optimization — see the magic in seconds.
            </p>
          </div>

          {/* Video */}
          <div
            className="relative rounded-2xl overflow-hidden border border-border/30 cursor-pointer group"
            onClick={togglePlay}
          >
            <div className="aspect-video">
              <video
                ref={videoRef}
                src={demoVideoAsset.url}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>

            {/* Play/Pause overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-background/20 transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              <div className="w-16 h-16 rounded-full border border-primary/25 bg-background/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-foreground/80" />
                ) : (
                  <Play className="w-6 h-6 text-foreground/80 ml-1" />
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default DemoVideoSection;
