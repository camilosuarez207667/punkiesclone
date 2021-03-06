import styled from "styled-components";

export const DesktopNav = styled.div`
  height: 140px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const MobileNav = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    height: 0;
  }
`;
