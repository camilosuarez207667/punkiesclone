import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Slider from 'components/Showcase/Slider/Slider'
import Noticias from 'components/Noticias/Noticias'

type Showcase = {
  id?: string
  image?: string
}

export default function Index({ images }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Punkies y Cerebro P&aacute;gina Oficial</title>
        <meta name="description" content="Punkies y Cerebro P&aacute;gina Oficial" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider images={images} />
      <Noticias />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://punkies-strapi.herokuapp.com/showcases`)
  const images: Showcase = await res.json()

  if (!images) {
    console.log('posts false')
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { images },
  }
}


