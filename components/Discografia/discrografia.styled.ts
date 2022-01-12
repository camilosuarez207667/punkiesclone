import styled from "styled-components";

export const BodyWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const WrapperMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    height: 450px;
    padding: 0 24px;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: flex;
    height: 450px;
    padding: 0 24px;
    flex-direction: column;
    margin: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: flex;
    height: 450px;
    padding: 0 24px;
    flex-direction: column;
    width: auto;
    margin: none;
  }
`;

export const Card = styled.div`
  width: 420px;
  padding-bottom: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: auto;
  }
`;

export const ImageHeading = styled.div`
  width: 308px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const TitleYear = styled.div`
  width: 308px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};

  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 8px 0;
`;

export const Year = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 8px 0;
  display: flex;
`;

export const Description = styled.div`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: flex;
  width: 308px;
  padding: 8px 0;
  max-width: 400px;
`;
