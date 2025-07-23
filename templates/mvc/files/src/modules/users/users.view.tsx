import { Ctx, Page, View } from 'honestjs'
import type { Context } from 'hono'
import { ClientIP } from '../../decorators/parameter.decorator'
import { UserList } from './components/UserList'
import UsersService from './users.service'

@View('/users')
class UsersView {
	stylesheets: string[] = ['/static/css/views/users.css']
	scripts: string[] = ['/static/js/views/users.js']

	constructor(private readonly usersService: UsersService) {}

	@Page()
	async index(@Ctx() ctx: Context, @ClientIP() ip: string) {
		console.log(`Website accessed from IP address: ${ip}`)

		const users = await this.usersService.findAll()
		return ctx.render(<UserList users={users} />, {
			title: '[ USERS ]',
			description: 'List of users',
			stylesheets: this.stylesheets,
			scripts: this.scripts
		})
	}
}

export default UsersView
