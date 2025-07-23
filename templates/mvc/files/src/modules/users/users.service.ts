import { Service } from 'honestjs'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './models/user.model'

@Service()
class UsersService {
	private users: User[] = [
		{ id: 1, name: 'John', email: 'john@mail.com', role: 'admin' },
		{ id: 2, name: 'Jane', email: 'jane@mail.com', role: 'admin' }
	]

	async create(user: CreateUserDto): Promise<User> {
		const id = this.users.length + 1
		this.users.push({
			id,
			name: user.name,
			email: user.email,
			role: 'user'
		})
		return this.users[id - 1]
	}

	async findAll(): Promise<User[]> {
		return this.users
	}

	async findById(id: number): Promise<User | null> {
		return this.users.find((user) => user.id === id) || null
	}

	async update(id: number, userData: Partial<User>): Promise<User | null> {
		const userIndex = this.users.findIndex((user) => user.id === id)
		if (userIndex === -1) return null

		this.users[userIndex] = { ...this.users[userIndex], ...userData }
		return this.users[userIndex]
	}

	async delete(id: number): Promise<boolean> {
		const userIndex = this.users.findIndex((user) => user.id === id)
		if (userIndex === -1) return false

		this.users.splice(userIndex, 1)
		return true
	}
}
export default UsersService
