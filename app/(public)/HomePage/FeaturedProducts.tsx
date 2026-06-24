
import {
  ArrowRight,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Truck,
  Flame,
  Building2,
  Factory,
  Landmark,
} from "lucide-react";
import Link from "next/link";


// --- DATA ---
const products = [
  {
    name: "Riset POS",
    desc: "Lightning-fast retail at every counter.",
    icon: ShoppingBag,
    category: "Point of Sale",
    gradient: "from-brand to-cyan-accent",
    chip: "bg-brand/10 text-brand",
  },
  {
    name: "Hospital ERP",
    desc: "From front desk to operating room.",
    icon: HeartPulse,
    category: "Health Systems",
    gradient: "from-violet-accent to-pink-accent",
    chip: "bg-violet-accent/10 text-violet-accent",
    featured: true,
  },
  {
    name: "School ERP",
    desc: "Run a smarter campus, end-to-end.",
    icon: GraduationCap,
    category: "Education",
    gradient: "from-cyan-accent to-brand",
    chip: "bg-cyan-accent/15 text-cyan-accent",
  },
  {
    name: "Cargo Management",
    desc: "Move freight with full visibility.",
    icon: Truck,
    category: "Logistics",
    gradient: "from-warning to-pink-accent",
    chip: "bg-warning/15 text-warning",
  },
  {
    name: "LPG Gas ERP",
    desc: "Cylinder economy, perfectly tracked.",
    icon: Flame,
    category: "Distribution",
    gradient: "from-pink-accent to-violet-accent",
    chip: "bg-pink-accent/10 text-pink-accent",
  },
  {
    name: "Property ERP",
    desc: "Buildings, tenants and rent — handled.",
    icon: Building2,
    category: "Real Estate",
    gradient: "from-brand to-violet-accent",
    chip: "bg-brand/10 text-brand",
  },
  {
    name: "Manufacturing ERP",
    desc: "From raw material to finished goods.",
    icon: Factory,
    category: "Manufacturing",
    gradient: "from-warning to-pink-accent",
    chip: "bg-warning/15 text-warning",
  },
  {
    name: "SACCO ERP",
    desc: "Cooperatives, savings and loans, simplified.",
    icon: Landmark,
    category: "Microfinance",
    gradient: "from-success to-cyan-accent",
    chip: "bg-success/15 text-success",
  },
  {
    name: "SACCO ERP",
    desc: "Cooperatives, savings and loans, simplified.",
    icon: Landmark,
    category: "Microfinance",
    gradient: "from-success to-cyan-accent",
    chip: "bg-success/15 text-success",
  },
  {
    name: "SACCO ERP",
    desc: "Cooperatives, savings and loans, simplified.",
    icon: Landmark,
    category: "Microfinance",
    gradient: "from-success to-cyan-accent",
    chip: "bg-success/15 text-success",
  },
];

// --- SECTION COMPONENT ---
export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  tint,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  tint?: "violet" | "pink" | "cyan" | "amber" | "emerald" | "brand" | "yellow" | "blue" | "red";
}) {
  const tintClass = tint ? `crystal crystal-${tint}` : "";
  const eyebrowTint: Record<string, string> = {
    violet: "bg-violet-accent/10 text-violet-accent",
    pink: "bg-pink-accent/10 text-pink-accent",
    cyan: "bg-cyan-accent/10 text-cyan-accent",
    amber: "bg-warning/15 text-warning",
    emerald: "bg-success/15 text-success",
    brand: "bg-brand/10 text-brand",
    yellow: "bg-warning/15 text-warning",
    blue: "bg-brand/10 text-brand",
    red: "bg-destructive/10 text-destructive",
  };
  const eyeCls = tint ? eyebrowTint[tint] : "bg-brand/10 text-brand";

  return (
    <section className={`py-20 ${tintClass}`}>
      <div className="px-4 md:px-10">
        <div className="mx-auto container-px">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            {eyebrow && (
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${eyeCls}`}
              >
                {eyebrow}
              </div>
            )}
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
              {title}
            </h2>
            {subtitle && <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

// --- FEATURED PRODUCTS COMPONENT ---
export function FeaturedProducts() {
  return (
    <div className="bg-card-light-red">
      <Section
        eyebrow="Our Products"
        title={
          <>
            Powerful, industry-specific{" "}
            <span className="gradient-text animate-gradient">software solutions</span>
          </>
        }
        subtitle="Pick from 30+ products engineered for the way real businesses run."
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 [perspective:1200px]">
          {products.map((p, i) => {
            const Icon = p.icon;
            const featured = p.featured;
            return (
              <Link
                key={i} // Note: Changed to index or consider a truly unique ID as there are duplicate 'SACCO ERP' names
                href="/products"
                className={`group relative rounded-2xl p-6 border tilt-3d crystal-sparkle animate-card-rise transition-all duration-300 hover:-translate-y-[5px] hover:scale-105 hover:z-10 hover:shadow-xl ${
                  featured ? "bg-card shadow-card" : "bg-card border-border hover:border-brand/30"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-5 [transform:translateZ(30px)]">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} grid place-items-center shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:[transform:translateZ(40px)_scale(1.12)_rotate(-6deg)]`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${p.chip}`}
                  >
                    {p.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-1.5 [transform:translateZ(20px)]">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all [transform:translateZ(20px)]">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 rounded-full">
            <Link href="/products" className="flex items-center">
              View all 30+ products <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </button>
        </div>
      </Section>
    </div>
  );
}