import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setIsAddProductVisible } from '../redux/productsSlice'


const Header: FC = () => {
	const dispatch = useDispatch()


	return (
		<HeaderContainer>
			Header
			<button onClick={() => dispatch(setIsAddProductVisible(true))}>
				Add Item
			</button>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0px 40px;
	background: #b08484;
	box-sizing: border-box;
	z-index: 10;
`