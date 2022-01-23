import styled from "styled-components";

interface BreadProps {
  header: boolean;
  multiple: boolean;
}

export const FullWrapper = styled.div<BreadProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${({ header }) => (header ? "140px" : "0px")};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-top: ${({ multiple }) => (multiple ? "48px" : "80px")};
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
  padding: 0 48px;
  z-index: ${({ theme }) => theme.zIndices.docked};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 24px;
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
  h1 {
    padding: 1px 48px 0 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};
    text-align: left;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    h1 {
      padding: 4px 48px 0 0;
      font-size: ${({ theme }) => theme.fontSizes.titleMobile};
    }
  }
`;
export const ArrowContent = styled.div`
  margin: 22px 0 0 40px;
  transform: rotate(275deg);
  width: 20px;
  height: 20px;
  z-index: ${({ theme }) => theme.zIndices.docked};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 22px 0 0 40px;
    width: 20px;
    height: 20px;
  }
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
