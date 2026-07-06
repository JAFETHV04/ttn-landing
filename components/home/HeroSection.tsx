"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// La capa conserva la relación NATIVA de la imagen (1376 x 768) y ocupa el
// ancho completo → nunca se recorta por los lados (texto y equipos íntegros).
// La ventana visible es un poco más baja; esa diferencia es el recorrido del
// desplazamiento parallax vertical (solo recorta un poco de cielo/piso).
const IMAGE_RATIO = "1739 / 608";
const VIEWPORT_RATIO = "1739 / 520";
// 0 = sin movimiento · 1 = usa todo el recorrido disponible.
const PARALLAX = 0.6;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;

    const applyRest = () => {
      const overflow = Math.max(layer.offsetHeight - section.offsetHeight, 0);
      layer.style.transform = `translate3d(0, ${-overflow / 2}px, 0)`;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyRest();
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight || 1;
      const layerHeight = layer.offsetHeight || sectionHeight;
      const overflow = Math.max(layerHeight - sectionHeight, 0);
      // Progreso 0 → 1 mientras la sección cruza el viewport hacia arriba.
      const progress = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);
      // En reposo (0) la imagen queda centrada (se ve completa). Al hacer
      // scroll baja lentamente → parallax. Acotado a [-overflow, 0].
      const shift = Math.min(
        Math.max(-overflow / 2 + progress * overflow * PARALLAX, -overflow),
        0
      );
      layer.style.transform = `translate3d(0, ${Math.round(shift)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{ aspectRatio: VIEWPORT_RATIO }}
    >
      <div
        ref={layerRef}
        className="absolute left-0 top-0 w-full"
        style={{ aspectRatio: IMAGE_RATIO, willChange: "transform" }}
      >
        <Image
          src="/images/hero@2x.png"
          alt="Energía limpia, ahorro inteligente"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
