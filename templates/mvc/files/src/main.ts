import 'reflect-metadata'
import { ClassValidatorPipe } from '@honestjs/class-validator-pipe'
import { EmojiFavicon, JsxRendererMiddleware } from '@honestjs/middleware'
import { Application, type SiteData } from 'honestjs'
import { serveStatic } from '{{serveStaticModule}}'
import AppModule from './app.module'
import { MainLayout } from './layouts/MainLayout'

declare module 'hono' {
	interface ContextRenderer {
		(content: string | Promise<string>, props: SiteData): Response
	}
}

const { hono } = await Application.create(AppModule, {
	hono: { strict: true },
	routing: { prefix: 'api', version: 1 },
		components: {
			middleware: [new EmojiFavicon('◼'), new JsxRendererMiddleware(MainLayout)],
		pipes: [new ClassValidatorPipe()]
	}
})

hono.use(
	'/static/*',
	serveStatic({
		root: './'
	})
)

export default hono
