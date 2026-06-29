import { stats } from "@/lib/data";
import WorldMap from "./WorldMap";
import Reveal from "@/components/ui/Reveal";

export default function StatsSection() {
  return (
    <section className="px-5 md:px-9 py-14 md:py-[60px]" style={{ background: "#eef0f4" }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <Reveal variant="scale">
          <div className="w-full mb-10 md:mb-12">
            <WorldMap />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <span
                  className="material-symbols-outlined mb-2"
                  style={{ fontSize: 30, color: "#e8542a" }}
                >
                  {stat.icon}
                </span>
                <span
                  className="font-bold leading-tight"
                  style={{ fontSize: "clamp(32px, 5vw, 54px)", color: "#1c2536" }}
                >
                  {stat.number}
                </span>
                <span
                  className="font-semibold mt-1 text-xs md:text-sm"
                  style={{ color: "#5a6275", letterSpacing: "1px" }}
                >
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
