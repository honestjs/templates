# HonestJS Template Project Ideas

## 1. **API Starter (REST + OpenAPI)**

| Field            | Details                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| **Use Case**     | Quick REST API with OpenAPI docs and type-safe client generation                                         |
| **Why Valuable** | Uses RPC plugin + API Docs plugin, decorators, DTOs, and pipeline                                        |
| **Key Features** | Versioned routes (`/api/v1`), ClassValidatorPipe for DTOs, Swagger UI, generated TypeScript client       |
| **Technologies** | `@honestjs/rpc-plugin`, `@honestjs/api-docs-plugin`, `@honestjs/class-validator-pipe`, `http-essentials` |
| **Difficulty**   | Beginner                                                                                                 |
| **Learn**        | Modules, controllers, DTO validation, OpenAPI, typed RPC client                                          |

---

## 2. **Auth API (JWT + Sessions)**

| Field            | Details                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| **Use Case**     | Auth API with signup, login, refresh, and protected routes                    |
| **Why Valuable** | Shows guards, middleware, and request-scoped auth                             |
| **Key Features** | JWT sign/verify, session storage, `@UseGuards(AuthGuard)`, role-based access  |
| **Technologies** | `hono/jwt`, `@honestjs/middleware`, `http-essentials` (UnauthorizedException) |
| **Difficulty**   | Intermediate                                                                  |
| **Learn**        | Guards, middleware, `@Ctx()`, `@Var()`, exception filters                     |

---

## 3. **Todo API (CRUD + SQLite)**

| Field            | Details                                                                           |
| ---------------- | --------------------------------------------------------------------------------- |
| **Use Case**     | Simple CRUD API with SQLite persistence                                           |
| **Why Valuable** | Service layer, DI, and data access patterns                                       |
| **Key Features** | CRUD endpoints, SQLite via better-sqlite3 or Bun.sqlite, repository/service split |
| **Technologies** | `better-sqlite3` or Bun built-in SQLite, `@honestjs/class-validator-pipe`         |
| **Difficulty**   | Beginner                                                                          |
| **Learn**        | Services, DI, repository pattern, DTOs                                            |

---

## 4. **Blog Platform (MVC + Database)**

| Field            | Details                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| **Use Case**     | Blog with posts, comments, and server-rendered views                    |
| **Why Valuable** | Full MVC with Hono JSX, layouts, and data-driven views                  |
| **Key Features** | Post list/detail, comments, layouts, `@View`/`@Page`, shared components |
| **Technologies** | SQLite or D1 (Cloudflare), Hono JSX, `JsxRendererMiddleware`            |
| **Difficulty**   | Intermediate                                                            |
| **Learn**        | MVC, layouts, views, server-side rendering                              |

---

## 5. **Cloudflare Workers API**

| Field            | Details                                                   |
| ---------------- | --------------------------------------------------------- |
| **Use Case**     | Edge API on Cloudflare Workers with KV/D1                 |
| **Why Valuable** | HonestJS on Hono runs on Workers; shows edge deployment   |
| **Key Features** | Workers adapter, KV for cache, D1 for SQL, env bindings   |
| **Technologies** | `@hono/node-server` or Workers adapter, Cloudflare KV, D1 |
| **Difficulty**   | Intermediate                                              |
| **Learn**        | Edge deployment, Workers bindings, Hono adapters          |

---

## 6. **AI Chat API (LLM Integration)**

| Field            | Details                                                           |
| ---------------- | ----------------------------------------------------------------- |
| **Use Case**     | Chat API with streaming responses from an LLM                     |
| **Why Valuable** | Streaming, async handlers, and external API integration           |
| **Key Features** | POST `/chat` with streaming, SSE or streaming JSON, API key guard |
| **Technologies** | OpenAI SDK, Anthropic SDK, or Vercel AI SDK                       |
| **Difficulty**   | Intermediate                                                      |
| **Learn**        | Streaming responses, guards for API keys, async services          |

---

## 7. **Webhook Receiver**

| Field            | Details                                                                         |
| ---------------- | ------------------------------------------------------------------------------- |
| **Use Case**     | Receive and process webhooks (Stripe, GitHub, etc.) with signature verification |
| **Why Valuable** | Raw request handling, headers, and custom middleware                            |
| **Key Features** | Signature verification middleware, event routing, idempotency                   |
| **Technologies** | `crypto` for HMAC, `@honestjs/middleware`                                       |
| **Difficulty**   | Intermediate                                                                    |
| **Learn**        | `@Header()`, `@Req()`, middleware, raw body handling                            |

---

## 8. **Rate-Limited API**

| Field            | Details                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| **Use Case**     | API with per-IP or per-user rate limiting                                     |
| **Why Valuable** | Middleware, application context, and shared state                             |
| **Key Features** | In-memory or Redis rate limiter, `429 Too Many Requests`, configurable limits |
| **Technologies** | Redis (optional), `@honestjs/middleware`, `http-essentials`                   |
| **Difficulty**   | Intermediate                                                                  |
| **Learn**        | Middleware, app context, `@Ctx()` for request metadata                        |

---

## 9. **Microservice Gateway (BFF)**

| Field            | Details                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| **Use Case**     | Backend-for-frontend aggregating multiple services                      |
| **Why Valuable** | Multiple services, DI, and RPC client usage                             |
| **Key Features** | Aggregated endpoints, parallel fetch, error handling, typed RPC clients |
| **Technologies** | RPC plugin (generated clients), `Promise.all` for aggregation           |
| **Difficulty**   | Advanced                                                                |
| **Learn**        | Service composition, RPC clients, error handling                        |

---

## 10. **Admin Dashboard (MVC + Tables)**

| Field            | Details                                                     |
| ---------------- | ----------------------------------------------------------- |
| **Use Case**     | Internal admin UI for managing resources                    |
| **Why Valuable** | MVC, forms, tables, and CRUD views                          |
| **Key Features** | Resource list/create/edit/delete, forms, pagination, layout |
| **Technologies** | Hono JSX, SQLite or PostgreSQL                              |
| **Difficulty**   | Intermediate                                                |
| **Learn**        | Forms, tables, pagination, layouts                          |

---

## 11. **GraphQL Bridge**

| Field            | Details                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| **Use Case**     | GraphQL API backed by HonestJS services                                  |
| **Why Valuable** | HonestJS services as resolvers, DI in GraphQL layer                      |
| **Key Features** | GraphQL schema, resolvers calling services, subscriptions (if supported) |
| **Technologies** | `graphql`, `graphql-yoga` or `@graphql-hono/graphql-yoga`                |
| **Difficulty**   | Advanced                                                                 |
| **Learn**        | GraphQL + HonestJS, service reuse, Hono middleware                       |

---

## 12. **Queue Worker API**

| Field            | Details                                                       |
| ---------------- | ------------------------------------------------------------- |
| **Use Case**     | API that enqueues jobs and processes them asynchronously      |
| **Why Valuable** | Background processing, app context, and service orchestration |
| **Key Features** | POST to enqueue, worker process, BullMQ or in-memory queue    |
| **Technologies** | BullMQ + Redis, or `p-queue` for in-memory                    |
| **Difficulty**   | Advanced                                                      |
| **Learn**        | Queues, workers, app context for shared config                |

---

## 13. **File Upload API**

| Field            | Details                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| **Use Case**     | Multipart uploads with validation and storage                           |
| **Why Valuable** | Non-JSON bodies, pipes, and validation                                  |
| **Key Features** | Multipart parsing, size limits, type validation, S3/R2 or local storage |
| **Technologies** | `@hono/node-server` or Bun for multipart, R2 or S3 SDK                  |
| **Difficulty**   | Intermediate                                                            |
| **Learn**        | Multipart, pipes, guards, storage integration                           |

---

## 14. **Health Check & Observability**

| Field            | Details                                                  |
| ---------------- | -------------------------------------------------------- |
| **Use Case**     | Health and readiness endpoints for Kubernetes/Docker     |
| **Why Valuable** | Simple controllers, app context, and dependency checks   |
| **Key Features** | `/health`, `/ready` (DB, Redis), `/metrics` (Prometheus) |
| **Technologies** | `prom-client` for Prometheus, DB ping                    |
| **Difficulty**   | Beginner                                                 |
| **Learn**        | Health checks, app context, minimal controllers          |

---

## 15. **Multi-Tenant SaaS API**

| Field            | Details                                                                   |
| ---------------- | ------------------------------------------------------------------------- |
| **Use Case**     | API with tenant isolation (subdomain or header)                           |
| **Why Valuable** | Guards, middleware, and request-scoped tenant context                     |
| **Key Features** | Tenant resolution middleware, tenant-scoped services, row-level isolation |
| **Technologies** | PostgreSQL with tenant column, `@Var('tenantId')`                         |
| **Difficulty**   | Advanced                                                                  |
| **Learn**        | Multi-tenancy, guards, `@Var()`, request context                          |

---

## Summary by Category

| Category               | Templates                                                 |
| ---------------------- | --------------------------------------------------------- |
| **API / REST**         | API Starter, Todo API, Webhook Receiver, Rate-Limited API |
| **Full-Stack (MVC)**   | Blog Platform, Admin Dashboard                            |
| **Auth / Security**    | Auth API, Webhook Receiver                                |
| **Cloud / Edge**       | Cloudflare Workers API                                    |
| **Data / Persistence** | Todo API, Blog Platform, Queue Worker                     |
| **Integrations**       | AI Chat API, File Upload API                              |
| **Architecture**       | Microservice Gateway, GraphQL Bridge, Multi-Tenant SaaS   |
| **DevOps**             | Health Check & Observability                              |

---

## HonestJS Strengths Highlighted

| Strength             | Templates That Showcase It                    |
| -------------------- | --------------------------------------------- |
| Decorators & routing | All templates                                 |
| DI & modules         | Todo API, Blog, Microservice Gateway          |
| Guards & middleware  | Auth API, Webhook, Rate-Limited, Multi-Tenant |
| Pipes & validation   | API Starter, Todo API, File Upload            |
| RPC + OpenAPI        | API Starter, Microservice Gateway             |
| MVC & Hono JSX       | Blog Platform, Admin Dashboard                |
| App context          | Rate-Limited, Queue Worker, Health Check      |
| Edge deployment      | Cloudflare Workers API                        |
