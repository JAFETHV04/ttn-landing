"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const navLinks = [
  { label: "SOBRE NOSOTROS", href: "#" },
  {
    label: "PRODUCTOS",
    href: "/productos",
    dropdown: [
      { label: "PANELES",     href: "/productos?cat=paneles" },
      { label: "BATERIAS",    href: "/productos?cat=baterias" },
      { label: "INVERSORES",  href: "/productos?cat=inversores" },
      { label: "GENERADORES", href: "/productos?cat=generadores" },
    ],
  },
  { label: "PROYECTOS", href: "#" },
  { label: "SERVICIOS",  href: "#" },
  { label: "BLOG",       href: "#" },
];

const NAV_STYLE: React.CSSProperties = { fontSize: 13.5, letterSpacing: "0.6px" };

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-[200] w-full"
        style={{
          background: "linear-gradient(180deg,#03307f 0%,#01215c 100%)",
          boxShadow: "0 2px 14px rgba(2,18,52,.18)",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-5 md:px-9"
          style={{ maxWidth: 1280, height: 78 }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeMobile}>
            <Image
              src="/images/logo.png"
              alt="TTN Solar"
              width={120}
              height={38}
              style={{ height: 38, width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => { cancelClose(); setDropdownOpen(true); }}
                  onMouseLeave={scheduleClose}
                >
                  <Link href={link.href} className="text-white font-semibold" style={NAV_STYLE}>
                    {link.label} ▾
                  </Link>
                  {dropdownOpen && (
                    <div
                      className="absolute left-0 bg-white min-w-[160px] py-1"
                      style={{ top: 42, borderRadius: 4, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-[#16245c] font-semibold hover:bg-[#eef1fb] transition-colors"
                          style={{ fontSize: 13, letterSpacing: "0.5px" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white font-semibold hover:opacity-80 transition-opacity"
                  style={NAV_STYLE}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/calculadora"
            className="hidden md:block rounded-lg text-white font-semibold hover:bg-white/10 transition-colors"
            style={{
              border: "1.5px solid rgba(255,255,255,0.55)",
              padding: "10px 20px",
              fontSize: 13.5,
              letterSpacing: "0.6px",
            }}
          >
            Cotizar ahora
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none" }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? 600 : 0,
            background: "#01215c",
          }}
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    className="w-full text-left text-white font-semibold py-3 flex justify-between items-center"
                    style={NAV_STYLE}
                    onClick={() => setMobileProductsOpen((v) => !v)}
                  >
                    {link.label}
                    <span style={{ transform: mobileProductsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                  </button>
                  {mobileProductsOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMobile}
                          className="text-white/70 font-semibold py-2"
                          style={{ fontSize: 13, letterSpacing: "0.5px" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-white font-semibold py-3 hover:opacity-80"
                  style={NAV_STYLE}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/calculadora"
              onClick={closeMobile}
              className="mt-3 rounded-lg text-white font-semibold text-center py-3"
              style={{
                border: "1.5px solid rgba(255,255,255,0.55)",
                fontSize: 13.5,
                letterSpacing: "0.6px",
              }}
            >
              Cotizar ahora
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
