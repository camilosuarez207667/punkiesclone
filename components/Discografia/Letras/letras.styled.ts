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
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlbumImage = styled.div`
  padding-right: 24px;
`;

export const AlbumTracks = styled.div`
  .tracklist {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  padding: 8px 0;
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
`;

export const TitleWrapper = styled.div`
  max-width: 800px;
  padding-top: 8px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 42px;
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
`;
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
