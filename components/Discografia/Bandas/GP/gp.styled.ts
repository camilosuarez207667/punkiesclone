import styled from "styled-components";

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  overflow-x: hidden;
`;
export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
`;
export const RedLineDesktop = styled.div`
  outline: 1px solid white;
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 160px;
  height: 48px;
  opacity: 0.3;
  z-index: ${({ theme }) => theme.zIndices.base};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-top: 100px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -57px auto 0;
  padding: 0 48px;
  z-index: ${({ theme }) => theme.zIndices.docked};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 24px;
  }
`;

export const GoBackWrapper = styled.div`
  display: flex;
  z-index: ${({ theme }) => theme.zIndices.docked};
  cursor: pointer;
`;
export const Title = styled.div`
  margin-top: 10px;
  padding: 1px 48px 0 0;
  z-index: ${({ theme }) => theme.zIndices.docked};
  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};
    text-align: left;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 2px 48px 0 0;
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.titleMobile};
    }
  }
`;
export const ArrowContent = styled.div`
  margin: 20px 0 0 40px;
  transform: rotate(275deg);
  width: 24px;
  height: 24px;
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

export const BandWrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BandDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  padding: 0 48px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 24px;
    /* text-align: justify; */
  }
`;

export const ReadMore = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.tertiary};
  text-decoration: underline;
  cursor: pointer;
`;

export const ImageDiv = styled.div`
  font-size: 3rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  img {
    width: 624px;
    padding: 0 48px 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    img {
      padding: 24px 24px 16px;
    }
  }
`;

export const RedLineMobile = styled.div`
  /* display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    height: 44px;
    margin: -24px auto 0;
    opacity: 0.3;
    z-index: ${({ theme }) => theme.zIndices.base};
    padding-top: 8px;
    &.punkies-y-cerebro-discografia {
      margin: 24px auto 0;
      z-index: ${({ theme }) => theme.zIndices.docked};
    }
  } */
`;

export const TitleMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.titleMobile};
    flex-basis: 100%;
    margin: -57px auto 0;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 24px 0;
    width: 424px;
    z-index: ${({ theme }) => theme.zIndices.docked};
  }
`;
