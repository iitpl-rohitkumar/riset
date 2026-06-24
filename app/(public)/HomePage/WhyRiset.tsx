import Section from "@/app/components/Section";
import { Globe, Users, Headphones, TrendingUp } from "lucide-react";



export function WhyRiset() {
  const items = [
    {
      icon: Globe,
      title: "Africa-first expertise",
      desc: "Built for M-Pesa, KRA eTIMS, multi-currency and last-mile realities.",
    },
    {
      icon: Users,
      title: "Multi-country support",
      desc: "Live operations across Kenya, Rwanda, Ethiopia, South Sudan & Singapore.",
    },
    {
      icon: Headphones,
      title: "Dedicated onboarding",
      desc: "White-glove implementation with training, data migration and 24/7 support.",
    },
    {
      icon: TrendingUp,
      title: "Scales with your growth",
      desc: "From single-shop to multi-branch enterprise — no replatforming needed.",
    },
  ];

  return (
    <Section
      eyebrow="Why Riset Systems"
      title="The infrastructure behind 500+ scaling businesses"
      tint="yellow"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="group relative glass rounded-2xl p-6 border border-border animate-fade-in-up transition-all duration-300 hover:-translate-y-[5px] hover:scale-105 hover:z-10 hover:shadow-xl [transform-style:preserve-3d] [perspective:1000px]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl border-2 border-brand/30 grid place-items-center text-brand transition-all duration-500 [transform:translateZ(30px)] group-hover:bg-brand-gradient group-hover:text-white group-hover:border-[#f0f8ff] group-hover:[transform:translateZ(40px)_scale(1.12)_rotate(-6deg)]"
              >
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="font-display font-bold text-lg mt-4 mb-2 [transform:translateZ(20px)] transition-transform duration-300">
                {it.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed [transform:translateZ(10px)] transition-transform duration-300">
                {it.desc}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}