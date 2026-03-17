/**
 * Shared runtime dependencies (Bun only).
 * @returns {Record<string, string>}
 */
export default function getDependencies() {
	return {
		honestjs: '^0.1.14',
		hono: '^4.12.8',
		'reflect-metadata': '^0.2.2',
		'http-essentials': '^1.4.0'
	}
}
