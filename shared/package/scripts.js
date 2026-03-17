/**
 * Shared scripts for built-in templates (Bun only).
 * @param {{ eslint?: boolean; prettier?: boolean; docker?: boolean }} context
 * @returns {Record<string, string>}
 */
export default function getScripts(context) {
	const scripts = {
		dev: 'bun run --watch src/main.ts',
		'dev:watch': 'bun run --watch src/main.ts',
		start: 'bun dist/main.js',
		build: 'bun build src/main.ts --outdir ./dist --target bun',
		test: 'vitest run',
		'test:watch': 'vitest',
		tunnel: 'bunx localtunnel --port 3000'
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
