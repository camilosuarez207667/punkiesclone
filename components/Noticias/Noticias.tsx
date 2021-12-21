import { FC } from "react";
import Image from "next/image";
import {
  Wrapper,
  Description,
  Title,
  NewsWrapper,
  ImageHeading,
  Date,
} from "./noticias.styled";

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
  console.log(news);
  let Arr = [...news];
  let firstNews = Arr.splice(0, 1).shift();
  let firstImage = firstNews?.image.url;
  let firstTitle = firstNews?.title;
  let firstDescription = firstNews?.description;
  let firstDate = firstNews?.date;

  let secondNews = Arr.slice(-1).pop();
  let secondImage = secondNews?.image.url;
  let secondTitle = secondNews?.title;
  let secondDescription = secondNews?.description;
  let secondDate = secondNews?.date;

  return (
    <>
      <Wrapper>
        <NewsWrapper>
          <ImageHeading>
            <Image
              layout="intrinsic"
              width={800}
              height={605}
              src={`${secondImage}`}
              alt="punkies y cerebro showcase"
            />
          </ImageHeading>
          <Title>{secondTitle}</Title>
          <Description>{secondDescription}</Description>
          {/* <Date>{secondDate}</Date> */}
        </NewsWrapper>
        <NewsWrapper>
          <ImageHeading>
            <Image
              layout="intrinsic"
              width={800}
              height={605}
              src={`${firstImage}`}
              alt="punkies y cerebro showcase"
            />
          </ImageHeading>
          <Title>{firstTitle}</Title>
          <Description>{firstDescription}</Description>
          {/* <Date>{firstDate}</Date> */}
        </NewsWrapper>
      </Wrapper>
    </>
  );
};

export default Noticias;
