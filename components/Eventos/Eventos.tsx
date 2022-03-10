import { FC } from "react";
import Image from "next/image";
import TitleComp from "components/Title/Title";
import {
  Wrapper,
  Description,
  Title,
  NewsWrapper,
  TitleWrapper,
  FullWrapper,
} from "./eventos.styled";

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

const Eventos: FC<NewsProps> = ({ news }) => {
  return (
    <>
      <TitleWrapper>
        <TitleComp
          title={"Eventos"}
          message={`Aquí puedes estar al tanto de los próximos eventos`}
          backgroundColor={"black"}
        />
      </TitleWrapper>
      <FullWrapper>
        <Wrapper>
          {news.map((e, i) => (
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
          ))}
        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Eventos;
