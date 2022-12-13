import React from "react";
import styled from "styled-components";
import { IProducts } from "../../types";
import Image from "next/image";
// import { baseUrl } from "../../utils/api";

interface ProductCardProps {
  product: IProducts;
}

export default function ProductCard({ product }: ProductCardProps) {
  const src = `http://localhost:3000/img/${product.images[0]}`;

  return (
    <Card>
      {product.images && (
        <Image
          loader={() => src}
          unoptimized={true}
          src={src}
          alt="picture"
          width={250}
          height={200}
        />
      )}
      <h3>{product.name}</h3>
      <small>{product.price}руб</small>
    </Card>
  );
}

const Card = styled.div`
  color: black;
  flex-basis: 40%;
  width: 250px;
  height: 400px;
  background-color: #fff;
  border-radius: 12px;
  margin-right: 40px;
  margin-bottom: 40px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
