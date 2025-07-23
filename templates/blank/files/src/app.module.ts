import { Module } from 'honestjs'
import AppController from './app.controller'
import AppService from './app.service'

@Module({
	controllers: [AppController],
	services: [AppService]
})
class AppModule {}

export default AppModule
