import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      <Image
        src="/images/hero.png"
        alt="Energía limpia, ahorro inteligente"
        width={1920}
        height={720}
        className="w-full block"
        priority
      />
    </section>
  );
}
