import { Module } from 'honestjs'
import ItemsController from './items.controller'
import ItemsService from './items.service'

@Module({
	controllers: [ItemsController],
	services: [ItemsService]
})
class ItemsModule {}

export default ItemsModule
