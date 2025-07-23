#!/bin/bash

# HonestJS Template Setup Script
# This script initializes a new project from a template

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if project name is provided
if [ -z "$1" ]; then
    print_error "Project name is required"
    echo "Usage: $0 <project-name> [template]"
    exit 1
fi

PROJECT_NAME=$1
TEMPLATE=${2:-blank}

print_status "Creating project: $PROJECT_NAME"
print_status "Using template: $TEMPLATE"

# Check if project directory already exists
if [ -d "$PROJECT_NAME" ]; then
    print_error "Project directory '$PROJECT_NAME' already exists"
    exit 1
fi

# Create project directory
mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

print_status "Initializing project structure..."

# Copy template files
if [ -d "../templates/$TEMPLATE/files" ]; then
    cp -r "../templates/$TEMPLATE/files/"* .
    print_success "Template files copied"
else
    print_error "Template '$TEMPLATE' not found"
    exit 1
fi

# Copy shared config files if they exist
if [ -f "../shared/configs/eslint.config.js" ]; then
    cp "../shared/configs/eslint.config.js" .
    print_success "ESLint config copied"
fi

if [ -f "../shared/configs/prettier.config.js" ]; then
    cp "../shared/configs/prettier.config.js" .
    print_success "Prettier config copied"
fi

if [ -f "../shared/configs/tsconfig.json" ]; then
    cp "../shared/configs/tsconfig.json" .
    print_success "TypeScript config copied"
fi

if [ -f "../shared/configs/Dockerfile" ]; then
    cp "../shared/configs/Dockerfile" .
    print_success "Dockerfile copied"
fi

if [ -f "../shared/configs/docker-compose.yml" ]; then
    cp "../shared/configs/docker-compose.yml" .
    print_success "Docker Compose config copied"
fi

# Copy shared ignore files and LICENSE
if [ -f "../shared/configs/.dockerignore" ]; then
    cp "../shared/configs/.dockerignore" .
    print_success ".dockerignore copied"
fi

if [ -f "../shared/configs/.gitignore" ]; then
    cp "../shared/configs/.gitignore" .
    print_success ".gitignore copied"
fi

if [ -f "../shared/configs/.prettierignore" ]; then
    cp "../shared/configs/.prettierignore" .
    print_success ".prettierignore copied"
fi

if [ -f "../shared/configs/LICENSE" ]; then
    cp "../shared/configs/LICENSE" .
    print_success "LICENSE copied"
fi

# Initialize git repository
if command -v git &> /dev/null; then
    git init
    print_success "Git repository initialized"
else
    print_warning "Git not found, skipping git initialization"
fi

# Install dependencies
if command -v bun &> /dev/null; then
    print_status "Installing dependencies with Bun..."
    bun install
    print_success "Dependencies installed"
elif command -v npm &> /dev/null; then
    print_status "Installing dependencies with npm..."
    npm install
    print_success "Dependencies installed"
else
    print_warning "No package manager found (bun/npm)"
fi

print_success "Project '$PROJECT_NAME' created successfully!"
print_status "Next steps:"
echo "  cd $PROJECT_NAME"
echo "  bun run dev" 