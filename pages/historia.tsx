import Head from "next/head";
import History from "components/Discografia/Page/History";

export default function Discografia() {
  return (
    <div>
      <Head>
        <title>Hitoria GP, Punkies y Cerebro</title>
        <meta
          name="description"
          content="Punkies y Cerebro P&aacute;gina Oficial"
        />
      </Head>
      <History />
    </div>
  );
}
