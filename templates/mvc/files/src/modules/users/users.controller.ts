import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from 'honestjs'
import { NotFoundException } from 'http-essentials'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './models/user.model'
import UsersService from './users.service'

@Controller('/users')
class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async createUser(@Body() body: CreateUserDto): Promise<User> {
		return await this.usersService.create(body)
	}

	@Get()
	async getUsers(): Promise<User[]> {
		return await this.usersService.findAll()
	}

	@Get('/:id')
	async getUser(@Param('id') id: number): Promise<User> {
		const user = await this.usersService.findById(Number(id))
		if (!user) {
			throw new NotFoundException('User not found')
		}
		return user
	}

	@Put('/:id')
	async updateUser(@Param('id') id: number, @Body() body: Partial<CreateUserDto>): Promise<User> {
		const updatedUser = await this.usersService.update(Number(id), body)
		if (!updatedUser) {
			throw new NotFoundException('User not found')
		}
		return updatedUser
	}

	@Patch('/:id')
	async patchUser(@Param('id') id: number, @Body() body: Partial<CreateUserDto>): Promise<User> {
		const updatedUser = await this.usersService.update(Number(id), body)
		if (!updatedUser) {
			throw new NotFoundException('User not found')
		}
		return updatedUser
	}

	@Delete('/:id')
	async deleteUser(@Param('id') id: number): Promise<boolean> {
		const deleted = await this.usersService.delete(Number(id))
		if (!deleted) {
			throw new NotFoundException('User not found')
		}
		return deleted
	}
}

export default UsersController
