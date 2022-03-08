import { FC, useState } from "react";
const Carousel = require("re-carousel");

import Link from "next/link";

import PlusSvg from "public/svgs/plus";
import YoutubeRed from "public/svgs/youtube-red";
import Spotify from "public/svgs/spotify";
import AmazonMusic from "public/svgs/amazon";
import SoundCloud from "public/svgs/soundcloud";
import Download from "public/svgs/download";

import {
  Wrapper,
  ImageHeading,
  BodyWrapper,
  Card,
  WrapperSvg,
  MoreButton,
  WrapperMobile,
  MoreIcon,
  SocialItems,
  SocialWrapper,
  SocialText,
} from "./discrografia.styled";

interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    alt: string;
    title: string;
    slug: string;
    year: number;
    banda: string;
  }[];
}
const Discografia: FC<DiscoProps> = ({ discos }) => {
  return (
    <>
      <BodyWrapper>
        <SocialWrapper>
          <SocialText>escucha en:</SocialText>
          <SocialItems className="youtube">
            <YoutubeRed />
          </SocialItems>
          <SocialItems className="amazon">
            <AmazonMusic />
          </SocialItems>
          <SocialItems className="spotify">
            <Spotify />
          </SocialItems>
          <SocialItems className="sound">
            <SoundCloud />
          </SocialItems>
          <SocialItems className="download">
            <Download />
          </SocialItems>
        </SocialWrapper>
        <Wrapper>
          {discos.length &&
            discos.map((e, i) => (
              <Card key={i} className="both">
                <Link href={`/media/${e.slug}`}>
                  <a>
                    <MoreButton className="button-active">
                      <WrapperSvg>
                        <PlusSvg />
                      </WrapperSvg>

                      <MoreIcon>Letras</MoreIcon>
                    </MoreButton>
                    <ImageHeading>
                      <img
                        src={`${e.image.url}`}
                        alt={`${e.alt}`}
                        className="image-active"
                      />
                    </ImageHeading>
                  </a>
                </Link>
              </Card>
            ))}
        </Wrapper>

        <WrapperMobile>
          <Carousel auto loop>
            {discos.length &&
              discos.map((e, i) => (
                <Card key={i}>
                  <ImageHeading>
                    <img src={`${e.image.url}`} alt={`${e.alt}`} />
                  </ImageHeading>
                </Card>
              ))}
          </Carousel>
        </WrapperMobile>
      </BodyWrapper>
    </>
  );
};

export default Discografia;
