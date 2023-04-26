import { IProduct } from './../types/types';
import { createSlice, Dispatch } from "@reduxjs/toolkit"
import jsonServerAPI from "../services/json-serverAPI"

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [] as IProduct[],
		currentProduct: null as IProduct | null,
		isAddProductVisible: false,
		isDeleteProductVisible: false,
		deletingProduct: null as number | null
	},
	reducers: {
		setAllProducts(state, action) {
			state.products = action.payload
		},
		setCurrentProduct(state, action) {
			state.currentProduct = action.payload
		},
		setIsAddProductVisible(state, action) {
			state.isAddProductVisible = action.payload
		},
		setIsDeleteProductVisible(state, action) {
			state.isDeleteProductVisible = action.payload
		},
		setDeletingProduct(state, action) {
			state.deletingProduct = action.payload
		},
	}
})

export const getAllProducts = (): any => {
	return async (dispatch: Dispatch) => {
		const data = await jsonServerAPI.getAllProducts()
		dispatch(setAllProducts(data))
	}
}

export const getCurrentProduct = (id: string | null | undefined): any => {
	return async (dispatch: Dispatch) => {
		if(id) {
			const data = await jsonServerAPI.getProduct(id)
			dispatch(setCurrentProduct(data))
		} else {
			dispatch(setCurrentProduct(null))
		}
	}
}

export const addNewProduct = (data: Omit<IProduct, "id">): any => {
	return async (dispatch: Dispatch) => {
		await jsonServerAPI.addProduct(data)
		dispatch(getAllProducts())
		dispatch(setIsAddProductVisible(false))
	}
}

export const deleteProduct = (id: number): any => {
	return async (dispatch: Dispatch) => {
		await jsonServerAPI.deleteProduct(id)
		dispatch(setDeletingProduct(null))
		dispatch(getAllProducts())
		dispatch(setIsDeleteProductVisible(false))
	}
}

export const { setAllProducts, setCurrentProduct,
	setIsAddProductVisible, setIsDeleteProductVisible,
	setDeletingProduct } = productsSlice.actions

export default productsSlice.reducer