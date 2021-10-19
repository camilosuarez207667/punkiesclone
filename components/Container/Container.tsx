import Navigation from "../Navigation/Navigation";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import { theme } from "styles/theme";

const Container = (props: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>Punkies y Cerebro</title>
      <meta
        name="description"
        content="Punkies y Cerebro P&aacute;gina Oficial"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation />
    {props.children}
  </ThemeProvider>
);

export default Container;
