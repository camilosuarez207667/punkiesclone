import { Background } from './slider.styled'
import Image from 'next/image'
const Carousel = require('re-carousel');



function Slider({ posts }: any) {
    const { API_URL } = process.env
    let result = posts.map(a => a);
    console.log(result[0])
    console.log(result[0].imagen[0].url)

    return (
        <>
            <Background>
                <Carousel auto loop>
                    <Image width={result[0].imagen[0].width} height={result[0].imagen[0].height} src={API_URL + result[0].imagen[0].url} alt="" />
                    <div style={{ backgroundColor: 'tomato', height: '100%' }}>Frame 1111</div>
                    <div style={{ backgroundColor: 'orange', height: '100%' }}>Frame 2</div>
                    <div style={{ backgroundColor: 'orchid', height: '100%' }}>Frame 3</div>
                </Carousel>


            </Background>

        </>
    )
}



export default Slider


