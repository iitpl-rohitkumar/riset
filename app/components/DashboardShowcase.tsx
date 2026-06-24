import { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";


interface Props {
  // Pass your 3 image URLs here. Falls back to a default array if omitted.
  images?: string[];
  className?: string;
}

/**
 * 3D-tilt dashboard frame with animated glow, conic border, floating badges,
 * and an image slider powered by Embla Carousel with a 100px-to-full zoom effect.
 */
export function DashboardShowcase({
  images = ["https://id-preview--6eec7381-4695-49a1-8688-d2b2a0fdefdf.lovable.app/__l5e/assets-v1/ac6a0892-1bf4-4f45-8897-aa80b514de03/dash-light.png", "https://id-preview--6eec7381-4695-49a1-8688-d2b2a0fdefdf.lovable.app/__l5e/assets-v1/ac6a0892-1bf4-4f45-8897-aa80b514de03/dash-light.png", "https://id-preview--6eec7381-4695-49a1-8688-d2b2a0fdefdf.lovable.app/__l5e/assets-v1/ac6a0892-1bf4-4f45-8897-aa80b514de03/dash-light.png"],
  className = "",
}: Props) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Sync Embla state with our custom dots
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Set initial state
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // 3D Tilt Effect
  const onMove = (e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 10 });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });

  // Auto-slide effect (changes every 4 seconds)
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  // Handler for clicking the slider dots
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div
      className={`relative group [perspective:1400px] ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {/* Custom Keyframe for 100px -> Original Width Effect */}
      <style>{`
        @keyframes zoomFrom100 {
          0% { 
            width: 100px; 
            opacity: 0.2;
          }
          100% { 
            width: 100%; 
            opacity: 1;
          }
        }
        .animate-zoom-100 {
          animation: zoomFrom100 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      {/* 3D Tilt Container */}
      <div
        ref={tiltRef}
        className="relative rounded-[20px] border border-white/20 shadow-elegant transition-transform duration-300 ease-out [transform-style:preserve-3d] will-change-transform"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        <div className="relative">
          {/* Embla Viewport */}
          <div className="overflow-hidden rounded-[20px]" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {images.map((img, idx) => (
                /* Added 'flex justify-center items-center' to ensure the 100px image expands from the absolute center */
                <div key={idx} className="flex-[0_0_100%] min-w-0 relative flex justify-center items-center">
                  <img
                    src={img}
                    alt={`Dashboard slide ${idx + 1}`}
                    /* Added 'mx-auto' and updated the animation class */
                    className={`block w-full h-auto object-cover mx-auto ${
                      idx === currentSlide ? "animate-zoom-100" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scan-line shimmer */}
          <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.25)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shimmer_2.5s_linear_infinite] rounded-[20px]" />
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              scrollTo(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
              idx === currentSlide
                ? "w-6 bg-brand opacity-100"
                : "w-2 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -left-4 z-30 glass-strong rounded-2xl px-3 py-2 shadow-glow animate-float">
        <div className="text-[10px] text-muted-foreground">Revenue MoM</div>
        <div className="font-display font-extrabold text-sm gradient-text">
          +12.6%
        </div>
      </div>
      <div
        className="absolute -bottom-4 -right-4 z-30 glass-strong rounded-2xl px-3 py-2 shadow-glow animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="text-[10px] text-muted-foreground">Active Clients</div>
        <div className="font-display font-extrabold text-sm gradient-text">
          500+
        </div>
      </div>
    </div>
  );
}