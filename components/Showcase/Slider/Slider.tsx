import { FC, Key } from "react";
import {
  ImagesStylesDesktop,
  ImagesStylesMobile,
  FullWrapper,
} from "./slider.styled";
import Image from "next/image";
const Carousel = require("re-carousel");
import IndicatorDots from "./indicator-dots";

interface ImageProps {
  images: {
    id: number;
    mobile: boolean;
    published_at: string;
    image: {
      url: string;
      alt: string;
    };
  }[];
}

const Slider: FC<ImageProps> = ({ images }) => {
  let sortByDate: any = images.sort(
    (a, b) =>
      new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf()
  );

  let mobileImages = sortByDate.filter(
    (e: { mobile: boolean }) => e.mobile === true
  );
  let desktopImages = sortByDate.filter(
    (e: { mobile: boolean }) => e.mobile === false
  );

  return (
    <FullWrapper>
      <ImagesStylesDesktop id="home">
        <Carousel auto loop widgets={[IndicatorDots]}>
          {desktopImages.map(
            (img: {
              id: Key | null | undefined;
              image: { url: string; alt: string };
            }) => (
              <Image
                key={img.id}
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                src={`${img.image.url}`}
                alt={`${img.image.alt}`}
              />
            )
          )}
        </Carousel>
      </ImagesStylesDesktop>
      <ImagesStylesMobile>
        <Carousel auto loop widgets={[IndicatorDots]}>
          {mobileImages.map((img) => (
            <Image
              key={img.id}
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              src={`${img.image.url}`}
              alt={`${img.image.alt}`}
            />
          ))}
        </Carousel>
      </ImagesStylesMobile>
    </FullWrapper>
  );
};

export default Slider;
