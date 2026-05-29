import type { Metadata } from "next";
import Link from "next/link";
import WhatsappIcon from "@/components/whatsapp-icon";
import { AlertTriangle, Gauge, AlertCircle, TrendingDown, Check } from "lucide-react";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Manutenção WordPress Profissional",
  description: "Manutenção preventiva e corretiva de WordPress: atualizações, backups diários, monitoramento 24h e suporte humano especializado. Seu site sempre seguro e atualizado.",
  alternates: { canonical: "https://lab82.dev/manutencao" },
  openGraph: {
    title: "Manutenção WordPress Profissional | Lab82",
    description: "Atualizações, backups diários e monitoramento 24h. Seu WordPress sempre seguro.",
    url: "https://lab82.dev/manutencao",
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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4D9DE0" strokeWidth={2.5}>
      <path d="M5 13l5 5L20 6" />
    </svg>
  );
}

const plans = [
  {
    id: "inst",
    name: "Institucional",
    price: "R$ 310",
    period: "/sem.",
    tag: null,
    features: [
      "Atualizações mensais WP + plugins",
      "Backup mensal",
      "Monitoramento de uptime",
      "1 revisão de conteúdo/mês",
      "Suporte por e-mail",
    ],
    cta: "contratar",
    featured: false,
  },
  {
    id: "inst+",
    name: "Institucional+",
    price: "R$ 470",
    period: "/sem.",
    tag: null,
    features: [
      "Atualizações quinzenais WP + plugins",
      "Backup semanal",
      "Monitoramento 24/7",
      "3 revisões de conteúdo/mês",
      "Suporte WhatsApp (horário comercial)",
      "Relatório mensal de performance",
    ],
    cta: "contratar",
    featured: false,
  },
  {
    id: "store",
    name: "Store",
    price: "R$ 585",
    period: "/sem.",
    tag: "mais popular",
    features: [
      "Atualizações semanais WP + plugins",
      "Backup diário automático",
      "Monitoramento 24/7 com alertas",
      "5 revisões de conteúdo/mês",
      "Suporte WhatsApp prioritário",
      "Relatório quinzenal de performance",
      "Verificação de segurança semanal",
      "1 ajuste de layout/mês",
    ],
    cta: "contratar",
    featured: true,
  },
  {
    id: "store+",
    name: "Store+",
    price: "R$ 910",
    period: "/sem.",
    tag: null,
    features: [
      "Atualizações contínuas (2x/semana)",
      "Backup diário + offsite",
      "Monitoramento 24/7 com alertas",
      "Conteúdo ilimitado*",
      "Suporte WhatsApp + ligação",
      "Relatório semanal de performance",
      "Verificação de segurança diária",
      "2 ajustes de layout/mês",
      "SpamExperts incluso",
      "Consultoria mensal (1h)",
    ],
    cta: "contratar",
    featured: false,
  },
];

export default function ManutencaoPage() {
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
          <span style={{ color: "#4D9DE0" }}>manutenção</span>
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
              WordPress gerenciado
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
            manutenção{" "}
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
            Mantenha seu WordPress sempre atualizado, seguro e funcionando perfeitamente, sem preocupações.
          </p>
        </div>

        </Reveal>

        {/* Risk section 2-col */}
        <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            marginBottom: 64,
          }}
        >
          {/* Left: risks */}
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
              // os riscos de não manter
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
              Site desatualizado é{" "}
              <span style={{ color: "#E05D5D" }}>porta aberta</span>
            </h2>

            {[
              { Icon: AlertTriangle, title: "Vulnerabilidades", desc: "90% dos sites WordPress hackeados tinham plugins desatualizados. Cada versão atrasada é uma brecha." },
              { Icon: Gauge, title: "Performance degradada", desc: "Plugins conflitantes e banco de dados sobrecarregado deixam seu site lento, e o Google penaliza isso." },
              { Icon: AlertCircle, title: "Incompatibilidades", desc: "Atualizações manuais sem testes podem quebrar seu site. Fazemos em ambiente de staging antes." },
              { Icon: TrendingDown, title: "Queda no ranking", desc: "Site fora do ar ou lento reduz drasticamente seu posicionamento orgânico." },
            ].map((r) => (
              <div
                key={r.title}
                style={{
                  display: "flex",
                  gap: 14,
                  marginBottom: 18,
                }}
              >
                <span style={{ marginTop: 2, flexShrink: 0, color: "#E05D5D" }}><r.Icon size={20} /></span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#CDD6E4",
                      marginBottom: 4,
                    }}
                  >
                    {r.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "#8FA0BA",
                      lineHeight: 1.6,
                    }}
                  >
                    {r.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: health gauge */}
          <div style={{ ...glass, padding: 36, textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#4D9DE0",
                marginBottom: 24,
                letterSpacing: "0.06em",
              }}
            >
              // health score: lab82 managed
            </div>

            {/* SVG gauge */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
              <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4D9DE0" />
                    <stop offset="100%" stopColor="#B7E4C7" />
                  </linearGradient>
                </defs>
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgba(77, 157, 224, 0.12)"
                  strokeWidth="12"
                />
                {/* Progress arc (97%) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gaugeGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.97} ${2 * Math.PI * 80}`}
                  transform="rotate(-90 100 100)"
                />
                {/* Score text */}
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  fill="#CDD6E4"
                  fontSize="36"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="700"
                >
                  97
                </text>
                <text
                  x="100"
                  y="118"
                  textAnchor="middle"
                  fill="#8FA0BA"
                  fontSize="12"
                  fontFamily="JetBrains Mono, monospace"
                >
                  / 100
                </text>
              </svg>
            </div>

            {/* Health items */}
            {[
              { label: "WordPress Core", value: "7.0.0, atualizado", ok: true },
              { label: "Plugins", value: "todos atualizados", ok: true },
              { label: "Uptime", value: "99.98%", ok: true },
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
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Check size={14} color="#B7E4C7" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "#CDD6E4",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        </Reveal>

        {/* Plans grid */}
        <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "#5C6D88",
            letterSpacing: "0.1em",
            marginBottom: 32,
          }}
        >
          // planos de manutenção
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 20,
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                ...glass,
                padding: 28,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                ...(plan.featured
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(77, 157, 224, 0.14), rgba(17, 34, 64, 0.85))",
                      border: "1px solid rgba(77, 157, 224, 0.45)",
                    }
                  : {}),
              }}
            >
              {/* Popular ribbon */}
              {plan.tag && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: -24,
                    background: "#4D9DE0",
                    color: "#0A1628",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "4px 32px",
                    transform: "rotate(35deg)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.tag}
                </div>
              )}

              {/* Plan name */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#4D9DE0",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ marginBottom: 24 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: plan.featured ? 40 : 34,
                    fontWeight: 700,
                    color: plan.featured ? "#4D9DE0" : "#CDD6E4",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "#5C6D88",
                    marginLeft: 4,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <span style={{ marginTop: 1, flexShrink: 0 }}>
                      <CheckIcon />
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        color: "#8FA0BA",
                        lineHeight: 1.4,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: "auto",
                  background: plan.featured
                    ? "linear-gradient(135deg, #128C7E, #075E54)"
                    : "rgba(77, 157, 224, 0.1)",
                  border: plan.featured ? "none" : "1px solid rgba(77, 157, 224, 0.3)",
                  color: plan.featured ? "#fff" : "#CDD6E4",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "12px",
                  borderRadius: 10,
                  textDecoration: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <WhatsappIcon size={15} />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "#5C6D88",
            textAlign: "center",
            marginBottom: 64,
          }}
        >
          * Conteúdo ilimitado refere-se a textos e imagens fornecidos pelo cliente. Não inclui desenvolvimento de novas funcionalidades.
        </p>

        </Reveal>

        {/* CTA banner */}
        <Reveal>
        <div
          style={{
            ...glass,
            padding: "48px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
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
              auditoria gratuita do seu WordPress
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#8FA0BA",
                margin: 0,
              }}
            >
              Analisamos seu site e identificamos riscos e oportunidades, sem custo e sem compromisso.
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
            auditoria gratuita no WhatsApp
          </a>
        </div>
        </Reveal>
      </div>
    </main>
  );
}
