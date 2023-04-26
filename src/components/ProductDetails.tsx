import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentProduct } from "../redux/productsSlice";

import { GlobalStateType } from "../redux/store";

import productUnknownImage from "../assets/images/unknownProduct.png"


const ProductDetails: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchParams = useParams<{ id: string }>();
  const currentProduct = useSelector(
    (state: GlobalStateType) => state.products.currentProduct
  );

  useEffect(() => {
    dispatch(getCurrentProduct(searchParams.id));

    return () => dispatch(getCurrentProduct(null));
  }, []);

  return (
    <div>
      <span onClick={() => navigate(-1)} style={{cursor: "pointer"}}>
				back
			</span>
      <MainInfo>
				<Image 
					src={currentProduct?.imageUrl} 
					alt="Product Image" 
				/>
				<div>
				<Title>{currentProduct?.name}</Title>
				<div>Items left: {currentProduct?.count}</div>
				<div>Height: {currentProduct?.size.height}</div>
				<div>Width: {currentProduct?.size.width}</div>
				<div>Weight: {currentProduct?.weight}</div>
				</div>
      </MainInfo>
			<div>
				{currentProduct?.comments.join(', ')}
			</div>
    </div>
  );
};

export default ProductDetails;

const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  padding: 10px 30px;
  gap: 80px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Image = styled.img`
	width: 100%;
	height: 500px;
	padding: 20px;
	box-sizing: border-box;
	object-fit: contain;
`

const Title = styled.div`
	font-size: 32px;
	line-height: 39px;
`