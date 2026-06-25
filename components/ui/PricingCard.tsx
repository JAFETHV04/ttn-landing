import Image from "next/image";

interface Feature {
  icon: string;
  label: string;
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  image: string;
  capacity: string;
  featured: boolean;
  features: Feature[];
}

export default function PricingCard({
  name,
  price,
  period,
  image,
  capacity,
  featured,
  features,
}: PricingCardProps) {
  if (featured) {
    return (
      <div
        className="relative rounded-[22px] overflow-hidden flex flex-col"
        style={{
          background: "linear-gradient(165deg,#4f74ff,#3a55dd)",
          boxShadow: "0 22px 44px rgba(54,82,220,.34)",
          padding: "34px 30px",
          marginTop: -12,
          zIndex: 10,
        }}
      >
        {/* Badge */}
        <div
          className="absolute top-5 right-5 text-white font-bold rounded-full px-3 py-1"
          style={{
            background: "rgba(255,255,255,0.2)",
            fontSize: 11,
            letterSpacing: "0.5px",
          }}
        >
          MÁS POPULAR
        </div>

        <div className="mb-4">
          <Image
            src={image}
            alt={name}
            width={200}
            height={120}
            className="w-full object-contain"
            style={{ maxHeight: 100 }}
          />
        </div>

        <h3 className="text-white font-bold italic mb-1" style={{ fontSize: 22 }}>
          {name}
        </h3>

        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-white font-bold" style={{ fontSize: 38 }}>
            {price}
          </span>
          <span className="text-white/70" style={{ fontSize: 15 }}>
            {period}
          </span>
        </div>

        <ul className="space-y-2.5 mb-6 flex-1">
          {features.map((f) => (
            <li key={f.label} className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-white/90"
                style={{ fontSize: 18 }}
              >
                check_circle
              </span>
              <span className="text-white/90" style={{ fontSize: 14 }}>
                {f.label}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="rounded-full text-center py-2 mb-4 font-semibold"
          style={{
            background: "rgba(255,255,255,0.15)",
            fontSize: 13,
            color: "white",
          }}
        >
          Capacidad: {capacity}
        </div>

        <button
          className="w-full rounded-xl py-3 font-bold text-[#3a55dd] hover:opacity-90 transition-opacity"
          style={{ background: "white", fontSize: 15 }}
        >
          Comenzar ahora
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-[22px] bg-white flex flex-col"
      style={{
        padding: "34px 30px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          width={200}
          height={120}
          className="w-full object-contain"
          style={{ maxHeight: 100 }}
        />
      </div>

      <h3
        className="font-bold italic mb-1"
        style={{ fontSize: 22, color: "#16245c" }}
      >
        {name}
      </h3>

      <div className="flex items-baseline gap-1 mb-5">
        <span className="font-bold" style={{ fontSize: 38, color: "#16245c" }}>
          {price}
        </span>
        <span style={{ fontSize: 15, color: "#8a93a8" }}>{period}</span>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map((f) => (
          <li key={f.label} className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#3f63e0]"
              style={{ fontSize: 18 }}
            >
              check_circle
            </span>
            <span style={{ fontSize: 14, color: "#5a6275" }}>{f.label}</span>
          </li>
        ))}
      </ul>

      <div
        className="rounded-full text-center py-2 mb-4 font-semibold"
        style={{
          background: "#eef1fb",
          fontSize: 13,
          color: "#3f63e0",
        }}
      >
        Capacidad: {capacity}
      </div>

      <button
        className="w-full rounded-xl py-3 font-bold hover:bg-[#3f63e0] hover:text-white transition-colors"
        style={{
          border: "2px solid #3f63e0",
          color: "#3f63e0",
          fontSize: 15,
          background: "transparent",
        }}
      >
        Comenzar ahora
      </button>
    </div>
  );
}
