import { FC, useEffect, useRef, useState } from 'react';
import { Background } from './slider.styled'
import Image from 'next/image'
const Carousel = require('re-carousel');


interface ImageProps {
    posts: {
        image: {
            url: string;
        }[]
    }[];
}

export const Slider: FC<ImageProps> = ({ posts }) => {
    const { API_URL } = process.env
    console.log(posts)

    return (
        <>
            <Background>
                <Carousel auto loop>
                    {posts.length ?
                        posts.map((post, index) => (
                            post.image.map(e => (
                                <Image key={index} width={1600} height={900} src={`${API_URL}${e.url}`} alt="" />
                            ))
                        ))
                        : null}

                </Carousel>
            </Background>

        </>
    )
}



export default Slider


