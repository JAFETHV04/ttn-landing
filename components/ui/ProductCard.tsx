import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

type ProductCardProps = Pick<
  Product,
  "slug" | "name" | "spec1" | "spec2" | "image" | "category"
>;

export default function ProductCard({
  slug,
  name,
  spec1,
  spec2,
  image,
  category,
}: ProductCardProps) {
  return (
    <div
      className="rounded-xl flex flex-col relative group h-full"
      style={{
        background: "white",
        border: "1px solid #edeef4",
      }}
    >
      {/* Favorite icon */}
      <button
        className="absolute top-3 right-3 z-10 text-[#c8cee0] hover:text-[#3f63e0] transition-colors"
        aria-label="Agregar a favoritos"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
          favorite_border
        </span>
      </button>

      {/* Product image area */}
      <Link
        href={`/productos/${slug}`}
        className="flex items-center justify-center rounded-t-xl overflow-hidden relative"
        style={{ height: 150, background: "#f7f8fc" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span
          className="font-semibold mb-1.5"
          style={{ fontSize: 11, color: "#3f63e0" }}
        >
          {category}
        </span>
        <h3
          className="font-bold leading-snug mb-1"
          style={{ fontSize: 14.5, color: "#16245c" }}
        >
          <Link href={`/productos/${slug}`} className="hover:text-[#3f63e0] transition-colors">
            {name}
          </Link>
        </h3>
        <p style={{ fontSize: 12.5, color: "#8b93a6" }}>{spec1}</p>
        <p style={{ fontSize: 12.5, color: "#8b93a6" }} className="mb-3">
          {spec2}
        </p>
        <div className="flex items-center justify-end mt-auto">
          <Link
            href={`/productos/${slug}`}
            className="rounded-lg px-3 py-1.5 font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ background: "#3f63e0", fontSize: 12 }}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}
