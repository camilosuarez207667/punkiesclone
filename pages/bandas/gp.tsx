import { FC } from "react";

import {
  Title,
  BodyWrapper,
  TitleTextDesktop,
  RedLineDesktop,
  BandWrapper,
  ImageDiv,
  BandDescription,
  RedLineMobile,
  TitleMobile,
  ReadMore,
} from "./gp.styled";

const Gp: FC = () => {
  return (
    <>
      <BodyWrapper>
        <RedLineDesktop />
        <TitleTextDesktop>
          <Title>GP</Title>
        </TitleTextDesktop>

        <BandWrapper>
          <BandDescription>
            Tiempo después Guillermo Arroyave un incansable colaborador de esta
            agrupación en todos sus aspectos pasa a formar parte de la misma, y
            Diego Rodríguez (guitarrista) forma parte de la alineación de GP en
            el 2001. Hasta finales del 2006, esta alineación se mantiene
            constante hasta que Jaime López, quien fuese el cofundador, voz y
            bajista de G.P., decide retirarse de la agrupación. A principios del
            2007 Juan Fernando Rendón se convierte en el nuevo bajista de G.P.
            hasta el año 2008, complementando la alineación de esta banda
            colombiana por aquel entonces y siendo parte de la grabación del
            último disco de esta. En el mes de mayo del 2008 Steve David Botero
            ingresa como bajista de G.P., ayudando a la banda a continuar con
            las labores de promoción de su último disco, aportando no solo en
            las líneas de bajo de esta banda Punk sino también en sus letras.{" "}
            <ReadMore> Leer más</ReadMore>
          </BandDescription>

          <ImageDiv>
            <RedLineMobile />
            <TitleMobile>G.P.</TitleMobile>
            <img src="/gp-band.jpg" alt="" />
          </ImageDiv>
        </BandWrapper>
      </BodyWrapper>
    </>
  );
};

export default Gp;
