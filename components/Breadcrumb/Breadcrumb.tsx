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
  title?: string | string[];
  goBack?: boolean;
  url: string;
  headerDesktop: boolean;
  topPadding: boolean;
  backMessage: string;
  breadcrumId?: string;
}

const Breadcrumb: FC<BreadProps> = ({
  title,
  goBack,
  url,
  headerDesktop,
  topPadding,
  backMessage,
  breadcrumId,
}) => {
  return (
    <FullWrapper headerDesktop={headerDesktop} multipleHeader={topPadding}>
      <RedLineDesktop />

      <TitleWrapper id={breadcrumId}>
        <Title>
          <h1>{title}</h1>
        </Title>
        {!!goBack && (
          <Link href={url}>
            <GoBackWrapper>
              <ArrowContent>
                <Arrow />
              </ArrowContent>
              <GoBack>{backMessage}</GoBack>
            </GoBackWrapper>
          </Link>
        )}
      </TitleWrapper>
    </FullWrapper>
  );
};

export default Breadcrumb;
