"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export type PortfolioItem = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  url_externa: string;
  tags: string[];
};

const IMG_BASE = "https://tiagobernardes.com.br";

/*
  Bento slots — sem o full-width "1 / 7" que esticaria imagens pequenas.
  Os dois primeiros itens dividem as mesmas duas linhas em metades iguais.
*/
const BENTO_SLOTS = [
  { col: "1 / 4", row: "1 / 3", size: "md" as const },
  { col: "4 / 7", row: "1 / 3", size: "md" as const },
  { col: "1 / 4", row: "3 / 4", size: "md" as const },
  { col: "4 / 7", row: "3 / 4", size: "md" as const },
  { col: "1 / 4", row: "4 / 5", size: "md" as const },
  { col: "4 / 7", row: "4 / 5", size: "md" as const },
  { col: "1 / 5", row: "5 / 7", size: "xl" as const },
  { col: "5 / 7", row: "5 / 6", size: "sm" as const },
  { col: "5 / 7", row: "6 / 7", size: "sm" as const },
  { col: "1 / 5", row: "7 / 8", size: "md" as const },
  { col: "5 / 7", row: "7 / 8", size: "sm" as const },
  { col: "1 / 5", row: "8 / 9", size: "md" as const },
  { col: "5 / 7", row: "8 / 9", size: "sm" as const },
] as const;

const BLOCK = BENTO_SLOTS.length; // 13

/* Gradientes como overlay semitransparente sobre a imagem real */
const BG_CYCLE = [
  "linear-gradient(135deg, rgba(13,17,23,0.75) 0%, rgba(26,26,46,0.75) 50%, rgba(22,33,62,0.75) 100%)",
  "linear-gradient(135deg, rgba(15,52,96,0.75), rgba(83,52,131,0.75))",
  "linear-gradient(135deg, rgba(10,61,46,0.75), rgba(26,107,82,0.75))",
  "linear-gradient(135deg, rgba(45,27,105,0.75), rgba(17,153,142,0.75))",
  "linear-gradient(135deg, rgba(55,59,68,0.75), rgba(66,134,244,0.75))",
  "linear-gradient(135deg, rgba(26,26,46,0.75), rgba(15,76,42,0.75))",
  "linear-gradient(135deg, rgba(61,28,0,0.75), rgba(139,94,44,0.75))",
  "linear-gradient(135deg, rgba(10,22,40,0.75), rgba(26,74,138,0.75))",
  "linear-gradient(135deg, rgba(10,38,64,0.75), rgba(21,101,192,0.75))",
  "linear-gradient(135deg, rgba(26,20,16,0.75), rgba(74,53,32,0.75))",
  "linear-gradient(135deg, rgba(45,26,0,0.75), rgba(107,58,26,0.75))",
  "linear-gradient(135deg, rgba(26,0,64,0.75), rgba(107,0,179,0.75))",
];

const ACCENT_CYCLE = ["#4D9DE0", "#B7E4C7", "#CDD6E4"];

function toMonogram(titulo: string): string {
  const words = titulo.trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) return titulo.slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function BentoCard({
  item,
  slotIndex,
  globalIndex,
}: {
  item: PortfolioItem;
  slotIndex: number;
  globalIndex: number;
}) {
  const slot = BENTO_SLOTS[slotIndex];
  const overlay = BG_CYCLE[globalIndex % BG_CYCLE.length];
  const accentColor = ACCENT_CYCLE[globalIndex % ACCENT_CYCLE.length];
  const monogram = toMonogram(item.titulo);
  const desc = stripHtml(item.descricao);

  return (
    <div
      className="bento-item"
      style={{
        gridColumn: slot.col,
        gridRow: slot.row,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(77, 157, 224, 0.15)",
        cursor: "default",
      }}
    >
      {/* Imagem real do projeto */}
      <Image
        src={`${IMG_BASE}${item.imagem}`}
        alt={item.titulo}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading={globalIndex < 4 ? "eager" : "lazy"}
      />

      {/* Overlay colorido semitransparente */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: overlay,
          zIndex: 1,
        }}
      />

      {/* Grid overlay texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(77,157,224,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77,157,224,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Monogram glyph */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: slot.size === "xl" ? 120 : slot.size === "md" ? 80 : 60,
            fontWeight: 700,
            color: `${accentColor}12`,
            userSelect: "none",
            letterSpacing: "-0.05em",
          }}
        >
          {monogram}
        </span>
      </div>

      {/* Top: todas as tags à esquerda + botão externo à direita */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          right: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 8,
          zIndex: 4,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {item.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                background: "rgba(13, 27, 50, 0.65)",
                border: "1px solid rgba(77, 157, 224, 0.35)",
                borderRadius: 8,
                padding: "2px 8px",
                color: "#4D9DE0",
                letterSpacing: "0.08em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        {item.url_externa && (
          <a
            href={item.url_externa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${item.titulo}`}
            style={{
              flexShrink: 0,
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(13, 27, 50, 0.65)",
              border: "1px solid rgba(77, 157, 224, 0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4D9DE0",
              textDecoration: "none",
            }}
          >
            <ExternalLink size={13} strokeWidth={2} />
          </a>
        )}
      </div>

      {/* Bottom meta */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "40px 20px 20px",
          background: "linear-gradient(0deg, rgba(10,22,40,0.9) 0%, transparent 100%)",
          zIndex: 4,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
          <h3
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: slot.size === "xl" ? 22 : 16,
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {item.titulo}
          </h3>
        </div>
        {desc && (
          <p
            className="card-desc"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              color: "#8FA0BA",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {desc}
          </p>
        )}
      </div>

    </div>
  );
}

export default function PortfolioGrid({ projects }: { projects: PortfolioItem[] }) {
  const [visibleBlocks, setVisibleBlocks] = useState(1);

  const totalBlocks = Math.ceil(projects.length / BLOCK);
  const visibleItems = projects.slice(0, visibleBlocks * BLOCK);

  const groups: PortfolioItem[][] = [];
  for (let i = 0; i < visibleItems.length; i += BLOCK) {
    groups.push(visibleItems.slice(i, i + BLOCK));
  }

  const hasMore = visibleBlocks < totalBlocks;

  return (
    <div>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="bento-portfolio">
          {group.map((item, slotIndex) => (
            <BentoCard
              key={item.id}
              item={item}
              slotIndex={slotIndex}
              globalIndex={groupIndex * BLOCK + slotIndex}
            />
          ))}
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: 34 }}>
        {hasMore ? (
          <button
            onClick={() => setVisibleBlocks((b) => b + 1)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(77, 157, 224, 0.35)",
              color: "#CDD6E4",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              padding: "14px 32px",
              borderRadius: 10,
              background: "rgba(77, 157, 224, 0.06)",
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
          >
            carregar mais projetos
            <span style={{ color: "#5C6D88" }}>
              ({projects.length - visibleBlocks * BLOCK} restantes)
            </span>
          </button>
        ) : (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#5C6D88", letterSpacing: "0.06em" }}>
            // {projects.length} projetos exibidos
          </p>
        )}
      </div>
    </div>
  );
}
