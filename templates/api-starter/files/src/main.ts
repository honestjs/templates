import 'reflect-metadata'
import { ApiDocsPlugin } from '@honestjs/api-docs-plugin'
import { ClassValidatorPipe } from '@honestjs/class-validator-pipe'
import { RPCPlugin } from '@honestjs/rpc-plugin'
import { Application } from 'honestjs'
import AppModule from './app.module'

const { hono } = await Application.create(AppModule, {
	hono: {
		strict: false
	},
	routing: {
		prefix: 'api',
		version: 1
	},
	components: {
		middleware: [],
		guards: [],
		pipes: [new ClassValidatorPipe()],
		filters: []
	},
	plugins: [new RPCPlugin(), new ApiDocsPlugin()]
})

export default hono
