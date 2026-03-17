/**
 * Context-aware shared devDependencies. Receives project config and returns deps object.
 * Omit tsx/tsup for Bun; include them for npm/yarn/pnpm.
 * @param {{ packageManager?: string }} context
 * @returns {Record<string, string>}
 */
export default function getDevDependencies(context) {
	const pm = context?.packageManager ?? 'bun'
	const deps = {
		'@eslint/js': '^10.0.1',
		...(pm === 'bun' && { '@types/bun': '^1.3.10' }),
		vitest: '^4.1.0',
		eslint: '^10.0.3',
		'eslint-config-prettier': '^10.1.8',
		globals: '^17.4.0',
		prettier: '^3.8.1',
		'typescript-eslint': '^8.57.0',
		typescript: '^5.9.3'
	}
	if (pm !== 'bun') {
		deps.tsup = '^8.3.5'
		deps.tsx = '^4.19.2'
	}
	return deps
}
