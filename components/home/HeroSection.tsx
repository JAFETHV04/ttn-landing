"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// El hero es más alto que la relación nativa de la imagen (muy panorámica), por
// lo que se usa object-cover anclado a la IZQUIERDA: el texto y el panel se
// conservan y solo se recorta un poco del borde derecho.
// La capa se renderiza un poco más alta que la ventana (overscan); ese margen
// es el recorrido del desplazamiento parallax vertical.
const SECTION_RATIO = "1713 / 640";
const OVERSCAN = 0.12;
// 0 = sin movimiento · 1 = usa todo el recorrido disponible.
const PARALLAX = 1;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      layer.style.transform = "translate3d(0, 0, 0)";
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
      // Al cargar (0) se ve la parte superior (título). Al hacer scroll la
      // imagen se desplaza hacia arriba → parallax. Acotado a [-overflow, 0].
      const shift = -progress * overflow * PARALLAX;
      layer.style.transform = `translate3d(0, ${Math.round(
        Math.min(Math.max(shift, -overflow), 0)
      )}px, 0)`;
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
      style={{ aspectRatio: SECTION_RATIO }}
    >
      <div
        ref={layerRef}
        className="absolute left-0 top-0 w-full"
        style={{ height: `${(1 + OVERSCAN) * 100}%`, willChange: "transform" }}
      >
        <Image
          src="/images/hero@2x.png"
          alt="Energía limpia, ahorro inteligente"
          fill
          quality={90}
          sizes="125vw"
          className="object-cover object-left"
          priority
        />
      </div>
    </section>
  );
}
