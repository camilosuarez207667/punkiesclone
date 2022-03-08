import { FC, Key, useState } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";

import Head from "next/head";
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next";

import NavPadding from "components/Navigation/NavPadding/NavPadding";

import {
  Wrapper,
  Description,
  BlogWrapper,
  Fecha,
  FullWrapper,
  Profile,
  BlogComponent,
  ProfileWrapper,
  ProfileName,
  Title,
} from "../../components/Blog/blog-article.styled";

type BlogData = {
  blogs: {
    image: {
      url: string;
    };
    video: {
      url: string;
    };
    title: string;
    description: string;
    date: Date;
    readMore?: string;
  }[];
};

export default function Index({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const articleid = router.query.article;

  //router sirve para coger el url , lo comparo con el title para hacerle un map y extraer el object
  const artitleText = blogs.filter((e: any) => e.title === articleid);

  return (
    <div>
      <Head>
        <title>Blog - Punkies y Cerebro</title>
        <meta name="description" content="Blog - Punkies y Cerebro" />
      </Head>
      <NavPadding />

      <Breadcrumb
        title={"In Sermo Rusticus"}
        url={"/blog"}
        headerDesktop={false}
        topPadding={false}
        goBack={true}
        backMessage={"volver"}
      />

      <FullWrapper>
        <BlogComponent>
          <Wrapper>
            {artitleText.map(
              (
                e: {
                  title: string;
                  date: string;
                  brevedescripcion: string;
                  description: string;
                },
                i: Key
              ) => (
                <BlogWrapper key={i}>
                  <ProfileWrapper>
                    <Title>
                      <h1>{e.title}</h1>
                    </Title>
                    <Fecha>
                      <div>
                        <p>
                          {new Date(e.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </Fecha>
                  </ProfileWrapper>

                  <Description>{e.description}</Description>
                </BlogWrapper>
              )
            )}
          </Wrapper>
        </BlogComponent>
      </FullWrapper>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resBlogs = await fetch(`https://punkies-strapi.herokuapp.com/blogs`);
  const blogs: BlogData = await resBlogs.json();

  if (!blogs) {
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
      blogs: blogs,
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
