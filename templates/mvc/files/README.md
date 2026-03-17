# {{projectName}}

This is a template for a Bun-based web application using `honestjs` and `hono` with a Model-View-Controller (MVC)
architecture.

## ✨ Features

- **Bun**: Fast JavaScript all-in-one toolkit.
- **Honest.js**: A modern, modular, and intuitive Node.js framework for building efficient and scalable applications.
- **Hono**: A small, simple, and ultrafast web framework for the Edge.
- **Hono JSX**: For server-side rendering of views.
- **TypeScript**: Statically typed JavaScript.
- **ESLint**: For code linting.
- **Prettier**: For code formatting.
- **Docker**: For containerization.

## Prerequisites

- [Bun](https://bun.sh/)

This template is optimized for Bun (e.g. static assets use `hono/bun`). For Node.js, use the barebone or blank template or adapt the static serving setup.

## 🚀 Getting Started

1.  **Clone the repository or use it as a template.**

2.  **Install dependencies:**

    ```bash
    {{packageManager}} install
    ```

3.  **Environment Variables:**

    Create a `.env` file in the root of the project. You can set the following variables:

    ```
    # The port the application will run on
    PORT=3000
    ```

## NPM Scripts

- `{{packageManager}} run dev`: Start the development server with hot-reloading.
- `{{packageManager}} run build`: Build the application for production.
- `{{packageManager}} run start`: Start the production server.
- `{{packageManager}} run test`: Run tests (Vitest).
- `{{packageManager}} run test:watch`: Run tests in watch mode.
- `{{packageManager}} run lint`: Lint the codebase.
- `{{packageManager}} run format`: Format the codebase.

## 🐳 Docker

- `{{packageManager}} run docker:build`: Build the Docker image.
- `{{packageManager}} run docker:up`: Start the application in a Docker container.
- `{{packageManager}} run docker:down`: Stop the Docker container.
