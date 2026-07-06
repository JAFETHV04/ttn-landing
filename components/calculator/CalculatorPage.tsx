import Image from "next/image";
import { calcResults, calcProjection } from "@/lib/data";

const barHeights = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200];
const maxBar = 200;
const maxPx = 276;

export default function CalculatorPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="w-full"
        style={{
          aspectRatio: "16/5",
          minHeight: 160,
          maxHeight: 320,
          backgroundImage: "url('/images/hero@2x.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 32%",
        }}
      />

      <div
        className="mx-auto py-10 md:py-14 px-4 md:px-9"
        style={{ maxWidth: 1180 }}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h1
            className="font-extrabold"
            style={{ fontSize: 44, color: "#16245c" }}
          >
            Calculadora de ahorro solar
          </h1>
          <p style={{ fontSize: 17, color: "#8a93a8", marginTop: 10 }}>
            Descubre cuánto puedes ahorrar con energía solar
          </p>
          <p style={{ fontSize: 15, color: "#aab0c0", marginTop: 4 }}>
            Calcula tu retorno de inversión personalizado
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="rounded-3xl flex flex-col md:flex-row gap-10 mb-12"
          style={{
            background: "linear-gradient(160deg,#5878ff,#3f5fe6)",
            padding: "42px 46px",
            boxShadow: "0 26px 50px rgba(54,82,220,.3)",
          }}
        >
          {/* Image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/calculator.png"
              alt="Calculadora solar"
              width={360}
              height={300}
              className="object-contain"
              style={{ maxWidth: 360 }}
            />
          </div>

          {/* Form */}
          <div className="flex-1">
            <h3
              className="font-bold text-white mb-6"
              style={{ fontSize: 24 }}
            >
              Calcula tu retorno de inversión
            </h3>

            {/* System selector */}
            <div className="mb-4">
              <label
                className="text-white/70 font-semibold block mb-2"
                style={{ fontSize: 13 }}
              >
                Sistema solar
              </label>
              <select
                aria-label="Sistema solar"
                className="w-full rounded-xl px-4 py-3 font-semibold text-sm text-white bg-white/15 border border-white/30"
              >
                <option style={{ color: "#16245c" }}>
                  Plan Estándar - 5 Paneles + Inversor + Batería
                </option>
              </select>
            </div>

            {/* Bill input */}
            <div className="mb-6">
              <label
                className="text-white/70 font-semibold block mb-2"
                style={{ fontSize: 13 }}
              >
                Factura mensual de electricidad
              </label>
              <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                <span
                  className="flex items-center px-4 font-bold text-white"
                  style={{ background: "rgba(255,255,255,0.1)", fontSize: 15 }}
                >
                  L.
                </span>
                <input
                  type="number"
                  placeholder="3,500"
                  className="flex-1 px-4 py-3 font-semibold bg-white text-[#16245c] outline-none"
                  style={{ fontSize: 15 }}
                />
              </div>
            </div>

            <hr style={{ borderColor: "rgba(255,255,255,0.2)", marginBottom: 20 }} />

            {/* Investment + checklist */}
            <div className="flex gap-8 mb-6">
              <div>
                <p className="text-white/60" style={{ fontSize: 13 }}>
                  Inversión inicial
                </p>
                <p className="font-bold text-white" style={{ fontSize: 28 }}>
                  L. 145,000
                </p>
              </div>
              <ul className="space-y-1.5">
                {[
                  "Instalación incluida",
                  "Mantenimiento por 1 año",
                  "Garantía de paneles 25 años",
                  "Monitoreo remoto",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/80" style={{ fontSize: 13 }}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="w-full rounded-full font-bold text-[#3f5fe6] hover:opacity-90 transition-opacity py-3"
              style={{ background: "white", fontSize: 15, letterSpacing: "0.5px" }}
            >
              CALCULAR AHORRO
            </button>
          </div>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {calcResults.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl p-5 text-center"
              style={{ background: "white", border: "1px solid #edeef4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <span
                className="material-symbols-outlined text-[#3f63e0] mb-2 block"
                style={{ fontSize: 32 }}
              >
                {r.icon}
              </span>
              <p style={{ fontSize: 13, color: "#8a93a8" }}>{r.label}</p>
              <p className="font-bold mt-1" style={{ fontSize: 22, color: "#16245c" }}>
                {r.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bar chart + donut */}
        <div
          className="rounded-2xl p-8 mb-12 flex flex-col md:flex-row gap-10 items-end"
          style={{ background: "white", border: "1px solid #edeef4" }}
        >
          {/* Bar chart */}
          <div className="flex-1">
            <h3
              className="font-bold mb-6"
              style={{ fontSize: 18, color: "#16245c" }}
            >
              Acumulado de ahorros (L.)
            </h3>
            <div className="flex items-end gap-2" style={{ height: 300 }}>
              {barHeights.map((h, i) => {
                const px = (h / maxBar) * maxPx;
                const isRecovery = i === 4;
                return (
                  <div key={i} className="flex flex-col items-center flex-1 relative">
                    {isRecovery && (
                      <div
                        className="absolute text-white font-bold rounded-full px-2 py-0.5 whitespace-nowrap"
                        style={{
                          background: "#3f63e0",
                          fontSize: 10,
                          bottom: px + 6,
                        }}
                      >
                        RECUPERACIÓN
                      </div>
                    )}
                    <div
                      className="w-full rounded-t-md"
                      style={{
                        height: px,
                        background: isRecovery
                          ? "#3f63e0"
                          : "linear-gradient(180deg,#8ba4ff,#c5d0ff)",
                      }}
                    />
                    <span
                      className="mt-1 font-semibold"
                      style={{ fontSize: 11, color: "#8a93a8" }}
                    >
                      Año {i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donut */}
          <div className="flex flex-col items-center" style={{ minWidth: 180 }}>
            <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="60" fill="none" stroke="#edeef4" strokeWidth="20" />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#3f63e0"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 60 * 0.96} ${2 * Math.PI * 60 * 0.04}`}
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              <div className="absolute text-center">
                <p className="font-bold" style={{ fontSize: 26, color: "#16245c" }}>
                  100%
                </p>
              </div>
            </div>
            <p
              className="text-center font-semibold mt-3"
              style={{ fontSize: 13, color: "#5a6275" }}
            >
              Inversión recuperada en 4.1 años
            </p>
          </div>
        </div>

        {/* Projection items */}
        <div>
          <h3
            className="font-bold mb-6"
            style={{ fontSize: 22, color: "#16245c" }}
          >
            Tu proyecto solar generará
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {calcProjection.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "white",
                  border: "1px solid #edeef4",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <span
                  className="material-symbols-outlined text-[#3f63e0] mb-2 block"
                  style={{ fontSize: 28 }}
                >
                  {item.icon}
                </span>
                <p style={{ fontSize: 12, color: "#8a93a8" }}>{item.label}</p>
                <p
                  className="font-bold"
                  style={{ fontSize: 18, color: "#16245c", marginTop: 4 }}
                >
                  {item.value}
                </p>
                <p style={{ fontSize: 11, color: "#aab0c0" }}>{item.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
