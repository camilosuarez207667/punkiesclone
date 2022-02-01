import { FC } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger/Hamburger";
import { useRouter } from "next/router";

import {
  DesktopNav,
  ImagePaddingMobile,
  ImagePadding,
  LinksWrapper,
  Menu,
  ImageMain,
  LinksContainer,
  MobileNav,
  MobileLogo,
} from "./index.styled";

const Navigation: FC = () => {
  const router = useRouter();

  return (
    <>
      {/*  Desktop */}
      <DesktopNav />
      <LinksWrapper>
        <LinksContainer>
          <Menu>
            <ul>
              <Link href="/">
                <li>
                  <a className={router.pathname == "/" ? "active" : ""}>
                    Inicio
                  </a>
                </li>
              </Link>
              <Link href="/noticias">
                <li>
                  <a className={router.pathname == "/noticias" ? "active" : ""}>
                    Noticias
                  </a>
                </li>
              </Link>
              <Link href="/discografia">
                <li>
                  <a
                    className={
                      router.pathname == "/discografia" ? "active" : ""
                    }
                  >
                    Discografía
                  </a>
                </li>
              </Link>
              <Link href="media">
                <li>
                  <a className={router.pathname == "/media" ? "active" : ""}>
                    Media
                  </a>
                </li>
              </Link>
            </ul>
          </Menu>
          <ImageMain>
            <ImagePadding>
              <img src="/punkies-logo.png" alt="Logo Punkies y Cerebro" />
            </ImagePadding>
          </ImageMain>
          <Menu>
            <ul>
              <Link href="/tienda">
                <li>
                  <a className={router.pathname == "/tienda" ? "active" : ""}>
                    Tienda
                  </a>
                </li>
              </Link>
              <Link href="/">
                <li>
                  <a>Eventos</a>
                </li>
              </Link>
              <Link href="/blog">
                <li>
                  <a className={router.pathname == "/blog" ? "active" : ""}>
                    Blog
                  </a>
                </li>
              </Link>
              <Link href="#contacto">
                <li>
                  <a className={router.pathname == "/contacto" ? "active" : ""}>
                    contacto
                  </a>
                </li>
              </Link>
            </ul>
          </Menu>
        </LinksContainer>
      </LinksWrapper>

      {/*  Desktop */}
      {/*  Mobile  */}
      <MobileNav>
        <MobileLogo>
          <Link href="/contact">
            <a>
              <ImagePaddingMobile>
                <img src="/punkies-logo.png" />
              </ImagePaddingMobile>
            </a>
          </Link>
        </MobileLogo>
        <Hamburger />
      </MobileNav>
      {/*  Mobile  */}
    </>
  );
};

export default Navigation;
