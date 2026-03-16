# API Starter Template

REST API with OpenAPI documentation and type-safe client generation using HonestJS, RPC plugin, and API Docs plugin.

## Features

- **Versioned routes**: API under `/api/v1`
- **OpenAPI**: Spec at `/openapi.json`, Swagger UI at `/docs`
- **Generated client**: TypeScript client in `generated/rpc` (after running the app)
- **DTO validation**: ClassValidatorPipe with class-validator
- **Bun**: Fast runtime and package manager

## Prerequisites

- [Bun](https://bun.sh/)

## Getting Started

1. Install dependencies:

   ```bash
   bun install
   ```

2. Start the dev server:

   ```bash
   bun run dev
   ```

3. Open Swagger UI at [http://localhost:3000/docs](http://localhost:3000/docs) and try the `/api/v1/items` endpoints.

## Scripts

- `bun run dev`: Start the development server with hot-reloading.
- `bun run build:bun`: Build for Bun production.
- `bun run build:node`: Build for Node.js production.
- `bun run start`: Start the production server.
- `bun run test`: Run tests (Vitest).
- `bun run test:watch`: Run tests in watch mode.
- `bun run lint`: Lint the codebase.
- `bun run format`: Format the codebase.

## Docker

- `bun run docker:build`: Build the Docker image.
- `bun run docker:up`: Start the application in a Docker container.
- `bun run docker:down`: Stop the Docker container.
