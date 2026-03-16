import { Body, Controller, Get, Param, Post } from 'honestjs'
import { NotFoundException } from 'http-essentials'
import { CreateItemDto } from './dtos/create-item.dto'
import { Item } from './models/item.model'
import ItemsService from './items.service'

@Controller('/items')
class ItemsController {
	constructor(private readonly itemsService: ItemsService) {}

	@Get()
	async getItems(): Promise<Item[]> {
		return await this.itemsService.findAll()
	}

	@Get('/:id')
	async getItem(@Param('id') id: number): Promise<Item> {
		const item = await this.itemsService.findById(Number(id))
		if (!item) {
			throw new NotFoundException('Item not found')
		}
		return item
	}

	@Post()
	async createItem(@Body() body: CreateItemDto): Promise<Item> {
		return await this.itemsService.create(body)
	}
}

export default ItemsController
