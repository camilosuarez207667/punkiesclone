import { FC } from "react";
import Link from "next/link";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import {
  Title,
  BodyWrapper,
  TitleTextDesktop,
  RedLineDesktop,
  ImageDiscoWrapper,
  ImageDiv,
  BandDescription,
  BandReadMore,
  BandReadMoreButton,
  BandDescriptionWrapper,
  BreadcrumbWrapper,
  Image,
} from "./discrografia-pagina.styled";

import { mockData_discoProps } from "./MOCK_DATA";

const DiscografiaPagina: FC = () => {
  return (
    <>
      <BodyWrapper>
        <RedLineDesktop />
        <TitleTextDesktop>
          <Title>GP</Title>
          <Title>Punkies y Cerebro</Title>
          <Title>Jimmy Jazz</Title>
        </TitleTextDesktop>

        <ImageDiscoWrapper>
          {mockData_discoProps.bands.map((e, i) => (
            <ImageDiv key={i}>
              <BreadcrumbWrapper>
                <Breadcrumb
                  title={e.title}
                  url={e.url}
                  headerDesktop={true}
                  topPadding={e.topPadding}
                  goBack={e.goBack}
                  backMessage={"inicio"}
                />
              </BreadcrumbWrapper>
              <Image>
                <img src={e.image} alt={e.alt} />
              </Image>

              <BandDescriptionWrapper>
                <BandDescription>{e.description}</BandDescription>
                <BandReadMoreButton>
                  <Link href={e.moreLink}>
                    <BandReadMore>ver más</BandReadMore>
                  </Link>
                </BandReadMoreButton>
              </BandDescriptionWrapper>
            </ImageDiv>
          ))}
        </ImageDiscoWrapper>
      </BodyWrapper>
    </>
  );
};

export default DiscografiaPagina;
