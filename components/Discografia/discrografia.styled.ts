import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
`;
export const SocialWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 16px auto 0;
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0 0 0 24px;

  .amazon {
    svg {
      width: 44px;
    }
  }
  .spotify {
    svg {
      width: 40px;
    }
  }
  .youtube {
    svg {
      width: 44px;
    }
  }
  .sound {
    svg {
      width: 56px;
    }
  }
  .download {
    svg {
      width: 36px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    -webkit-tap-highlight-color: transparent;
  }
`;
export const SocialItems = styled.div`
  padding: 0 8px;
  cursor: pointer;
  svg:hover {
    fill: ${({ theme }) => theme.colors.tertiary};
  }
`;
export const SocialText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding-right: 16px;
`;
export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 16px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
  .both:hover .button-active {
    opacity: 1;
  }
  .both:hover .image-active {
    opacity: 0.3;
  }
`;
export const Card = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: auto;
  }
`;
export const ImageHeading = styled.div`
  max-width: 280px;
  display: flex;
  transition: 0.5s ease;
  opacity: 1;
  backface-visibility: hidden;
`;
export const MoreButton = styled.div`
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2000;
`;

export const MoreIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 16px;
  padding: 16px 32px;
`;

export const WrapperSvg = styled.div`
  width: 40px;
  margin: 0 auto;
  padding-bottom: 8px;
`;

export const WrapperMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    height: 450px;
    padding: 0 24px;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: flex;
    height: 450px;
    padding: 0 24px;
    flex-direction: column;
    margin: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: flex;
    height: 450px;
    padding: 0 24px;
    flex-direction: column;
    width: auto;
    margin: none;
  }
`;
