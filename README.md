# psicamilakozaka.com.br

Landing page da Psicóloga Camila Kozaka, especialista em Terapia Cognitivo-Comportamental (TCC).

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev) | 19 | UI |
| [TanStack Router](https://tanstack.com/router) | latest | Roteamento type-safe |
| [TanStack Start](https://tanstack.com/start) | latest | Framework SSR/SPA |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilização utility-first |
| [Vite](https://vite.dev) | 8 | Build tool |
| [TypeScript](https://typescriptlang.org) | 5 | Type safety |
| [pnpm](https://pnpm.io) | — | Gerenciador de pacotes |

## Desenvolvimento

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build
pnpm preview
```

## Testes

```bash
pnpm test
```

## Lint & Format

```bash
pnpm lint
pnpm format
pnpm check
```

## Estrutura

```
src/
├── components/
│   ├── Header.tsx       # Navegação sticky com âncoras
│   ├── Footer.tsx       # Rodapé com CRP
│   └── ThemeToggle.tsx  # Alternador claro/escuro
├── routes/
│   ├── __root.tsx       # Layout raiz
│   └── index.tsx        # Landing page (Hero, Sobre, Serviços, Contato)
└── styles.css           # Design tokens + Tailwind 4
```
