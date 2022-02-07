import { FC } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import {
  Wrapper,
  Description,
  Title,
  BlogWrapper,
  TitleWrapper,
  Archive,
  Year,
  Date,
  ArchiveWrapper,
  ReadMore,
  FullWrapper,
} from "./blog.styled";

interface BlogProps {
  blogs: {
    title: string;
    description: string;
    date: Date;
    readMore?: string;
    image: {
      url: string;
    };
  }[];
}

const Noticias: FC<BlogProps> = ({ blogs }) => {
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
        <p>
          Un ejercicio de escritura para decir lo que pienso... en palabras
          vulgares.
        </p>
      </TitleWrapper>
      <FullWrapper>
        {blogs.map((e, i) => (
          <Wrapper>
            <BlogWrapper>
              <Title>{e.title}</Title>
              <Date>
                <p>{e.date}</p>
              </Date>
              <Description>{e.description}</Description>
              <ReadMore>
                <p>leer más</p>
              </ReadMore>
            </BlogWrapper>
            <ArchiveWrapper>
              <Archive>Archivo blogs</Archive>
              <Year>2020</Year>
            </ArchiveWrapper>
          </Wrapper>
        ))}
      </FullWrapper>
    </>
  );
};

export default Noticias;
