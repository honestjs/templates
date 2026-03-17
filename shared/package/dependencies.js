/**
 * Shared runtime dependencies. Receives project config and returns dependencies object.
 * @hono/node-server is only needed when not using Bun (Node.js runtime).
 * @param {{ packageManager?: string } & Record<string, unknown>} context
 * @returns {Record<string, string>}
 */
export default function getDependencies(context) {
	const pm = context?.packageManager ?? 'bun'
	return {
		honestjs: '^0.1.14',
		hono: '^4.12.8',
		...(pm !== 'bun' && { '@hono/node-server': '^1.13.7' }),
		'reflect-metadata': '^0.2.2',
		'http-essentials': '^1.4.0'
	}
}
