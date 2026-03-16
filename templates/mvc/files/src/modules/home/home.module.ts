import { MvcModule } from 'honestjs'
import HomeView from './home.view'

@MvcModule({
	views: [HomeView]
})
class HomeModule {}

export default HomeModule
