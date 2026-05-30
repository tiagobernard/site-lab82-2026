import type { Metadata } from "next";
import Link from "next/link";
import WhatsappIcon from "@/components/whatsapp-icon";
import WpAccordion from "@/components/wp-accordion";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Sites WordPress Profissionais",
  description: "Desenvolvimento de sites WordPress com design exclusivo, SEO técnico, painel intuitivo e suporte completo. Do briefing ao lançamento, sem templates genéricos.",
  alternates: { canonical: "https://lab82.dev/wordpress" },
  openGraph: {
    title: "Sites WordPress Profissionais | Lab82",
    description: "Design exclusivo, SEO técnico e painel intuitivo. Do briefing ao lançamento.",
    url: "https://lab82.dev/wordpress",
  },
};

const glass: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(22, 45, 80, 0.5), rgba(17, 34, 64, 0.6))",
  border: "1px solid rgba(77, 157, 224, 0.18)",
  borderRadius: 16,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const WA_LINK = "https://wa.me/5531998407238";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4D9DE0" strokeWidth={2.5}>
      <path d="M5 13l5 5L20 6" />
    </svg>
  );
}

const stats = [
  { value: "43%", label: "da web usa WordPress", bg: "WP" },
  { value: "62%", label: "share entre CMS", bg: "CMS" },
  { value: "35%", label: "crescimento anual", bg: "%" },
];

export default function WordPressPage() {
  return (
    <main>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 inner-page-container">
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
          <Link href="/" style={{ color: "#5C6D88", textDecoration: "none" }}>início</Link>
          <span>/</span>
          <span style={{ color: "#4D9DE0" }}>wordpress</span>
        </div>

        {/* Page head */}
        <Reveal>
        <div style={{ marginBottom: 60 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(77, 157, 224, 0.1)",
              border: "1px solid rgba(77, 157, 224, 0.25)",
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
              desenvolvimento profissional
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(36px, 4.5vw, 64px)",
              fontWeight: 700,
              color: "#CDD6E4",
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: "-0.03em",
            }}
          >
            site em{" "}
            <span style={{ color: "#4D9DE0" }}>WordPress.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              color: "#8FA0BA",
              lineHeight: 1.6,
              maxWidth: 580,
            }}
          >
            O CMS mais adotado do mundo, com toda a flexibilidade e performance que seu negócio precisa. Desenvolvemos sites personalizados do briefing ao lançamento.
          </p>
        </div>

        </Reveal>

        {/* Stat cards */}
        <Reveal delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                ...glass,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background glyph */}
              <span
                style={{
                  position: "absolute",
                  right: 16,
                  bottom: -10,
                  fontFamily: "var(--font-mono)",
                  fontSize: 72,
                  fontWeight: 900,
                  color: "rgba(77, 157, 224, 0.07)",
                  userSelect: "none",
                  lineHeight: 1,
                }}
              >
                {s.bg}
              </span>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 56,
                  fontWeight: 700,
                  color: "#4D9DE0",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "#8FA0BA",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        </Reveal>

        {/* Intro 2-col */}
        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left text */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#5C6D88",
                letterSpacing: "0.1em",
                marginBottom: 24,
              }}
            >
              // por que WordPress?
            </div>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(24px, 2.8vw, 36px)",
                fontWeight: 700,
                color: "#CDD6E4",
                lineHeight: 1.2,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              O CMS que alimenta{" "}
              <span style={{ color: "#4D9DE0" }}>430 milhões</span> de sites
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#8FA0BA",
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              WordPress não é só um blog. É uma plataforma completa capaz de rodar e-commerces de alto volume, portais de notícias, sistemas LMS, landing pages e muito mais, com a escalabilidade que empresas sérias precisam.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#8FA0BA",
                lineHeight: 1.75,
              }}
            >
              Na Lab82 desenvolvemos cada site do zero: nenhum template genérico. Código limpo, performance acima de 90 no PageSpeed, SEO técnico integrado desde o primeiro commit.
            </p>
          </div>

          {/* Right: WP dashboard preview */}
          <div style={{ ...glass, padding: 28 }}>
            {/* Dashboard header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(77, 157, 224, 0.12)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "#4D9DE0",
                  fontWeight: 600,
                }}
              >
                WordPress: Painel
              </span>
              <span
                style={{
                  background: "rgba(183, 228, 199, 0.1)",
                  border: "1px solid rgba(183, 228, 199, 0.3)",
                  borderRadius: 12,
                  padding: "3px 10px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#B7E4C7",
                }}
              >
                ativo
              </span>
            </div>

            {/* Dashboard items */}
            {[
              { label: "Versão WordPress", value: "7.0.0" },
              { label: "PHP", value: "8.3.x" },
              { label: "Plugins ativos", value: "6 plugins" },
              { label: "Uptime", value: "99.98%" },
              { label: "SSL", value: "válido · Let's Encrypt" },
              { label: "Último backup", value: "hoje, 03:00" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(77, 157, 224, 0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "#8FA0BA",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "#CDD6E4",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        </Reveal>

        {/* Advantages accordion */}
        <Reveal>
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#5C6D88",
              letterSpacing: "0.1em",
              marginBottom: 32,
            }}
          >
            // vantagens do WordPress
          </div>
          <WpAccordion />
        </div>

        </Reveal>

        {/* CTA banner */}
        <Reveal>
        <div
          style={{
            ...glass,
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "flex-start",
            gap: 24,
            background: "linear-gradient(135deg, rgba(77, 157, 224, 0.08), rgba(17, 34, 64, 0.8))",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(20px, 2.5vw, 30px)",
                fontWeight: 700,
                color: "#CDD6E4",
                marginBottom: 8,
                letterSpacing: "-0.02em",
              }}
            >
              precisando criar ou refazer seu site?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#8FA0BA",
                margin: 0,
              }}
            >
              Fale com a gente agora e receba um orçamento personalizado em minutos.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg, #128C7E, #075E54)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(18, 140, 126, 0.35)",
              whiteSpace: "nowrap",
            }}
          >
            <WhatsappIcon size={17} />
            falar no WhatsApp
          </a>
        </div>
        </Reveal>
      </div>
    </main>
  );
}
