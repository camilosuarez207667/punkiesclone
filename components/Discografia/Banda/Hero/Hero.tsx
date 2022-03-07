import { FC } from "react";
import Link from "next/link";

import {
  FullWrapper,
  BandWrapper,
  ImageDiv,
  BandDescription,
  ReadMoreDisco,
  ReadMore,
  Wrapper,
} from "./hero.styled";

interface HeroProps {
  description: string;
  imgUrl: string;
  imgAlt: string;
  viewMore: string;
  fullDisco: string;
}

const Hero: FC<HeroProps> = ({
  description,
  imgUrl,
  imgAlt,
  viewMore,
  fullDisco,
}) => {
  return (
    <>
      <FullWrapper>
        <Wrapper>
          <BandWrapper>
            <BandDescription>
              {description}&nbsp;&nbsp;
              <Link href={viewMore}>
                <ReadMore>leer más</ReadMore>
              </Link>
            </BandDescription>

            <ImageDiv>
              <div>
                <img src={imgUrl} alt={imgAlt} />
              </div>
              <Link href={fullDisco}>
                <ReadMoreDisco>
                  <h3>ver discografia completa</h3>
                </ReadMoreDisco>
              </Link>
            </ImageDiv>
          </BandWrapper>
        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Hero;
