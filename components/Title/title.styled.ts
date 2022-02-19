import styled from "styled-components";

interface TitleProps {
  backgroundColor?: string;
}

export const TitleWrapper = styled.div<TitleProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === "white" ? theme.colors.white : theme.colors.black};
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 64px 0 24px;
  }
  h3 {
    text-align: center;
    font-size: 3rem;
    letter-spacing: 4px;
    color: ${({ theme, backgroundColor }) =>
      backgroundColor === "white" ? theme.colors.black : theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  h2 {
    text-align: center;
    margin: 0 auto;
    font-size: 1.2rem;
    color: ${({ theme, backgroundColor }) =>
      backgroundColor === "white" ? theme.colors.black : theme.colors.white};
    padding-bottom: 24px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      padding-bottom: 0;
    }
  }
`;
