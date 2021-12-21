import { FC } from "react";

import { TitleWrapper } from "./title.styled";

interface TitleProps {
  title: string;
  message: string;
  backgroundColor?: string;
  id?: string;
}

const Title: FC<TitleProps> = ({ title, message, backgroundColor, id }) => {
  return (
    <>
      <TitleWrapper backgroundColor={backgroundColor} id={id}>
        <h3>{title}</h3>
        <h2>{message}</h2>
      </TitleWrapper>
    </>
  );
};
export default Title;
