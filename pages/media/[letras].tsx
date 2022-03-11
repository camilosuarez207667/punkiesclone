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
    comparedAlbum: string;
    song: string;
    time: string;
    track: string;
    compositor?: string;
    letra: string;
  }[];
};

interface DiscoProps {
  discos: {
    image: {
      url: string;
    };
    comparedAlbum: string;
    description: string;
    alt: string;
    title: string;
    slug: string;
    year: number;
    banda: string;
    album: string;
  }[];
}

export default function Index({
  letras,
  discos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const articleid: any = router.query.letras;

  const [nudeUrl] = useState(articleid.replace(/-/g, " "));
  const [open, setOpen] = useState(false);

  const albumArray = letras.filter((e: any) => e.comparedAlbum == nudeUrl);

  const caratulaArray = discos.filter(
    (e: { comparedAlbum: string }) => e.comparedAlbum == nudeUrl
  );

  const firstSong = albumArray.filter((e: any) => e.track == 1);
  const song = firstSong[0].song;

  const [songTitle, setSongTitle] = useState(song);

  const songInfo = albumArray
    .map((e: any) => e)
    .filter((e: any) => e.song == songTitle);

  const songs = albumArray.map((e: { song: any }) => e.song);

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
                {caratulaArray.map(
                  (
                    e: { image: { url: string | undefined } },
                    i: Key | null | undefined
                  ) => (
                    <img key={i} src={e.image.url} alt="" />
                  )
                )}
              </AlbumImage>
              <AlbumTracks>
                <span className="tracklist">Track list: </span>
                {albumArray.map((e: any, i: any) => (
                  <ul key={i}>
                    <li onClick={() => setSongTitle(e.song)}>
                      {e.track}:<span> {e.song} </span>
                    </li>
                  </ul>
                ))}
              </AlbumTracks>
            </ImageWrapper>

            <TitleWrapper>
              <AlbumTitle>
                <h1>
                  {caratulaArray.map((e: any, i: any) => (
                    <span key={i}>Album: {e.album}</span>
                  ))}
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

  const resDiscos = await fetch(
    `https://punkies-strapi.herokuapp.com/discografias`
  );
  const discos: DiscoProps = await resDiscos.json();

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
      discos: discos,
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
