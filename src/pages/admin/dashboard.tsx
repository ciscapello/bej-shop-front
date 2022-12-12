import React from "react";
import styled from "styled-components";

export default function Dashboard() {
  return <Wrapper>dashboard</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: fixed;
  background: rgb(177, 195, 34);
  color: white;
  background: radial-gradient(
    circle,
    rgba(177, 195, 34, 1) 0%,
    rgba(77, 67, 143, 1) 100%
  );
`;
