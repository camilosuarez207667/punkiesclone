import { FC, useState } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import Arrow from "public/svgs/arrow";
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
  ReadWrapper,
  FullWrapper,
  Profile,
  ReadMore,
  BothComponent,
  MobileButton,
  ArrowContent,
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
  console.log(blogs);
  const [blog, setBlog] = useState();

  // const sortByYear = blogs.sort(function (a, b) {
  //   return b - a;
  // });
  console.log("sortByYear");
  // console.log(sortByYear);
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
        <MobileButton>
          <button>
            <div>Archivo blogs</div>
            <div>
              <ArrowContent>
                <Arrow />
              </ArrowContent>
            </div>
          </button>

          {/* <div>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div> */}
        </MobileButton>
        <BothComponent>
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

          <ArchiveWrapper>
            <Archive>Archivo blogs</Archive>
            <Year>2022</Year>
            <Year>2021</Year>
            <Year>2020</Year>
            <Year>2019</Year>
          </ArchiveWrapper>
        </BothComponent>
      </FullWrapper>
    </>
  );
};

export default Blog;
