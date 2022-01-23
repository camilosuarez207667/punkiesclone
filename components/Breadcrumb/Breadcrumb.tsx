import { FC } from "react";
import Arrow from "public/svgs/arrow";
import Link from "next/link";

import {
  Title,
  FullWrapper,
  TitleWrapper,
  RedLineDesktop,
  GoBackWrapper,
  ArrowContent,
  GoBack,
} from "./breadcrumb.styled";

interface BreadProps {
  title: string;
  goBack?: boolean;
  url: string;
  header: boolean;
  multiple: boolean;
}

const Breadcrumb: FC<BreadProps> = ({
  title,
  url,
  goBack,
  header,
  multiple,
}) => {
  return (
    <FullWrapper header={header} multiple={multiple}>
      <RedLineDesktop />

      <TitleWrapper>
        <Title>
          <h1>{title}</h1>
        </Title>
        {!!goBack && (
          <Link href={url}>
            <GoBackWrapper>
              <ArrowContent>
                <Arrow />
              </ArrowContent>
              <GoBack>volver</GoBack>
            </GoBackWrapper>
          </Link>
        )}
      </TitleWrapper>
    </FullWrapper>
  );
};

export default Breadcrumb;
