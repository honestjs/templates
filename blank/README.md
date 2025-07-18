# Blank Template

This is a template for a Bun-based web application using `honestjs` and `hono`.

## ✨ Features

- **Bun**: Fast JavaScript all-in-one toolkit.
- **Honest.js**: A modern, modular, and intuitive Node.js framework for building efficient and scalable applications.
- **TypeScript**: Statically typed JavaScript.
- **ESLint**: For code linting.
- **Prettier**: For code formatting.
- **Docker**: For containerization.

## Prerequisites

- [Bun](https://bun.sh/)

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
- `bun test`: Run tests.
- `bun run lint`: Lint the codebase.
- `bun run format`: Format the codebase.

## 🐳 Docker

- `bun run docker:build`: Build the Docker image.
- `bun run docker:up`: Start the application in a Docker container.
- `bun run docker:down`: Stop the Docker container.
