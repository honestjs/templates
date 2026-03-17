# {{projectName}}

This is a template for a web application using `honestjs` and `hono` with a Model-View-Controller (MVC)
architecture. It runs on **Bun**.

## ✨ Features

- **Bun**: Fast JavaScript runtime and toolkit.
- **Honest.js**: A modern, modular, and intuitive framework for building efficient and scalable applications.
- **Hono**: A small, simple, and ultrafast web framework for the Edge.
- **Hono JSX**: For server-side rendering of views.
- **TypeScript**: Statically typed JavaScript.
- **ESLint**: For code linting.
- **Prettier**: For code formatting.
- **Docker**: For containerization.

## Prerequisites

- [Bun](https://bun.sh/) (>=1.0)

## 🚀 Getting Started

1.  **Clone the repository or use it as a template.**

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Environment Variables:**

    Create a `.env` file in the root of the project. You can set the following variables:

    ```
    # The port the application will run on
    PORT=3000
    ```

## NPM Scripts

- `bun run dev`: Start the development server with hot-reloading.
- `bun run build`: Build the application for production.
- `bun run start`: Start the production server.
- `bun run test`: Run tests (Vitest).
- `bun run test:watch`: Run tests in watch mode.
- `bun run lint`: Lint the codebase.
- `bun run format`: Format the codebase.

## 🐳 Docker

- `bun run docker:build`: Build the Docker image.
- `bun run docker:up`: Start the application in a Docker container.
- `bun run docker:down`: Stop the Docker container.
