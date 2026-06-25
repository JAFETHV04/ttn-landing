import { news } from "@/lib/data";
import NewsCard from "@/components/ui/NewsCard";

export default function NewsSection() {
  return (
    <section className="bg-white" style={{ padding: "64px 36px 80px" }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <h2
          className="font-extrabold mb-10"
          style={{
            fontSize: 34,
            color: "#16245c",
            letterSpacing: "1px",
          }}
        >
          NOTICIAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
