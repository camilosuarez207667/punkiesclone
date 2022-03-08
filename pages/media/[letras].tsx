import { FC, Key, useState } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";

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
  AlbumSubTitle,
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
  const articleid = router.query.article;

  // const artitleText = letras.filter((e: any) => e.title === articleid);

  console.log(articleid);

  console.log("Letras");
  // console.log(letras.filter.);

  return (
    <div>
      <Head>
        <title>Blog - Punkies y Cerebro</title>
        <meta name="description" content="Blog - Punkies y Cerebro" />
      </Head>
      <NavPadding />

      <Breadcrumb
        title={"Contrucción"}
        url={"/blog"}
        headerDesktop={false}
        topPadding={false}
        goBack={true}
        backMessage={"volver"}
      />

      <BodyWrapper>
        <Wrapper>
          <AlbumHeader>
            <AlbumImage></AlbumImage>
            <TitleWrapper>
              <AlbumTitle>hello</AlbumTitle>
              <AlbumSubTitle></AlbumSubTitle>
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
