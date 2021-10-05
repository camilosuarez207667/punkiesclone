import { FC } from 'react';
import { Background } from './slider.styled'
import Image from 'next/image'
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
    console.log(images.map(e => e))
    return (
        <>
            <Background>
                <Carousel auto loop>
                    {
                        images.map(img => (
                            <Image key={img.id} layout="fill" objectFit="cover" objectPosition="top center" src={`${img.image.url}`} alt="punkies y cerebro showcase" />
                        ))
                    }
                </Carousel>
            </Background>

        </>
    )
}



export default Slider


