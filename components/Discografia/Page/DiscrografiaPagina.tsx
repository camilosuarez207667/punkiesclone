import { useState, FC } from "react";
import Link from "next/link";
import {
  Title,
  BodyWrapper,
  TitleTextDesktop,
  RedLineDesktop,
  ImageDiscoWrapper,
  ImageDiv,
  BandDescription,
  BandReadMore,
  RedLineMobile,
  TitleMobile,
  BandReadMoreButton,
} from "./discrografia-pagina.styled";

const DiscografiaPagina: FC = () => {
  const [year, setYear] = useState([]);

  return (
    <>
      <BodyWrapper>
        {/* RED BACKGROUND */}
        <RedLineDesktop />
        <TitleTextDesktop>
          <Title>GP</Title>
          <Title>Punkies y Cerebro</Title>
          <Title>Jimmy Jazz</Title>
        </TitleTextDesktop>

        <ImageDiscoWrapper>
          <ImageDiv>
            <RedLineMobile />
            <TitleMobile>G.P.</TitleMobile>
            <img src="/gp-band.jpg" alt="" />
            <BandDescription>
              GP nace en Medellín en 1984 gracias a Jaime Lopez y Oscar Roldán,
              bajista y baterista respectivamente. En 1988 Mauricio Gomez toma
              las riendas en GP en la primera guitarra. Tiempo después Guillermo
              Arroyave un incansable colaborador de esta agrupación...
            </BandDescription>
            <BandReadMoreButton>
              <Link href="/gp">
                <BandReadMore>Ver Más</BandReadMore>
              </Link>
            </BandReadMoreButton>
          </ImageDiv>
          <ImageDiv>
            <RedLineMobile className="punkies-y-cerebro-discografia" />
            <TitleMobile>Punkies y Cerebro</TitleMobile>
            <img src="/pyc.jpg" alt="" />
            <BandDescription>
              El miércoles 23 de julio de 2008 me llamaron de Bogotá
              preguntándome por las consecuencias de laseparación de GP en
              cuanto a los integrantes restantes y, qué las cosas que se decían
              y, que el otrogrupo que se hace llamar Genoma Punk…
            </BandDescription>

            <BandReadMoreButton>
              <Link href="/gp">
                <BandReadMore>Ver Más</BandReadMore>
              </Link>
            </BandReadMoreButton>
          </ImageDiv>
          <ImageDiv>
            <RedLineMobile className="punkies-y-cerebro-discografia" />
            <TitleMobile>Jimmy Jazz</TitleMobile>
            <img src="/jimmy-jazz.jpg" alt="" />
            <BandDescription>
              Durante más de 30 años lideró G.P., una de las bandas paisas más
              explosivas que emergió en los crudos ochenta. En ese tiempo nunca
              se presentó en festivales como Rock al Parque o Altavoz pues lo
              consideraban un peligro por su lengua viperina…
            </BandDescription>
            <BandReadMoreButton>
              <Link href="/gp">
                <BandReadMore>Ver Más</BandReadMore>
              </Link>
            </BandReadMoreButton>
          </ImageDiv>
        </ImageDiscoWrapper>
      </BodyWrapper>
    </>
  );
};

export default DiscografiaPagina;
