import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Hero from "components/Discografia/Banda/Hero/Hero";
import Multimedia from "components/Multimedia/Multimedia";
import TitleComp from "components/Title/Title";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";

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
      <Breadcrumb
        title={"GP"}
        goBack={true}
        url={"/discografia"}
        header={true}
        multiple={false}
      />
      <Hero />
      <TitleComp title={"Media"} message={``} backgroundColor={"black"} />
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
