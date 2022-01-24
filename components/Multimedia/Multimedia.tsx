import { FC, useState } from "react";
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
  ImageWrapper,
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
              <YoutubeIconDiv>
                <YoutubeIcon />
              </YoutubeIconDiv>
              <ImageWrapper>
                <img src={`${e.image.url}`} alt="punkies y cerebro showcase" />
              </ImageWrapper>
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
