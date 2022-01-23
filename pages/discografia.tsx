import Head from "next/head";
import DiscografiaPagina from "components/Discografia/Page/DiscrografiaPagina";

export default function Discografia() {
  return (
    <div>
      <Head>
        <title>Punkies y Cerebro P&aacute;gina Oficial</title>
        <meta
          name="description"
          content="Punkies y Cerebro P&aacute;gina Oficial"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DiscografiaPagina />
    </div>
  );
}
