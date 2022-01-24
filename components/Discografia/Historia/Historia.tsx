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
  ReadingNext,
  ArrowContentNext,
  ReadMoreNextPage,
} from "./historia.styled";

interface HistoryProps {
  title: string;
  sectionOne: string;
  sectionTwoTitle: string;
  sectionTwo: string;
}

const Historia: FC<HistoryProps> = ({
  title,
  sectionOne,
  sectionTwoTitle,
  sectionTwo,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <BodyWrapper>
        <ContentWrapper>
          <Title>{title}</Title>
          <Content>
            <p>{ReactHtmlParser(sectionOne)}</p>
          </Content>
          {!!sectionTwoTitle && (
            <ReadMore onClick={() => setReadMore(!readMore)}>
              <Reading>
                {readMore ? <p>ocultar</p> : <p>seguir leyendo</p>}
              </Reading>
              <ArrowContent readMore={readMore}>
                <Arrow />
              </ArrowContent>
            </ReadMore>
          )}

          {!!readMore && (
            <>
              <Title>{sectionTwoTitle}</Title>
              <Content>{<p>{ReactHtmlParser(sectionTwo)}</p>}</Content>
              <ReadMoreNextPage>
                <ReadingNext>
                  <p>continuar leyendo</p>
                </ReadingNext>
                <ArrowContentNext>
                  <Arrow />
                </ArrowContentNext>
              </ReadMoreNextPage>
            </>
          )}
        </ContentWrapper>
      </BodyWrapper>
    </>
  );
};

export default Historia;
