import Head from "next/head";
import Media from "components/Media/media";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";

interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    slug: string;
    year: number;
    banda: string;
  }[];
}

export default function MediaPage({
  discos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Media - Discografia y Letras</title>
        <meta
          name="description"
          content="Punkies y Cerebro, GP, Jimmy Jazz discografia y letras"
        />
      </Head>
      <Media discos={discos} />
    </div>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const resDisco = await fetch(
    `https://punkies-strapi.herokuapp.com/discografias`
  );
  const discos: DiscoProps = await resDisco.json();

  if (!discos) {
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
      discos,
    },
    revalidate: 1,
  };
};
