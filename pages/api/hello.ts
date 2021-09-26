// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}



type Slides = {
  image: string
  name: string
}


export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch(`http://localhost:1337/sliders`)
  console.log(res)
  const data: Slides[] = await res.json()

  if (!data) {
      return {
          redirect: {
              destination: '/',
              permanent: false,
          },
      }
  }

  return {
      props: {
          slide: data,
      },
      revalidate: 1,
  }
}
