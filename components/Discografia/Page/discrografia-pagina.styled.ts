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
  outline: 1px solid white;
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
  text-align: center;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 48px;
`;

export const ImageDiscoWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  padding-top: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    margin-top: 60px;
    padding-top: 48px;
    width: 100%;
  }
`;

export const ImageDiv = styled.div`
  font-size: 3rem;
  flex-basis: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  img {
    width: 424px;
    padding: 24px 48px 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    img {
      padding: 24px 24px 16px;
    }
  }
`;

export const BandDescription = styled.h2`
  padding-top: 8px;
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

export const BandReadMoreButton = styled.p`
  margin: 16px auto 0;
  display: flex;
  padding: 24px 24px 0 0;
  max-width: 376px;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const BandReadMore = styled.p`
  margin: 0 24px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 4px 48px;
  max-width: 330px;
  outline: 1px solid ${({ theme }) => theme.colors.white};
`;
