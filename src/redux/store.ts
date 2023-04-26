import { combineReducers, configureStore } from "@reduxjs/toolkit"
import productsSlice from "./productsSlice"

const rootReducer = combineReducers({
	products: productsSlice
})

type RootReducerType = typeof rootReducer

export type GlobalStateType = ReturnType<RootReducerType>

export const store = configureStore({
	reducer: rootReducer
})