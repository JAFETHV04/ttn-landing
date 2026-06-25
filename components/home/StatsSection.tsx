import { stats } from "@/lib/data";
import WorldMap from "./WorldMap";

export default function StatsSection() {
  return (
    <section style={{ background: "#eef0f4", padding: "60px 36px 72px" }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        {/* Interactive Map */}
        <div className="w-full mb-12">
          <WorldMap />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span
                className="material-symbols-outlined mb-2"
                style={{ fontSize: 36, color: "#e8542a" }}
              >
                {stat.icon}
              </span>
              <span
                className="font-bold"
                style={{ fontSize: 54, color: "#1c2536", lineHeight: 1.1 }}
              >
                {stat.number}
              </span>
              <span
                className="font-semibold mt-1"
                style={{ fontSize: 14, color: "#5a6275", letterSpacing: "1px" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
