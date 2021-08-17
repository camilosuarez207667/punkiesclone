import Link from 'next/link'
import styled from 'styled-components';
import Image, { ImageProps } from "next/image";

import {
    Wrapper,
    SubWrapper,
    Menu
} from './index.styled'

const Navigation = () => {
    return (
        <Wrapper>
            <SubWrapper>
                <Menu>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Index</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </Menu>
            </SubWrapper>
        </Wrapper>
    )
}

export default Navigation