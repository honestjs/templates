/**
 * Shared scripts for Bun and Node package managers.
 * Use {{pm}} and {{pmExec}} placeholders for package-manager-specific commands.
 * @param {{ packageManager?: 'bun' | 'npm' | 'yarn' | 'pnpm'; eslint?: boolean; prettier?: boolean; docker?: boolean }} context
 * @returns {Record<string, string>}
 */
export default function getScripts(context) {
	const isBun = (context?.packageManager ?? 'bun') === 'bun'
	const scripts = {
		dev: isBun ? 'bun run --watch src/main.ts' : '{{pm}} run dev:watch',
		'dev:watch': isBun ? '{{pm}} run --watch src/main.ts' : 'tsx watch src/main.ts',
		start: isBun ? 'bun dist/main.js' : 'node dist/main.js',
		build: isBun
			? 'bun build src/main.ts --outdir ./dist --target bun'
			: 'tsup src/main.ts --format esm --dts --target node18 --out-dir dist --clean',
		test: 'vitest run',
		'test:watch': 'vitest',
		tunnel: '{{pmExec}} localtunnel --port 3000'
	}

	if (context?.eslint) {
		scripts.lint = 'eslint .'
		scripts['lint:fix'] = 'eslint . --fix'
	}
	if (context?.prettier) {
		scripts.format = 'prettier --write .'
		scripts['format:check'] = 'prettier --check .'
	}
	if (context?.docker) {
		scripts['docker:build'] = 'docker compose build'
		scripts['docker:up'] = 'docker compose up -d'
		scripts['docker:up:build'] = 'docker compose up -d --build'
		scripts['docker:down'] = 'docker compose down'
	}

	return scripts
}
