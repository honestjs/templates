/**
 * Shared runtime dependencies (Bun only).
 * @returns {Record<string, string>}
 */
export default function getDependencies() {
	return {
		honestjs: '^0.1.18',
		hono: '^4.12.9',
		'reflect-metadata': '^0.2.2',
		'http-essentials': '^1.4.0'
	}
}
