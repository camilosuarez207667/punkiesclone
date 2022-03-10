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
                    inicio
                  </a>
                </li>
              </Link>
              <Link href="/eventos">
                <li>
                  <a className={router.pathname == "/eventos" ? "active" : ""}>
                    eventos
                  </a>
                </li>
              </Link>
              <Link href="/historia">
                <li>
                  <a className={router.pathname == "/historia" ? "active" : ""}>
                    historia
                  </a>
                </li>
              </Link>
              <Link href="/media">
                <li>
                  <a className={router.pathname == "/media" ? "active" : ""}>
                    media
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
                    tienda
                  </a>
                </li>
              </Link>
              <Link href="/">
                <li>
                  <a>libros</a>
                </li>
              </Link>
              <Link href="/libros">
                <li>
                  <a className={router.pathname == "/blog" ? "active" : ""}>
                    blog
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
          <Link href="/">
            <a>
              <ImagePaddingMobile>
                {/* <img src="/punkies-logo.png" /> */}
                <h1>Punkies & Cerebro</h1>
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
