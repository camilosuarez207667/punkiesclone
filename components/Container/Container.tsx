import Navigation from "../Navigation/Navigation";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import { theme } from "styles/theme";
import Contact from "components/Contact/Contact";

const Container = (props: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>Punkies y Cerebro</title>
      <meta
        name="description"
        content="Punkies y Cerebro P&aacute;gina Oficial"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
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

      <link
        href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation />
    {props.children}
    <Contact />
  </ThemeProvider>
);

export default Container;
