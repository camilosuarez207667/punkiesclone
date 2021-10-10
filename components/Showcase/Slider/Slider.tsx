import { FC } from "react";
import { ImagesStylesDesktop, ImagesStylesMobile } from "./slider.styled";
import Image from "next/image";
const Carousel = require("re-carousel");

interface ImageProps {
  images: {
    id: number;
    image: {
      url: string;
    };
  }[];
}

interface OfflinePosts {
  offlineImage: {
    url: string;
  }[];
}

export const Slider: FC<ImageProps> = ({ images }) => {
 
  let imgesArr = [...images]
  let mobileImages = imgesArr.splice(2,5)
  let desktopImages = imgesArr.splice(0,2)
  
  return (
    <>
      <ImagesStylesDesktop>
        <Carousel auto loop>
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
      <Carousel auto loop>
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
