import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const ImagesStylesDesktop = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoint.lg};
  height: 100vh;
  max-height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    height: 100vh;
  }
`;

export const ImagesStylesMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: block;

    margin: 0 auto;
    height: 380px;

  }
`;
