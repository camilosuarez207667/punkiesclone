import { FC, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Arrow from "public/svgs/arrow";
import {
  Title,
  BodyWrapper,
  Content,
  ContentWrapper,
  ReadMore,
  ArrowContent,
  Reading,
} from "./historia.styled";

interface HistoryProps {
  title: string;
  secondTitle?: string;
  intro: string;
  sectionOne?: string;
}

const Historia: FC<HistoryProps> = ({
  intro,
  title,
  sectionOne,
  secondTitle,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <BodyWrapper>
        <ContentWrapper>
          <Title>{title}:</Title>
          <Content>
            <p>{ReactHtmlParser(intro)}</p>
          </Content>
          <ReadMore onClick={() => setReadMore(!readMore)}>
            <Reading>
              {readMore ? <p>ocultar</p> : <p>seguir leyendo</p>}
            </Reading>
            <ArrowContent readMore={readMore}>
              <Arrow />
            </ArrowContent>
          </ReadMore>
          {!!readMore && (
            <Content>
              <p>{ReactHtmlParser(intro)}</p>
            </Content>
          )}
        </ContentWrapper>
      </BodyWrapper>
    </>
  );
};

export default Historia;
