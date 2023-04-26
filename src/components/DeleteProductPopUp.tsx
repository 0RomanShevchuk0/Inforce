import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteProduct, setDeletingProduct, setIsDeleteProductVisible } from '../redux/productsSlice'
import { GlobalStateType } from '../redux/store'

const DeleteProductPopUp: FC = () => {
	const dispatch = useDispatch()
	const deletingProductId = useSelector((state: GlobalStateType) => 
		state.products.deletingProduct
	)

	function handleCancel() {
		dispatch(setDeletingProduct(null))
		dispatch(setIsDeleteProductVisible(false))
	}

	function handleDelete() {
		if(deletingProductId) dispatch(deleteProduct(deletingProductId))
	}

	return (
		<PopUpContainer>
			Delete product?
			<Buttons>
				<button
					onClick={handleCancel}
				>
					Cancel
				</button>
				<button onClick={handleDelete}>Delete</button>
			</Buttons>
		</PopUpContainer>
	)
}

export default DeleteProductPopUp

const PopUpContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 400px;
	height: 200px;
	background: #dbb8b8;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Buttons = styled.div`
	display: flex;
	gap: 10px;
	padding: 4px 0px;
`