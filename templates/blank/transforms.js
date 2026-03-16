// templates/blank/transforms.js
// {{pm}} and {{pmExec}} in package.json scripts are substituted by the CLI (applyProjectConfiguration).
export const transforms = {
	// Transform package.json
	'package.json': (content, variables) => {
		const pkg = JSON.parse(content)
		pkg.name = variables.name

		// Remove testing script if not needed
		if (!variables.testing) {
			delete pkg.scripts.test
		}

		return JSON.stringify(pkg, null, 2)
	},

	// Transform README.md
	'README.md': (content, variables) => {
		return content
			.replace(/{{projectName}}/g, variables.name)
			.replace(/{{packageManager}}/g, variables.packageManager)
	},

	// Remove test files if testing is disabled
	'src/**/*.test.ts': (content, variables) => {
		return variables.testing ? content : null
	},

	'src/**/*.spec.ts': (content, variables) => {
		return variables.testing ? content : null
	},
}
