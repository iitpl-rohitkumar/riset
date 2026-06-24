import { CountUp } from "@/app/components/CountUp";

const statsData = [
  { n: 500, s: "+", l: "Happy Clients" },
  { n: 30, s: "+", l: "Products" },
  { n: 5, s: "+", l: "Countries" },
  { n: 10, s: "+", l: "Years of Trust" },
];

export function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <img
        src="./mg11.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/90" /> */}
      <div className="relative container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((st) => (
            <div key={st.l} className="text-center">
              <div className="font-display font-extrabold text-5xl md:text-6xl text-white">
                <CountUp end={st.n} suffix={st.s} />
              </div>
              <div className="text-sm text-white mt-2 font-semibold">{st.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}