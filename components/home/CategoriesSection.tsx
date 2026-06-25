import { categories } from "@/lib/data";

export default function CategoriesSection() {
  return (
    <section className="bg-white" style={{ padding: "72px 36px" }}>
      <div
        className="mx-auto flex flex-wrap items-center justify-center gap-12"
        style={{ maxWidth: 1180 }}
      >
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex flex-col items-center cursor-pointer group"
            style={{ gap: 18 }}
          >
            <div
              className="flex items-center justify-center rounded-full transition-transform group-hover:scale-105"
              style={{
                width: 72,
                height: 72,
                background: "#eef1fb",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 32, color: "#3f63e0" }}
              >
                {cat.icon}
              </span>
            </div>
            <span
              className="font-semibold text-center"
              style={{ fontSize: 16, color: "#16245c" }}
            >
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
