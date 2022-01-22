import { useEffect, useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger/Hamburger";

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
                  <a>Inicio</a>
                </li>
              </Link>
              <Link href="/noticias">
                <li>
                  <a>Noticias</a>
                </li>
              </Link>
              <Link href="/discografia">
                <li>
                  <a>Discografía</a>
                </li>
              </Link>
              <Link href="media">
                <li>
                  <a>Media</a>
                </li>
              </Link>
            </ul>
          </Menu>
          <ImageMain>
            <ImagePadding>
              <Image
                width={260}
                height={94}
                src={"/punkies-logo.png"}
                alt="Logo Punkies y Cerebro"
              />
            </ImagePadding>
          </ImageMain>
          <Menu>
            <ul>
              <Link href="/index">
                <li>
                  <a>Tienda</a>
                </li>
              </Link>
              <Link href="/">
                <li>
                  <a>Eventos</a>
                </li>
              </Link>
              <Link href="#contacto">
                <li>
                  <a>Blog</a>
                </li>
              </Link>
              <Link href="#contacto">
                <li>
                  <a>contacto</a>
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
                <Image src="/punkies-logo.png" height={60} width={150} />
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
