import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../../components/productCard/productCard";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Bej1, Create, Logout } from "../../shared/assets/svgs";
import { getProducts } from "../../store";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Wrapper>
      <Nav>
        <StyledLogo href="/">
          <Bej1 height={70} />
        </StyledLogo>
        <ButtonGroup>
          <Button>
            <Create width={30} />
            <Small>Add item</Small>
          </Button>
          <Button>
            <Logout width={30} />
            <Small>Logout</Small>
          </Button>
        </ButtonGroup>
      </Nav>
      {products && (
        <Cards>
          {products.map((elem) => (
            <ProductCard key={elem._id} product={elem} />
          ))}
        </Cards>
      )}
    </Wrapper>
  );
}

const StyledLogo = styled(Link)`
  transition: 0.2s;
  &:hover {
    opacity: 0.3;
  }
`;

const Small = styled.small`
  font-weight: 600;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  &:hover {
    opacity: 0.3;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
`;

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100%;
  background: rgb(177, 195, 34);
  color: white;
  background: radial-gradient(
    circle,
    rgba(177, 195, 34, 1) 0%,
    rgba(77, 67, 143, 1) 100%
  );
`;
