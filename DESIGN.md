# DESIGN.md — Lab82

## Status

Design system aprovado para o projeto e alinhado à versão azul atualmente implementada.

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

Decisão registrada em 28/10/2026: o proprietário confirmou que a versão azul atualmente implementada é a direção aprovada. A direção verde pertence ao histórico anterior e não é a paleta vigente.

```css
--color-bg: #0A1628;
--color-surface: #112240;
--color-surface-secondary: #162D50;

--color-accent-blue: #4D9DE0;
--color-accent-blue-secondary: #3A7BD5;

--color-detail-mint: #B7E4C7;

--color-text-primary: #FFFFFF;
--color-text-body: #CDD6E4;
--color-text-muted: #8FA0BA;

--color-border: rgba(77, 157, 224, 0.18);
```

### Uso

- azul profundo: fundo e superfícies principais;
- azul `#4D9DE0`: acento principal, links, estados ativos, bordas e glow;
- menta `#B7E4C7`: detalhe secundário;
- branco/cinza claro: conteúdo principal e corpo;
- azul acinzentado: conteúdo secundário.

O azul deve continuar sendo o acento dominante; usar menta apenas como detalhe secundário.

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
- azul como destaque da marca.

Itens:

```text
Início | Portfólio | WordPress | Host Alta Performance | Manutenção WP
```

CTA da navbar:

```text
WhatsApp
```

Estilo:
- botão WhatsApp preenchido em teal, conforme implementação;
- underline azul no item ativo.

Não incluir:
- blog;
- cadastro de cliente.

## Home

### Hero

Hero de grande impacto.

- viewport amplo;
- fundo escuro;
- grid/mesh animado discreto;
- linhas sutis em tons azuis;
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
- glow azul;
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

Layout centralizado:

1. marca `<lab82/>`;
2. selo “Neural Network Design”;
3. links para as mesmas rotas principais da navegação;
4. copyright.

Copyright:

> © 2026 Lab82. Todos os direitos reservados.

Manter o layout centralizado. Não acrescentar colunas, contatos ou redes sociais sem decisão aprovada.

## Interações

- card → borda/glow azul + scale muito sutil;
- CTA → brilho controlado;
- links → underline azul animado;
- input → border/glow azul no foco;
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
