interface NewsCardProps {
  bgColor: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function NewsCard({ bgColor, title, excerpt, date }: NewsCardProps) {
  return (
    <article
      className="flex flex-col rounded-[14px] overflow-hidden"
      style={{
        background: "white",
        border: "1px solid #edeef4",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      {/* Image area */}
      <div style={{ height: 200, background: bgColor }} />

      {/* Content */}
      <div style={{ padding: 24 }} className="flex flex-col flex-1">
        <h3
          className="font-bold mb-2 leading-snug"
          style={{ fontSize: 18, color: "#16245c" }}
        >
          {title}
        </h3>
        <p
          className="flex-1 leading-relaxed"
          style={{ fontSize: 14, color: "#8b93a6" }}
        >
          {excerpt}
        </p>
        <div
          className="flex items-center justify-between mt-4 pt-4"
          style={{ borderTop: "1px solid #edeef4" }}
        >
          <span style={{ fontSize: 13, color: "#8b93a6" }}>{date}</span>
          <span
            className="font-bold hover:text-[#16245c] transition-colors cursor-pointer"
            style={{ fontSize: 13, color: "#3f63e0" }}
          >
            MÁS →
          </span>
        </div>
      </div>
    </article>
  );
}
