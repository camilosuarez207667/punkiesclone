import styled from "styled-components";

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const ImagesStylesDesktop = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
  margin: 0 auto;
  padding-top: 120px;
  max-width: ${({ theme }) => theme.breakpoint.md};
  height: 800px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-top: 48px;
  }
`;

export const ImagesStylesMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: block;
    padding-top: 48px;
    margin: 0 auto;
    height: 460px;
  }
`;
