import { FC } from "react";
import Image from "next/image";
import TitleComp from "components/Title/Title";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import {
  Wrapper,
  Description,
  Title,
  NewsWrapper,
  TitleWrapper,
  FullWrapper,
} from "./blog.styled";

interface NewsProps {
  news: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description: string;
    date: Date;
    readMore?: string;
  }[];
}

const Noticias: FC<NewsProps> = ({ news }) => {
  return (
    <>
      <Breadcrumb
        title="Blog Jimmy Jazz"
        url={"/"}
        headerDesktop={false}
        topPadding={false}
        goBack={true}
        backMessage={"volver"}
      />
      <TitleWrapper>
        <p>
          Un ejercicio de escritura para decir lo que pienso... en palabras
          vulgares.
        </p>
      </TitleWrapper>
      <FullWrapper>
        <Wrapper>
          {/* {news.map((e, i) => (
            <NewsWrapper key={i}>
              <Image
                layout="intrinsic"
                width={800}
                height={605}
                src={`${e.image.url}`}
                alt="punkies y cerebro showcase"
              />

              <Title>{e.title}</Title>
              <Description>{e.description}</Description>
            </NewsWrapper>
          ))} */}
        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Noticias;
