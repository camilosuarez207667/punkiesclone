import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Hero from "components/Discografia/Banda/Hero/Hero";
import Multimedia from "components/Multimedia/Multimedia";
import TitleComp from "components/Title/Title";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import { mockData_bandProps } from "./data-full";
import Historia from "components/Discografia/Historia/Historia";

export default function GpBand() {
  const data = { ...mockData_bandProps };
  return (
    <>
      <Breadcrumb
        title={"la historia - GP"}
        goBack={true}
        url={"/discografia"}
        topPadding={false}
        headerDesktop={true}
        backMessage={"volver"}
      />
      <Historia intro={data.bands[0].intro} title="intro"/>
      {/* <Hero
        description={data.bands[0].description}
        imgUrl={data.bands[0].imgUrl}
        imgAlt={data.bands[0].imgAlt}
        viewMore={data.bands[0].viewMore}
        fullDisco={data.bands[0].fullDisco}
      /> */}
    </>
  );
}
