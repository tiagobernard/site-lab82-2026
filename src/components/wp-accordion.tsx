"use client";

import { useState } from "react";

const items = [
  {
    title: "Múltiplos usuários e permissões",
    content:
      "Defina papéis e permissões para administradores, editores, autores e colaboradores. Trabalhe em equipe sem risco de erros ou acessos indevidos. O WordPress oferece controle granular sobre o que cada usuário pode ver e editar.",
  },
  {
    title: "Segurança de nível enterprise",
    content:
      "Com as melhores práticas de hardening, plugins de segurança premium e nosso monitoramento 24/7, seu site fica protegido contra tentativas de invasão, malware e ataques de força bruta. Backups automáticos diários garantem recuperação rápida.",
  },
  {
    title: "Multiplicidade de funcionalidades",
    content:
      "Mais de 60.000 plugins disponíveis no repositório oficial + marketplace premium. E-commerce, LMS, CRM, formulários avançados, integração com sistemas externos, tudo sem desenvolvimento customizado do zero.",
  },
  {
    title: "Layout 100% responsivo",
    content:
      "Desenvolvemos temas customizados ou utilizamos os melhores do mercado, sempre com abordagem mobile-first. Seu site perfeito em qualquer dispositivo: smartphone, tablet ou desktop.",
  },
  {
    title: "Interface simples e intuitiva",
    content:
      "O painel Gutenberg (WordPress 7.0) é construído em blocos, permitindo que qualquer membro da sua equipe crie e edite conteúdo sem conhecimento técnico. Treinamos sua equipe para total autonomia.",
  },
];

export default function WpAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background:
              open === i
                ? "linear-gradient(180deg, rgba(22, 45, 80, 0.6), rgba(17, 34, 64, 0.7))"
                : "linear-gradient(180deg, rgba(22, 45, 80, 0.3), rgba(17, 34, 64, 0.4))",
            border: `1px solid ${open === i ? "rgba(77, 157, 224, 0.35)" : "rgba(77, 157, 224, 0.12)"}`,
            borderRadius: 12,
            overflow: "hidden",
            transition: "border-color 0.2s, background 0.2s",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 22px",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 15,
                fontWeight: 600,
                color: open === i ? "#CDD6E4" : "#8FA0BA",
                transition: "color 0.2s",
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                color: "#4D9DE0",
                fontSize: 20,
                lineHeight: 1,
                flexShrink: 0,
                transition: "transform 0.2s",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              display: "grid",
              gridTemplateRows: open === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s ease",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  padding: "0 22px 20px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "#8FA0BA",
                  lineHeight: 1.7,
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
