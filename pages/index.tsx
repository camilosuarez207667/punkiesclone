import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Slider from "components/Showcase/Slider/Slider";
import Title from "components/Title/Title";
import Noticias from "components/Noticias/Noticias";
import Discografia from "components/Discografia/Discrografia";

import Conciertos from "components/Conciertos/Conciertos";

import Consctruction from "components/Construction/Construction";

type Showcase = {
  id?: string;
  image?: string;
};

type NewsData = {
  news: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description: string;
    date: Date;
    readMore?: string;
  }[];
};

interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description?: string;
    year?: number;
  }[];
}

interface NoticiasProps {
  discos: {
    id: number;
    date?: number;
    evento: string;
    lugar: string;
    precio: number;
  }[];
}
export default function Index({
  images,
  news,
  discos,
  conciertos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Punkies y Cerebro P&aacute;gina Oficial</title>
        <meta
          name="description"
          content="Punkies y Cerebro P&aacute;gina Oficial"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Consctruction /> */}
      <Slider images={images} />
      <Title
        id="noticias"
        title={"Noticias"}
        message={`¡Aquí puedes estar al tanto de todas nuestras noticias! ¡Bienvenidos al de mundo Punkies y Cerebro!`}
        backgroundColor={"black"}
      />
      <Noticias news={news} />
      <Title
        id="discos"
        title={"Discos"}
        message={``}
        backgroundColor={"white"}
      />
      <Discografia discos={discos} />
      <Title
        id="conciertos"
        title={"Toques"}
        message={``}
        backgroundColor={""}
      />
      <Conciertos conciertos={conciertos} />
      
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://punkies-strapi.herokuapp.com/showcases`);
  const images: Showcase = await res.json();

  const resNews = await fetch(`https://punkies-strapi.herokuapp.com/noticias`);
  const news: NewsData = await resNews.json();

  const resDisco = await fetch(
    `https://punkies-strapi.herokuapp.com/discografias`
  );
  const discos: DiscoProps = await resDisco.json();

  const resConciertos = await fetch(
    `https://punkies-strapi.herokuapp.com/conciertos`
  );
  const conciertos: NoticiasProps = await resConciertos.json();

  if (!images) {
    console.log("posts false");
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      images: images,
      news: news,
      discos: discos,
      conciertos: conciertos,
    },
    revalidate: 1,
  };
};
