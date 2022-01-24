import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import { mockData_bandProps } from "../../../components/Discografia/Data/data-full";
import Historia from "components/Discografia/Historia/Historia";

export default function GpBand() {
  const data = { ...mockData_bandProps };
  return (
    <>
      <Breadcrumb
        title={"Punkies y Cerebro"}
        goBack={true}
        url={"/bandas/pyc"}
        topPadding={false}
        headerDesktop={true}
        backMessage={"volver"}
      />
      <Historia
        title={data.bands[1].title}
        sectionOne={data.bands[1].sectionOne}
        sectionTwoTitle={data.bands[1].sectionTwoTitle}
        sectionTwo={data.bands[1].sectionTwo}
      />
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
