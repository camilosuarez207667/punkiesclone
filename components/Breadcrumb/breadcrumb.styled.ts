import styled from "styled-components";

interface BreadProps {
  headerDesktop: boolean;
  multipleHeader: boolean;
}

export const FullWrapper = styled.div<BreadProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${({ headerDesktop }) => (headerDesktop ? "140px" : "0px")};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-top: ${({ multipleHeader }) => (multipleHeader ? "48px" : "80px")};
  }
  #gp-discography {
    scroll-margin: 2000px;
    scroll-behavior: smooth;
  }
`;
export const RedLineDesktop = styled.div`
  outline: 1px solid white;
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: 48px;
  opacity: 0.3;
  z-index: ${({ theme }) => theme.zIndices.base};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.breakpoint.md};
  margin: -57px auto 0;
  padding: 0 72px;
  z-index: ${({ theme }) => theme.zIndices.docked};
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 24px 0;
    width: 100%;
  }
`;

export const GoBackWrapper = styled.div`
  display: flex;
  z-index: ${({ theme }) => theme.zIndices.docked};
  cursor: pointer;
`;
export const Title = styled.div`
  margin-top: 10px;
  z-index: ${({ theme }) => theme.zIndices.docked};
  scroll-behavior: smooth;
  h1 {
    padding: 1px 48px 0 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};
    text-align: left;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    h1 {
      padding: 8px 0 0 0;
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    }
  }
`;
export const ArrowContent = styled.div`
  margin: 22px 0 0 0;
  transform: rotate(275deg);
  width: 20px;
  height: 20px;
  z-index: ${({ theme }) => theme.zIndices.docked};
`;

export const GoBack = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 19px 0 0 8px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    text-decoration: underline;
  }
`;
