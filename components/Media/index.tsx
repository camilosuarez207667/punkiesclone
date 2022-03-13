import { useEffect, useState, FC } from "react";

import Breadcrumb from "components/Breadcrumb/Breadcrumb";

import Discografia from "components/Discografia/Discrografia";
import Social from "components/Media/Social";

import { FullWrapper, GpPadding } from "./media.styled";

interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    alt: string;
    title: string;
    slug: string;
    year: number;
    banda: string;
  }[];
}
const Media: FC<DiscoProps> = ({ discos }) => {
  const punkiesArr = discos.filter((e) => e.banda == "punkies");
  const gpArr = discos.filter((e) => e.banda == "gp");
  const jimmyArr = discos.filter((e) => e.banda == "jimmy");

  const punkiesSortedByYear = punkiesArr.sort((a, b) => {
    return b.year - a.year;
  });

  const gpSortedByYear = gpArr.sort((a, b) => {
    return b.year - a.year;
  });

  const jimmySortedByYear = jimmyArr.sort((a, b) => {
    return b.year - a.year;
  });
  return (
    <>
      <FullWrapper>
        <Breadcrumb
          breadcrumId="pyc-discography"
          title="Punkies &amp; Cerebro"
          url={"/"}
          headerDesktop={true}
          topPadding={false}
          goBack={true}
          backMessage={"volver"}
        />
        <Social punkies={true}></Social>
        <Discografia discos={punkiesSortedByYear} />
        <Breadcrumb
          breadcrumId="jimmy-jazz-discography"
          title="Jimmy Jazz"
          url={"/"}
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <Social punkies={false}></Social>
        <Discografia discos={jimmySortedByYear} />
        <Breadcrumb
          breadcrumId="gp-discography"
          title="GP"
          url={"/"}
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <GpPadding />
        <Discografia discos={gpSortedByYear} />
      </FullWrapper>
    </>
  );
};
export default Media;
