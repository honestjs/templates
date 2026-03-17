# {{projectName}}

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
- `{{packageManager}} run build`: Build for production.
- `{{packageManager}} run start`: Start the production server.
- `{{packageManager}} run test`: Run tests (Vitest).
- `{{packageManager}} run test:watch`: Run tests in watch mode.
- `{{packageManager}} run lint`: Lint the codebase.
- `{{packageManager}} run format`: Format the codebase.

## 🐳 Docker

- `{{packageManager}} run docker:build`: Build the Docker image.
- `{{packageManager}} run docker:up`: Start the application in a Docker container.
- `{{packageManager}} run docker:down`: Stop the Docker container.
