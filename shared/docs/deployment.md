# Deployment Guide

## Overview

This guide covers deploying HonestJS applications created from our templates.

## Prerequisites

-   Node.js 18+ or Bun 1.0+
-   Docker (optional, for containerized deployment)
-   A deployment platform (Vercel, Railway, Heroku, etc.)

## Build Process

### 1. Development Build

```bash
bun run dev
```

### 2. Production Build

```bash
bun run build
```

### 3. Start Production Server

```bash
bun run start
```

## Docker Deployment

All templates include Docker configuration for containerized deployment.

### Build Docker Image

```bash
docker build -t my-honestjs-app .
```

### Run Container

```bash
docker run -p 3000:3000 my-honestjs-app
```

### Using Docker Compose

```bash
docker-compose up -d
```

## Platform-Specific Deployment

### Vercel

1. Connect your repository to Vercel
2. Set build command: `bun run build`
3. Set output directory: `dist` (if applicable)
4. Deploy

### Railway

1. Connect your repository to Railway
2. Set start command: `bun run start`
3. Deploy

### Heroku

1. Create a new Heroku app
2. Set buildpacks for Node.js/Bun
3. Deploy using Heroku CLI or GitHub integration

## Environment Variables

Configure the following environment variables in your deployment platform:

-   `NODE_ENV`: Set to `production`
-   `PORT`: Port number (usually auto-assigned)
-   `DATABASE_URL`: Database connection string (if using database)

## Performance Optimization

### Production Considerations

1. Enable compression middleware
2. Use CDN for static assets
3. Implement caching strategies
4. Monitor application performance

### Security

1. Use HTTPS in production
2. Set secure headers
3. Validate all inputs
4. Use environment variables for secrets

## Monitoring and Logging

### Recommended Tools

-   Application monitoring: Sentry, LogRocket
-   Performance monitoring: New Relic, DataDog
-   Logging: Winston, Pino

### Health Checks

Implement health check endpoints:

```typescript
app.get('/health', (req, res) => {
	res.json({ status: 'ok', timestamp: new Date().toISOString() })
})
```

## Troubleshooting

### Common Issues

1. **Port binding errors**: Ensure PORT environment variable is set
2. **Database connection**: Verify DATABASE_URL is correct
3. **Build failures**: Check Node.js/Bun version compatibility
4. **Memory issues**: Optimize bundle size and implement proper garbage collection

### Debug Mode

Enable debug mode for troubleshooting:

```bash
DEBUG=* bun run dev
```

## Support

For deployment issues:

1. Check the [HonestJS documentation](https://honestjs.dev)
2. Review platform-specific documentation
3. Open an issue in the templates repository
