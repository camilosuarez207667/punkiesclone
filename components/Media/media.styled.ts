import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  padding: 140px 24px 0;
`;

export const Column = styled.div`
  width: 50%;
`;
