import { useEffect, useState, FC } from 'react'

const Carousel = require('re-carousel');

import {
    Background,

} from './slider.styled'

const Slider: FC = () => {
    return (
        <>
            <Background>
                <Carousel auto loop >
                    <div style={{ backgroundColor: 'tomato', height: '100%' }}>Frame 1</div>
                    <div style={{ backgroundColor: 'orange', height: '100%' }}>Frame 2</div>
                    <div style={{ backgroundColor: 'orchid', height: '100%' }}>Frame 3</div>
                </Carousel>
            </Background>
        </>
    )
}
export default Slider