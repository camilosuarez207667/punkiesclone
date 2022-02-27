import { FC, Key, useState } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import Arrow from "public/svgs/arrow";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Wrapper,
  Description,
  Title,
  BlogWrapper,
  TitleWrapper,
  Fecha,
  ReadWrapper,
  FullWrapper,
  Profile,
  ReadMore,
  BlogComponent,
  DropdownWrapper,
  ArrowContent,
  Dropdown,
  DropdownMenu,
  DropdownList,
  PaginationWrapper,
  ArrowLeft,
  ArrowRight,
  TitleParagraph,
  NumberCounter,
} from "./blog.styled";

interface BlogProps {
  blogs: {
    title: string;
    description: string;
    date: string;
    brevedescripcion: string;
    image: {
      url: string;
    };
    video: string;
  }[];
}

const Blog: FC<BlogProps> = ({ blogs }) => {
  const router = useRouter();
  const { pid } = router.query;

  const [open, setOpen] = useState(false);

  const resultofSort = blogs.slice(0, 4).sort((a: any, b: any) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <>
      <Breadcrumb
        title="Blog Jimmy Jazz"
        url={"/"}
        headerDesktop={true}
        topPadding={false}
        goBack={true}
        backMessage={"volver"}
      />

      <TitleWrapper>
        <TitleParagraph>
          <p>
            Un ejercicio de escritura para decir lo que pienso... en palabras
            vulgares.
          </p>
        </TitleParagraph>

        <DropdownWrapper onClick={() => setOpen(!open)}>
          <Dropdown className={open ? "dropdown" : " "}>
            Archivo Blog
            <DropdownMenu className="dropdown_menu--animated dropdown_animation">
              <DropdownList>2019</DropdownList>
              <DropdownList>2020</DropdownList>
              <DropdownList>2021</DropdownList>
            </DropdownMenu>
            <ArrowContent>
              <Arrow />
            </ArrowContent>
          </Dropdown>
        </DropdownWrapper>
      </TitleWrapper>

      <FullWrapper onClick={() => (open === true ? setOpen(!open) : "")}>
        <BlogComponent>
          <Wrapper>
            {resultofSort.map(
              (
                e: { title: string; date: string; brevedescripcion: string },
                i: Key
              ) => (
                <BlogWrapper key={i}>
                  <Title>{e.title}</Title>
                  <Fecha>
                    <p>
                      {new Date(e.date).toLocaleDateString("es-ES", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Fecha>
                  <Description>{e.brevedescripcion}</Description>
                  <ReadWrapper>
                    <Profile>
                      <div>
                        <img
                          src="/jimmy-jazz-profile.png"
                          alt="Foto de perfil de Jimmy Jazz"
                        />
                      </div>
                      <div>
                        <h3>Jimmy Jazz</h3>
                      </div>
                    </Profile>
                    <ReadMore>
                      <Link href={"/"}>
                        <p>leer más</p>
                      </Link>
                    </ReadMore>
                  </ReadWrapper>
                </BlogWrapper>
              )
            )}
          </Wrapper>
        </BlogComponent>
      </FullWrapper>

      <NumberCounter>1</NumberCounter>
      <PaginationWrapper>
        <ArrowLeft>
          <Arrow />
        </ArrowLeft>
        <ArrowRight>
          <Arrow />
        </ArrowRight>
      </PaginationWrapper>
    </>
  );
};

export default Blog;
