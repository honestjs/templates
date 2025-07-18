import { Service } from 'honestjs'

@Service()
class AppService {
	helloWorld(): string {
		return 'Hello, World!'
	}
}

export default AppService
