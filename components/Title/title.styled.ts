import styled from "styled-components";

interface TitleProps {
  backgroundColor?: string;
}

export const TitleWrapper = styled.div<TitleProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === "white" ? theme.colors.white : "#000"};
  margin: 0 auto;
  padding: 32px 24px;
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
    padding-top: 12px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
  }
`;
