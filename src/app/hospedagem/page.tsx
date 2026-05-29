import Link from "next/link";
import HospedagemPlan from "@/components/hospedagem-plan";
import { Zap, ShieldCheck, MessageCircle } from "lucide-react";

const glass: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(22, 45, 80, 0.5), rgba(17, 34, 64, 0.6))",
  border: "1px solid rgba(77, 157, 224, 0.18)",
  borderRadius: 16,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const stackLayers = [
  { label: "CDN Global", color: "#4D9DE0", dot: "#4D9DE0" },
  { label: "LiteSpeed Web Server", color: "#CDD6E4", dot: "#B7E4C7" },
  { label: "PHP 8.3 (OPcache)", color: "#8FA0BA", dot: "#4D9DE0" },
  { label: "MySQL 8.0", color: "#8FA0BA", dot: "#4D9DE0" },
  { label: "NVMe SSD Storage", color: "#CDD6E4", dot: "#B7E4C7" },
  { label: "Linux OS (Ubuntu 24)", color: "#8FA0BA", dot: "#4D9DE0" },
  { label: "Datacenter Tier III", color: "#5C6D88", dot: "#4D9DE0" },
];

const featureCards = [
  {
    Icon: Zap,
    title: "Setup em 24h",
    desc: "Seu ambiente configurado, SSL instalado e WordPress funcionando em até 24 horas úteis após a contratação.",
  },
  {
    Icon: ShieldCheck,
    title: "Segurança em camadas",
    desc: "Firewall, WAF, proteção DDoS, SpamExperts e backups diários automáticos. Dormia tranquilo.",
  },
  {
    Icon: MessageCircle,
    title: "Suporte humano",
    desc: "Nenhum bot. Um especialista real atende sua demanda com agilidade e sem enrolação.",
  },
];

export default function HospedagemPage() {
  return (
    <main>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px 100px" }}>
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
          <span style={{ color: "#4D9DE0" }}>hospedagem</span>
        </div>

        {/* Page head */}
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
              infraestrutura premium
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
            host de{" "}
            <span style={{ color: "#4D9DE0" }}>alta performance.</span>
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
            LiteSpeed, NVMe SSD, CDN global e suporte humano 24/7. A hospedagem que seu site WordPress merece.
          </p>
        </div>

        {/* Intro 2-col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            marginBottom: 64,
          }}
        >
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
              // por que nossa hospedagem?
            </div>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(22px, 2.6vw, 32px)",
                fontWeight: 700,
                color: "#CDD6E4",
                lineHeight: 1.2,
                marginBottom: 18,
                letterSpacing: "-0.02em",
              }}
            >
              Performance real,{" "}
              <span style={{ color: "#4D9DE0" }}>não promessa de papel</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#8FA0BA",
                lineHeight: 1.75,
                marginBottom: 16,
              }}
            >
              Utilizamos <strong style={{ color: "#CDD6E4" }}>LiteSpeed Web Server</strong> — até 5x mais rápido que Apache para WordPress — combinado com armazenamento NVMe SSD, que entrega velocidades de leitura 7× superiores ao HDD tradicional.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#8FA0BA",
                lineHeight: 1.75,
              }}
            >
              Nossa CDN global garante que visitantes do Brasil ao exterior experimentem o mesmo carregamento rápido. Sites otimizados alcançam 95+ no Google PageSpeed.
            </p>
          </div>

          {/* Right: stack visualization */}
          <div style={{ ...glass, padding: 28 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#4D9DE0",
                marginBottom: 20,
                letterSpacing: "0.06em",
              }}
            >
              // stack tecnológica
            </div>
            {stackLayers.map((layer, i) => (
              <div
                key={layer.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  borderRadius: 8,
                  marginBottom: 4,
                  background: i === 1 || i === 4 ? "rgba(77, 157, 224, 0.07)" : "transparent",
                  border: i === 1 || i === 4 ? "1px solid rgba(77, 157, 224, 0.1)" : "1px solid transparent",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: layer.dot,
                    flexShrink: 0,
                    boxShadow: `0 0 6px ${layer.dot}60`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: layer.color,
                  }}
                >
                  {layer.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Billing toggle + Plan card */}
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#5C6D88",
              letterSpacing: "0.1em",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            // plano host pro
          </div>
          <HospedagemPlan />
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {featureCards.map((fc) => (
            <div
              key={fc.title}
              style={{
                ...glass,
                padding: "28px 24px",
              }}
            >
              <div style={{ marginBottom: 14, color: "#4D9DE0" }}><fc.Icon size={28} /></div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#CDD6E4",
                  marginBottom: 10,
                }}
              >
                {fc.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "#8FA0BA",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {fc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
