import { baseTransforms } from '../../shared/transforms/base.js'

export const transforms = {
	...baseTransforms,

	'src/main.ts': (content) => {
		return content.replace(/\{\{serveStaticModule\}\}/g, 'hono/bun')
	},

	'src/decorators/parameter.decorator.ts': (content) => {
		return content.replace(/\{\{getConnInfoModule\}\}/g, 'hono/bun')
	}
}
