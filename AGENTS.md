# AGENTS.md — Lab82

## Identidade do projeto

Site institucional da Lab82 Agência Digital, com foco em WordPress, hospedagem, manutenção e presença digital.

Projeto:
- `site-lab82-2026`
- Next.js
- TypeScript
- App Router
- Tailwind CSS v4
- shadcn/ui
- Radix
- Git/GitHub
- Deploy na Vercel

## Arquitetura

- Usar App Router.
- Manter Server Components por padrão.
- Criar Client Components somente quando houver necessidade real de estado, eventos de browser, APIs do cliente, canvas/WebGL ou outra funcionalidade incompatível com Server Components.
- Quando um componente pesado de cliente não for necessário para o HTML inicial, considerar carregamento dinâmico para removê-lo do caminho crítico.
- Manter componentes reutilizáveis separados das páginas.

Estrutura esperada, adaptável ao estado atual do repositório:

```text
src/
├── app/
│   ├── page.tsx
│   ├── solucoes/
│   ├── portfolio/
│   └── contato/
├── components/
│   ├── ui/
│   └── ...
└── ...
```

Não criar essa estrutura cegamente se o repositório já tiver uma organização equivalente.

## Rotas e navegação

Navegação principal implementada:

- início
- portfólio
- WordPress
- Host Alta Performance
- Manutenção WP

Não adicionar:

- blog;
- cadastro de cliente.

CTA da navegação:

> WhatsApp

O CTA principal da Home permanece “solicite um orçamento”, com acesso ao WhatsApp.

## Design system

A identidade aprovada é de:

- minimalismo futurista;
- estética de tecnologia/IA;
- dark mode dominante;
- glassmorphism;
- Bento Grid;
- atmosfera premium de agência de tecnologia;
- acentos luminosos;
- layouts assimétricos controlados.

Tipografia:

- display/títulos: JetBrains Mono;
- corpo: Inter.

Preferência de marca:
- títulos em lowercase quando isso fizer sentido para a identidade existente;
- títulos mono com bom espaçamento;
- evitar estética genérica de landing page gerada por IA.

## Componentes e interação

Padrões visuais aprovados:

- cards glassmorphism;
- bordas com glow azul em hover;
- CTAs com brilho sutil;
- navegação com underline animado;
- inputs com foco azul;
- portfólio com overlay/reveal no hover;
- counters animados quando isso não prejudicar performance.

Animações devem ser discretas e nunca bloquear o conteúdo crítico.

## Conteúdo funcional

### Home

A Home deve contemplar:

- Hero;
- valores/diferenciais;
- soluções;
- estatísticas;
- projetos recentes;
- contato.

Headline de referência:

> criamos experiências digitais que geram resultado.

CTA principal:

> solicite um orçamento

CTA secundário:

> ver portfólio

### Soluções

Manter as páginas:

- site em WordPress;
- hospedagem dedicada;
- manutenção do WordPress.

Hospedagem dedicada:
- pagamento anual com destaque para economia;
- pagamento mensal.

Manutenção WordPress:
- CTA de WhatsApp deve permanecer destacado.

### Portfólio

Usar composição Bento Grid assimétrica.

Os projetos existentes devem ser preservados, salvo nova decisão de conteúdo.

### Footer

Footer escuro centralizado com marca `<lab82/>`, selo “Neural Network Design”, links para as rotas principais e copyright. Não adicionar conteúdo ou colunas não presentes no footer atual sem decisão aprovada.

## Performance

O projeto já teve um problema de LCP causado por elementos do hero invisíveis no primeiro frame e por um canvas pesado.

Regras:

- não colocar `opacity: 0` em ancestral do elemento que deve ser LCP;
- não bloquear o SSR com canvas/WebGL;
- componentes de canvas/WebGL devem ser tratados como client-side quando necessário;
- não usar animação de entrada acima da dobra se ela impedir a pintura imediata do conteúdo;
- fontes devem permitir fallback visível;
- validar `next build` após alterações relevantes.

## Vercel e DNS

O site é hospedado na Vercel.

O domínio e a infraestrutura de e-mail não devem ser tratados como se fossem exclusivamente da Vercel.

Antes de alterar DNS:

- identificar onde a zona DNS é autoritativa;
- preservar MX/SPF/DKIM;
- confirmar registros existentes;
- não inventar IPs ou valores.

Nunca trocar nameservers somente para facilitar o deploy.

## Validação

Antes de considerar uma alteração concluída:

```bash
npm run lint
npm run build
```

quando esses scripts existirem.

Para alterações de performance:
- verificar build;
- verificar HTML produzido;
- testar PageSpeed/Core Web Vitals quando aplicável.

## Regra específica do Lab82

O site deve parecer um produto digital cuidadosamente desenhado, não um template genérico de IA.

Se uma solução tecnicamente correta deixar a interface genérica, revisá-la antes de finalizar.
