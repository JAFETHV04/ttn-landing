import Image from "next/image";
import Link from "next/link";
import {
  footerNav,
  footerPlans,
  footerServices,
  footerInfo,
  footerContact,
  footerBenefits,
} from "@/lib/data";

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
      style={{ background: "rgba(255,255,255,0.1)" }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg,#021a47,#01102e)",
      }}
    >
      <div className="mx-auto px-9 pt-16" style={{ maxWidth: 1280 }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-12">
          {/* Col 1: Logo + social */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="TTN Solar"
              width={140}
              height={54}
              style={{ height: 54, width: "auto" }}
            />
            <p
              className="mt-4 text-white/60 leading-relaxed"
              style={{ fontSize: 13.5 }}
            >
              Soluciones de energía solar para hogares y empresas en Honduras.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Facebook */}
              <SocialIcon>
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon>
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
              </SocialIcon>
              {/* YouTube */}
              <SocialIcon>
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </SocialIcon>
              {/* LinkedIn */}
              <SocialIcon>
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div>
            <h4 className="text-white font-bold mb-5" style={{ fontSize: 13, letterSpacing: "1px" }}>
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: 13.5 }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Planes */}
          <div>
            <h4 className="text-white font-bold mb-5" style={{ fontSize: 13, letterSpacing: "1px" }}>
              PLANES
            </h4>
            <ul className="space-y-2">
              {footerPlans.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: 13.5 }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Servicios */}
          <div>
            <h4 className="text-white font-bold mb-5" style={{ fontSize: 13, letterSpacing: "1px" }}>
              SERVICIOS
            </h4>
            <ul className="space-y-2">
              {footerServices.map((svc) => (
                <li key={svc.label} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-[#3f63e0]"
                    style={{ fontSize: 16 }}
                  >
                    {svc.icon}
                  </span>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: 13.5 }}
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Información */}
          <div>
            <h4 className="text-white font-bold mb-5" style={{ fontSize: 13, letterSpacing: "1px" }}>
              INFORMACIÓN
            </h4>
            <ul className="space-y-2">
              {footerInfo.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: 13.5 }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Contáctanos */}
          <div>
            <h4 className="text-white font-bold mb-5" style={{ fontSize: 13, letterSpacing: "1px" }}>
              CONTÁCTANOS
            </h4>
            <ul className="space-y-3">
              {footerContact.map((item) => (
                <li key={item.text} className="flex items-start gap-2">
                  <span
                    className="material-symbols-outlined text-[#3f63e0] mt-0.5"
                    style={{ fontSize: 16 }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-white/60" style={{ fontSize: 13.5 }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {footerBenefits.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-[#3f63e0]"
                style={{ fontSize: 28 }}
              >
                {b.icon}
              </span>
              <div>
                <p className="text-white font-semibold" style={{ fontSize: 13.5 }}>
                  {b.title}
                </p>
                <p className="text-white/50" style={{ fontSize: 12 }}>
                  {b.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between py-5 gap-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.2)",
            marginLeft: -36,
            marginRight: -36,
            paddingLeft: 36,
            paddingRight: 36,
          }}
        >
          <p className="text-white/40" style={{ fontSize: 13 }}>
            © 2025 TTN Solar. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX"].map((card) => (
              <div
                key={card}
                className="px-3 py-1 rounded text-white/60 font-bold"
                style={{ background: "rgba(255,255,255,0.1)", fontSize: 11 }}
              >
                {card}
              </div>
            ))}
            <div
              className="px-3 py-1 rounded text-white/60"
              style={{ background: "rgba(255,255,255,0.1)", fontSize: 11 }}
            >
              Transferencia Bancaria
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
