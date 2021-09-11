import { useState, useEffect } from 'react';
import Link from 'next/link'

import {
    HamburgerMenu,
    Menu,
    Links,
} from './index.styled'

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        console.log(menuOpen)
    }, [menuOpen]);

    return (
        <>
            <HamburgerMenu>
                <Menu
                    onMouseLeave={() => setMenuOpen(false)}
                    onBlur={() => setMenuOpen(false)}
                >
                    <input
                        type="checkbox"
                        defaultChecked={menuOpen}
                        checked={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}

                    />
                    <span></span>
                    <span></span>
                    <span></span>
                    <Links>
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
                    </Links>
                </Menu>
            </HamburgerMenu>
        </>
    )
}

export default Hamburger

