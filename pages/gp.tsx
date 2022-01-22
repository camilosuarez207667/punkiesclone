import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import GpBandComponent from "components/Discografia/Bandas/GP/gp";
import Multimedia from "components/Multimedia/Multimedia";

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

export default function GpBand({
  multimedia,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(multimedia);
  return (
    <>
      <GpBandComponent />
      <Multimedia media={multimedia} backgroundColor={false} seeMore={false} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resMultimedia = await fetch(
    `https://punkies-strapi.herokuapp.com/multimedias`
  );
  const multimedia: MediaData = await resMultimedia.json();

  if (!resMultimedia) {
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
      multimedia,
    },
    revalidate: 1,
  };
};
