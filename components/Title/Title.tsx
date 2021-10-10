import { LinksWrapper } from "components/Navigation/index.styled";
import { useEffect, useState, FC } from "react";

import { TitleWrapper } from "./title.styled";

interface TitleProps {
  title: string;
  message: string;
}

const Title: FC<TitleProps> = ({ title, message }) => {
  return (
    <>
      <TitleWrapper>
          <h3>{title}</h3>
          <h2>{message}</h2>
      </TitleWrapper>
    </>
  );
};
export default Title;
