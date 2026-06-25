import { products, productCategories, trustBadges } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          height: 300,
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 32%",
        }}
      />

      {/* Main layout */}
      <div
        className="mx-auto flex gap-8 py-12 px-9"
        style={{ maxWidth: 1280 }}
      >
        {/* Sidebar */}
        <aside style={{ width: 280, flexShrink: 0 }}>
          <div
            className="rounded-xl p-6 mb-6"
            style={{ background: "white", border: "1px solid #edeef4" }}
          >
            <h3
              className="font-bold mb-4"
              style={{ fontSize: 16, color: "#16245c" }}
            >
              Categorías
            </h3>
            <ul className="space-y-1">
              {productCategories.map((cat, idx) => (
                <li key={cat.label}>
                  <button
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg font-semibold transition-colors"
                    style={{
                      fontSize: 14,
                      background: idx === 0 ? "#eef1fb" : "transparent",
                      color: idx === 0 ? "#3f63e0" : "#5a6275",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, color: idx === 0 ? "#3f63e0" : "#8b93a6" }}
                    >
                      {cat.icon}
                    </span>
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter by brand */}
          <div
            className="rounded-xl p-6 mb-6"
            style={{ background: "white", border: "1px solid #edeef4" }}
          >
            <h3
              className="font-bold mb-4"
              style={{ fontSize: 16, color: "#16245c" }}
            >
              Filtrar por marca
            </h3>
            <select
              className="w-full rounded-lg px-3 py-2 font-semibold"
              style={{
                border: "1px solid #edeef4",
                fontSize: 14,
                color: "#5a6275",
              }}
            >
              <option>Todas las marcas</option>
            </select>
          </div>

          {/* Price range */}
          <div
            className="rounded-xl p-6"
            style={{ background: "white", border: "1px solid #edeef4" }}
          >
            <h3
              className="font-bold mb-4"
              style={{ fontSize: 16, color: "#16245c" }}
            >
              Rango de precio
            </h3>
            <div className="relative mb-3">
              <div
                className="w-full rounded-full"
                style={{ height: 6, background: "#edeef4" }}
              >
                <div
                  className="rounded-full"
                  style={{ height: 6, width: "70%", background: "#3f63e0" }}
                />
              </div>
            </div>
            <div
              className="flex justify-between font-semibold"
              style={{ fontSize: 13, color: "#5a6275" }}
            >
              <span>L. 0</span>
              <span>L. 100,000+</span>
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Trust badges */}
          <div
            className="rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-6"
            style={{ background: "#3f63e0" }}
          >
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: 28 }}
                >
                  {badge.icon}
                </span>
                <div>
                  <p className="text-white font-semibold" style={{ fontSize: 13 }}>
                    {badge.title}
                  </p>
                  <p className="text-white/70" style={{ fontSize: 12 }}>
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
