"use client";

import { useState } from "react";
import WhatsappIcon from "./whatsapp-icon";

const WA_LINK = "https://wa.me/5531998407238";

const features = [
  { label: "Espaço ilimitado", detail: "NVMe" },
  { label: "Tráfego ilimitado", detail: "" },
  { label: "Transferência ilimitada", detail: "" },
  { label: "E-mails ilimitados", detail: "espaço ilimitado" },
  { label: "5× CPU + 4 GB RAM", detail: "dedicados" },
  { label: "Datacenter nacional", detail: "Brasil" },
  { label: "SSL incluso", detail: "Let's Encrypt" },
  { label: "Backup diário", detail: "automatizado" },
  { label: "LiteSpeed Web Server", detail: "" },
  { label: "Hospedagem isolada", detail: "por cliente" },
  { label: "PHP + Node.js + Ruby + Python", detail: "" },
];

const glass: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(22, 45, 80, 0.5), rgba(17, 34, 64, 0.6))",
  border: "1px solid rgba(77, 157, 224, 0.18)",
  borderRadius: 16,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4D9DE0" strokeWidth={2.5}>
      <path d="M5 13l5 5L20 6" />
    </svg>
  );
}

export default function HospedagemPlan() {
  const [billing, setBilling] = useState<"anual" | "mensal">("anual");

  const anualData = { val: "630,00", per: "/ano", note: "equivale a R$ 52,50/mês · economize R$ 64,80 vs mensal" };
  const mensalData = { val: "57,90", per: "/mês", note: "sem fidelidade · cancele quando quiser" };
  const current = billing === "anual" ? anualData : mensalData;

  const contratarHref =
    billing === "mensal"
      ? "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=fdd186870da047c982fbaa1767f0d2ce"
      : "https://mpago.li/1CyBF7H";

  return (
    <div>
      {/* Billing toggle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
        <div
          style={{
            display: "inline-flex",
            padding: 4,
            background: "rgba(10,22,40,0.6)",
            border: "1px solid rgba(77,157,224,0.18)",
            borderRadius: 999,
            gap: 4,
          }}
        >
          {(["anual", "mensal"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setBilling(p)}
              style={{
                background: billing === p ? "linear-gradient(135deg, #4D9DE0, #3A7BD5)" : "transparent",
                border: "none",
                color: billing === p ? "#fff" : "#8FA0BA",
                padding: "10px 22px",
                borderRadius: 999,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: billing === p ? "0 4px 14px rgba(77,157,224,0.4)" : "none",
              }}
            >
              {p}
              {p === "anual" && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    background: "#B7E4C7",
                    color: "#0A1628",
                    padding: "2px 7px",
                    borderRadius: 999,
                    letterSpacing: "0.05em",
                  }}
                >
                  −9%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Plan card */}
      <div
        style={{
          ...glass,
          padding: 0,
          overflow: "hidden",
          maxWidth: 860,
          margin: "0 auto",
          background: "linear-gradient(135deg, rgba(77, 157, 224, 0.08), rgba(17, 34, 64, 0.85))",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: plan info */}
          <div
            className="p-6 lg:p-9 plan-left-col"
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#4D9DE0",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Host Pro
            </div>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 28,
                fontWeight: 700,
                color: "#CDD6E4",
                marginBottom: 8,
                letterSpacing: "-0.02em",
              }}
            >
              Tudo que seu site precisa para decolar.
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "#8FA0BA",
                lineHeight: 1.6,
                marginBottom: 32,
              }}
            >
              Performance LiteSpeed, NVMe SSD, SSL, backup diário e suporte humano 24/7. Perfeito para sites WordPress profissionais.
            </p>

            {/* Price */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "#4D9DE0", lineHeight: 2.2, verticalAlign: "top" }}>R$</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 64, fontWeight: 500, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{current.val}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#8FA0BA", letterSpacing: "0.1em" }}>{current.per}</span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#B7E4C7", minHeight: 16 }}>{current.note}</div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href={contratarHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "#4D9DE0",
                  color: "#0A1628",
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "13px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                contratar agora
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "rgba(18, 140, 126, 0.15)",
                  border: "1px solid rgba(18, 140, 126, 0.4)",
                  color: "#B7E4C7",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  padding: "12px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                <WhatsappIcon size={15} />
                tirar dúvidas
              </a>
            </div>
          </div>

          {/* Right: features */}
          <div className="p-6 lg:p-9">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#5C6D88",
                letterSpacing: "0.08em",
                marginBottom: 20,
              }}
            >
              // o que está incluído
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 16px",
              }}
            >
              {features.map((f) => (
                <div
                  key={f.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <span style={{ marginTop: 1, flexShrink: 0 }}>
                    <CheckIcon />
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#8FA0BA", lineHeight: 1.4 }}>
                    <b style={{ color: "#CDD6E4", fontWeight: 500 }}>{f.label}</b>
                    {f.detail ? ` ${f.detail}` : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
