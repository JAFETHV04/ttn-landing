import { categories } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function CategoriesSection() {
  return (
    <section className="bg-white py-14 md:py-[72px] px-5 md:px-9">
      <div
        className="mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12"
        style={{ maxWidth: 1180 }}
      >
        {categories.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 80}>
            <div className="flex flex-col items-center cursor-pointer group" style={{ gap: 14 }}>
              <div
                className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
                style={{ width: 68, height: 68, background: "#eef1fb" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 30, color: "#3f63e0" }}>
                  {cat.icon}
                </span>
              </div>
              <span className="font-semibold text-center" style={{ fontSize: 14, color: "#16245c" }}>
                {cat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
