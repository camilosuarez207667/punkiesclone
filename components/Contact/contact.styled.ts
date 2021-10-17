import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  padding: 32px 24px;

  p {
    text-align: center;
    margin: 0 auto;
    font-size: 1.2rem;
    color: white;
    padding-top: 12px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
  }
`;
