import { Module } from 'honestjs'
import ItemsModule from './modules/items/items.module'

@Module({
	imports: [ItemsModule]
})
class AppModule {}

export default AppModule
