/**
 * Shared devDependencies for Bun and Node package managers.
 * @param {{ packageManager?: 'bun' | 'npm' | 'yarn' | 'pnpm' }} context
 * @returns {Record<string, string>}
 */
export default function getDevDependencies(context) {
	const isBun = (context?.packageManager ?? 'bun') === 'bun'
	const devDependencies = {
		'@eslint/js': '^10.0.1',
		vitest: '^4.1.0',
		eslint: '^10.0.3',
		'eslint-config-prettier': '^10.1.8',
		globals: '^17.4.0',
		prettier: '^3.8.1',
		'typescript-eslint': '^8.57.0',
		typescript: '^5.9.3'
	}

	if (isBun) {
		devDependencies['@types/bun'] = '^1.3.10'
	} else {
		devDependencies.tsx = '^4.20.6'
		devDependencies.tsup = '^8.5.0'
	}

	return devDependencies
}
