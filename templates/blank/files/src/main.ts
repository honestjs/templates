import 'reflect-metadata'
import { Application } from 'honestjs'
import AppModule from './app.module'

const { hono } = await Application.create(AppModule)

export default hono
