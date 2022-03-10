import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import EventosComponent from "components/Eventos/Eventos";
import NavPadding from "components/Navigation/NavPadding/NavPadding";

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

export default function Noticias({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Noticias - Punkies y Cerebro</title>
        <meta name="description" content="Noticias - Punkies y Cerebro" />
      </Head>
      <NavPadding />
      <EventosComponent news={news} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resNews = await fetch(`https://punkies-strapi.herokuapp.com/noticias`);
  const news: NewsData = await resNews.json();

  if (!news) {
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
      news: news,
    },
    revalidate: 1,
  };
};
