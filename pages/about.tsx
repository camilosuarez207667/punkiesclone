import Head from 'next/head'
import styled from 'styled-components';

export default function About() {

  const Title = styled.h1`
  color: red;
`;
  return (
    <div>
        <Head>
          <title>about page</title>
        </Head>
        <Title>about Title</Title>
    </div>
  )
}
