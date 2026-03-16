import { Service } from 'honestjs'
import { CreateItemDto } from './dtos/create-item.dto'
import { Item } from './models/item.model'

@Service()
class ItemsService {
	private items: Item[] = [
		{ id: 1, title: 'First item', createdAt: new Date().toISOString() },
		{ id: 2, title: 'Second item', createdAt: new Date().toISOString() }
	]

	async findAll(): Promise<Item[]> {
		return this.items
	}

	async findById(id: number): Promise<Item | null> {
		return this.items.find((item) => item.id === id) ?? null
	}

	async create(dto: CreateItemDto): Promise<Item> {
		const id = this.items.length + 1
		const item: Item = {
			id,
			title: dto.title,
			createdAt: new Date().toISOString()
		}
		this.items.push(item)
		return item
	}
}

export default ItemsService
