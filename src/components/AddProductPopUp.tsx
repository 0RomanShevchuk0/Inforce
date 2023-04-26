import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useForm, SubmitHandler } from "react-hook-form";
import { addNewProduct, getAllProducts, setIsAddProductVisible } from '../redux/productsSlice'
import Input from './Input';
import { IProduct } from '../types/types';

type Inputs = {
	"imageUrl": string
	"name": string
	"count": number
	"width": number
	"height": number
	"weight": string
	"comments": string
}

const AddProductPopUp: FC = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
	
	const OnCancel = () => dispatch(setIsAddProductVisible(false))
	const onSubmit: SubmitHandler<Inputs> = ({height,width,comments, ...data}) => {

		const resData:Omit<IProduct, "id"> = {
			size: {
				height: height,
				width: width
			},
			comments: comments.split(','),
			...data,
		}

		dispatch(addNewProduct(resData))
	}

	return (
		<PopUpContainer>
			Add New Product
			<Content>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input type="text" name="name" register={register} />
					<Input type="text" name="imageUrl" register={register} />
					<Input type="number" name="amount" register={register} />
					<Input type="number" name="height" register={register} />
					<Input type="number" name="width" register={register} />
					<Input type="number" name="weight" register={register} />
					<Input type="text" name="comments" register={register} />
					<Buttons>
						<button onClick={OnCancel}>
							Cancel
						</button>
						<button type='submit'>Add</button>
					</Buttons>
				</form>
			</Content>
		</PopUpContainer>
	)
}

export default AddProductPopUp

const PopUpContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	width: 600px;
	height: 400px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #c7abab;
`

const Content = styled.div`
	padding: 20px 0px;
`

const Buttons = styled.div`
	display: flex;
	justify-content: space-around;

	padding: 20px 0px;
`