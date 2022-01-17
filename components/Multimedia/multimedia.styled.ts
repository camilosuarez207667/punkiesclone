import styled from "styled-components";

interface VideoProps {
  openVideo?: boolean;
}

export const BodyWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  padding: 0 0 48px 0;
  display: grid;
  background-color: ${({ theme }) => theme.colors.white};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const NewsWrapper = styled.div`
  margin: 0 auto;
  max-width: 360px;
  outline: 1px solid black;
  padding: 24px 24px 8px;
  display: flex;
  flex-direction: column;
`;

export const ImageDiv = styled.div`
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background-color: #fff;
    opacity: 0.8;
  }
`;

export const YoutubeIconDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 8px 0;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 8px 0;
`;

export const More = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 8px 0;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 22px;
  }
`;
export const VideoOverlay = styled.div<VideoProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background-color: ${({ openVideo, theme }) =>
    openVideo === false ? "" : theme.colors.primary};

  z-index: ${({ openVideo, theme }) =>
    openVideo === false ? theme.zIndices.hide : theme.zIndices.toast};
`;

export const VideoYoutubeWrapper = styled.div<VideoProps>`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 500px;
  width: 880px;
  background-color: ${({ openVideo, theme }) =>
    openVideo === false ? "transparent;" : theme.colors.secondary};

  z-index: ${({ openVideo, theme }) =>
    openVideo === false ? theme.zIndices.hide : theme.zIndices.tooltip};
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    height: 400px;
    width: 580px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    height: 230px;
    width: 100%;
  }
`;

export const VideoYoutube = styled.iframe<VideoProps>`
  margin: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ExitButton = styled.div<VideoProps>`
  position: fixed;
  top: 5%;
  right: 5%;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    right: 0%;
  }
  span {
    position: absolute;
    display: block;
    width: 36px;
    height: 4px;
    right: 20px;
    margin-bottom: 5px;
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 2px;
    z-index: 1000;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  span:first-child {
    transform-origin: 0% 0%;
    transform: rotate(45deg) translate(4px, -6px);
  }

  span:nth-last-child(1) {
    /* transform-origin: 0% 100%; */
    transform: rotate(-45deg) translate(-7px, 10px);
  }
`;
