import { news } from "@/lib/data";
import NewsCard from "@/components/ui/NewsCard";
import Reveal from "@/components/ui/Reveal";

export default function NewsSection() {
  return (
    <section className="bg-white px-5 md:px-9 py-14 md:py-[64px]">
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <Reveal variant="left">
          <h2
            className="font-extrabold mb-8 md:mb-10 text-2xl md:text-[34px]"
            style={{ color: "#16245c", letterSpacing: "1px" }}
          >
            NOTICIAS
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <NewsCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
