import { FC, Key, useState, useEffect } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";
import Arrow from "public/svgs/arrow";
import Head from "next/head";
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next";

import NavPadding from "components/Navigation/NavPadding/NavPadding";

import {
  Wrapper,
  BodyWrapper,
  AlbumHeader,
  AlbumImage,
  AlbumTitle,
  TitleWrapper,
  AlbumTracks,
  ImageWrapper,
  Song,
  SongWriter,
  SongTitle,
  DynamicLyrics,
  DropdownWrapper,
  Dropdown,
  DropdownMenu,
  DropdownList,
  ArrowContent,
} from "../../components/Discografia/Letras/letras.styled";

type LyricsData = {
  letras: {
    album: string;
    banda: string;
    song: string;
    time: string;
    track: string;
    compositor?: string;
    letra: string;
  }[];
};

export default function Index({
  letras,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const articleid: any = router.query.letras;
  const nudeUrl = articleid.replace(/-/g, " ");

  function capitalizeFirstLetter(sentence: string) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  const capitalizeTitle = capitalizeFirstLetter(nudeUrl);

  const albumArray = letras.filter(
    (e: { album: string }) => e.album == capitalizeTitle
  );

  const [songTitle, setSongTitle] = useState(Object.values(albumArray[0])[3]);

  const songInfo = albumArray
    .map((e: any) => e)
    .filter((e: { song: unknown }) => e.song == songTitle);

  const songs = albumArray.map((e: { song: any }) => e.song);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Discografía - Punkies y Cerebro</title>
        <meta name="description" content="Blog - Punkies y Cerebro" />
      </Head>
      <NavPadding />

      <Breadcrumb
        title={"Discografía"}
        url={"/media"}
        headerDesktop={false}
        topPadding={false}
        goBack={true}
        backMessage={"volver"}
      />

      <BodyWrapper>
        <Wrapper>
          <AlbumHeader>
            <ImageWrapper>
              <AlbumImage>
                <img src="/cualquierparecido.jpeg" alt="" />
              </AlbumImage>
              <AlbumTracks>
                <span className="tracklist">Track list: </span>
                {albumArray.map((e: any, i: Key | null | undefined) => (
                  <ul key={i}>
                    <li onClick={() => setSongTitle(e.song)}>
                      {e.track}:<span> {e.song} </span>
                    </li>
                  </ul>
                ))}
              </AlbumTracks>
            </ImageWrapper>

            <TitleWrapper>
              {/* <p>
                Publicado:<span> 2007 </span>
              </p> */}
              <AlbumTitle>
                <h1>
                  <span>Album: </span>
                  {capitalizeTitle}
                </h1>
              </AlbumTitle>
              <DropdownWrapper onClick={() => setOpen(!open)}>
                <Dropdown className={open ? "dropdown" : " "}>
                  {!songTitle ? " Track list" : songTitle}
                  <DropdownMenu className="dropdown_menu--animated dropdown_animation">
                    {songs.map((e: any, i: any) => (
                      <DropdownList
                        key={i}
                        onClick={() => {
                          setSongTitle(e);
                        }}
                      >
                        {e}
                      </DropdownList>
                    ))}
                  </DropdownMenu>
                  <ArrowContent>
                    <Arrow />
                  </ArrowContent>
                </Dropdown>
              </DropdownWrapper>

              {songInfo.map((e: any, i: any) => (
                <DynamicLyrics key={i}>
                  <SongWriter>
                    <p>
                      <span>Letra:</span> {e.compositor}
                    </p>
                  </SongWriter>
                  <SongTitle>
                    <div>
                      <p>
                        <span>{e.track}:</span> {e.song}
                      </p>
                    </div>
                    <div className="song-duration">
                      <p>
                        <span> {e.time}</span>
                      </p>
                    </div>
                  </SongTitle>
                  <Song>
                    <p>{e.letra}</p>
                  </Song>
                </DynamicLyrics>
              ))}
            </TitleWrapper>
          </AlbumHeader>
        </Wrapper>
      </BodyWrapper>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resletras = await fetch(`https://punkies-strapi.herokuapp.com/letras`);
  const letras: LyricsData = await resletras.json();

  if (!letras) {
    console.log("posts false");
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      letras: letras,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
