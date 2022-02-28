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
                <a>inicio</a>
              </li>
            </Link>
            <Link href="/noticias">
              <li onClick={() => setMenuOpen(false)}>
                <a>noticias</a>
              </li>
            </Link>
            <Link href="/historia">
              <li onClick={() => setMenuOpen(false)}>
                <a>historia</a>
              </li>
            </Link>
            <Link href="/media">
              <li onClick={() => setMenuOpen(false)}>
                <a>media</a>
              </li>
            </Link>
            <Link href="/tienda">
              <li onClick={() => setMenuOpen(false)}>
                <a>tienda</a>
              </li>
            </Link>
            <Link href="/eventos">
              <li onClick={() => setMenuOpen(false)}>
                <a>eventos</a>
              </li>
            </Link>
            <Link href="/blog">
              <li onClick={() => setMenuOpen(false)}>
                <a>blog</a>
              </li>
            </Link>
            <Link href="#contacto">
              <li onClick={() => setMenuOpen(false)}>
                <a>contacto</a>
              </li>
            </Link>
          </Links>
        </Menu>
      </HamburgerMenu>
    </>
  );
};

export default Hamburger;
