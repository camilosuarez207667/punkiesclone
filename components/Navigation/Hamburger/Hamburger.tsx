import { FC, useEffect, useRef, useState, useLayoutEffect } from 'react';
import Link from 'next/link'

import {
    HamburgerMenu,
    Menu,
    Links,
} from './index.styled'

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const ulRef = useRef<HTMLUListElement>(null);
    const [dimensions, setDimensions] = useState('');

    useEffect(() => {
        let num: number;
        if (ulRef.current) {
            num = ulRef.current.offsetHeight;
            setDimensions(num.toString());
        }
        console.log(dimensions)
    }, [menuOpen]);
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
                    <Links ref={ulRef} heightCalc={dimensions}>
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

