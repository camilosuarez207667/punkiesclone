import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import Image from "next/image";

import {
    Wrapper,
    LinksWrapper,
    Menu,
    ImageMain,
    LinksContainer,
    MobileWrapper,
    MobileMenu,
    MobileLogo
} from './index.styled'

const Navigation = () => {
    return (
        <>
            <Wrapper>
                <LinksWrapper>
                    <LinksContainer>
                        <Menu>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Inicio</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>Noticias</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Media</a>
                                    </Link>
                                </li>
                            </ul>
                        </Menu>
                        <ImageMain>
                            <Image
                                width={150}
                                height={100}
                                src={'/punkieslogo.png'}
                                alt="Picture of the author" />
                        </ImageMain>
                        <Menu>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>GP</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>Tienda</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contacto</a>
                                    </Link>
                                </li>
                                <li>
                                    <span>
                                        <Link href="/contact">
                                            <a><Image src="/svgs/facebook.svg" height={24} width={24} /></a>
                                        </Link>
                                    </span>
                                    <span>
                                        <Link href="/contact">
                                            <a><Image src="/svgs/youtube.svg" height={24} width={24} /></a>
                                        </Link>
                                    </span>
                                    <span><Link href="/contact">
                                        <a><Image src="/svgs/instagram.svg" height={24} width={24} /></a>
                                    </Link></span>
                                    <span><Link href="/contact">
                                        <a><Image src="/svgs/spotify.svg" height={24} width={24} /></a>
                                    </Link></span>
                                    <span>
                                        <Link href="/contact">
                                            <a><Image src="/svgs/twitter.svg" height={24} width={24} /></a>
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </Menu>
                    </LinksContainer>
                </LinksWrapper>
            </Wrapper>
            <MobileWrapper>
                <MobileMenu>
                    <Link href="/contact">
                        <a><Image src="/svgs/hamburger-menu.svg" height={40} width={40} /></a>
                    </Link>
                </MobileMenu>
                <MobileLogo>
                    <Link href="/contact">
                        <a><Image src="/svgs/hamburger-menu.svg" height={40} width={40} /></a>
                    </Link>
                </MobileLogo>
            </MobileWrapper>
        </>
    )
}

export default Navigation