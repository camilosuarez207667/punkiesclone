import { FC } from "react";
import {
  Wrapper,
  Date,
  Evento,
  Lugar,
  Precio,
  Title,
  BodyWrapper,
  DivWrapper,
  MobileWrapper,
  DateMobile,
  TitleDateMobile,
  DateMobileWrapper,
} from "./conciertos.styled";

interface ConciertoProps {
  conciertos: {
    id: number;
    date: number;
    evento: string;
    lugar: string;
    precio: number;
  }[];
}

const Conciertos: FC<ConciertoProps> = ({ conciertos }) => {
  const arrData = [...conciertos];

  let sortedByYear = arrData
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .reverse();

  return (
    <>
      <DivWrapper id="conciertos">
        <BodyWrapper>
          <Wrapper>
            <Date>
              <Title>Fecha</Title>
            </Date>
            <Evento>
              <Title>Evento</Title>
            </Evento>
            <Lugar>
              <Title>Lugar</Title>
            </Lugar>
            <Precio>
              <Title>Precio</Title>
            </Precio>
          </Wrapper>
        </BodyWrapper>
        {sortedByYear.map((e, i) => (
          <BodyWrapper key={i}>
            <Wrapper>
              <Date>
                <Title>{e.date}</Title>
              </Date>
              <Evento>
                <Title>{e.evento}</Title>
              </Evento>
              <Lugar>
                <Title>{e.lugar}</Title>
              </Lugar>
              <Precio>
                <Title>{e.precio}</Title>
              </Precio>
            </Wrapper>
          </BodyWrapper>
        ))}
      </DivWrapper>

      {sortedByYear.map((e, i) => (
        <MobileWrapper key={i} id="conciertos">
          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Fecha:</p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.date}</p>
            </DateMobile>
          </DateMobileWrapper>

          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Evento: </p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.evento}</p>
            </DateMobile>
          </DateMobileWrapper>

          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Lugar: </p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.lugar}</p>
            </DateMobile>
          </DateMobileWrapper>

          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Precio: </p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.precio}</p>
            </DateMobile>
          </DateMobileWrapper>
        </MobileWrapper>
      ))}
    </>
  );
};

export default Conciertos;
