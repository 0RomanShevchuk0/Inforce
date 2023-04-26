import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { setDeletingProduct, setIsDeleteProductVisible } from '../redux/productsSlice';
import { TypeProductListItem } from '../types/types'

const ProductItem: FC<TypeProductListItem> = (props) => {
	const dispatch = useDispatch()

	function handleDelete() {
		dispatch(setIsDeleteProductVisible(true))
		dispatch(setDeletingProduct(props.id))
	}

	return (
		<Container>
			<Link to={`/products/${props.id}`}>
				<div>
					<Image src={props.imageUrl} alt="Product image" />
				</div>
				<Title>{props.name}</Title>
			</Link>

				<Button onClick={handleDelete}>
					delete
				</Button>
		</Container>
	)
}

export default ProductItem

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 20px 40px;
	margin-bottom: 38px;
	border: 2px solid black;
`;

const Image = styled.img`
  width: 100%;
	min-height: 250px;
  height: 250px;
	padding: 20px;
  object-fit: contain;
	box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Button = styled.button`
	width: 100px;
	margin: 0px auto;
`