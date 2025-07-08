# NLW Project

Projeto fullstack com backend em Fastify + Drizzle ORM + PostgreSQL e frontend em React + TypeScript + Vite + TailwindCSS.

## Tecnologias principais

- **Backend:** Fastify, Drizzle ORM, PostgreSQL, Zod
- **Frontend:** React, TypeScript, Vite, TailwindCSS, React Router, React Query

---

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- PostgreSQL (local ou via Docker)

---

### Backend

1. Instale as dependências:
   ```bash
   cd server
   npm install
   ```
2. Configure o banco de dados PostgreSQL e defina a variável `DATABASE_URL` no arquivo `.env` (exemplo: `postgresql://user:password@localhost:5432/nlw`).
3. Rode as migrações e seeds (se necessário).
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

### Frontend

1. Instale as dependências:
   ```bash
   cd web
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse o app em `http://localhost:5173` (ou porta exibida no terminal).

--- 