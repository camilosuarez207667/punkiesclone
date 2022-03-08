import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 16px auto 0;
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    -webkit-tap-highlight-color: transparent;
    padding: 0 0 0 24px;
  }
`;
export const AlbumHeader = styled.div`
  display: flex;
`;
export const AlbumImage = styled.div``;
export const TitleWrapper = styled.div``;
export const AlbumTitle = styled.div``;

export const AlbumSubTitle = styled.div``;
