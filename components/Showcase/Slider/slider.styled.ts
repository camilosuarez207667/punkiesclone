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
  padding-top: 141px;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding-top: 92px;
  }
`;

export const ImagesStylesMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: block;
    padding-top: 92px;
    margin: 0 auto;
    height: 440px;
  }
`;
