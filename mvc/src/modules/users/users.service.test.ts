import { beforeEach, describe, expect, it } from 'bun:test'
import { CreateUserDto } from './dtos/create-user.dto'
import UsersService from './users.service'

describe('UsersService', () => {
	let usersService: UsersService

	beforeEach(() => {
		usersService = new UsersService()
	})

	it('should be defined', () => {
		expect(usersService).toBeDefined()
	})

	it('should find all users', async () => {
		const users = await usersService.findAll()
		expect(users).toBeArray()
		expect(users.length).toBe(2)
	})

	it('should create a user', async () => {
		const createUserDto: CreateUserDto = {
			name: 'Test User',
			email: 'test@example.com'
		}
		const user = await usersService.create(createUserDto)
		expect(user).toBeDefined()
		expect(user.name).toBe(createUserDto.name)
		expect(user.email).toBe(createUserDto.email)
		expect(user.role).toBe('user')

		const users = await usersService.findAll()
		expect(users.length).toBe(3)
	})

	it('should find a user by id', async () => {
		const user = await usersService.findById(1)
		expect(user).toBeDefined()
		expect(user?.id).toBe(1)
	})

	it('should return null for non-existent user', async () => {
		const user = await usersService.findById(99)
		expect(user).toBeNull()
	})
})
