import Link from "next/link";
import PortfolioGrid, { type PortfolioItem } from "@/components/portfolio-grid";

const glass: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(22,45,80,0.5), rgba(17,34,64,0.6))",
  border: "1px solid rgba(77,157,224,0.18)",
  borderRadius: 16,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const stats = [
  { value: "300+", label: "projetos totais" },
  { value: "28", label: "setores atendidos" },
  { value: "72%", label: "recompras" },
  { value: "94", label: "NPS score" },
];

async function getPortfolioData(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch("https://tiagobernardes.com.br/data/portfolio.json", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getPortfolioData();

  return (
    <main>
      <div className="portfolio-container">
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "#5C6D88",
            marginBottom: 40,
          }}
        >
          <Link href="/" style={{ color: "#5C6D88", textDecoration: "none" }}>
            início
          </Link>
          <span>/</span>
          <span style={{ color: "#4D9DE0" }}>portfólio</span>
        </div>

        {/* Page head */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(77,157,224,0.1)",
              border: "1px solid rgba(77,157,224,0.25)",
              borderRadius: 20,
              padding: "5px 13px",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#B7E4C7",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#B7E4C7",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              trabalhos selecionados
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(32px, 4.5vw, 60px)",
              fontWeight: 700,
              color: "#CDD6E4",
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: "-0.03em",
            }}
          >
            nossos projetos em{" "}
            <span style={{ color: "#4D9DE0" }}>destaque.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              color: "#8FA0BA",
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            Uma seleção dos projetos que definem a qualidade Lab82 — cada um
            com identidade única, construído para durar.
          </p>
        </div>

        {/* Stats */}
        <div className="portfolio-stats">
          {stats.map((s) => (
            <div
              key={s.label}
              style={{ ...glass, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 4 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#4D9DE0",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#8FA0BA" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid (client component — pagination state) */}
        <PortfolioGrid projects={projects} />
      </div>
    </main>
  );
}
