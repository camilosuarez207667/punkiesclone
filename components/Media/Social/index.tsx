import { useEffect, useState, FC } from "react";
import YoutubeRed from "public/svgs/youtube-red";
import Spotify from "public/svgs/spotify";
import AmazonMusic from "public/svgs/amazon";
import SoundCloud from "public/svgs/soundcloud";
import Download from "public/svgs/download";
import { SocialItems, SocialWrapper, SocialText } from "./social.styled";
import Link from "next/link";

interface SocialProps {
  punkies: boolean;
}

const Media: FC<SocialProps> = ({ punkies }) => {
  return (
    <SocialWrapper>
      <SocialText>escucha en:</SocialText>
      <Link
        href={
          punkies
            ? "https://www.youtube.com/c/punkiesycerebro/featured"
            : "https://www.youtube.com/user/DAFXDXZ"
        }
      >
        <a target="_blank">
          <SocialItems className="youtube">
            <YoutubeRed />
          </SocialItems>
        </a>
      </Link>
      <Link
        href={
          punkies
            ? "https://music.amazon.com/artists/B0752B6RCB/punkies-y-cerebro"
            : "https://music.amazon.com/artists/B000QKC70K/jimmy-jazz"
        }
      >
        <a target="_blank">
          <SocialItems className="amazon">
            <AmazonMusic />
          </SocialItems>
        </a>
      </Link>
      <Link
        href={
          punkies
            ? "https://open.spotify.com/artist/6Nq4YQd4JdWvtY3HrgvYK7"
            : "https://open.spotify.com/artist/6MlcEwkxGsCTsCmZVl8w2I"
        }
      >
        <a target="_blank">
          <SocialItems className="spotify">
            <Spotify />
          </SocialItems>
        </a>
      </Link>
      <Link
        href={
          punkies
            ? "https://soundcloud.com/punkiesycerebro"
            : "https://soundcloud.com/jimmyjazzgp"
        }
      >
        <a target="_blank">
          <SocialItems className="sound">
            <SoundCloud />
          </SocialItems>
        </a>
      </Link>
      <Link href={punkies ? "/" : "/"}>
        <a target="">
          <SocialItems className="download">
            <Download />
          </SocialItems>
        </a>
      </Link>
    </SocialWrapper>
  );
};
export default Media;
