import { FC, Key, useState } from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";

import {
  Wrapper,
  Description,
  BlogWrapper,
  Fecha,
  FullWrapper,
  Profile,
  BlogComponent,
  ProfileWrapper,
  ProfileName,
} from "./blog-article.styled";

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

const BlogArticle: FC<BlogProps> = ({ blogs }) => {
  const [open, setOpen] = useState(false);

  const resultofSort = blogs.slice(0, 1).sort((a: any, b: any) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <>
      <Breadcrumb
        title="Blog Jimmy Jazz"
        url={"/blog"}
        headerDesktop={true}
        topPadding={false}
        goBack={true}
        backMessage={"volver"}
      />

      <FullWrapper>
        <BlogComponent>
          <Wrapper>
            {resultofSort.map(
              (
                e: {
                  title: string;
                  date: string;
                  brevedescripcion: string;
                },
                i: Key
              ) => (
                <BlogWrapper key={i}>
                  <ProfileWrapper>
                    <Profile>
                      <div>
                        <img
                          src="/jimmy-jazz-profile.png"
                          alt="Foto de perfil de Jimmy Jazz"
                        />
                      </div>
                      <ProfileName>
                        <h3>Jimmy Jazz</h3>
                      </ProfileName>
                    </Profile>
                    <Fecha>
                      <div>
                        <p>
                          {new Date(e.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </Fecha>
                  </ProfileWrapper>

                  <Description>{e.description}</Description>
                </BlogWrapper>
              )
            )}
          </Wrapper>
        </BlogComponent>
      </FullWrapper>
    </>
  );
};

export default BlogArticle;
