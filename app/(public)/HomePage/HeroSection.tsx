"use client"
import { useEffect, useState } from "react";

import { ArrowRight, Star } from "lucide-react";

import Link from "next/link";
import { DashboardShowcase } from "@/app/components/DashboardShowcase";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleValue = 1 + scrollY * 0.0004;

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <img
        src="./bg222.jpg"
        alt=""
        aria-hidden="true"
        style={{ transform: `scale(${scaleValue})` }}
        className="absolute inset-0 w-full h-full object-cover opacity-70 dark:opacity-60 pointer-events-none will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/55 to-background" />
      <div className="absolute inset-0 bg-mesh animate-gradient opacity-60" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.55_0.22_260/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.22_260/0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="px-4 md:px-10 z-10 w-full">
        <div className="relative container-px mx-auto py-8 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.18_150)] animate-pulse" />
              Trusted by 500+ businesses across 5 countries
            </div>

            <h1 className="font-display font-extrabold text-2xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight animate-fade-in-up">
              Enterprise Software <br />
              <span className="gradient-text animate-gradient">
                built for Africa
              </span>{" "}
              <br />
              <span className="text-foreground/90">& beyond.</span>
            </h1>

            <p className="text-md text-dark max-w-xl leading-relaxed animate-fade-in-up delay-200">
              30+ industry-specific solutions — POS, ERP, Healthcare, Logistics,
              School & SACCO — engineered for the realities of emerging markets.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 rounded-md bg-brand-gradient animate-gradient text-white border-0 hover:shadow-glow hover:scale-105 transition-all h-12 px-6">
                <Link href="/contact" className="flex items-center">
                  Book a Free Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:text-accent-foreground rounded-md h-12 px-6 hover:bg-accent">
                <Link href="/products" className="flex items-center">Explore Products</Link>
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 animate-fade-in delay-500">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-background bg-brand-gradient grid place-items-center text-white text-xs font-bold"
                    style={{
                      background: `linear-gradient(${i * 60}deg, oklch(0.55 0.22 260), oklch(0.72 0.22 295))`,
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-foreground font-semibold">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-warning text-warning"
                    />
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
                from 500+ enterprises
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 animate-fade-in-up delay-300">
            <DashboardShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
