"use client";

import { useState } from "react";
import { plans, planBenefits } from "@/lib/data";
import PricingCard from "@/components/ui/PricingCard";
import Reveal from "@/components/ui/Reveal";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"residencial" | "industrial">("residencial");

  return (
    <section
      className="px-5 md:px-9 py-14 md:py-[64px]"
      style={{ background: "linear-gradient(180deg,#f4f5fb 0%,#eceefa 100%)" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-bold text-3xl md:text-[42px]" style={{ color: "#16245c" }}>
              Planes de energía solar
            </h2>
            <p className="text-base md:text-lg mt-2" style={{ color: "#8a93a8" }}>
              Energía limpia. Independencia total.
            </p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={100}>
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex rounded-full p-1" style={{ background: "#e0e4f4" }}>
              <button
                className="rounded-full px-4 md:px-6 py-2 font-semibold transition-all text-xs md:text-[13px]"
                style={{
                  letterSpacing: "0.5px",
                  background: activeTab === "residencial" ? "#3f63e0" : "transparent",
                  color: activeTab === "residencial" ? "white" : "#8a93a8",
                }}
                onClick={() => setActiveTab("residencial")}
              >
                RESIDENCIALES
              </button>
              <button
                className="rounded-full px-4 md:px-6 py-2 font-semibold transition-all text-xs md:text-[13px]"
                style={{
                  letterSpacing: "0.5px",
                  background: activeTab === "industrial" ? "#3f63e0" : "transparent",
                  color: activeTab === "industrial" ? "white" : "#8a93a8",
                }}
                onClick={() => setActiveTab("industrial")}
              >
                INDUSTRIAL
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 items-start md:items-center mb-10 md:mb-14">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} variant="scale" delay={i * 100}>
              <PricingCard {...plan} />
            </Reveal>
          ))}
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {planBenefits.map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 44, height: 44, background: "#eef1fb" }}
                >
                  <span className="material-symbols-outlined text-[#3f63e0]" style={{ fontSize: 22 }}>
                    {b.icon}
                  </span>
                </div>
                <span className="font-semibold text-sm" style={{ color: "#16245c" }}>
                  {b.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
