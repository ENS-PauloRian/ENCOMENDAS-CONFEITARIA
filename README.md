# Encomendas da Confeitaria

Sistema web para controle de encomendas de uma confeitaria, com CRUD completo
(cadastrar, listar, alterar e excluir encomendas).

Projeto individual da disciplina **Desenvolvimento Web Mobile II** — UGV.

## Tecnologias

| Camada   | Tecnologias                                          |
|----------|------------------------------------------------------|
| Back-end | Node.js, Express, Sequelize, PostgreSQL, CORS, Swagger |
| Front-end| React (Vite), React Router DOM                       |

## Estrutura do repositório

```
encomendas-confeitaria/
├── .gitignore
├── README.md
├── Back/     → API REST (Node + Express)
└── Front/    → Interface (React + Vite)
```

## Como executar

### 1. Banco de dados
Crie o banco no PostgreSQL:
```sql
CREATE DATABASE confeitaria;
```
A tabela `encomendas` é criada automaticamente pelo Sequelize ao iniciar o back-end.

### 2. Back-end
```bash
cd Back
npm install
cp .env.example .env   # depois edite com o usuário/senha do seu PostgreSQL
npm run dev
```
API em `http://localhost:3000` — documentação Swagger em `http://localhost:3000/api-docs`.

### 3. Front-end
```bash
cd Front
npm install
npm run dev
```
Interface em `http://localhost:5173`.

## Endpoints

| Método | Rota               | Descrição                 |
|--------|--------------------|---------------------------|
| GET    | /encomendas        | Lista todas as encomendas |
| GET    | /encomendas/:id    | Busca uma encomenda       |
| POST   | /encomendas        | Cadastra uma encomenda    |
| PUT    | /encomendas/:id    | Altera uma encomenda      |
| DELETE | /encomendas/:id    | Exclui uma encomenda      |

## Autor
Paulo Rian Laranjeiras Pontes — [GitHub](https://github.com/ENS-PauloRian)
