# HonestJS Templates

A collection of pre-configured project templates for [HonestJS](https://honestjs.dev) applications.

## 🎯 Overview

This repository contains a structured collection of templates that help you get started quickly with HonestJS applications. Each template is designed for different use cases and project requirements.

## 📁 Repository Structure

```
templates/
├── README.md
├── LICENSE
├── templates.json                    # Template registry and metadata
├── shared/                          # Shared components and configurations
│   ├── configs/
│   │   ├── eslint.config.js         # Shared ESLint configuration
│   │   ├── prettier.config.js       # Shared Prettier configuration
│   │   ├── tsconfig.json           # Shared TypeScript configuration
│   │   ├── docker-compose.yml      # Shared Docker Compose configuration
│   │   ├── Dockerfile              # Shared Docker configuration
│   │   ├── .dockerignore           # Shared Docker ignore rules
│   │   ├── .gitignore              # Shared Git ignore rules
│   │   ├── .prettierignore         # Shared Prettier ignore rules
│   │   └── LICENSE                 # Shared MIT License

│   └── docs/
│       ├── getting-started.md      # Getting started guide
│       └── deployment.md           # Deployment guide
└── templates/
    ├── blank/
    │   ├── template.json           # Template-specific configuration
    │   ├── files/                  # Template files (unique to template)
    │   ├── prompts.js              # Template-specific prompts
    │   └── transforms.js           # File transformations
    ├── barebone/
    │   ├── template.json
    │   ├── files/
    │   ├── prompts.js
    │   └── transforms.js
    └── mvc/
        ├── template.json
        ├── files/
        ├── prompts.js
        └── transforms.js
```

## 🚀 Available Templates

### 1. **Blank Template** (`blank`)

-   **Category**: Basic
-   **Description**: Empty project with basic setup
-   **Best for**: Simple applications, learning HonestJS
-   **Features**: TypeScript, ESLint, Prettier, Docker (optional)

### 2. **Barebone Template** (`barebone`)

-   **Category**: Structured
-   **Description**: Minimal project structure with basic modules
-   **Best for**: Small to medium applications
-   **Features**: Modules, Controllers, Services, Testing, Database support

### 3. **MVC Template** (`mvc`)

-   **Category**: Fullstack
-   **Description**: Full MVC structure with React components
-   **Best for**: Full-stack applications with frontend
-   **Features**: React components, MVC pattern, Static assets, Views

## 🛠️ Quick Start

### Using HonestJS CLI (Recommended)

```bash
# Create a new project with the blank template
honestjs create my-project --template blank

# Create a new project with the barebone template
honestjs create my-project --template barebone

# Create a new project with the MVC template
honestjs create my-project --template mvc
```

### Manual Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/honestjs/templates.git
    cd templates
    ```

2. Navigate to your project and start developing:
    ```bash
    cd my-project
    bun run dev
    ```

## 📋 Template Selection Guide

| Template     | Use Case                | Complexity | Features                       |
| ------------ | ----------------------- | ---------- | ------------------------------ |
| **Blank**    | Learning, simple apps   | Low        | Basic setup, minimal structure |
| **Barebone** | APIs, backend services  | Medium     | Modules, testing, database     |
| **MVC**      | Full-stack applications | High       | React, MVC, static assets      |

## 🔧 Configuration

Each template supports various configuration options:

-   **Package Manager**: Choose between Bun, npm, yarn, or pnpm
-   **TypeScript**: Enable/disable TypeScript support
-   **ESLint**: Add code linting configuration
-   **Prettier**: Add code formatting configuration
-   **Docker**: Include Docker configuration
-   **Testing**: Include testing setup
-   **Database**: Include database support
-   **Frontend**: Include React components (MVC template only)

## 🎨 Customization

### Template Variables

Templates use variables that can be customized during project creation:

```javascript
// Example variables for the blank template
{
  projectName: "my-awesome-project",
  packageManager: "bun",
  typescript: true,
  eslint: true,
  prettier: true,
  docker: false,
  git: true
}
```

### File Transformations

Templates support conditional file inclusion and content transformation:

```javascript
// Example transform for package.json
'package.json': (content, variables) => {
  const pkg = JSON.parse(content);
  pkg.name = variables.name;

  // Update scripts based on package manager
  if (variables.packageManager !== 'bun') {
    Object.keys(pkg.scripts).forEach((key) => {
      if (pkg.scripts[key].startsWith('bun ')) {
        pkg.scripts[key] = pkg.scripts[key].replace('bun ', `${variables.packageManager} `);
      }
    });
  }

  return JSON.stringify(pkg, null, 2);
}
```

### Shared Configurations

All templates use shared configuration files from `shared/configs/`:

-   **ESLint**: Consistent linting rules across all projects
-   **Prettier**: Unified code formatting standards
-   **TypeScript**: Standard TypeScript configuration
-   **Docker**: Reusable Docker configurations
-   **Git**: Common ignore patterns
-   **License**: MIT License for all projects

## 📚 Documentation

-   **[Getting Started Guide](shared/docs/getting-started.md)** - Learn how to use the templates
-   **[Deployment Guide](shared/docs/deployment.md)** - Deploy your HonestJS applications

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** your changes
5. **Submit** a pull request

### Adding a New Template

1. Create a new directory in `templates/`
2. Add template files in `templates/[name]/files/`
3. Create `template.json` with configuration
4. Add `prompts.js` for user interaction
5. Add `transforms.js` for file transformations
6. Update `templates.json` registry

### Template Structure

```
templates/[template-name]/
├── template.json      # Template configuration
├── files/            # Template files (unique content only)
├── prompts.js        # User prompts
└── transforms.js     # File transformations
```

### Shared Configurations

When adding new templates, use the shared configurations from `shared/configs/`:

-   Copy config files from `shared/configs/` in your transforms
-   Don't duplicate configuration files in template directories
-   Keep template directories focused on unique content only

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

-   **Documentation**: [HonestJS Docs](https://honestjs.dev)
-   **Issues**: [GitHub Issues](https://github.com/honestjs/templates/issues)
-   **Discussions**: [GitHub Discussions](https://github.com/honestjs/templates/discussions)

## 🙏 Acknowledgments

-   Built with [HonestJS](https://honestjs.dev)
-   Inspired by modern template systems
-   Community-driven development
