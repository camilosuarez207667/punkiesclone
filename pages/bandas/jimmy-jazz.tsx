import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Hero from "components/Discografia/Banda/Hero/Hero";
import Multimedia from "components/Multimedia/Multimedia";
import TitleComp from "components/Title/Title";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import { mockData_bandProps } from "../../components/Discografia/Data/data";
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

export default function JimmyJazz({
  multimedia,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const data = { ...mockData_bandProps };
  return (
    <>
      <Breadcrumb
        title={"Jimmy Jazz"}
        goBack={true}
        url={"/historia"}
        topPadding={false}
        headerDesktop={true}
        backMessage={"volver"}
      />
      <Hero
      fulldiscoUrl="/media"
        description={data.bands[2].description}
        imgUrl={data.bands[2].imgUrl}
        imgAlt={data.bands[2].imgAlt}
        viewMore={data.bands[2].viewMore}
        fullDisco={data.bands[2].fullDisco}
      />
      <TitleComp title={"Videos"} message={``} backgroundColor={"black"} />
      <Multimedia media={multimedia} backgroundColor={false} seeMore={false} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resMultimedia = await fetch(
    `https://punkies-strapi.herokuapp.com/Jimmyjazzmedias`
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
