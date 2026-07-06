import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, getWhatsAppQuoteUrl } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Producto no encontrado — TTN Solar" };
  }

  return {
    title: `${product.name} — TTN Solar`,
    description: product.description.slice(0, 155),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto w-full px-4 md:px-9 py-6 md:py-10" style={{ maxWidth: 1180 }}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs md:text-sm mb-6" style={{ color: "#8b93a6" }}>
        <Link href="/" className="hover:text-[#3f63e0] transition-colors">
          Inicio
        </Link>
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
          chevron_right
        </span>
        <Link href="/productos" className="hover:text-[#3f63e0] transition-colors">
          Productos
        </Link>
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
          chevron_right
        </span>
        <span className="font-semibold" style={{ color: "#16245c" }}>
          {product.name}
        </span>
      </nav>

      {/* Top: image + summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
        {/* Image */}
        <div
          className="rounded-2xl relative flex items-center justify-center"
          style={{ background: "#f7f8fc", border: "1px solid #edeef4", minHeight: 340 }}
        >
          <div className="relative w-full" style={{ height: 380 }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-contain p-6"
              priority
            />
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col">
          <span
            className="inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 font-semibold mb-3"
            style={{ background: "#eef1fb", color: "#3f63e0", fontSize: 12 }}
          >
            {product.category}
          </span>
          <h1 className="font-extrabold leading-tight mb-2" style={{ fontSize: 26, color: "#16245c" }}>
            {product.name}
          </h1>
          <p className="font-semibold mb-4" style={{ fontSize: 12.5, color: "#8b93a6" }}>
            Código de referencia: {product.ref}
          </p>
          <p className="leading-relaxed mb-6" style={{ fontSize: 14.5, color: "#5a6275" }}>
            {product.description}
          </p>

          {/* Quick specs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span
              className="rounded-lg px-3 py-2 font-semibold"
              style={{ background: "#f4f5fb", color: "#16245c", fontSize: 12.5 }}
            >
              {product.spec1}
            </span>
            <span
              className="rounded-lg px-3 py-2 font-semibold"
              style={{ background: "#f4f5fb", color: "#16245c", fontSize: 12.5 }}
            >
              {product.spec2}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-auto flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppQuoteUrl(product.name, product.ref)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: "#25D366", fontSize: 14 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                chat
              </span>
              Solicitar cotización por WhatsApp
            </a>
            <Link
              href="/productos"
              className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-colors"
              style={{ border: "1px solid #edeef4", color: "#5a6275", fontSize: 14 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                arrow_back
              </span>
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>

      {/* Detail sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Características */}
        <section className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #edeef4" }}>
          <h2 className="font-bold mb-4 flex items-center gap-2" style={{ fontSize: 17, color: "#16245c" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#3f63e0" }}>
              check_circle
            </span>
            Características principales
          </h2>
          <ul className="space-y-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span
                  className="material-symbols-outlined flex-shrink-0"
                  style={{ fontSize: 18, color: "#3f63e0", marginTop: 1 }}
                >
                  done
                </span>
                <span style={{ fontSize: 14, color: "#5a6275" }}>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Especificaciones */}
        <section className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #edeef4" }}>
          <h2 className="font-bold mb-4 flex items-center gap-2" style={{ fontSize: 17, color: "#16245c" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#3f63e0" }}>
              tune
            </span>
            Especificaciones técnicas
          </h2>
          <dl>
            {product.specs.map((spec, idx) => (
              <div
                key={spec.label}
                className="flex justify-between gap-4 py-2.5"
                style={{ borderTop: idx === 0 ? "none" : "1px solid #f0f1f6" }}
              >
                <dt className="font-medium" style={{ fontSize: 13.5, color: "#8b93a6" }}>
                  {spec.label}
                </dt>
                <dd className="font-semibold text-right" style={{ fontSize: 13.5, color: "#16245c" }}>
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Usos */}
        <section className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #edeef4" }}>
          <h2 className="font-bold mb-3 flex items-center gap-2" style={{ fontSize: 17, color: "#16245c" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#3f63e0" }}>
              lightbulb
            </span>
            Usos y aplicaciones
          </h2>
          <p className="leading-relaxed" style={{ fontSize: 14, color: "#5a6275" }}>
            {product.applications}
          </p>
        </section>

        {/* Beneficios */}
        <section className="rounded-2xl p-6" style={{ background: "#eef1fb", border: "1px solid #d7ddf5" }}>
          <h2 className="font-bold mb-3 flex items-center gap-2" style={{ fontSize: 17, color: "#16245c" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#3f63e0" }}>
              star
            </span>
            Beneficios clave
          </h2>
          <p className="leading-relaxed" style={{ fontSize: 14, color: "#3a4668" }}>
            {product.benefits}
          </p>
        </section>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="font-bold mb-5" style={{ fontSize: 19, color: "#16245c" }}>
            Productos relacionados
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/productos/${rel.slug}`}
                className="rounded-xl flex flex-col group"
                style={{ background: "white", border: "1px solid #edeef4" }}
              >
                <div
                  className="rounded-t-xl relative overflow-hidden"
                  style={{ height: 130, background: "#f7f8fc" }}
                >
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 240px"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold leading-snug" style={{ fontSize: 13.5, color: "#16245c" }}>
                    {rel.name}
                  </h3>
                  <p className="mt-1" style={{ fontSize: 12, color: "#8b93a6" }}>
                    {rel.spec1}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
