import { beforeEach, describe, expect, it } from 'bun:test'
import AppService from './app.service'

describe('AppService', () => {
	let appService: AppService

	beforeEach(() => {
		appService = new AppService()
	})

	it('should be defined', () => {
		expect(appService).toBeDefined()
	})

	it('should return "Hello, World!"', () => {
		expect(appService.helloWorld()).toBe('Hello, World!')
	})
})
