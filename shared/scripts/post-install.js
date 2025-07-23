#!/usr/bin/env node

/**
 * Post-install script for HonestJS templates
 * This script runs after npm/bun install to set up the project
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Colors for console output
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
}

function log(message, color = 'reset') {
	console.log(`${colors[color]}${message}${colors.reset}`)
}

function logSuccess(message) {
	log(`✅ ${message}`, 'green')
}

function logInfo(message) {
	log(`ℹ️  ${message}`, 'blue')
}

function logWarning(message) {
	log(`⚠️  ${message}`, 'yellow')
}

function logError(message) {
	log(`❌ ${message}`, 'red')
}

// Get project information
function getProjectInfo() {
	const packageJsonPath = path.join(process.cwd(), 'package.json')

	if (!fs.existsSync(packageJsonPath)) {
		logError('package.json not found')
		process.exit(1)
	}

	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
	return {
		name: packageJson.name,
		version: packageJson.version,
		description: packageJson.description,
		scripts: packageJson.scripts || {},
	}
}

// Check if git is available
function isGitAvailable() {
	try {
		execSync('git --version', { stdio: 'ignore' })
		return true
	} catch {
		return false
	}
}

// Initialize git repository
function initGit() {
	if (!isGitAvailable()) {
		logWarning('Git not found, skipping git initialization')
		return
	}

	try {
		// Check if already a git repository
		execSync('git rev-parse --git-dir', { stdio: 'ignore' })
		logInfo('Git repository already exists')
	} catch {
		try {
			execSync('git init', { stdio: 'ignore' })
			logSuccess('Git repository initialized')

			// Create initial commit if there are files
			const status = execSync('git status --porcelain', { encoding: 'utf8' })
			if (status.trim()) {
				execSync('git add .', { stdio: 'ignore' })
				execSync('git commit -m "Initial commit"', { stdio: 'ignore' })
				logSuccess('Initial commit created')
			}
		} catch (error) {
			logWarning('Failed to initialize git repository')
		}
	}
}

// Create .env file if it doesn't exist
function createEnvFile() {
	const envPath = path.join(process.cwd(), '.env')
	const envExamplePath = path.join(process.cwd(), '.env.example')

	if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
		fs.copyFileSync(envExamplePath, envPath)
		logSuccess('.env file created from .env.example')
	}
}

// Display next steps
function displayNextSteps(projectInfo) {
	log('\n🎉 Project setup complete!', 'green')
	log('\nNext steps:', 'bright')
	log('1. Start development server:', 'cyan')
	log(`   bun run dev`, 'reset')
	log('\n2. Build for production:', 'cyan')
	log(`   bun run build`, 'reset')
	log('\n3. Run tests:', 'cyan')
	log(`   bun test`, 'reset')
	log('\n4. View available scripts:', 'cyan')
	log(`   bun run`, 'reset')

	if (projectInfo.scripts.dev) {
		log('\n🚀 Ready to start development!', 'green')
	}
}

// Main execution
function main() {
	log('🔧 Setting up HonestJS project...', 'blue')

	try {
		const projectInfo = getProjectInfo()
		logInfo(`Project: ${projectInfo.name} v${projectInfo.version}`)

		if (projectInfo.description) {
			logInfo(`Description: ${projectInfo.description}`)
		}

		// Initialize git
		initGit()

		// Create .env file
		createEnvFile()

		// Display next steps
		displayNextSteps(projectInfo)
	} catch (error) {
		logError('Setup failed: ' + error.message)
		process.exit(1)
	}
}

// Run if this script is executed directly
if (require.main === module) {
	main()
}

module.exports = { main, getProjectInfo, initGit, createEnvFile }
