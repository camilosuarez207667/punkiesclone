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

const Navigation = () => {

    return (
        <>
            <DesktopNav>
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
                            </ul>
                        </Menu>
                    </LinksContainer>
                </LinksWrapper>
            </DesktopNav>
            {/*  Mobile and desktop */}
            <MobileNav>
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