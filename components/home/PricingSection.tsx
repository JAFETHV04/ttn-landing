"use client";

import { useState } from "react";
import { plans, planBenefits } from "@/lib/data";
import PricingCard from "@/components/ui/PricingCard";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"residencial" | "industrial">(
    "residencial"
  );

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#f4f5fb 0%,#eceefa 100%)",
        padding: "64px 36px 70px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-bold"
            style={{ fontSize: 42, color: "#16245c" }}
          >
            Planes de energía solar
          </h2>
          <p style={{ fontSize: 18, color: "#8a93a8", marginTop: 8 }}>
            Energía limpia. Independencia total.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div
            className="flex rounded-full p-1"
            style={{ background: "#e0e4f4" }}
          >
            <button
              className="rounded-full px-6 py-2 font-semibold transition-all"
              style={{
                fontSize: 13,
                letterSpacing: "0.5px",
                background: activeTab === "residencial" ? "#3f63e0" : "transparent",
                color: activeTab === "residencial" ? "white" : "#8a93a8",
              }}
              onClick={() => setActiveTab("residencial")}
            >
              PLANES RESIDENCIALES
            </button>
            <button
              className="rounded-full px-6 py-2 font-semibold transition-all"
              style={{
                fontSize: 13,
                letterSpacing: "0.5px",
                background: activeTab === "industrial" ? "#3f63e0" : "transparent",
                color: activeTab === "industrial" ? "white" : "#8a93a8",
              }}
              onClick={() => setActiveTab("industrial")}
            >
              PLAN INDUSTRIAL
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-14">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {planBenefits.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{ width: 44, height: 44, background: "#eef1fb" }}
              >
                <span
                  className="material-symbols-outlined text-[#3f63e0]"
                  style={{ fontSize: 22 }}
                >
                  {b.icon}
                </span>
              </div>
              <span className="font-semibold" style={{ fontSize: 14, color: "#16245c" }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
