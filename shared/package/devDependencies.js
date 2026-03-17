/**
 * Shared devDependencies for built-in templates (Bun only).
 * @returns {Record<string, string>}
 */
export default function getDevDependencies() {
	return {
		'@eslint/js': '^10.0.1',
		'@types/bun': '^1.3.10',
		vitest: '^4.1.0',
		eslint: '^10.0.3',
		'eslint-config-prettier': '^10.1.8',
		globals: '^17.4.0',
		prettier: '^3.8.1',
		'typescript-eslint': '^8.57.0',
		typescript: '^5.9.3'
	}
}
