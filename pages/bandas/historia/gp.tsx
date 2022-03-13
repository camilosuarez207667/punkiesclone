import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import { mockData_bandProps } from "../../../components/Discografia/Data/data-full";
import Historia from "components/Discografia/Historia/Historia";

export default function GpBand() {
  const data = { ...mockData_bandProps };
  return (
    <>
      <Breadcrumb
        title={"la historia - GP"}
        goBack={true}
        url={"/bandas/gp"}
        topPadding={false}
        headerDesktop={true}
        backMessage={"volver"}
      />
      <Historia
        title={data.bands[0].title}
        sectionOne={data.bands[0].sectionOne}
        sectionTwoTitle={data.bands[0].sectionTwoTitle}
        sectionTwo={data.bands[0].sectionTwo}
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
