import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logIn } from "../../store";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

export type FormFields = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.user);

  const clickHandler: SubmitHandler<FormFields> = (data) => {
    dispatch(logIn(data))
      .then(unwrapResult)
      .then(() => {
        router.push("/admin/dashboard");
      });
    reset();
  };

  return (
    <Form>
      {error && <Error>{error}</Error>}
      <Input placeholder="Email" id="email" {...register("email")} />
      <Input placeholder="Password" id="password" {...register("password")} />
      <Button onClick={handleSubmit(clickHandler)}>
        {isLoading ? <ClipLoader size={25} /> : "Send"}
      </Button>
    </Form>
  );
}

const Error = styled.small`
  color: #900;
  font-weight: 700;
`;

const Button = styled.button`
  width: 50%;
  height: 50px;
  border: 0;
  border-radius: 8px;
  background-color: rgba(177, 195, 34, 1);
  margin: 0 auto;
  &:hover {
    opacity: 0.5;
  }
`;

const Form = styled.form`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const Label = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 80%;
  margin: 0 auto;
  height: 50px;
  border-radius: 12px;
  border: 1px solid #acacac;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 0 10px;
`;
