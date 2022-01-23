import styled from "styled-components";

export const BodyWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: calc(100vh - 125px);
  flex-direction: column;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: auto;
  }
`;
export const RedLineDesktop = styled.div`
  outline: 1px solid white;
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 140px;
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
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  flex-basis: 100%;
  text-align: center;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 48px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-basis: 0;
  }
`;

// ***** --- MOBILE --- *****
export const ImageDiscoWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    width: 100%;
  }
`;
export const ImageDiv = styled.div`
  text-align: center;
  img {
    max-width: 424px;
    padding: 24px 48px 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    img {
      padding: 24px 24px 16px;
    }
  }
`;
export const BreadcrumbWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;

export const Image = styled.div`
  display: block;
`;
export const BandDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto;
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
    margin: 0 auto;
    padding: 0 24px;
  }
`;
export const BandReadMoreButton = styled.div`
  margin: 16px auto 0;
  display: flex;
  padding-top: 24px;
  max-width: 376px;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  z-index: ${({ theme }) => theme.zIndices.docked};
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
