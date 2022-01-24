import styled from "styled-components";

interface HistoryProps {
  readMore: boolean;
}

export const BodyWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: ${({ theme }) => theme.breakpoint.md};
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  scroll-behavior: smooth;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titleMobile};
  text-align: center;
  margin-top: 32px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.section`
  padding: 0 48px;
  margin-top: 32px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 0 24px;
  }
`;

export const ReadMore = styled.div`
  width: ${({ theme }) => theme.breakpoint.md};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: auto;
  }
`;
export const Reading = styled.div`
  p {
    padding: 0 48px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const ArrowContent = styled.div<HistoryProps>`
  align-items: center;
  margin: 0 auto;
  svg {
    margin: 8px 0 0 0;
    transform: ${({ readMore }) =>
      readMore ? "rotate(0deg)" : "rotate(180deg)"};
    width: 20px;
    height: 20px;
    z-index: ${({ theme }) => theme.zIndices.docked};
  }
`;

export const ReadMoreNextPage = styled.div`
  width: ${({ theme }) => theme.breakpoint.md};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: auto;
  }
`;
export const ReadingNext = styled.div`
  p {
    padding: 0 48px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const ArrowContentNext = styled.div`
  align-items: center;
  margin: 0 auto;
  svg {
    margin: 8px 0 0 0;
    transform: rotate(90deg);
    width: 20px;
    height: 20px;
    z-index: ${({ theme }) => theme.zIndices.docked};
  }
`;
