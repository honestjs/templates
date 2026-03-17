/**
 * Shared base transforms: package.json name, README placeholders, test file pruning.
 * Testing scripts are added conditionally in shared/package/scripts.js.
 * Template transforms.js can spread this and add template-specific overrides.
 */
export const baseTransforms = {
	'package.json': (content, variables) => {
		const pkg = JSON.parse(content)
		pkg.name = variables.name
		return JSON.stringify(pkg, null, 2)
	},

	'README.md': (content, variables) => {
		return content
			.replace(/\{\{projectName\}\}/g, variables.name ?? '')
			.replace(/\{\{packageManager\}\}/g, 'bun')
	},

	'src/**/*.test.ts': (content, variables) => (variables.testing ? content : null),
	'src/**/*.spec.ts': (content, variables) => (variables.testing ? content : null),
}
