import { useState } from "react";
import Link from "next/link";

import { HamburgerMenu, Menu, Links } from "./index.styled";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenu>
        <Menu onMouseLeave={() => setMenuOpen(false)}>
          <input
            type="checkbox"
            // defaultChecked={menuOpen}
            checked={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            //The onChange deletes the error message about the checked prop
            onChange={(e) => {}}
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
            <Link href="/noticias">
              <li onClick={() => setMenuOpen(false)}>
                <a>Noticias</a>
              </li>
            </Link>
            <Link href="/historia">
              <li onClick={() => setMenuOpen(false)}>
                <a>historia</a>
              </li>
            </Link>
            <Link href="/media">
              <li onClick={() => setMenuOpen(false)}>
                <a>Media</a>
              </li>
            </Link>
            <Link href="/tienda">
              <li onClick={() => setMenuOpen(false)}>
                <a>Tienda</a>
              </li>
            </Link>
            <Link href="/eventos">
              <li onClick={() => setMenuOpen(false)}>
                <a>Eventos</a>
              </li>
            </Link>
            <Link href="/blog">
              <li onClick={() => setMenuOpen(false)}>
                <a>Blog</a>
              </li>
            </Link>
            <Link href="#contacto">
              <li onClick={() => setMenuOpen(false)}>
                <a>Contacto</a>
              </li>
            </Link>
          </Links>
        </Menu>
      </HamburgerMenu>
    </>
  );
};

export default Hamburger;
