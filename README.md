# HonestJS Templates

A collection of templates for the HonestJS framework to help you get started quickly with different project types and architectures.

## 🚀 Quick Start

Choose a template and start building:

```bash
# Clone the repository
git clone <your-repo-url>
cd templates

# Copy your desired template
cp -r <template-name> my-new-project
cd my-new-project

# Install dependencies
bun install

# Start development
bun run dev
```

## 📋 Available Templates

### Current Templates

#### 🎯 **blank** - Minimal Starter

A clean, minimal template with basic HonestJS setup. Perfect for learning the framework or starting from scratch.

**Features:**

-   Basic HonestJS application structure
-   TypeScript configuration
-   ESLint and Prettier setup
-   Docker support
-   Hot reload development server

**Best for:** Learning HonestJS, simple APIs, proof of concepts

---

#### 🏠 **barebone** - Barebone Template

A barebone template with a minimal setup. Perfect for learning the framework or starting from scratch.

**Features:**

-   Modular architecture with users module
-   DTOs and models structure
-   Service layer pattern
-   Controller examples
-   Test setup with examples

**Best for:** Fast prototyping, learning modular patterns, small to medium applications

---

#### 🎨 **mvc** - Model-View-Controller

A full-stack MVC template with React components, static assets, and server-side rendering capabilities.

**Features:**

-   React components for UI
-   Static CSS and JavaScript assets
-   Layout system with Header/Footer
-   View components for server-side rendering
-   Decorators for parameter handling
-   Zod validation integration

**Best for:** Full-stack applications, web applications with UI, server-side rendered content

## 🚧 Planned Templates

### API-Focused Templates

#### **api-rest** - REST API Template

Complete REST API setup with OpenAPI documentation, rate limiting, CORS, and comprehensive logging.

**Planned Features:**

-   OpenAPI/Swagger documentation
-   Rate limiting middleware
-   CORS configuration
-   Request/response logging
-   API versioning
-   Health check endpoints

#### **api-graphql** - GraphQL Template

GraphQL server with schema setup, resolvers, and optimized data loading.

**Planned Features:**

-   GraphQL schema setup
-   Resolvers structure
-   DataLoader for N+1 prevention
-   GraphQL playground
-   Schema validation

#### **api-microservice** - Microservice Template

Microservice architecture with service discovery and inter-service communication.

**Planned Features:**

-   Service discovery
-   Message queue integration (Redis/RabbitMQ)
-   Inter-service communication
-   Circuit breaker pattern
-   Service health monitoring

### Database Templates

#### **database-sql** - SQL Database Template

SQL database integration with Prisma ORM and migration management.

**Planned Features:**

-   Prisma ORM setup
-   Database migrations
-   Connection pooling
-   Query optimization
-   Database seeding

#### **database-mongo** - MongoDB Template

MongoDB integration with Mongoose ODM and aggregation support.

**Planned Features:**

-   Mongoose ODM
-   Aggregation pipelines
-   Index optimization
-   Change streams
-   MongoDB Atlas integration

#### **database-redis** - Redis Template

Redis integration for caching, sessions, and real-time features.

**Planned Features:**

-   Caching strategies
-   Session management
-   Pub/Sub messaging
-   Rate limiting
-   Redis cluster support

### Authentication & Security

#### **auth-jwt** - JWT Authentication Template

Complete JWT authentication system with token management and role-based access.

**Planned Features:**

-   JWT token management
-   Refresh token rotation
-   Role-based access control
-   Password hashing
-   Token blacklisting

#### **auth-oauth** - OAuth Template

OAuth integration with social login providers and user profile management.

**Planned Features:**

-   Social login providers (Google, GitHub, etc.)
-   OAuth flow handling
-   User profile management
-   Account linking
-   OAuth state validation

### Real-time & WebSocket

#### **realtime-websocket** - WebSocket Template

Real-time communication with WebSocket server and room management.

**Planned Features:**

-   WebSocket server setup
-   Room management
-   Real-time messaging
-   Connection state management
-   Broadcasting utilities

#### **realtime-sse** - Server-Sent Events Template

Server-Sent Events for real-time data streaming.

**Planned Features:**

-   SSE endpoint setup
-   Event streaming
-   Client reconnection handling
-   Event filtering
-   Connection pooling

### Testing & Development

#### **testing-e2e** - End-to-End Testing Template

Complete E2E testing setup with Playwright and CI/CD integration.

**Planned Features:**

-   Playwright setup
-   Test database seeding
-   API testing utilities
-   CI/CD pipeline configuration
-   Visual regression testing

#### **testing-unit** - Unit Testing Template

Comprehensive unit testing with Jest/Vitest and coverage reporting.

**Planned Features:**

-   Jest/Vitest configuration
-   Mock factories
-   Test utilities
-   Coverage reporting
-   Test data factories

### Production & Deployment

#### **production-monitoring** - Production Monitoring Template

Production-ready monitoring with health checks and metrics collection.

**Planned Features:**

-   Health checks
-   Metrics collection (Prometheus)
-   Logging (Winston/Pino)
-   Error tracking (Sentry)
-   Performance monitoring

#### **production-kubernetes** - Kubernetes Template

Kubernetes deployment with service mesh and autoscaling.

**Planned Features:**

-   K8s manifests
-   Helm charts
-   Service mesh configuration
-   Horizontal pod autoscaling
-   Ingress configuration

### Specialized Use Cases

#### **file-upload** - File Upload Template

File upload handling with validation and cloud storage integration.

**Planned Features:**

-   Multipart form handling
-   File validation
-   Cloud storage integration (AWS S3, etc.)
-   Image processing
-   File streaming

#### **email-service** - Email Service Template

Email service with templates and queue processing.

**Planned Features:**

-   Email templates
-   Queue processing
-   Multiple email providers
-   Email tracking
-   Template engine

#### **payment-stripe** - Payment Processing Template

Stripe integration with webhook handling and subscription management.

**Planned Features:**

-   Stripe integration
-   Webhook handling
-   Payment flow management
-   Subscription handling
-   Payment analytics

#### **cron-jobs** - Scheduled Tasks Template

Scheduled task processing with job monitoring and queue management.

**Planned Features:**

-   Cron job scheduling
-   Task queue management
-   Background job processing
-   Job monitoring
-   Retry mechanisms

## 🛠️ Template Structure

Each template follows a consistent structure:

```
template-name/
├── src/
│   ├── main.ts              # Application entry point
│   ├── app.module.ts        # Root module
│   ├── modules/             # Feature modules
│   ├── components/          # UI components (MVC only)
│   ├── layouts/             # Layout components (MVC only)
│   └── static/              # Static assets (MVC only)
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint configuration
├── docker-compose.yml      # Docker setup
├── Dockerfile              # Docker configuration
└── README.md               # Template-specific documentation
```

## 📦 Common Dependencies

All templates include these core dependencies:

-   **honestjs** - The HonestJS framework
-   **hono** - Web framework
-   **reflect-metadata** - Metadata reflection
-   **class-validator** - Validation decorators
-   **class-transformer** - Object transformation
-   **http-essentials** - HTTP utilities

## 🚀 Development Scripts

Each template includes these standard scripts:

-   `bun run dev` - Start development server with hot reload
-   `bun run build:bun` - Build for Bun runtime
-   `bun run build:node` - Build for Node.js runtime
-   `bun run test` - Run tests
-   `bun run lint` - Run ESLint
-   `bun run format` - Format code with Prettier
-   `bun run docker:up` - Start Docker containers

## 🤝 Contributing

Want to add a new template or improve existing ones?

1. Fork the repository
2. Create a new branch for your template
3. Follow the existing template structure
4. Add comprehensive documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

Need help with a template or have questions about HonestJS?

-   Check the [HonestJS documentation](https://honestjs.dev)
-   Open an issue in this repository
-   Join our community discussions

---

**Happy coding with HonestJS! 🎉**
