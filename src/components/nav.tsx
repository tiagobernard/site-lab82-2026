"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import WhatsappIcon from "./whatsapp-icon";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: "100%",
        background: "rgba(10, 22, 40, 0.72)",
        borderBottom: "1px solid rgba(77, 157, 224, 0.22)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: "0 2px 24px rgba(0,0,0,0.22)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between gap-4" style={{ height: 64 }}>
        {/* Logo */}
        <Link
          href="/"
          className="nav-logo shrink-0"
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

        {/* Desktop nav links */}
        <nav className="nav-links hidden lg:flex items-center gap-5 xl:gap-9">
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

        {/* Right: WA (desktop) + Hamburger (mobile) */}
        <div className="nav-cta flex items-center gap-3 shrink-0">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2"
            style={{
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

          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            style={{
              background: "rgba(77, 157, 224, 0.08)",
              border: "1px solid rgba(77, 157, 224, 0.2)",
              color: "#CDD6E4",
              cursor: "pointer",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile/tablet dropdown */}
      {open && (
        <div
          className="lg:hidden"
          style={{
            background: "rgba(10, 22, 40, 0.98)",
            borderTop: "1px solid rgba(77, 157, 224, 0.12)",
          }}
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navRoutes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center py-3 px-4 rounded-lg"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 14,
                    textDecoration: "none",
                    color: isActive ? "#ffffff" : "#8FA0BA",
                    borderLeft: `2px solid ${isActive ? "#4D9DE0" : "transparent"}`,
                    background: isActive ? "rgba(77, 157, 224, 0.06)" : "transparent",
                  }}
                >
                  {route.label}
                </Link>
              );
            })}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl mt-2"
              style={{
                background: "linear-gradient(135deg, #128C7E, #075E54)",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <WhatsappIcon size={16} />
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
