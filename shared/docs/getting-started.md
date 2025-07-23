# Getting Started with HonestJS Templates

## Overview

HonestJS Templates provide a collection of pre-configured project structures to help you get started quickly with your HonestJS applications.

## Available Templates

### 1. Blank Template

-   **Category**: Basic
-   **Description**: Empty project with basic setup
-   **Best for**: Simple applications, learning HonestJS
-   **Features**: TypeScript, ESLint, Prettier, Docker (optional)

### 2. Barebone Template

-   **Category**: Structured
-   **Description**: Minimal project structure with basic modules
-   **Best for**: Small to medium applications
-   **Features**: Modules, Controllers, Services, Testing, Database support

### 3. MVC Template

-   **Category**: Fullstack
-   **Description**: Full MVC structure with React components
-   **Best for**: Full-stack applications with frontend
-   **Features**: React components, MVC pattern, Static assets, Views

## Quick Start

1. Choose a template that fits your needs
2. Use the HonestJS CLI to create a new project:
    ```bash
    honestjs create my-project --template blank
    ```
3. Follow the interactive prompts to configure your project
4. Navigate to your project directory and start developing

## Template Selection Guide

-   **New to HonestJS?** Start with the Blank template
-   **Building an API?** Use the Barebone template
-   **Full-stack application?** Choose the MVC template

## Next Steps

After creating your project:

1. Install dependencies: `bun install`
2. Start development server: `bun run dev`
3. Build for production: `bun run build`
4. Run tests: `bun test`

For more detailed information, see the [deployment guide](./deployment.md).
