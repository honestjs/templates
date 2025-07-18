import { Controller, Get } from 'honestjs'
import AppService from './app.service'

@Controller()
class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	helloWorld(): string {
		return this.appService.helloWorld()
	}
}

export default AppController
