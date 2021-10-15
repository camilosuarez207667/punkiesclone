import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;
  display: flex;
`;

export const NewsWrapper = styled.div`
  width: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 0 24px;
  }
`;

export const ImageHeading = styled.div``;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 8px 0;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0 auto;
  padding: 8px 0;
  width: 100%;
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 8px 0;
  width: 100%;
`;
