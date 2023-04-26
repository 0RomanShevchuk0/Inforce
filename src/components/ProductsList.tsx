import React, { FC } from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import { GlobalStateType } from '../redux/store'
import { TypeProductListItem } from '../types/types'

import ProductItem from './ProductItem'
import Header from './Header'


const ProductsList: FC = () => {
	const products = useSelector((state: GlobalStateType) => state.products.products)

	const productsListItems = products.map((product: TypeProductListItem) =>  
	<ProductItem 
		key={product.id} 
		imageUrl={product.imageUrl}
		name={product.name}
		id={product.id}
	/>
)

	return (
		<>
			<Header />
			<StyledProductList>
				{productsListItems}
			</StyledProductList>
		</>
	)
}

export default ProductsList

const StyledProductList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 20px;
	margin-top: 80px;
`