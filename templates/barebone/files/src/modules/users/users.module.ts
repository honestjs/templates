import { Module } from 'honestjs'
import UsersController from './users.controller'
import UsersService from './users.service'

@Module({
	controllers: [UsersController],
	services: [UsersService]
})
class UsersModule {}

export default UsersModule
