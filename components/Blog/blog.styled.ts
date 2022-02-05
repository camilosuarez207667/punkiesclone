import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  p {
    color: ${({ theme }) => theme.colors.white};
    padding: 24px 0 0 64px;
  }
`;

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.md};
  padding: 0 48px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 280px;
  /* @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  } */
`;

export const BlogWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
`;

export const Title = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 8px 0 8px 16px;
`;
export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 16px 8px 8px 16px;
`;
export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 12px 16px 0 0;
  .read {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Archive = styled.div`
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 8px 8px 8px 16px;
`;
export const DescriptionArchive = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0 8px 8px 16px;
`;
