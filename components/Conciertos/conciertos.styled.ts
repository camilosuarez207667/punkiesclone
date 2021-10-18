import styled from "styled-components";

export const DivWrapper = styled.div`
  padding-bottom: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
`;

export const BodyWrapper = styled.div`
  background-color: black;
  display: flex;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  display: inline-flex;
  margin: 0 auto;
  border-bottom: 2px solid white;
`;

export const Date = styled.div`
  width: 180px;
  margin: 0 auto;
  display: flex;
`;
export const Evento = styled.div`
  width: 350px;
`;

export const Lugar = styled.div`
  width: 400px;
`;
export const Precio = styled.div`
  width: 100px;
`;
export const TitleYear = styled.div`
  width: 180px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 8px 0;
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: block;
    max-width: ${({ theme }) => theme.breakpoint.xs};
    margin: 0 auto;
    padding: 8px 0 24px;
    border-bottom: 2px solid white;
  }
`;

export const DateMobileWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: flex;
  justify-content: flex-start;
`;

export const TitleDateMobile = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  width: 80px;
  display: flex;
  padding: 8px 24px;
`;

export const DateMobile = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: flex;
  padding: 8px 24px;
`;
