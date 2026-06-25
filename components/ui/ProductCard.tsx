interface ProductCardProps {
  name: string;
  spec1: string;
  spec2: string;
  price: string;
  icon: string;
  iconColor: string;
  bgColor: string;
}

export default function ProductCard({
  name,
  spec1,
  spec2,
  price,
  icon,
  iconColor,
  bgColor,
}: ProductCardProps) {
  return (
    <div
      className="rounded-xl flex flex-col relative"
      style={{
        background: "white",
        border: "1px solid #edeef4",
      }}
    >
      {/* Favorite icon */}
      <button
        className="absolute top-3 right-3 text-[#c8cee0] hover:text-[#3f63e0] transition-colors"
        aria-label="Agregar a favoritos"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
          favorite_border
        </span>
      </button>

      {/* Product image area */}
      <div
        className="flex items-center justify-center rounded-t-xl"
        style={{ height: 120, background: bgColor }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: 48, color: iconColor }}
        >
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="font-bold leading-snug mb-1"
          style={{ fontSize: 15.5, color: "#16245c" }}
        >
          {name}
        </h3>
        <p style={{ fontSize: 12.5, color: "#8b93a6" }}>{spec1}</p>
        <p style={{ fontSize: 12.5, color: "#8b93a6" }} className="mb-3">
          {spec2}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold" style={{ fontSize: 16, color: "#16245c" }}>
            {price}
          </span>
          <button
            className="rounded-lg px-3 py-1.5 font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ background: "#3f63e0", fontSize: 12 }}
          >
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
}
