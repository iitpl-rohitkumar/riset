import React from 'react'

export default function TrustedSection() {
      const logos = [
    "Equity SACCO",
    "Nairobi Mart",
    "Sunrise Hospital",
    "SwiftCargo",
    "Brookside",
    "Java House",
    "Tuskys",
    "Naivas",
    "Kenyatta U.",
    "Carrefour",
  ];
  return (
     <section className="py-16 border-y border-border bg-card/50">
      <div className="container-px mx-auto max-w-7xl">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8 font-semibold">
          Trusted by businesses across Africa and beyond
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-marquee w-max">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="text-2xl font-display font-bold text-muted-foreground/40 hover:text-brand transition-colors whitespace-nowrap"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
