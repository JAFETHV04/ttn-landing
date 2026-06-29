"use client";

import { useEffect, useRef, useState } from "react";

type RevealVariant = "up" | "left" | "scale";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number; // ms
  className?: string;
  as?: React.ElementType;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal-left",
  scale: "reveal-scale",
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${variantClass[variant]} ${inView ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
