import React from "react";

interface SectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  tint?:
    | "violet"
    | "pink"
    | "cyan"
    | "amber"
    | "emerald"
    | "brand"
    | "yellow"
    | "blue"
    | "red";
}

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  tint,
}: SectionProps) {
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
            {subtitle && (
              <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}