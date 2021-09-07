import { useEffect, useState, FC } from 'react'
import Link from 'next/link'
import Image from "next/image";
import Hamburger from './Hamburger/Hamburger';


import {
    DesktopNav,
    LinksWrapper,
    Menu,
    ImageMain,
    LinksContainer,
    MobileNav,
    MobileLogo,
} from './index.styled'

const Navigation: FC = () => {

    const [header, setHeader] = useState(false);
    const listenScrollEvent = () => {
        if (window.scrollY <= 101) {
            setHeader(false);
            console.log('true')
        } else if (window.scrollY >= 101) {
            setHeader(true);
            console.log('false')
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <>
            <DesktopNav openMenu={header}>
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
                            {!header ?
                                < Image
                                    width={150}
                                    height={100}
                                    src={'/punkieslogo.png'}
                                    alt="Picture of the author" /> :
                                <Image
                                    width={260}
                                    height={31}
                                    src={'/punkies-logo-small.png'}
                                    alt="Picture of the author" />}

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
                            </ul>
                        </Menu>
                    </LinksContainer>
                </LinksWrapper>
            </DesktopNav>
            {/*  Mobile and desktop */}
            <MobileNav openMenu={header}>
                <MobileLogo>
                    <Link href="/contact">
                        <a><Image src="/punkieslogo.png" height={40} width={80} /></a>
                    </Link>
                </MobileLogo>
                <Hamburger />
            </MobileNav>
        </>
    )
}

export default Navigation