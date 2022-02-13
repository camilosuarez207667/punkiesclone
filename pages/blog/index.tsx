import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";

import NavPadding from "components/Navigation/NavPadding/NavPadding";
import Blog from "components/Blog/Blog";

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
  return (
    <div>
      <Head>
        <title>Blog - Punkies y Cerebro</title>
        <meta name="description" content="Blog - Punkies y Cerebro" />
      </Head>
      <NavPadding />
      <Blog blogs={blogs} />
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
