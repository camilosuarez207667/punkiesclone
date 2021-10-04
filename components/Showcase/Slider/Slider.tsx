import { FC, useEffect, useRef, useState } from 'react';
import { Background } from './slider.styled'
import Image from 'next/image'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
const Carousel = require('re-carousel');


interface ImageProps {
    images: {
        id: number;
        image: {
            url: string;
        }
    }[];
}
interface OfflinePosts {
    offlineImage: {
        url: string;
    }[]
}

export const Slider: FC<ImageProps> = ({ images }) => {
    const { API_URL } = process.env

    console.log(images.map(e => e))
    return (
        <>
            <Background>
                <Carousel auto loop>
                    {
                        images.map(img => (
                            <Image key={img.id} width={1600} height={900} src={`${img.image.url}`} alt="he" />
                        ))
                    }

                </Carousel>
            </Background>

        </>
    )
}



export default Slider


