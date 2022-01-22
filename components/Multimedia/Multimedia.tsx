import { FC, useState } from "react";
import Image from "next/image";
import YoutubeIcon from "public/svgs/youtube-icon";

import {
  Wrapper,
  BodyWrapper,
  Description,
  More,
  Title,
  NewsWrapper,
  DescriptionWrapper,
  YoutubeIconDiv,
  ImageDiv,
  VideoOverlay,
  ExitButton,
  VideoYoutubeWrapper,
  VideoYoutube,
} from "./multimedia.styled";
interface MultimediaProps {
  media: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description: string;
    date: Date;
    readMore: string;
    youtube: string;
  }[];
  backgroundColor: boolean;
  seeMore: boolean;
}

const Multimedia: FC<MultimediaProps> = ({
  media,
  backgroundColor,
  seeMore,
}) => {
  const [video, setvideo] = useState(false);
  const [videoUrl, setvideoUrl] = useState("");
  return (
    <BodyWrapper backgroundColor={backgroundColor}>
      <Wrapper backgroundColor={backgroundColor}>
        {media.map((e, i) => (
          <NewsWrapper key={i} backgroundColor={backgroundColor}>
            <ImageDiv
              onClick={() => {
                setvideo(true);
                setvideoUrl(e.youtube);
              }}
            >
              <Image
                layout="intrinsic"
                width={360}
                height={205}
                src={`${e.image.url}`}
                alt="punkies y cerebro showcase"
              />

              <YoutubeIconDiv>
                <YoutubeIcon />
              </YoutubeIconDiv>
            </ImageDiv>
            <Title backgroundColor={backgroundColor}>{e.title}</Title>

            <DescriptionWrapper>
              <Description backgroundColor={backgroundColor}>
                {e.description}
              </Description>
              <More seeMore={seeMore}>ver más</More>
            </DescriptionWrapper>
          </NewsWrapper>
        ))}
        <VideoOverlay openVideo={video}>
          <ExitButton onClick={() => setvideo(!video)}>
            <span></span>
            <span></span>
          </ExitButton>
        </VideoOverlay>
        <VideoYoutubeWrapper openVideo={video}>
          <VideoYoutube
            src={video ? videoUrl + "?autoplay=1" : ""}
            allow="fullscreen; autoplay;"
          />
        </VideoYoutubeWrapper>
      </Wrapper>
    </BodyWrapper>
  );
};

export default Multimedia;
