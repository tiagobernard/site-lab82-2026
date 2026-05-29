import Link from "next/link";

const navRoutes = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/wordpress", label: "WordPress" },
  { href: "/hospedagem", label: "Host Alta Performance" },
  { href: "/manutencao", label: "Manutenção WP" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(77, 157, 224, 0.2)",
        padding: "40px 20px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Logo */}
        <div style={{ marginBottom: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.1rem",
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#8FA0BA" }}>&lt;</span>
            <span style={{ color: "#CDD6E4" }}>lab</span>
            <span style={{ color: "#4D9DE0" }}>82</span>
            <span style={{ color: "#8FA0BA" }}>/&gt;</span>
          </span>
        </div>

        {/* Neural Network Design badge */}
        <div style={{ marginBottom: 24 }}>
          <span
            style={{
              display: "inline-block",
              border: "1px solid rgba(77, 157, 224, 0.4)",
              borderRadius: 20,
              padding: "4px 14px",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#4D9DE0",
              letterSpacing: "0.08em",
            }}
          >
            Neural Network Design
          </span>
        </div>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 0,
            marginBottom: 24,
          }}
        >
          {navRoutes.map((route, i) => (
            <span key={route.href} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <span
                  style={{
                    color: "#5C6D88",
                    margin: "0 12px",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                  }}
                >
                  |
                </span>
              )}
              <Link
                href={route.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "#8FA0BA",
                  textDecoration: "none",
                }}
              >
                {route.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "#5C6D88",
            margin: 0,
          }}
        >
          © 2026 Lab82. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
