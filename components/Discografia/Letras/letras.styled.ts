import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 32px auto 0;
  display: flex;
  padding: 0 24px;
`;
export const AlbumHeader = styled.div`
  display: flex;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlbumImage = styled.div`
  padding-right: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin: 0 auto;
  }
`;

export const AlbumTracks = styled.div`
  .tracklist {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  padding: 8px 24px 8px 0;
  span {
    font-size: 16px;

    color: ${({ theme }) => theme.colors.white};
  }
  ul {
    padding-top: 8px;
  }
  li {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.tertiary};
    cursor: pointer;
  }
  span:hover {
    text-decoration: underline;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 800px;
  padding-top: 8px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 42px;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    span {
      font-size: 16px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    h1 {
      font-size: 32px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    h1 {
      font-size: 24px;
    }
  }
`;

///dropdown
export const DropdownWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
  width: 100%;
  align-items: flex-end;
  padding-top: 16px;
  .dropdown .dropdown_menu--animated {
    display: block;
  }
  .dropdown_menu--animated {
    display: none;
  }

  .dropdown_menu--animated li {
    display: block;
    opacity: 1;
  }

  .dropdown_animation {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;
export const Dropdown = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  perspective: 1000px;
  margin-bottom: 8px;
  cursor: pointer;
  background-color: transparent;
  outline: 1px solid white;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;
export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;
export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  perspective: 1000px;
  z-index: -1;
  li:hover {
    background-color: ${({ theme }) => theme.colors.jaguar};
  }
`;
export const DropdownList = styled.li`
  display: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.shark};
  padding: 10px 20px 0;
  font-size: 16px;
  opacity: 0;
  text-align: center;
`;
export const ArrowContent = styled.div`
  margin-top: 4px;
  transform: rotate(180deg);
  width: 20px;
  height: 20px;
  z-index: ${({ theme }) => theme.zIndices.docked};
`;
///dropdown

export const AlbumTitle = styled.div`
  padding-top: 8px;
`;
export const DynamicLyrics = styled.div``;
export const SongWriter = styled.div`
  padding-top: 8px;
`;
export const SongTitle = styled.div`
  padding-top: 4px;
  display: flex;

  .song-duration {
    padding-left: 8px;
    p {
      span {
        color: ${({ theme }) => theme.colors.tertiary};
      }
    }
  }
`;

export const Song = styled.div`
  padding-top: 8px;
  max-width: 600px;
  white-space: pre-wrap;
`;
