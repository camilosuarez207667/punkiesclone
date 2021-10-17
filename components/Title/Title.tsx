import { FC } from "react";

import { TitleWrapper } from "./title.styled";

interface TitleProps {
  title: string;
  message: string;
  backgroundColor?: string;
}

const Title: FC<TitleProps> = ({ title, message, backgroundColor }) => {
  return (
    <>
      <TitleWrapper backgroundColor={backgroundColor}>
        <h3>{title}</h3>
        <h2>{message}</h2>
      </TitleWrapper>
    </>
  );
};
export default Title;
