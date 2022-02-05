import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;

  p {
    color: ${({ theme }) => theme.colors.white};
    padding: 32px 0 24px 0;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 160px;
  /* @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  } */
`;

export const BlogWrapper = styled.div`
  width: 100%;
  padding-right: 24px;
`;

export const ArchiveWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  height: 50px;
  border-bottom: 1px solid white;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 8px 0;
`;
export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
export const Date = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.secondary};
    text-align: right;
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 4px 0 16px;
  }
`;

export const ReadMore = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 8px 0 16px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Archive = styled.div`
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 12px 8px 8px 16px;
`;
export const Year = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0 8px 8px 16px;
`;
