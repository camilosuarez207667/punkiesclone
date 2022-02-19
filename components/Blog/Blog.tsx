import { FC, useState } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import Arrow from "public/svgs/arrow";

import {
  Wrapper,
  Description,
  Title,
  BlogWrapper,
  TitleWrapper,
  Date,
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
} from "./blog.styled";
interface BlogProps {
  blogs: {
    title: string;
    description: string;
    date: Date;
    brevedescripcion: string;
    image: {
      url: string;
    };
    video: string;
  }[];
}

const Blog: FC<BlogProps> = ({ blogs }) => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <Breadcrumb
        title="Blog Jimmy Jazz"
        url={"/"}
        headerDesktop={false}
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

      <FullWrapper>
        <BlogComponent>
          <Wrapper>
            {blogs.map((e, i) => (
              <BlogWrapper key={i}>
                <Title>{e.title}</Title>
                <Date>
                  <p>{e.date}</p>
                </Date>
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
                    <p>leer más</p>
                  </ReadMore>
                </ReadWrapper>
              </BlogWrapper>
            ))}
          </Wrapper>
        </BlogComponent>
      </FullWrapper>
      {/* pagination */}
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
