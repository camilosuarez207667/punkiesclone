import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Slider from "components/Showcase/Slider/Slider";
import Title from "components/Title/Title";
import Eventos from "components/Eventos/Eventos";
import Conciertos from "components/Conciertos/Conciertos";
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
      <Slider images={images} />
      <Title title={"Videos"} message={``} backgroundColor={"white"} />
      <Multimedia media={multimedia} backgroundColor={true} seeMore={true} />

      <Eventos news={news} />
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
      multimedia,
    },
    revalidate: 1,
  };
};
