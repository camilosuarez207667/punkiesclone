import { useState, useEffect } from 'react';
import Link from 'next/link'

import {
    HamburgerMenu,
    Menu,
    Links,
} from './index.styled'

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <HamburgerMenu>
                <Menu
                    onMouseLeave={() => setMenuOpen(false)}
                 >
                    <input
                        type="checkbox"
                        // defaultChecked={menuOpen}
                        checked={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        //The onChange deletes the error message about the checked prop
                        onChange={e => { }}
                    />
                    <span></span>
                    <span></span>
                    <span></span>
                    <Links>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)}>
                                <a>Inicio</a>
                            </li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() => setMenuOpen(false)}>
                                <a>Noticias</a>
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li onClick={() => setMenuOpen(false)}>
                                <a>Media</a>
                            </li>
                        </Link>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)}>
                                <a>GP</a>
                            </li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() => setMenuOpen(false)}>
                                <a>Tienda</a>
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li onClick={() => setMenuOpen(false)}>
                                <a>Contacto</a>
                            </li>
                        </Link>
                    </Links>
                </Menu>
            </HamburgerMenu>
        </>
    )
}

export default Hamburger

