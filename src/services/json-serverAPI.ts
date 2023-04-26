import axios from "axios"
import { IProduct } from "../types/types"

const jsonServerAPI = {
	async getAllProducts() {
		const response = await axios.get('http://localhost:3000/posts')
		return response.data
	},
	async getProduct(id: string) {
		const response = await axios.get(`http://localhost:3000/posts/${id}`)
		return response.data
	},
	async addProduct(data: Omit<IProduct, "id">) {
		await axios.post(`http://localhost:3000/posts`, {...data})
	},
	async deleteProduct(id: number) {
		await axios.delete(`http://localhost:3000/posts/${id}`)
	},
}

export default jsonServerAPI