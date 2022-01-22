import styled from "styled-components";

export const BodyWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: calc(100vh - 125px);
  flex-direction: column;
  overflow-x: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 100%;
    padding-bottom: 40px;
  }
`;
export const RedLineDesktop = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 160px;
  height: 48px;
  opacity: 0.3;
  z-index: ${({ theme }) => theme.zIndices.base};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const TitleTextDesktop = styled.div`
  display: flex;
  width: ${({ theme }) => theme.breakpoint.md};
  margin: -57px auto 0;
  z-index: ${({ theme }) => theme.zIndices.docked};
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  flex-basis: 100%;
  text-align: left;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 48px;
`;

export const BandWrapper = styled.div`
  width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    margin-top: 80px;
    padding-top: 48px;
    width: 100%;
  }
`;

export const BandDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  padding: 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 376px;
    margin: 0 auto;
    padding: 0 24px;
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
  display: none;
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
  }
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
