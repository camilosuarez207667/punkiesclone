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
    MobileBar,
    MobileNav,
    MobileLogo,
} from './index.styled'

const Navigation: FC = () => {

    const [header, setHeader] = useState(false);
    const listenScrollEvent = () => {
        if (window.scrollY <= 101) {
            setHeader(false);
        } else if (window.scrollY >= 101) {
            setHeader(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <>
            {/*  Desktop */}
            <DesktopNav openMenu={header}>
                <LinksWrapper>
                    <LinksContainer>
                        <Menu>
                            <ul>
                                <Link href="/">
                                    <li>
                                        <a>Inicio</a>
                                    </li>
                                </Link>
                                <Link href="/about">
                                    <li>
                                        <a>Noticias</a>
                                    </li>
                                </Link>
                                <Link href="/contact">
                                    <li>
                                        <a>Media</a>
                                    </li>
                                </Link>
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
                                <Link href="/">
                                    <li>
                                        <a>GP</a>
                                    </li>
                                </Link>
                                <Link href="/about">
                                    <li>
                                        <a>Tienda</a>
                                    </li>
                                </Link>
                                <Link href="/contact">
                                    <li>
                                        <a>Contacto</a>
                                    </li>
                                </Link>
                            </ul>
                        </Menu>
                    </LinksContainer>
                </LinksWrapper>
            </DesktopNav>
            {/*  Desktop */}
            {/*  Mobile  */}
            <MobileBar openMenu={header} />
                <MobileNav openMenu={header}>
                    <MobileLogo>
                        <Link href="/contact">
                            <a><Image src="/punkieslogo.png" height={40} width={80} /></a>
                        </Link>
                    </MobileLogo>
                    <Hamburger />
                </MobileNav>
            {/*  Mobile  */}
        </>
    )
}

export default Navigation