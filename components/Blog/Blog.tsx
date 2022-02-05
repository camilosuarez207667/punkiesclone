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
} from "./blog.styled";

interface NewsProps {
  news: {
    image: {
      url: string;
    };
    id: number;
    title: string;
    description: string;
    date: Date;
    readMore?: string;
  }[];
}

const Noticias: FC<NewsProps> = ({ news }) => {
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

      <Wrapper>
        <BlogWrapper>
          <Title>Primer blog</Title>
          <Date>
            <p>Viernes 7 de Enero 2020</p>
          </Date>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
            pellentesque urna. Donec dictum viverra elit. Cras quis eros
            tristique, laoreet dolor ac, mollis nunc. Phasellus porttitor, felis
            et ornare lobortis, nunc lectus porttitor justo, at luctus nibh
            turpis ac sem. Sed dapibus, erat sit amet interdum congue, justo
            tortor venenatis est, quis feugiat eros massa eget nunc. Phasellus
            in volutpat lacus. In facilisis lacus vitae diam imperdiet porta.
            Praesent egestas malesuada ligula nec dapibus. Nam tristique enim in
            laoreet sollicitudin. Phasellus tincidunt rhoncus pulvinar. Integer
            malesuada scelerisque ipsum, eu suscipit dui tempus non.
          </Description>
          <ReadMore>
            <p>leer más</p>
          </ReadMore>
        </BlogWrapper>

        <ArchiveWrapper>
          <Archive>Archivo blogs</Archive>
          <Year>2020</Year>
        </ArchiveWrapper>
      </Wrapper>
    </>
  );
};

export default Noticias;
