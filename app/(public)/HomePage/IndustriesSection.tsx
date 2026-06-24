
import {
  HeartPulse,
  Truck,
  Building2,
  Factory,
  Landmark,
  UtensilsCrossed,
  Store,
  Hotel,
  School,
  Pill,
} from "lucide-react";
import Link from "next/link";

const industries = [
  { name: "Retail & Supermarkets", icon: Store },
  { name: "Hospitals & Clinics", icon: HeartPulse },
  { name: "Schools & Universities", icon: School },
  { name: "Hotels & Hospitality", icon: Hotel },
  { name: "Logistics & Transport", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "SACCOs & Microfinance", icon: Landmark },
  { name: "Restaurants", icon: UtensilsCrossed },
  { name: "Real Estate", icon: Building2 },
  { name: "Pharmacies", icon: Pill },
];

export function IndustriesSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "#91a8ff24" }}>
      {/* <img src={bgIndustries} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" /> */}
      <div className="relative container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider mb-3">
            Industries
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
            Solutions for every industry
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.name}
                href="/products"
                // 1. Kept original UI colors and effects
                // 2. Added 3D perspective and the hover lift/scale/shadow
                className="group relative p-6 rounded-2xl glass hover:bg-[#2d2eea0a] border border-brand/10 hover:border-[#1a64d3] text-center animate-fade-in-up transition-all duration-300 hover:-translate-y-[5px] hover:scale-105 hover:z-10 hover:shadow-xl [transform-style:preserve-3d] [perspective:1000px]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Icon
                  // 3. Swapped transition-colors for transition-all
                  // 4. Added base 3D depth and the exaggerated pop/tilt on hover
                  className="w-8 h-8 mx-auto mb-3 text-brand group-hover:text-dark transition-all duration-500 [transform:translateZ(30px)] group-hover:[transform:translateZ(40px)_scale(1.12)_rotate(-6deg)]"
                />
                <div
                  // 5. Lifted the text off the background so it floats
                  className="text-sm font-semibold group-hover:text-dark transition-all duration-300 [transform:translateZ(20px)]"
                >
                  {ind.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}