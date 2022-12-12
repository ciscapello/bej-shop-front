import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Wrapper>
        <h1>
          Blya, <br /> eto joska
        </h1>
        <Link href="/admin/login">Go to login</Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
