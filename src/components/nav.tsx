"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsappIcon from "./whatsapp-icon";

const navRoutes = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/wordpress", label: "WordPress" },
  { href: "/hospedagem", label: "Host Alta Performance" },
  { href: "/manutencao", label: "Manutenção WP" },
];

const WA_LINK = "https://wa.me/5531998407238";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10, 22, 40, 0.85)",
        borderBottom: "1px solid rgba(77, 157, 224, 0.2)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "18px 40px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.4rem",
            fontWeight: 500,
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#8FA0BA" }}>&lt;</span>
          <span style={{ color: "#CDD6E4" }}>lab</span>
          <span style={{ color: "#4D9DE0" }}>82</span>
          <span style={{ color: "#8FA0BA" }}>/&gt;</span>
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navRoutes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  textDecoration: "none",
                  color: isActive ? "#ffffff" : "#8FA0BA",
                  paddingBottom: 2,
                  borderBottom: isActive ? "2px solid #4D9DE0" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        {/* WA Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #128C7E, #075E54)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              padding: "11px 18px",
              borderRadius: 10,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
          >
            <WhatsappIcon size={15} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
