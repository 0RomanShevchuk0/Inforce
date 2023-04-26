import React, { FC, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './redux/productsSlice'
//types
import { GlobalStateType } from './redux/store'
//styles
import './assets/main.css'
//components
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import AddProductPopUp from './components/AddProductPopUp'
import DeleteProductPopUp from './components/DeleteProductPopUp'


const App: FC = () => {
	const dispatch = useDispatch()
	const isAddProductVisible = useSelector((state: GlobalStateType) => 
		state.products.isAddProductVisible
	)
	const isDeleteProductVisible = useSelector((state: GlobalStateType) => 
		state.products.isDeleteProductVisible
	)

	useEffect(() => {
		dispatch(getAllProducts())
	}, [])
	

  return (
    <div className="App">
			<Content>
				<BrowserRouter>
					<Routes>
						<Route element={<ProductsList />} path="/" />
						<Route element={<ProductDetails />} path="/products/:id" />
					</Routes>
				</BrowserRouter>

				{isAddProductVisible && <AddProductPopUp />}
				{isDeleteProductVisible && <DeleteProductPopUp />}
			</Content>
    </div>
  )
}

export default App

const Content = styled.div`
	margin-top: 20px;
	padding: 0px 40px;
`