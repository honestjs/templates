// templates/mvc/transforms.js
export const transforms = {
	// Transform package.json
	'package.json': (content, variables) => {
		const pkg = JSON.parse(content)
		pkg.name = variables.projectName

		// Update scripts based on package manager
		if (variables.packageManager !== 'bun') {
			Object.keys(pkg.scripts).forEach((key) => {
				if (pkg.scripts[key].startsWith('bun ')) {
					pkg.scripts[key] = pkg.scripts[key].replace('bun ', `${variables.packageManager} `)
				}
			})
		}

		// Remove testing dependencies if not needed
		if (!variables.testing) {
			delete pkg.scripts.test
		}

		// Remove React dependencies if frontend is disabled
		if (!variables.frontend) {
			delete pkg.dependencies['react']
			delete pkg.dependencies['react-dom']
			delete pkg.devDependencies['@types/react']
			delete pkg.devDependencies['@types/react-dom']
		}

		return JSON.stringify(pkg, null, 2)
	},

	// Transform README.md
	'README.md': (content, variables) => {
		return content
			.replace(/{{projectName}}/g, variables.projectName)
			.replace(/{{packageManager}}/g, variables.packageManager)
	},

	// Copy shared config files
	'eslint.config.js': (content, variables) => {
		return variables.eslint ? 'shared/configs/eslint.config.js' : null
	},

	'prettier.config.js': (content, variables) => {
		return variables.prettier ? 'shared/configs/prettier.config.js' : null
	},

	'tsconfig.json': (content, variables) => {
		return variables.typescript ? 'shared/configs/tsconfig.json' : null
	},

	Dockerfile: (content, variables) => {
		return variables.docker ? 'shared/configs/Dockerfile' : null
	},

	'docker-compose.yml': (content, variables) => {
		return variables.docker ? 'shared/configs/docker-compose.yml' : null
	},

	'.dockerignore': (content, variables) => {
		return variables.docker ? 'shared/configs/.dockerignore' : null
	},

	'.gitignore': (content, variables) => {
		return variables.git ? 'shared/configs/.gitignore' : null
	},

	'.prettierignore': (content, variables) => {
		return variables.prettier ? 'shared/configs/.prettierignore' : null
	},

	LICENSE: (content, variables) => {
		return 'shared/configs/LICENSE'
	},

	// Remove test files if testing is disabled
	'src/**/*.test.ts': (content, variables) => {
		return variables.testing ? content : null
	},

	'src/**/*.spec.ts': (content, variables) => {
		return variables.testing ? content : null
	},

	// Remove React components if frontend is disabled
	'src/components/**/*.tsx': (content, variables) => {
		return variables.frontend ? content : null
	},

	'src/layouts/**/*.tsx': (content, variables) => {
		return variables.frontend ? content : null
	},

	'src/modules/**/components/**/*.tsx': (content, variables) => {
		return variables.frontend ? content : null
	},

	'src/modules/**/views/**/*.tsx': (content, variables) => {
		return variables.frontend ? content : null
	},

	// Remove static assets if frontend is disabled
	'static/**/*': (content, variables) => {
		return variables.frontend ? content : null
	},
}
