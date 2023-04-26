export interface IProduct {
	"id": number
	"imageUrl": string
	"name": string
	"count": number
	"size": TypeProductSize
	"weight": string
	"comments": string[]
}

export type TypeProductSize = {
	"width": number
	"height": number
}

export type TypeProductListItem = {
	"id": number
	"imageUrl": string
	"name": string
}