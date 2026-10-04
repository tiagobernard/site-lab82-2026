# DESIGN.md — Lab82

## Status

Design system reconstruído a partir das decisões registradas no histórico de redesign da Lab82.

Este documento é a fonte de verdade visual do projeto. Alterações futuras devem atualizar este arquivo quando uma decisão de design for aprovada.

## Direção

**Futuristic minimalism + AI-era technology.**

A interface deve transmitir:

- tecnologia;
- confiança;
- maturidade;
- precisão;
- velocidade;
- agência digital premium.

Evitar aparência de template SaaS genérico.

## Linguagem visual

### Base

- dark mode dominante;
- superfícies escuras;
- glassmorphism;
- transparências;
- backdrop blur;
- bordas sutis;
- luminosidade controlada;
- glow apenas onde ajuda hierarquia/interação.

### Layout

Usar CSS Grid e composições Bento.

Características:

- cards com tamanhos variados;
- assimetria intencional;
- espaços negativos generosos;
- agrupamentos visuais;
- quebra ocasional do grid para elementos de destaque.

Não transformar todas as seções em uma grade uniforme de cards.

## Cores

```css
--color-bg: #0a0f0d;
--color-surface: rgba(13, 26, 20, 0.8);

--color-accent-green: #00e676;
--color-accent-blue: #1565c0;

--color-pastel-mint: #b2dfdb;
--color-pastel-sky: #bbdefb;

--color-text-primary: #f0faf5;
--color-text-muted: #78909c;

--color-border: rgba(0, 230, 118, 0.15);
```

### Uso

- verde elétrico: CTA, estados ativos, bordas e glow;
- azul: informação secundária, tags e destaques;
- mint/sky: detalhes e variações suaves;
- near-black: base;
- off-white: conteúdo principal;
- slate: conteúdo secundário.

Não distribuir as cores igualmente. O verde deve continuar sendo o acento visual dominante.

## Tipografia

### Display

`JetBrains Mono`

Usar em:

- títulos;
- números;
- marca;
- labels técnicos;
- elementos de destaque.

### Body

`Inter`

Usar em:

- parágrafos;
- descrições;
- formulários;
- conteúdo corrido.

### Hierarquia

- títulos grandes;
- leading controlado;
- mono com letter-spacing adequado;
- evitar títulos excessivamente condensados;
- manter lowercase quando isso reforçar a identidade da marca.

## Navbar

Navbar sticky.

Características:

- fundo escuro/translúcido;
- backdrop blur;
- logo `<lab82/>`;
- logo em JetBrains Mono;
- verde como destaque da marca.

Itens:

```text
início | soluções | portfólio | contato
```

CTA:

```text
solicite um orçamento
```

Estilo:
- outline verde;
- glow no hover.

Não incluir:
- blog;
- cadastro de cliente.

## Home

### Hero

Hero de grande impacto.

- viewport amplo;
- fundo escuro;
- grid/mesh animado discreto;
- linhas verdes sutis;
- headline grande;
- CTA duplo;
- pequenos elementos/cards flutuantes.

Headline:

> criamos experiências digitais que geram resultado.

Subheadline:

> especialistas em WordPress, hospedagem e presença digital para empresas que querem crescer.

CTAs:

- solicite um orçamento;
- ver portfólio.

### Diferenciais

Quatro cards:

- pontualidade em prazos;
- agilidade no atendimento;
- suporte descomplicado;
- treinamento para clientes.

### Soluções

Bento Grid de serviços.

Serviços de referência:

- desenvolvimento;
- manutenção WP;
- hospedagem dedicada;
- WordPress;
- SEO;
- registro de domínio;
- e-commerce;
- responsivo;
- certificado SSL;
- landing pages;
- AMP;
- cloud backup.

### Estatísticas

Destaque visual para:

- 300+ projetos;
- 150+ clientes;
- 20+ anos;
- 20.000+ xícaras de café.

### Portfólio

Bento assimétrico.

Hover:
- overlay;
- nome do projeto;
- glow verde;
- transição curta.

### Contato

Layout dividido:

- contato/WhatsApp/e-mail;
- formulário.

Campos:

- nome;
- WhatsApp;
- e-mail;
- assunto;
- mensagem.

## Página de hospedagem

Elemento de maior destaque:

**dois CTAs distintos**

- pagamento anual — preenchido, destaque de economia;
- pagamento mensal — outline/ghost.

Não esconder os dois planos dentro de um único botão.

## Página de manutenção

O CTA de WhatsApp é obrigatório e visualmente destacado.

Texto de referência:

> alguma dúvida ou quer contratar? clique aqui

## Portfólio

Grid Bento assimétrico.

Cada projeto deve ter:

- imagem;
- overlay;
- nome;
- categoria;
- hover com glow.

Categorias:

- website;
- e-commerce;
- landing page.

## Footer

Três áreas:

1. últimos projetos;
2. contato;
3. marca `<82/>`.

Redes sociais:

- Instagram;
- Facebook;
- X/Twitter.

Copyright:

> Lab82 Agência Digital Especializada em WordPress

Não incluir coluna de blog.

## Interações

- card → border/glow + scale muito sutil;
- CTA → brilho controlado;
- links → underline animado;
- input → border/glow no foco;
- portfólio → reveal do overlay;
- counters → animação ao entrar na viewport.

## Acessibilidade e performance

Interações nunca devem comprometer:

- contraste;
- navegação por teclado;
- conteúdo inicial;
- LCP;
- legibilidade;
- `prefers-reduced-motion`.

A estética é importante, mas o conteúdo deve aparecer imediatamente.

## Regra de ouro

> Premium, técnico e memorável — sem parecer um template de IA.
