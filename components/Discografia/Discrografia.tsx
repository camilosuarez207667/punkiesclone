import { useState, FC } from "react";
const Carousel = require("re-carousel");
import {
  Wrapper,
  ImageHeading,
  Title,
  BodyWrapper,
  TitleYear,
  Card,
  Year,
  Description,
  WrapperMobile,
} from "./discrografia.styled";

interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description: string;
    year: number;
  }[];
}

const Discografia: FC<DiscoProps> = ({ discos }) => {
  const [year, setYear] = useState([]);

  const arrData = [...discos];

  let sortedByYear = arrData.sort((a, b) => {
    return b.year - a.year;
  });

  return (
    <>
      <BodyWrapper id="discografia">
        <Wrapper>
          {sortedByYear.length
            ? sortedByYear.map((e, i) => (
                <Card key={i}>
                  <ImageHeading>
                    <img
                      src={`${e.image.url}`}
                      alt="punkies y cerebro showcase"
                    />
                  </ImageHeading>
                  <TitleYear>
                    <Title>{e.title}</Title>
                    <Year>{e.year}</Year>
                  </TitleYear>
                  <Description>{e.description}</Description>
                </Card>
              ))
            : null}
        </Wrapper>
        <WrapperMobile>
          <Carousel auto loop>
            {sortedByYear.length
              ? sortedByYear.map((e, i) => (
                  <Card key={i}>
                    <ImageHeading>
                      <img
                        src={`${e.image.url}`}
                        alt="punkies y cerebro showcase"
                      />
                    </ImageHeading>
                    <TitleYear>
                      <Title>{e.title}</Title>
                      <Year>{e.year}</Year>
                    </TitleYear>
                    <Description>{e.description}</Description>
                  </Card>
                ))
              : null}
          </Carousel>
        </WrapperMobile>
      </BodyWrapper>
    </>
  );
};

export default Discografia;
