import { ClassValidatorPipe } from '@honestjs/class-validator-pipe'
import { Application } from 'honestjs'
import 'reflect-metadata'
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
	}
})

export default hono
