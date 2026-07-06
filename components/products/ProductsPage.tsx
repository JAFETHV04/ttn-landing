"use client";

import { useState } from "react";
import { products, productCategories, trustBadges } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function ProductsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const activeLabel = productCategories[activeCategory].label;
  const filteredProducts =
    activeCategory === 0
      ? products
      : products.filter((product) => product.category === activeLabel);

  return (
    <div>
      {/* Hero */}
      <div
        className="w-full"
        style={{
          aspectRatio: "16/5",
          minHeight: 160,
          maxHeight: 320,
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 32%",
        }}
      />

      {/* Mobile: category chips bar */}
      <div className="md:hidden bg-white border-b border-[#edeef4] px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
        {productCategories.map((cat, idx) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(idx)}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 font-semibold text-xs flex-shrink-0 transition-colors"
            style={{
              background: activeCategory === idx ? "#eef1fb" : "#f4f5fb",
              color: activeCategory === idx ? "#3f63e0" : "#5a6275",
              border: activeCategory === idx ? "1px solid #c5d0f8" : "1px solid transparent",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
              {cat.icon}
            </span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Mobile: filter toggle bar */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between bg-white border-b border-[#edeef4]">
        <span className="font-semibold text-sm" style={{ color: "#16245c" }}>
          {filteredProducts.length} productos encontrados
        </span>
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 font-semibold text-sm transition-colors"
          style={{
            border: "1px solid #edeef4",
            color: "#5a6275",
            background: filtersOpen ? "#eef1fb" : "white",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>tune</span>
          Filtros
        </button>
      </div>

      {/* Mobile: collapsible filters panel */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: filtersOpen ? 400 : 0 }}
      >
        <div className="bg-white px-4 py-4 border-b border-[#edeef4] flex flex-col gap-5">
          {/* Brand */}
          <div>
            <h4 className="font-bold mb-2 text-sm" style={{ color: "#16245c" }}>
              Filtrar por marca
            </h4>
            <select
              aria-label="Filtrar por marca"
              className="w-full rounded-lg px-3 py-2 font-semibold text-sm"
              style={{ border: "1px solid #edeef4", color: "#5a6275" }}
            >
              <option>Todas las marcas</option>
            </select>
          </div>
          {/* Price */}
          <div>
            <h4 className="font-bold mb-2 text-sm" style={{ color: "#16245c" }}>
              Rango de precio
            </h4>
            <div className="relative mb-2">
              <div className="w-full rounded-full" style={{ height: 6, background: "#edeef4" }}>
                <div className="rounded-full" style={{ height: 6, width: "70%", background: "#3f63e0" }} />
              </div>
            </div>
            <div className="flex justify-between font-semibold text-xs" style={{ color: "#5a6275" }}>
              <span>L. 0</span>
              <span>L. 100,000+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto flex flex-col md:flex-row gap-6 md:gap-8 py-6 md:py-12 px-4 md:px-9" style={{ maxWidth: 1280 }}>

        {/* Sidebar — desktop only */}
        <aside className="hidden md:block self-start md:sticky md:top-6" style={{ width: 260, flexShrink: 0 }}>
          {/* Categories */}
          <div
            className="rounded-xl p-5 mb-5"
            style={{ background: "white", border: "1px solid #edeef4" }}
          >
            <h3 className="font-bold mb-4 text-sm" style={{ color: "#16245c" }}>
              Categorías
            </h3>
            <ul className="space-y-1">
              {productCategories.map((cat, idx) => (
                <li key={cat.label}>
                  <button
                    onClick={() => setActiveCategory(idx)}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg font-semibold transition-colors text-sm"
                    style={{
                      background: activeCategory === idx ? "#eef1fb" : "transparent",
                      color: activeCategory === idx ? "#3f63e0" : "#5a6275",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, color: activeCategory === idx ? "#3f63e0" : "#8b93a6" }}
                    >
                      {cat.icon}
                    </span>
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div
            className="rounded-xl p-5 mb-5"
            style={{ background: "white", border: "1px solid #edeef4" }}
          >
            <h3 className="font-bold mb-4 text-sm" style={{ color: "#16245c" }}>
              Filtrar por marca
            </h3>
            <select
              aria-label="Filtrar por marca"
              className="w-full rounded-lg px-3 py-2 font-semibold text-sm"
              style={{ border: "1px solid #edeef4", color: "#5a6275" }}
            >
              <option>Todas las marcas</option>
            </select>
          </div>

          {/* Price */}
          <div
            className="rounded-xl p-5"
            style={{ background: "white", border: "1px solid #edeef4" }}
          >
            <h3 className="font-bold mb-4 text-sm" style={{ color: "#16245c" }}>
              Rango de precio
            </h3>
            <div className="relative mb-3">
              <div className="w-full rounded-full" style={{ height: 6, background: "#edeef4" }}>
                <div className="rounded-full" style={{ height: 6, width: "70%", background: "#3f63e0" }} />
              </div>
            </div>
            <div className="flex justify-between font-semibold text-xs" style={{ color: "#5a6275" }}>
              <span>L. 0</span>
              <span>L. 100,000+</span>
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          <div className="products-scroll overflow-y-auto md:max-h-[calc(100vh-140px)] md:pr-2 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 pb-1">
              {filteredProducts.map((product, i) => (
                <Reveal key={product.id} variant="up" delay={(i % 4) * 60} className="h-full">
                  <ProductCard {...product} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div
            className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-5 md:p-6"
            style={{ background: "#3f63e0" }}
          >
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white" style={{ fontSize: 26 }}>
                  {badge.icon}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm">{badge.title}</p>
                  <p className="text-white/70 text-xs">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
