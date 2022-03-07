import { useEffect, useState, FC } from "react";

import { FullWrapper } from "./media.styled";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";

import Discografia from "components/Discografia/Discrografia";

import { disco_streaming } from "./MOCK_DATA";
interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description: string;
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
          title="Punkies &amp; Cerebro"
          url={"/"}
          headerDesktop={true}
          topPadding={false}
          goBack={true}
          backMessage={"volver"}
        />
        <Discografia discos={punkiesSortedByYear} />
        <Breadcrumb
          title="GP"
          url={"/"}
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <Discografia discos={gpSortedByYear} />
        <Breadcrumb
          title="Jimmy Jazz"
          url={"/"}
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <Discografia discos={jimmySortedByYear} />
      </FullWrapper>
    </>
  );
};
export default Media;
