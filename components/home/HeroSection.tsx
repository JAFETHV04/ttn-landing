import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      <Image
        src="/images/hero.png"
        alt="Energía limpia, ahorro inteligente"
        width={1713}
        height={600}
        quality={100}
        sizes="100vw"
        className="w-full block"
        priority
      />
    </section>
  );
}
