import { baseTransforms } from '../../shared/transforms/base.js'

export const transforms = {
	...baseTransforms,

	'src/main.ts': (content, config) => {
		const pm = config.packageManager ?? 'bun'
		const serveStaticModule = pm === 'bun' ? 'hono/bun' : 'hono/serve-static'
		return content.replace(/\{\{serveStaticModule\}\}/g, serveStaticModule)
	},

	'src/decorators/parameter.decorator.ts': (content, config) => {
		const pm = config.packageManager ?? 'bun'
		const getConnInfoModule =
			pm === 'bun' ? 'hono/bun' : '@hono/node-server/conninfo'
		return content.replace(/\{\{getConnInfoModule\}\}/g, getConnInfoModule)
	}
}