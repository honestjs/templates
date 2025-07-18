import { Application } from 'honestjs'
import 'reflect-metadata'
import AppModule from './app.module'

const { hono } = await Application.create(AppModule)

export default hono
