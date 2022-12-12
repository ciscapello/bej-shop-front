import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/loginForm/loginForm";

export default function Login() {
  return (
    <Wrapper>
      <Title>Hello! Log in, please</Title>
      <LoginForm />
    </Wrapper>
  );
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
  background: radial-gradient(
    circle,
    rgba(177, 195, 34, 1) 0%,
    rgba(77, 67, 143, 1) 100%
  );
`;

const Title = styled.h1`
  margin-top: 0;
  color: #fff;
`;
