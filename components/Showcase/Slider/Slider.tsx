import { FC } from "react";
import { ImagesStylesDesktop, ImagesStylesMobile } from "./slider.styled";
import Image from "next/image";
const Carousel = require("re-carousel");
import IndicatorDots from './indicator-dots'

interface ImageProps {
  images: {
    id: number;
    image: {
      url: string;
    };
  }[];
}

const Slider: FC<ImageProps> = ({ images }) => {
  let imgesArr = [...images];
  let mobileImages = imgesArr.splice(2, 5);
  let desktopImages = imgesArr.splice(0, 2);

  return (
    <>
      <ImagesStylesDesktop id="home">
        <Carousel auto loop widgets={[IndicatorDots]}>
          {desktopImages.map((img) => (
            <Image
              key={img.id}
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              src={`${img.image.url}`}
              alt="punkies y cerebro showcase"
            />
          ))}
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
              alt="punkies y cerebro showcase"
            />
          ))}
        </Carousel>
      </ImagesStylesMobile>
    </>
  );
};

export default Slider;
