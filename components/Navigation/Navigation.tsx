import { useEffect, useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger/Hamburger";

import {
  DesktopNav,
  LinksWrapper,
  Menu,
  ImageMain,
  LinksContainer,
  MobileBar,
  MobileNav,
  MobileLogo,
} from "./index.styled";

const Navigation: FC = () => {
  const [header, setHeader] = useState(false);
  const listenScrollEvent = () => {
    if (window.scrollY <= 101) {
      setHeader(false);
    } else if (window.scrollY >= 101) {
      setHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      {/*  Desktop */}
      <DesktopNav openMenu={header}>
        <LinksWrapper>
          <LinksContainer>
            <Menu>
              <ul>
                <Link href="#home">
                  <li>
                    <a>Inicio</a>
                  </li>
                </Link>
                <Link href="#noticias">
                  <li>
                    <a>Noticias</a>
                  </li>
                </Link>
                <Link href="#discos">
                  <li>
                    <a>Discografía</a>
                  </li>
                </Link>
              </ul>
            </Menu>
            <ImageMain>
              {!header ? (
                <Image
                  width={150}
                  height={100}
                  src={"/punkieslogo.png"}
                  alt="Picture of the author"
                />
              ) : (
                <Image
                  width={260}
                  height={31}
                  src={"/punkies-logo-small.png"}
                  alt="Picture of the author"
                />
              )}
            </ImageMain>
            <Menu>
              <ul>
                <Link href="#inicio">
                  <li>
                    <a>GP</a>
                  </li>
                </Link>
                <Link href="#conciertos">
                  <li>
                    <a>Conciertos</a>
                  </li>
                </Link>
                <Link href="#contacto">
                  <li>
                    <a>Contacto</a>
                  </li>
                </Link>
              </ul>
            </Menu>
          </LinksContainer>
        </LinksWrapper>
      </DesktopNav>
      {/*  Desktop */}
      {/*  Mobile  */}
      <MobileNav openMenu={header}>
        <MobileLogo>
          <Link href="/contact">
            <a>
              <Image src="/punkieslogo.png" height={40} width={80} />
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
