/**
 * Context-aware shared scripts. Receives project config and returns scripts object.
 * Use {{pm}} and {{pmExec}} in values; CLI substitutes them at scaffold time.
 * @param {{ packageManager?: string; eslint?: boolean; prettier?: boolean; docker?: boolean }} context
 * @returns {Record<string, string>}
 */
export default function getScripts(context) {
	const pm = context?.packageManager ?? 'bun'
	const scripts = {}

	// PM-specific (dev, start, build)
	if (pm === 'bun') {
		scripts.dev = '{{pm}} run --watch src/main.ts'
		scripts.start = 'bun dist/main.js'
		scripts['build:bun'] = 'bun build src/main.ts --outdir ./dist --target bun'
		scripts['build:node'] = 'bun build src/main.ts --outdir ./dist --target node'
	} else {
		scripts.dev = '{{pm}} run dev:watch'
		scripts.start = 'node dist/main.js'
		scripts['build:node'] = 'tsup src/main.ts --format esm --outDir dist'
	}

	scripts['dev:watch'] = 'tsx watch src/main.ts'
	scripts.test = 'vitest run'
	scripts['test:watch'] = 'vitest'
	scripts.tunnel = '{{pmExec}} localtunnel --port 3000'

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
