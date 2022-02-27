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

  const artitleText = blogs.filter((e: any) => e.title === articleid);

  return (
    <div>
      <Head>
        <title>Blog - Punkies y Cerebro</title>
        <meta name="description" content="Blog - Punkies y Cerebro" />
      </Head>
      <NavPadding />

      <Breadcrumb
        title={"Artículo"}
        url={"/blog"}
        headerDesktop={true}
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
                    <Profile>
                      <div>
                        <img
                          src="/jimmy-jazz-profile.png"
                          alt="Foto de perfil de Jimmy Jazz"
                        />
                      </div>
                      <ProfileName>
                        <h3>Jimmy Jazz</h3>
                      </ProfileName>
                    </Profile>
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
                  <Title>{e.title}</Title>
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
