import Link from "next/link";
import Image from "next/image";
import NeuralCanvas from "@/components/neural-canvas";
import WhatsappIcon from "@/components/whatsapp-icon";
import {
  Wrench, TrendingUp, Server, Globe, Code2, Paintbrush,
  ShieldCheck, Lock, ShoppingCart, Rocket, Cloud, Mail,
  Clock, Zap, Headphones, BookOpen, ExternalLink,
} from "lucide-react";
import WordpressIcon from "@/components/wordpress-icon";
import TechCarousel from "@/components/tech-carousel";
import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Agência Digital: Sites WordPress, Hospedagem e Manutenção",
  description: "A Lab82 cria sites profissionais de alto impacto com WordPress, hospedagem de alta performance e manutenção especializada. Mais de 300 projetos entregues em 20 anos de mercado.",
  alternates: { canonical: "https://lab82.dev" },
  openGraph: {
    title: "Lab82: Agência Digital",
    description: "Sites WordPress, hospedagem de alta performance e manutenção especializada.",
    url: "https://lab82.dev",
  },
};

const WA_LINK = "https://wa.me/5531998407238";

const glass: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(22, 45, 80, 0.5), rgba(17, 34, 64, 0.6))",
  border: "1px solid rgba(77, 157, 224, 0.18)",
  borderRadius: 16,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const bentoCards = [
  { id: "wp",   title: "WordPress",       desc: "Sites profissionais com o CMS mais usado do mundo. Design único, painel fácil.", tag: "CMS",       href: "/wordpress", col: "1 / 4", row: "1 / 2", featured: true,  Icon: null },
  { id: "man",  title: "Manutenção WP",   desc: "Atualizações, backups e monitoramento contínuo.",                                tag: "SUPORTE",   href: "/manutencao",col: "4 / 6", row: "1 / 2", featured: false, Icon: Wrench },
  { id: "seo",  title: "SEO",             desc: "Mais visibilidade orgânica.",                                                    tag: "MARKETING", href: "#contato",   col: "6 / 7", row: "1 / 2", featured: false, Icon: TrendingUp },
  { id: "app",  title: "Aplicações Web",  desc: "Sistemas e plataformas sob medida.",                                            tag: "DEV",       href: "#contato",   col: "1 / 3", row: "2 / 3", featured: false, Icon: Code2 },
  { id: "des",  title: "Design",          desc: "UI/UX e identidade visual.",                                                    tag: "DESIGN",    href: "#contato",   col: "3 / 4", row: "2 / 3", featured: false, Icon: Paintbrush },
  { id: "host", title: "Hospedagem",      desc: "LiteSpeed, NVMe SSD, 99.9% uptime.",                                           tag: "INFRA",     href: "/hospedagem",col: "4 / 6", row: "2 / 3", featured: false, Icon: Server },
  { id: "dom",  title: "Domínio",         desc: "Registro e gestão de domínios.",                                                tag: "INFRA",     href: "#contato",   col: "6 / 7", row: "2 / 3", featured: false, Icon: Globe },
  { id: "ecom", title: "E-commerce",      desc: "Loja virtual completa e escalável.",                                            tag: "VENDAS",    href: "#contato",   col: "1 / 3", row: "3 / 4", featured: false, Icon: ShoppingCart },
  { id: "land", title: "Landing Page",    desc: "Páginas de conversão de alto impacto.",                                        tag: "DEV",       href: "#contato",   col: "3 / 4", row: "3 / 4", featured: false, Icon: Rocket },
  { id: "spam", title: "SpamExperts",     desc: "Proteção de e-mail corporativo.",                                               tag: "EMAIL",     href: "#contato",   col: "4 / 6", row: "3 / 4", featured: false, Icon: ShieldCheck },
  { id: "ssl",  title: "SSL",             desc: "Certificados gratuitos e pagos.",                                               tag: "SEGURANÇA", href: "#contato",   col: "6 / 7", row: "3 / 4", featured: false, Icon: Lock },
  { id: "back", title: "Cloud Backup",    desc: "Backups diários automatizados na nuvem.",                                      tag: "INFRA",     href: "#contato",   col: "1 / 4", row: "4 / 5", featured: false, Icon: Cloud },
  { id: "mail", title: "E-mail Pro",      desc: "Contas profissionais com seu domínio.",                                        tag: "EMAIL",     href: "#contato",   col: "4 / 7", row: "4 / 5", featured: false, Icon: Mail },
];

const PROJECT_SLOTS = [
  { col: "1 / 4", row: "1 / 2", bg: "linear-gradient(135deg, rgba(26,26,46,0.88), rgba(22,33,62,0.88))" },
  { col: "4 / 7", row: "1 / 2", bg: "linear-gradient(135deg, rgba(15,52,96,0.88), rgba(83,52,131,0.88))" },
  { col: "1 / 3", row: "2 / 3", bg: "linear-gradient(135deg, rgba(10,61,46,0.88), rgba(26,107,82,0.88))" },
  { col: "3 / 5", row: "2 / 3", bg: "linear-gradient(135deg, rgba(45,27,105,0.88), rgba(17,153,142,0.88))" },
  { col: "5 / 7", row: "2 / 3", bg: "linear-gradient(135deg, rgba(55,59,68,0.88), rgba(66,134,244,0.88))" },
];

async function getHomeProjects() {
  try {
    const res = await fetch("https://tiagobernardes.com.br/data/portfolio.json", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data: Array<{ titulo: string; descricao: string; imagem: string; tags: string[]; url_externa: string }> = await res.json();
    return data.slice(0, 5).map((item, i) => ({
      titulo: item.titulo,
      desc: item.descricao.replace(/<[^>]*>/g, "").trim(),
      imagem: item.imagem,
      tags: item.tags,
      url_externa: item.url_externa,
      ...PROJECT_SLOTS[i],
    }));
  } catch {
    return [] as Array<{ titulo: string; desc: string; imagem: string; tags: string[]; url_externa: string; col: string; row: string; bg: string }>;
  }
}

export default async function Home() {
  const projects = await getHomeProjects();
  return (
    <main>
      {/* ══ HERO ══ */}
      <section
        id="inicio"
        className="relative overflow-hidden flex items-center min-h-screen"
        style={{ marginTop: -64 }}
      >
        <NeuralCanvas />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 50%, rgba(10, 22, 40, 0.4) 0%, rgba(10, 22, 40, 0.85) 70%)",
            zIndex: 1,
          }}
        />

        <div className="relative z-[2] w-full max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-[60px] items-center" style={{ paddingTop: 100, paddingBottom: 48 }}>
          {/* Left */}
          <div className="hero-left">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(77, 157, 224, 0.1)",
                border: "1px solid rgba(77, 157, 224, 0.25)",
                borderRadius: 20,
                padding: "6px 14px",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
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
                agência digital · 2026
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(36px, 5.6vw, 84px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                margin: "0 0 20px",
                color: "#CDD6E4",
              }}
            >
              criamos sites que geram{" "}
              <span style={{ color: "#4D9DE0" }}>resultados formidáveis</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "#8FA0BA",
                lineHeight: 1.6,
                maxWidth: 560,
                margin: "0 0 36px",
              }}
            >
              Do branding ao código, desenvolvemos presença digital de alto impacto para empresas e profissionais que não aceitam o medíocre.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
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
                  padding: "14px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(18, 140, 126, 0.35)",
                }}
              >
                <WhatsappIcon size={17} />
                solicite um orçamento
              </a>
              <Link
                href="/portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid rgba(77, 157, 224, 0.4)",
                  color: "#CDD6E4",
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  padding: "14px 20px",
                  borderRadius: 12,
                  textDecoration: "none",
                  background: "rgba(77, 157, 224, 0.06)",
                }}
              >
                ver portfólio <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* Right — stat cards (hidden on mobile, visible on lg+) */}
          <div className="hero-right hidden lg:flex flex-col gap-4">
            {[
              { value: "300+", label: "projetos entregues" },
              { value: "150+", label: "clientes satisfeitos" },
              { value: "20+",  label: "anos de experiência" },
            ].map((s) => (
              <div key={s.label} style={{ ...glass, padding: "24px 28px", position: "relative" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 42,
                    fontWeight: 700,
                    color: "#4D9DE0",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#8FA0BA" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES // 01 ══ */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">
        <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            marginBottom: 40,
          }}
        >
          // 01: nossos valores
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "01", Icon: Clock,     title: "pontualidade", desc: "Entregas no prazo combinado. Sem surpresas, sem atrasos. Sua agenda é nossa prioridade." },
            { num: "02", Icon: Zap,       title: "agilidade",    desc: "Processos enxutos e iterativos que reduzem o tempo do briefing ao lançamento." },
            { num: "03", Icon: Headphones,title: "suporte",      desc: "Atendimento humano e responsivo. Você fala com quem fez seu site." },
            { num: "04", Icon: BookOpen,  title: "treinamento",  desc: "Capacitamos sua equipe para gerenciar o site com total autonomia e confiança." },
          ].map((v) => (
            <div
              key={v.num}
              className="relative overflow-hidden"
              style={{ ...glass, padding: "28px 24px" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "rgba(77, 157, 224, 0.3)",
                  letterSpacing: "0.06em",
                  fontWeight: 700,
                }}
              >
                {v.num}
              </div>
              <div style={{ marginBottom: 16, color: "#4D9DE0" }}><v.Icon size={28} /></div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#CDD6E4",
                  marginBottom: 10,
                  textTransform: "lowercase",
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#8FA0BA", lineHeight: 1.6, margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
        </Reveal>
      </section>

      {/* ══ SOLUTIONS BENTO // 02 ══ */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pb-12 md:pb-16 lg:pb-20">
        <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            marginBottom: 40,
          }}
        >
          // 02: soluções
        </div>

        <div className="sol-bento">
          {bentoCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              style={{
                gridColumn: card.col,
                gridRow: card.row,
                ...glass,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: card.featured ? 28 : 20,
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "pointer",
                ...(card.featured
                  ? { background: "linear-gradient(135deg, rgba(77, 157, 224, 0.12), rgba(17, 34, 64, 0.8))" }
                  : {}),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#4D9DE0",
                  letterSpacing: "0.12em",
                  opacity: 0.7,
                }}
              >
                {card.tag}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  {card.Icon ? (
                    <card.Icon size={card.featured ? 22 : 18} color="#4D9DE0" style={{ flexShrink: 0 }} />
                  ) : (
                    <WordpressIcon size={card.featured ? 22 : 18} color="#4D9DE0" />
                  )}
                  <h3
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: card.featured ? 22 : 15,
                      fontWeight: 600,
                      color: "#CDD6E4",
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: card.featured ? 14 : 12,
                    color: "#8FA0BA",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
        </Reveal>
      </section>

      {/* ══ STATS // 03 ══ */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pb-12 md:pb-16 lg:pb-20">
        <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            marginBottom: 40,
          }}
        >
          // 03: métricas vivas
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "300+", label: "projetos entregues" },
            { value: "150+", label: "clientes ativos" },
            { value: "20+",  label: "anos no mercado" },
            { value: "20K+", label: "xícaras de café" },
          ].map((s) => (
            <div
              key={s.label}
              style={{ ...glass, padding: "28px 20px", textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 700,
                  color: "#4D9DE0",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#8FA0BA", textTransform: "lowercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </section>

      {/* ══ TECHNOLOGIES // 04 ══ */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pb-12 md:pb-16 lg:pb-20">
        <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            marginBottom: 40,
          }}
        >
          // 04: tecnologias que usamos
        </div>
        <TechCarousel />
        </Reveal>
      </section>

      {/* ══ PROJECTS PREVIEW // 05 ══ */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pb-12 md:pb-16 lg:pb-20">
        <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            marginBottom: 40,
          }}
        >
          // 05: últimos projetos
        </div>

        <div className="proj-prev">
          {projects.map((p, i) => (
            <div
              key={p.titulo}
              style={{
                gridColumn: p.col,
                gridRow: p.row,
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                border: "1px solid rgba(77, 157, 224, 0.18)",
                cursor: "pointer",
              }}
            >
              <Image
                src={`https://tiagobernardes.com.br${p.imagem}`}
                alt={p.titulo}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i === 0}
              />
              <div style={{ position: "absolute", inset: 0, background: p.bg, zIndex: 1 }} />

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
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
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
                      {tag}
                    </span>
                  ))}
                </div>
                {p.url_externa && (
                  <a
                    href={p.url_externa}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${p.titulo}`}
                    style={{
                      flexShrink: 0,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "rgba(13, 27, 50, 0.65)",
                      border: "1px solid rgba(77, 157, 224, 0.7)",
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

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "32px 20px 20px",
                  background: "linear-gradient(0deg, rgba(10, 22, 40, 0.85) 0%, transparent 100%)",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: "0 0 4px",
                  }}
                >
                  {p.titulo}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#8FA0BA", margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(77, 157, 224, 0.35)",
              color: "#CDD6E4",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: 10,
              textDecoration: "none",
              background: "rgba(77, 157, 224, 0.06)",
            }}
          >
            ver portfólio completo <ArrowIcon />
          </Link>
        </div>
        </Reveal>
      </section>

      {/* ══ CONTACT // 06 ══ */}
      <section
        id="contato"
        className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pb-16 md:pb-20 lg:pb-[100px]"
      >
        <Reveal>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            marginBottom: 40,
          }}
        >
          // 06: contato
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(77, 157, 224, 0.1)",
                border: "1px solid rgba(77, 157, 224, 0.25)",
                borderRadius: 20,
                padding: "5px 13px",
                marginBottom: 24,
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
                fale com a gente
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(24px, 3.5vw, 48px)",
                fontWeight: 700,
                color: "#CDD6E4",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              vamos criar algo incrível juntos
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "#8FA0BA",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Conte-nos sobre seu projeto. Nossa equipe responde em até 2 horas em horário comercial.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                ...glass,
                padding: "18px 22px",
                textDecoration: "none",
                marginBottom: 12,
                transition: "border-color 0.2s",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #128C7E, #075E54)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff",
                }}
              >
                <WhatsappIcon size={20} />
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#4D9DE0", marginBottom: 2 }}>
                  WhatsApp
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: "#CDD6E4", fontWeight: 500 }}>
                  +55 31 998 407 238
                </div>
              </div>
            </a>

            <a
              href="mailto:falecom@lab82.dev"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                ...glass,
                padding: "18px 22px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(77, 157, 224, 0.15)",
                  border: "1px solid rgba(77, 157, 224, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4D9DE0" strokeWidth={2}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#4D9DE0", marginBottom: 2 }}>
                  E-mail
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: "#CDD6E4", fontWeight: 500 }}>
                  falecom@lab82.dev
                </div>
              </div>
            </a>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
        </Reveal>
      </section>
    </main>
  );
}
