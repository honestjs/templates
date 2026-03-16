import { Module } from 'honestjs'
import HomeModule from './modules/home/home.module'
import UsersModule from './modules/users/users.module'

@Module({
	imports: [HomeModule, UsersModule]
})
class AppModule {}

export default AppModule
