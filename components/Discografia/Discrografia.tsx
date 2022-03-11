import { FC, useState } from "react";
const Carousel = require("re-carousel");

import Link from "next/link";

import PlusSvg from "public/svgs/plus";

import {
  Wrapper,
  ImageHeading,
  BodyWrapper,
  Card,
  WrapperSvg,
  MoreButton,
  WrapperMobile,
  MoreIcon,
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
                  <Link href={`/media/${e.slug}`}>
                    <ImageHeading>
                      <img src={`${e.image.url}`} alt={`${e.alt}`} />
                    </ImageHeading>
                  </Link>
                </Card>
              ))}
          </Carousel>
        </WrapperMobile>
      </BodyWrapper>
    </>
  );
};

export default Discografia;
