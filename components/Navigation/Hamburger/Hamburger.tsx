import { FC, useEffect, useRef, useState, useLayoutEffect } from 'react';
import Link from 'next/link'

import {
    HamburgerMenu,
    Menu,
    Links,
} from './index.styled'

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    return (
        <>
            <HamburgerMenu>
                <Menu>
                    <input
                        type="checkbox"
                        // defaultChecked={isMenuOpen}
                        // checked={menuOpen}
                        onClick={() => { setMenuOpen(!menuOpen); }}
                    />
                    <span></span>
                    <span></span>
                    <span></span>
                    <Links>
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
                    </Links>
                </Menu>
            </HamburgerMenu>
        </>
    )
}

export default Hamburger

