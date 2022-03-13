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
  fulldiscoUrl: any;
}

const Hero: FC<HeroProps> = ({
  description,
  imgUrl,
  imgAlt,
  viewMore,
  fullDisco,
  fulldiscoUrl,
}) => {
  return (
    <>
      <FullWrapper>
        <Wrapper>
          <BandWrapper>
            <BandDescription>
              {description}
              <Link href={viewMore}>
                <ReadMore>
                  <br />
                  leer más
                </ReadMore>
              </Link>
            </BandDescription>

            <ImageDiv>
              <div>
                <img src={imgUrl} alt={imgAlt} />
              </div>
              <Link href={fullDisco}>
                <ReadMoreDisco>
                  <Link href={fulldiscoUrl}>
                    <a>
                      <h3>ver discografia completa</h3>
                    </a>
                  </Link>
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
