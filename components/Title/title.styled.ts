import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
  title: string;
}

export const TitleWrapper = styled.div`
  margin: 32px auto;
  padding: 0 16px;
  h3 {
    text-align: center;
    font-size: 3rem;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  h2 {
    text-align: center;
    font-size: 1.2rem;
    color: white;
    padding-top: 16px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
  }
`;
