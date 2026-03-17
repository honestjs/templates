/**
 * Shared runtime dependencies. Receives project config and returns dependencies object.
 * @param {Record<string, unknown>} context
 * @returns {Record<string, string>}
 */
export default function getDependencies(context) {
	return {
		honestjs: '^0.1.14',
		hono: '^4.12.8',
		'reflect-metadata': '^0.2.2',
		'http-essentials': '^1.4.0'
	}
}
