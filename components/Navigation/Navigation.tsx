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
    MobileLogo,
    MobileList,
    MobileSocial
} from './index.styled'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        console.log('called')
        console.log(menuOpen);
    }, [menuOpen]);

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
                                            <a className="svg"><Image src="/svgs/facebook.svg" height={24} width={24} /></a>
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
                        <a><Image src="/punkieslogo.png" height={40} width={80} /></a>
                    </Link>
                </MobileMenu>
                <MobileLogo>
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                        <a><Image src="/svgs/hamburger-menu.svg" height={40} width={40} /></a>
                    </div>
                </MobileLogo>
            </MobileWrapper>
            <MobileList>
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
                </ul>
            </MobileList>
            <MobileSocial>
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
            </MobileSocial>
        </>
    )
}

export default Navigation