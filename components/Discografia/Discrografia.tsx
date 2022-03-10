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
  const [img, setImg] = useState("");

  function saveImgToLocal(url: string) {
    localStorage.setItem("albumImg", url);
  }
  return (
    <>
      <BodyWrapper>
        <SocialWrapper>
          <SocialText>escucha en:</SocialText>
          <Link href=" https://www.youtube.com/c/punkiesycerebro/featured">
            <SocialItems className="youtube">
              <YoutubeRed />
            </SocialItems>
          </Link>
          <SocialItems className="amazon">
            <AmazonMusic />
          </SocialItems>
          <Link href="https://open.spotify.com/artist/6Nq4YQd4JdWvtY3HrgvYK7?si=0SiS5KoATbqG63JtQtl_0w ">
            <SocialItems className="spotify">
              <Spotify />
            </SocialItems>
          </Link>
          <Link href="https://soundcloud.com/punkiesycerebro">
            <SocialItems className="sound">
              <SoundCloud />
            </SocialItems>
          </Link>
          <SocialItems className="download">
            <Download />
          </SocialItems>
        </SocialWrapper>
        <Wrapper>
          {discos.length &&
            discos.map((e, i) => (
              <Card key={i} className="both">
                <Link href={`/media/${e.slug}`}>
                  <a onClick={() => saveImgToLocal(e.image.url)}>
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
