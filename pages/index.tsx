import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Slider from "components/Showcase/Slider/Slider";
import Title from "components/Title/Title";
import Noticias from "components/Noticias/Noticias";
import Discografia from "components/Discografia/Discrografia";
import NavPadding from "components/Navigation/NavPadding/NavPadding";
import Conciertos from "components/Conciertos/Conciertos";

import Consctruction from "components/Construction/Construction";
import Multimedia from "components/Multimedia/Multimedia";

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

type MediaData = {
  media: {
    image: {
      url: string;
    };
    title: string;
    description: string;
    readMore?: string;
    youtube?: string;
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
  multimedia,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Punkies y Cerebro P&aacute;gina Oficial</title>
        <meta
          name="description"
          content="Punkies y Cerebro P&aacute;gina Oficial"
        />
      </Head>
      {/* <Consctruction /> */}
      {/* <NavPadding /> */}
      <Slider images={images} />
      <Title title={"Media"} message={``} backgroundColor={"white"} />
      <Multimedia media={multimedia} />
      {/* <Title
        title={"Noticias"}
        message={`¡Aquí puedes estar al tanto de todas nuestras noticias! ¡Bienvenidos al de mundo Punkies y Cerebro!`}
        backgroundColor={"black"}
      /> */}
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
        title={"Eventos"}
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

  const resMultimedia = await fetch(
    `https://punkies-strapi.herokuapp.com/multimedias`
  );
  const multimedia: MediaData = await resMultimedia.json();

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
      images,
      news,
      discos,
      conciertos,
      multimedia,
    },
    revalidate: 1,
  };
};
