import { MvcModule } from 'honestjs'
import UsersController from './users.controller'
import UsersService from './users.service'
import UsersView from './users.view'

@MvcModule({
	views: [UsersView],
	controllers: [UsersController],
	services: [UsersService]
})
class UsersModule {}

export default UsersModule
