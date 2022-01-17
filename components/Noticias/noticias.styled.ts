import styled from "styled-components";

export const TitleWrapper = styled.div``;

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const NewsWrapper = styled.div`
  margin: 0 auto 24px;
  max-width: 500px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: auto;
    padding: 8px 24px;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 8px 0;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 8px 0;
`;
