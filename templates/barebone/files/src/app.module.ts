import { Module } from 'honestjs'
import UsersModule from './modules/users/users.module'

@Module({
	imports: [UsersModule]
})
class AppModule {}

export default AppModule
