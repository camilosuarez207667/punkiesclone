import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const GpPadding = styled.div`
  padding-top: 24px;
`;
